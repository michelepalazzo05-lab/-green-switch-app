/* Shared Firebase store. No demo records are ever inserted.
 * The app supplies an authenticated fetch adapter; database rules verify actors.
 */
(function(root,factory){
  if(typeof module==='object'&&module.exports) module.exports=factory();
  else root.GreenExchangeStore=factory();
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  class ExchangeError extends Error{constructor(message,code){super(message);this.code=code;}}
  function transition(item,actor,action,now){
    if(!item) throw new ExchangeError('This offer no longer exists.','missing');
    const next={...item,updatedAt:now};
    const owner=item.ownerId===actor.id,buyer=item.buyerId===actor.id;
    if(action==='reserve'){
      if(owner) throw new ExchangeError('You cannot reserve your own offer.','owner');
      if(item.status!=='available') throw new ExchangeError('Someone else has already reserved this item.','unavailable');
      Object.assign(next,{status:'reserved',buyerId:actor.id,buyerName:actor.name,buyerClass:actor.className,ownerConfirmed:false,buyerConfirmed:false});
    }else if(action==='cancel'){
      if(!owner&&!buyer) throw new ExchangeError('Only the participants can cancel this reservation.','forbidden');
      if(item.status!=='reserved'||item.ownerConfirmed||item.buyerConfirmed) throw new ExchangeError('A handover already confirmed cannot be cancelled.','state');
      Object.assign(next,{status:'available',buyerId:null,buyerName:null,buyerClass:null,ownerConfirmed:false,buyerConfirmed:false});
    }else if(action==='confirm'){
      if(!owner&&!buyer) throw new ExchangeError('Only the participants can confirm this handover.','forbidden');
      if(item.status==='completed') return item;
      if(item.status!=='reserved') throw new ExchangeError('Reserve the item before confirming its handover.','state');
      if(owner) next.ownerConfirmed=true;
      if(buyer) next.buyerConfirmed=true;
      if(next.ownerConfirmed&&next.buyerConfirmed){next.status='completed';next.completedAt=now;}
    }else if(action==='withdraw'){
      if(!owner) throw new ExchangeError('Only the owner can withdraw this offer.','forbidden');
      if(item.status!=='available') throw new ExchangeError('Cancel the reservation first; completed exchanges stay in the history.','state');
      next.status='withdrawn';
    }else throw new ExchangeError('Unknown exchange action.','action');
    return next;
  }
  function validItem(x){
    return x&&typeof x==='object'&&typeof x.ownerId==='string'&&typeof x.title==='string'&&typeof x.description==='string'&&typeof x.point==='string'&&['available','reserved','completed','withdrawn'].includes(x.status)&&Number.isFinite(x.createdAt);
  }
  function createStore({baseUrl,schoolId,fetchImpl=fetch,timeoutMs=15000}){
    if(!/^https:\/\//.test(baseUrl)||!/^[a-f0-9]{64}$/.test(schoolId))throw new ExchangeError('Shared database is not configured.','config');
    const path=baseUrl.replace(/\/$/,'')+'/exchange/v1/schools/'+schoolId+'/items';
    async function request(url,options={}){
      const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),timeoutMs);
      try{
        const response=await fetchImpl(url,{...options,signal:controller.signal,cache:'no-store'});
        if(response.status===412)return response;
        if(!response.ok)throw new ExchangeError(response.status===401||response.status===403?'The shared database rejected this request. Contact the project administrator.':'The shared database is unavailable. Please try again.','http');
        return response;
      }catch(e){if(e instanceof ExchangeError)throw e;throw new ExchangeError('Connection lost. Your action has not been confirmed; reconnect and check the board before retrying.','network');}
      finally{clearTimeout(timer);}
    }
    return {
      streamUrl:path+'.json',
      async list(){const r=await request(path+'.json');const data=await r.json();return Object.entries(data||{}).filter(([,x])=>validItem(x)).map(([id,x])=>({...x,id})).sort((a,b)=>b.createdAt-a.createdAt);},
      async publish(id,item){
        if(!/^[a-zA-Z0-9_-]{1,80}$/.test(id)||!validItem(item)||item.status!=='available')throw new ExchangeError('Invalid offer.','invalid');
        const r=await request(path+'/'+id+'.json',{method:'PUT',headers:{'Content-Type':'application/json','if-match':'null_etag'},body:JSON.stringify(item)});
        if(r.status===412)throw new ExchangeError('This offer was already published. Refresh the board.','duplicate');
        return {...await r.json(),id};
      },
      async act(id,actor,action){
        if(!/^[a-zA-Z0-9_-]{1,80}$/.test(id))throw new ExchangeError('Invalid offer.','invalid');
        const url=path+'/'+id+'.json';
        for(let attempt=0;attempt<4;attempt++){
          const r=await request(url,{headers:{'X-Firebase-ETag':'true'}}),item=await r.json();
          const updated=transition(item,actor,action,Date.now());
          if(updated===item)return {...item,id};
          const etag=r.headers.get('etag');
          if(!etag)throw new ExchangeError('The database did not provide a version. Please refresh and try again.','version');
          const write=await request(url,{method:'PUT',headers:{'Content-Type':'application/json','if-match':etag},body:JSON.stringify(updated)});
          if(write.status===412)continue;
          return {...await write.json(),id};
        }
        throw new ExchangeError('This offer changed while you were using it. Refresh and try again.','conflict');
      }
    };
  }
  return {createStore,transition,validItem,ExchangeError};
});
