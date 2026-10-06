(function(){
  'use strict';
  const el=id=>document.getElementById(id);
  let store=null,actor=null,school=null,items=[],view='board',stream=null,poll=null,refreshTimer=null,session=0,busy=false,draftId=null;
  const labels={available:'Available · Free',reserved:'Reserved',completed:'Exchange confirmed',withdrawn:'Withdrawn'};
  const form=el('exchangeForm'),dialog=el('exchangeDetail');
  async function digest(s){
    const value=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));
    return Array.from(new Uint8Array(value),b=>b.toString(16).padStart(2,'0')).join('');
  }
  function schoolName(s){return s.normalize('NFKC').trim().replace(/\s+/g,' ');}
  function message(text,error=false){el('exchangeMessage').textContent=text;el('exchangeMessage').classList.toggle('error',error);}
  function node(tag,text,className){const x=document.createElement(tag);if(text!==undefined)x.textContent=text;if(className)x.className=className;return x;}
  function button(text,handler,className){const x=node('button',text,className);x.type='button';x.addEventListener('click',handler);return x;}
  function mine(i){return i.ownerId===actor?.id||i.buyerId===actor?.id;}
  function render(){
    if(!actor)return;
    el('exchangeSchool').textContent=school;
    el('exchangeCount').textContent=items.filter(i=>i.status==='completed'&&i.ownerConfirmed===true&&i.buyerConfirmed===true).length;
    document.querySelectorAll('[data-exchange-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.exchangeView===view)));
    const category=el('exchangeCategory').value,query=el('exchangeSearch').value.trim().toLocaleLowerCase();
    const list=items.filter(i=>(view==='mine'?mine(i):i.status==='available'||i.status==='reserved')&&(category==='all'||i.category===category)&&(!query||(i.title+' '+i.description).toLocaleLowerCase().includes(query)));
    const grid=el('exchangeGrid');grid.replaceChildren();
    if(!list.length){const empty=node('div',undefined,'exchangeEmpty');empty.append(node('strong',view==='mine'?'Your exchanges will appear here.':'No offers yet.'),node('p',query||category!=='all'?'Try another search or category.':'Offer a book or school item to give it a second life.'));grid.append(empty);return;}
    for(const i of list){
      const card=node('article',undefined,'exchangeCard');
      if(typeof i.photo==='string'&&/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(i.photo)&&i.photo.length<=190000){const img=node('img');img.src=i.photo;img.alt=i.title;img.loading='lazy';card.append(img);}
      else card.append(node('div',i.category==='books'?'📚':'🗂️','exchangeArt'));
      const body=node('div',undefined,'exchangeCardBody');
      body.append(node('small',labels[i.status],'exchangeStatus'),node('h3',i.title),node('p',i.condition+' · '+(i.category==='books'?'Books':'School supplies')),node('p',i.description,'exchangeDescription'),node('small',i.ownerId===actor.id?'Your offer':(i.ownerName||'Student')+' · '+(i.ownerClass||'')));
      body.append(button(mine(i)?'Manage exchange →':'View item →',()=>showDetail(i.id)));
      card.append(body);grid.append(card);
    }
  }
  async function refresh(quiet=false){
    if(!store||!actor)return;
    const current=session,activeStore=store;
    try{
      const next=await activeStore.list();if(current!==session)return;
      const changed=JSON.stringify(items)!==JSON.stringify(next);items=next;if(changed)render();
      el('exchangeConnection').textContent='Shared board · Connected';
      if(!quiet)message('Up to date. Offers are shared with your school.');
      if(changed&&dialog.open&&dialog.dataset.item)showDetail(dialog.dataset.item,false);
    }catch(e){if(current!==session)return;el('exchangeConnection').textContent='Connection unavailable';message(e.message,true);}
  }
  function stop(){session++;if(stream)stream.close();stream=null;clearInterval(poll);clearTimeout(refreshTimer);store=null;actor=null;items=[];busy=false;if(dialog.open)dialog.close();}
  async function start(){
    stop();const current=session,p=currentProfile();if(!p)return;
    form.hidden=true;el('exchangeOffer').hidden=p.role==='teacher';
    el('exchangePublish').disabled=true;message('Connecting to your school board…');
    try{
      if(!cloudConfigured()||!crypto.subtle)throw new Error('A secure HTTPS connection and the shared Firebase database are required.');
      school=schoolName(p.sc);
      const schoolId=await digest(school.toLowerCase()),id=GreenCloud.uid();
      if(!id||p.uid!==id)throw new Error('Sign in to access your school board.');
      if(current!==session)return;
      actor={id,name:p.f+' '+(p.l[0]||'')+'.',className:p.c};
      store=GreenExchangeStore.createStore({baseUrl:FIREBASE_DB_URL,schoolId,fetchImpl:GreenCloud.fetch});
      await refresh();if(current!==session)return;
      el('exchangePublish').disabled=false;
      poll=setInterval(()=>{if(!document.hidden&&el('exchange').classList.contains('active'))refresh(true);},3000);
    }catch(e){if(current!==session)return;message(e.message,true);}
  }
  async function photoData(file){
    if(!file||!file.size)return null;
    if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>8*1024*1024)throw new Error('Choose a JPEG, PNG or WebP photo smaller than 8 MB.');
    const url=URL.createObjectURL(file);
    try{
      const image=new Image();await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=()=>reject(new Error('This photo could not be read.'));image.src=url;});
      const scale=Math.min(1,1000/image.width,1000/image.height),canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(image.width*scale));canvas.height=Math.max(1,Math.round(image.height*scale));
      const context=canvas.getContext('2d');context.fillStyle='#ffffff';context.fillRect(0,0,canvas.width,canvas.height);context.drawImage(image,0,0,canvas.width,canvas.height);
      for(const quality of [.72,.55,.38]){const value=canvas.toDataURL('image/jpeg',quality);if(value.length<=180000)return value;}
      throw new Error('This photo is too detailed. Try a smaller or simpler photo.');
    }finally{URL.revokeObjectURL(url);}
  }
  form.addEventListener('submit',async e=>{
    e.preventDefault();if(busy||!store||!actor||currentProfile()?.role==='teacher')return;
    const fields=new FormData(form),title=String(fields.get('title')).trim(),description=String(fields.get('description')).trim(),point=String(fields.get('point')).trim();
    if(!title||!description||!point){message('Enter an item name, description and school collection point.',true);return;}
    if(title.length>70||description.length>300||point.length>70){message('Your text is too long.',true);return;}
    const current=session,activeStore=store,author=actor;busy=true;el('exchangePublish').disabled=true;message('Saving your offer online…');
    try{
      const photo=await photoData(fields.get('photo'));
      draftId=draftId||crypto.randomUUID();
      const item={title,description,point,category:fields.get('category'),condition:fields.get('condition'),photo,ownerId:author.id,ownerName:author.name,ownerClass:author.className,status:'available',createdAt:Date.now(),ownerConfirmed:false,buyerConfirmed:false};
      const saved=await activeStore.publish(draftId,item);if(current!==session)return;
      items=[saved,...items.filter(i=>i.id!==saved.id)];draftId=null;form.reset();form.hidden=true;render();message('Published. Your offer is now saved online and visible on your school board.');
      refresh(true);
    }catch(e){if(current!==session)return;message(e.message,true);if(e.code==='duplicate'){await refresh(true);message('This offer already exists online. Check My exchanges before publishing another copy.');}}
    finally{if(current===session){busy=false;el('exchangePublish').disabled=!store;}}
  });
  function showDetail(id,open=true){
    const i=items.find(x=>x.id===id);if(!i){if(dialog.open)dialog.close();return;}
    dialog.dataset.item=id;const content=el('exchangeDetailContent');content.replaceChildren();
    const heading=node('h3',i.title);heading.id='exchangeDetailTitle';content.append(heading,node('small',labels[i.status],'exchangeStatus'),node('p',i.description),node('p','Condition: '+i.condition),node('p','Collection at school: '+i.point));
    const owner=i.ownerId===actor.id,buyer=i.buyerId===actor.id,actions=node('div',undefined,'exchangeActions');
    if(i.status==='available'){
      if(owner)actions.append(button('Withdraw offer',()=>act(id,'withdraw'),'exchangeSecondary'));
      else if(currentProfile()?.role!=='teacher')actions.append(button('Reserve this item →',()=>act(id,'reserve'),'exchangePrimary'));
    }
    if(i.status==='reserved'){
      if(owner||buyer){
        content.append(node('p','Reserved by '+i.buyerName+' · '+i.buyerClass),node('p','Owner: '+(i.ownerConfirmed?'handover confirmed':'awaiting confirmation')+' · Recipient: '+(i.buyerConfirmed?'collection confirmed':'awaiting confirmation')));
        if(!(owner?i.ownerConfirmed:i.buyerConfirmed)){
          const label=node('label',undefined,'exchangeHandover'),check=node('input');check.type='checkbox';
          label.append(check,node('span','I confirm the actual handover at school.'));
          const confirmButton=button(owner?'I handed over the item':'I collected the item',()=>act(id,'confirm'),'exchangePrimary');confirmButton.dataset.confirm='true';confirmButton.disabled=true;
          check.addEventListener('change',()=>confirmButton.disabled=!check.checked);
          content.append(label);actions.append(confirmButton);
        }
        if(!i.ownerConfirmed&&!i.buyerConfirmed)actions.append(button('Cancel reservation',()=>act(id,'cancel'),'exchangeSecondary'));
        content.append(node('p','Confirm only after the actual handover. Both confirmations are required to count this item as reused.','exchangeHint'));
      }else content.append(node('p','This item has already been reserved by another student.'));
    }
    if(i.status==='completed')content.append(node('p','✓ Both students confirmed the handover. One item has a second life.'));
    content.append(actions);if(open&&!dialog.open)dialog.showModal();
  }
  async function act(id,action){
    if(busy||!actor||!store)return;
    if(currentProfile()?.role==='teacher')return;
    const current=session,activeStore=store,participant=actor;busy=true;dialog.querySelectorAll('button').forEach(b=>b.disabled=true);
    try{
      const saved=await activeStore.act(id,participant,action);if(current!==session)return;
      items=items.map(i=>i.id===id?saved:i);render();showDetail(id,false);
      message(saved.status==='completed'?'Both students confirmed the handover. One more item reused.':action==='reserve'?'Reserved for you. Arrange collection at the school point shown.':action==='confirm'?'Your confirmation is saved. Waiting for the other student.':'Your change is saved online.');
      refresh(true);
    }catch(e){if(current===session){message(e.message,true);await refresh(true);}}
    finally{if(current===session){busy=false;dialog.querySelectorAll('button').forEach(b=>b.disabled=b.dataset.confirm==='true'&&!dialog.querySelector('.exchangeHandover input')?.checked);}}
  }
  document.querySelectorAll('[data-exchange-view]').forEach(b=>b.addEventListener('click',()=>{view=b.dataset.exchangeView;render();}));
  el('exchangeCategory').addEventListener('change',render);el('exchangeSearch').addEventListener('input',render);
  el('exchangeOffer').addEventListener('click',()=>{form.hidden=!form.hidden;if(!form.hidden)el('exchangeTitle').focus();});
  el('exchangeCancelForm').addEventListener('click',()=>form.hidden=true);
  el('exchangeRefresh').addEventListener('click',()=>refresh());el('exchangeCloseDetail').addEventListener('click',()=>dialog.close());
  window.addEventListener('online',()=>refresh());
  window.addEventListener('offline',()=>{message('You are offline. Reconnect to publish or update an exchange.',true);el('exchangeConnection').textContent='Offline';});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh(true);});
  // Wrap the existing profile lifecycle; points, missions and the Wall are unchanged.
  const originalBoot=boot;boot=function(){originalBoot();start();};
  const originalPage=page;page=function(id){originalPage(id);if(id==='exchange')refresh();};
  start();
})();
