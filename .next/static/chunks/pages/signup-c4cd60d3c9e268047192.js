(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{8239:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(5893),s=t(809),o=t.n(s),a=t(2447),c=t(5675),i=t(7294),u=t(4990),l=t.n(u),h=t(1163),p=t(4155);function d(e,n,t){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)(o().mark((function e(n,t,r){var s,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=JSON.stringify({username:n,email:t,password:r}),e.next=3,fetch("https://".concat(p.env.userService,"/").concat("prod","/user/create"),{method:"POST",body:s,headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=t(4155);function x(e,n){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(o().mark((function e(n,t){var r,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.stringify({email:n,password:t}),e.next=3,fetch("https://".concat(m.env.userService,"/").concat("prod","/user/login"),{method:"POST",body:r,headers:{"Content-Type":"application/json"}});case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){var n=e.loginPage,t=(0,h.useRouter)(),s=(0,i.useRef)(),u=(0,i.useRef)(),p=(0,i.useRef)(),f=(0,i.useState)(n),m=f[0],g=f[1],_=(0,i.useState)(),j=_[0],v=_[1];function w(){return(w=(0,a.Z)(o().mark((function e(n){var r,a,c,i,l,h,f,g,_;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=u.current.value,a=p.current.value,!m){e.next=21;break}return e.next=6,x(r,a);case 6:if((c=e.sent).ok){e.next=14;break}return e.next=10,c.json();case 10:i=e.sent,v(i.error),e.next=19;break;case 14:return e.next=16,c.json();case 16:l=e.sent,localStorage.setItem("x-amz-security-token",l),t.push("/");case 19:e.next=44;break;case 21:return e.prev=21,((h=s.current.value).length<6||a.length<6)&&v("6 character minimum for each field"),e.next=26,d(h,r,a);case 26:if((f=e.sent).ok){e.next=34;break}return e.next=30,f.json();case 30:g=e.sent,v(g.error),e.next=39;break;case 34:return e.next=36,f.json();case 36:_=e.sent,localStorage.setItem("x-amz-security-token",_),t.push("/welcome");case 39:e.next=44;break;case 41:e.prev=41,e.t0=e.catch(21),console.log(e.t0);case 44:case"end":return e.stop()}}),e,null,[[21,41]])})))).apply(this,arguments)}return(0,r.jsxs)("section",{className:l().container,children:[(0,r.jsx)(c.default,{src:"/images/logo/logo.png",alt:"Profile Photo",width:125,height:125}),(0,r.jsx)("h2",{className:l().welcome,children:m?"Welcome back":"Sign Up"}),(0,r.jsxs)("form",{onSubmit:function(e){return w.apply(this,arguments)},children:[!m&&(0,r.jsxs)("div",{className:l().control,children:[(0,r.jsx)("label",{htmlFor:"username",children:"Username"}),(0,r.jsx)("input",{type:"text",id:"username",ref:s,required:!0})]}),(0,r.jsxs)("div",{className:l().control,children:[(0,r.jsx)("label",{htmlFor:"email",children:"Email"}),(0,r.jsx)("input",{type:"email",id:"email",ref:u,required:!0})]}),(0,r.jsxs)("div",{className:l().control,children:[(0,r.jsx)("label",{htmlFor:"password",children:"Password"}),(0,r.jsx)("input",{type:"password",id:"password",ref:p,required:!0})]}),(0,r.jsxs)("div",{className:l().buttons,children:[(0,r.jsx)("button",{className:l().signInButton,children:m?(0,r.jsx)("h1",{children:"Login"}):(0,r.jsx)("h1",{children:"Create Account"})}),j&&(0,r.jsx)("h3",{className:l().error,children:j}),m&&(0,r.jsx)("h3",{className:l().toggle,onClick:function(){return t.push("/forgot-password")},children:"Forgot Password"}),(0,r.jsx)("button",{type:"button",className:l().toggle,onClick:function(){g((function(e){return!e}))},children:m?"Create new account":"Login with existing account"})]})]})]})}var j=t(9008),v=t(6771),w=t.n(v);function b(){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsxs)(j.default,{children:[(0,r.jsx)("title",{children:"Leap Education | Login"}),(0,r.jsx)("meta",{name:"description",content:"Leap Education wants to provide a free world class college-level education to everyone. Login to see your progress through our courses."})]}),(0,r.jsx)("div",{className:w().container,children:(0,r.jsx)(_,{loginPage:!1})})]})}},9139:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return t(8239)}])},4990:function(e){e.exports={container:"auth-form_container__3SWqV",toggle:"auth-form_toggle__5ELxf",control:"auth-form_control__3Jr3K",profileImage:"auth-form_profileImage__3lDdO",signInButton:"auth-form_signInButton__Di3Pb",welcome:"auth-form_welcome__Y36mT",buttons:"auth-form_buttons__QzmYU",error:"auth-form_error__1fL_-"}},6771:function(){}},function(e){e.O(0,[774,888,179],(function(){return n=9139,e(e.s=n);var n}));var n=e.O();_N_E=n}]);