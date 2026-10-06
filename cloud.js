/* Firebase Authentication REST adapter. The web API key identifies the project;
 * authorization is enforced by database rules and per-user ID tokens. */
(function(){
  'use strict';
  const apiKey='AIzaSyDeMUf7jVgXK37RZ9dgIqk-klc1a3Dmw08',sessionKey='gs-auth-v1';
  let session=null,refreshing=null;
  try{session=JSON.parse(localStorage.getItem(sessionKey)||'null');}catch(e){}
  async function request(url,options={}){
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
    try{return await fetch(url,{...options,signal:controller.signal,cache:'no-store'});}
    finally{clearTimeout(timer);}
  }
  async function digest(value){const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value));return Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');}
  function keep(value,key){session={key,uid:value.localId||value.user_id,token:value.idToken||value.id_token,refresh:value.refreshToken||value.refresh_token,expires:Date.now()+Number(value.expiresIn||value.expires_in)*1000};localStorage.setItem(sessionKey,JSON.stringify(session));}
  async function authCall(action,body){
    const r=await request('https://identitytoolkit.googleapis.com/v1/accounts:'+action+'?key='+apiKey,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
    const data=await r.json();if(!r.ok){const code=data.error?.message;const messages={INVALID_PASSWORD:'Wrong password for this online profile.',INVALID_LOGIN_CREDENTIALS:'Wrong password or profile details.',EMAIL_NOT_FOUND:'This profile has not registered yet.',TOO_MANY_ATTEMPTS_TRY_LATER:'Too many attempts. Please wait and try again.',OPERATION_NOT_ALLOWED:'Sign-in is unavailable. Contact your school project administrator.'};const e=new Error(messages[code]||'Sign-in could not be completed. Please retry.');e.code=code;throw e;}return data;
  }
  async function login(key,passwordHash){
    const email=(await digest(key))+'@profiles.greenswitch.invalid';
    const body={email,password:passwordHash,returnSecureToken:true};
    let data;
    try{data=await authCall('signInWithPassword',body);}
    catch(e){
      if(!['INVALID_LOGIN_CREDENTIALS','EMAIL_NOT_FOUND'].includes(e.code))throw e;
      try{data=await authCall('signUp',body);}catch(signup){if(signup.code==='EMAIL_EXISTS')throw new Error('Wrong password for this online profile.');throw signup;}
    }
    keep(data,key);return session.uid;
  }
  async function token(){
    if(!session)throw new Error('Sign in to connect your profile.');
    if(session.expires>Date.now()+60000)return session.token;
    if(!refreshing){const current=session;refreshing=(async()=>{
      const r=await request('https://securetoken.googleapis.com/v1/token?key='+apiKey,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({grant_type:'refresh_token',refresh_token:current.refresh})});
      const data=await r.json();if(!r.ok)throw new Error('Your session expired. Please sign in again.');
      if(session===current)keep(data,current.key);else throw new Error('Profile changed. Please retry.');
      return session.token;
    })().finally(()=>refreshing=null);}
    return refreshing;
  }
  async function dbFetch(url,options={}){const value=await token();return request(url+(url.includes('?')?'&':'?')+'auth='+encodeURIComponent(value),options);}
  async function json(path,options={}){const r=await dbFetch(FIREBASE_DB_URL+'/'+path+'.json',options);if(!r.ok)throw new Error('Cloud request rejected ('+r.status+').');return r.json();}
  function logout(){session=null;localStorage.removeItem(sessionKey);}
  window.GreenCloud={login,token,fetch:dbFetch,json,digest,logout,uid:()=>session?.uid,key:()=>session?.key};
})();
