import{_ as S,Q as B,j as H,o as k,f as x,e as c,T as W,U as z,V as P,i as M,W as R,I as U,N as q,X as D,B as F,Y as E,a as f,w as v,u as d,O as h,L as $,Z as j,t as w,b as O,p as Q,d as X}from"./index.4a0e6072.js";/* empty css              *//* empty css              */import{l as Y,s as b,r as Z}from"./index.8bc199a8.js";const A=""+new URL("logo.1e8c34ec.png",import.meta.url).href;const G={class:"s-canvas"},J=["width","height"],K={__name:"Identify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:35},fontSizeMax:{type:Number,default:35},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:100},lineColorMax:{type:Number,default:200},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:120},contentHeight:{type:Number,default:40}},setup(m){const t=m,n=(e,o)=>Math.floor(Math.random()*(o-e)+e),r=(e,o)=>{let l=n(e,o),a=n(e,o),s=n(e,o);return"rgb("+l+","+a+","+s+")"},p=e=>{for(let o=0;o<3;o++)e.strokeStyle=r(t.lineColorMin,t.lineColorMax),e.beginPath(),e.moveTo(n(0,t.contentWidth),n(0,t.contentHeight)),e.lineTo(n(0,t.contentWidth),n(0,t.contentHeight)),e.stroke()},_=(e,o,l)=>{e.fillStyle=r(t.colorMin,t.colorMax),e.font=n(t.fontSizeMin,t.fontSizeMax)+"px SimHei";let a=(l+1)*(t.contentWidth/(t.identifyCode.length+1)),s=n(t.fontSizeMax,t.contentHeight-5);var i=n(-10,10);e.translate(a,s),e.rotate(i*Math.PI/100),e.fillText(o,0,0),e.rotate(-i*Math.PI/100),e.translate(-a,-s)},y=e=>{for(let o=0;o<30;o++)e.fillStyle=r(0,255),e.beginPath(),e.arc(n(0,t.contentWidth),n(0,t.contentHeight),1,0,2*Math.PI),e.fill()},g=()=>{let o=document.getElementById("s-canvas").getContext("2d");o.textBaseline="bottom",o.fillStyle=r(t.backgroundColorMin,t.backgroundColorMax),o.fillRect(0,0,t.contentWidth,t.contentHeight);for(let l=0;l<t.identifyCode.length;l++)_(o,t.identifyCode[l],l);p(o),y(o)};return B(()=>t.identifyCode,(e,o)=>{g()}),H(()=>{g()}),(e,o)=>(k(),x("div",G,[c("canvas",{id:"s-canvas",width:t.contentWidth,height:t.contentHeight},null,8,J)]))}},ee=S(K,[["__scopeId","data-v-3ad97de0"]]);const N=m=>(Q("data-v-d19dbfdc"),m=m(),X(),m),te={class:"login"},oe=N(()=>c("img",{src:A,width:"100",class:"logo",alt:""},null,-1)),ne={class:"login-form"},le={style:{display:"flex",width:"100%","margin-top":"10px"}},ae=N(()=>c("div",{class:"identify"},"\u9A8C\u8BC1\u7801",-1)),se={style:{margin:"16px"}},ie={__name:"Login",setup(m){let t=W(),n=z(),r=P({username:"17001100999",password:"123456",isTitle:!0}),p=M(""),_=M("1234"),y=()=>{let s=(Math.random()*1e4).toFixed(0).toString();_.value=s},g=()=>{p.value===_.value?r.isTitle?Y(r.username,r.password).then(s=>{console.log(s),s.resultCode==200&&(localStorage.setItem("ml-token",s.data),t.query.needback==1?n.back():n.replace("/home"),b({type:"success",message:"\u767B\u5F55\u6210\u529F"}))}):Z(r.username,r.password).then(s=>{s.resultCode==200&&(b({type:"success",message:"\u6CE8\u518C\u6210\u529F"}),r.isTitle=!0)}):(b({type:"danger",message:"\u9A8C\u8BC1\u7801\u8F93\u5165\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165"}),y())},e=()=>{n.back()},{username:o,password:l,isTitle:a}=R(r);return(s,i)=>{const I=U,V=q,C=D,T=F,L=E;return k(),x("div",te,[c("header",null,[f(V,{title:d(a)?"\u767B\u5F55":"\u6CE8\u518C","left-arrow":"",onClickLeft:d(e)},{right:v(()=>[f(I,{name:"ellipsis",size:"18"})]),_:1},8,["title","onClickLeft"])]),oe,c("div",ne,[f(L,{onSubmit:d(g)},{default:v(()=>[f(C,{modelValue:d(o),"onUpdate:modelValue":i[0]||(i[0]=u=>h(o)?o.value=u:o=u),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u624B\u673A\u53F7"}]},null,8,["modelValue"]),f(C,{modelValue:d(l),"onUpdate:modelValue":i[1]||(i[1]=u=>h(l)?l.value=u:l=u),type:"password",name:"\u5BC6\u7801",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"]),c("div",le,[ae,$(c("input",{type:"text",placeholder:"\u9A8C\u8BC1\u7801","onUpdate:modelValue":i[2]||(i[2]=u=>h(p)?p.value=u:p=u)},null,512),[[j,d(p)]]),c("div",{class:"code",onClick:i[3]||(i[3]=(...u)=>d(y)&&d(y)(...u)),style:{width:"112px"}},[f(ee,{identifyCode:d(_)},null,8,["identifyCode"])])]),c("div",se,[c("p",{class:"link-register",onClick:i[4]||(i[4]=u=>h(a)?a.value=!d(a):a=!d(a))},w(d(a)?"\u7ACB\u5373\u6CE8\u518C":"\u5DF2\u6709\u8D26\u53F7\uFF0C\u7ACB\u5373\u767B\u5F55"),1),f(T,{round:"",block:"",type:"primary","native-type":"submit"},{default:v(()=>[O(w(d(a)?"\u767B\u5F55":"\u6CE8\u518C"),1)]),_:1})])]),_:1},8,["onSubmit"])])])}}},pe=S(ie,[["__scopeId","data-v-d19dbfdc"]]);export{pe as default};
