const {test}=require('node:test');
const assert=require('node:assert/strict');
const {transition,createStore}=require('./exchange-store.js');
const owner={id:'owner',name:'Owner',className:'4A'},a={id:'a',name:'A',className:'4B'},b={id:'b',name:'B',className:'4B'};
const item=()=>({ownerId:'owner',title:'Test',description:'Test item',point:'Library',status:'available',createdAt:1,ownerConfirmed:false,buyerConfirmed:false});
test('the owner cannot reserve their own offer',()=>assert.throws(()=>transition(item(),owner,'reserve',2),/own offer/));
test('only one recipient can reserve; unrelated users cannot confirm',()=>{
const reserved=transition(item(),a,'reserve',2);
assert.throws(()=>transition(reserved,b,'reserve',3),/already reserved/);
assert.throws(()=>transition(reserved,b,'confirm',3),/participants/);
});
test('one confirmation does not count reuse; both do, only once',()=>{
const r=transition(item(),a,'reserve',2),first=transition(r,a,'confirm',3),done=transition(first,owner,'confirm',4);
assert.equal(first.status,'reserved');assert.equal(done.status,'completed');assert.equal(done.completedAt,4);
assert.strictEqual(transition(done,owner,'confirm',5),done);
assert.throws(()=>transition(done,owner,'withdraw',5),/completed/);
});
test('cancellation clears recipient and confirmations',()=>{
const r=transition(item(),a,'reserve',2),cancel=transition(r,a,'cancel',3);
assert.equal(cancel.status,'available');assert.equal(cancel.buyerId,null);
assert.equal(transition(cancel,b,'reserve',4).buyerId,'b');
assert.throws(()=>transition(transition(r,a,'confirm',3),owner,'cancel',4),/confirmed/);
});
test('ETag conflict retries against fresh data and rejects second reservation',async()=>{
let calls=0;
const reserved=transition(item(),b,'reserve',2);
const fetchImpl=async(url,options)=>{calls++;if(calls===1)return new Response(JSON.stringify(item()),{headers:{etag:'"v1"'}});if(calls===2){assert.equal(options.headers['if-match'],'"v1"');return new Response(null,{status:412});}return new Response(JSON.stringify(reserved),{headers:{etag:'"v2"'}});};
const store=createStore({baseUrl:'https://test.firebaseio.com',schoolId:'a'.repeat(64),fetchImpl});
await assert.rejects(()=>store.act('id',a,'reserve'),/already reserved/);assert.equal(calls,3);
});
test('failed online publication is reported, never treated as success',async()=>{
const store=createStore({baseUrl:'https://test.firebaseio.com',schoolId:'a'.repeat(64),fetchImpl:async()=>new Response(null,{status:403})});
await assert.rejects(()=>store.publish('id',item()),/rejected/);
});
test('empty online board stays empty',async()=>{
const store=createStore({baseUrl:'https://test.firebaseio.com',schoolId:'a'.repeat(64),fetchImpl:async()=>new Response('null')});
assert.deepEqual(await store.list(),[]);
});
