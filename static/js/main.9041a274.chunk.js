(this["webpackJsonpmath-game-react-refactor"]=this["webpackJsonpmath-game-react-refactor"]||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){},12:function(e,t,s){"use strict";s.r(t);var c=s(0),r=s(1),a=s.n(r),n=s(4),o=s.n(n),b=(s(10),s(2));s(11);function i(e){return Object(c.jsxs)("div",{className:"progress",children:[Object(c.jsxs)("div",{className:"boxes",children:[Object(c.jsx)("div",{className:"box"}),Object(c.jsx)("div",{className:"box"}),Object(c.jsx)("div",{className:"box"}),Object(c.jsx)("div",{className:"box"}),Object(c.jsx)("div",{className:"box"}),Object(c.jsx)("div",{className:"box"}),Object(c.jsx)("div",{className:"box"}),Object(c.jsx)("div",{className:"box"}),Object(c.jsx)("div",{className:"box"}),Object(c.jsx)("div",{className:"box"})]}),Object(c.jsx)("div",{className:"progress-inner",style:{transform:"scaleX(".concat(e.score/10,")")}})]})}var u=function(){var e=Object(r.useState)(0),t=Object(b.a)(e,2),s=t[0],a=t[1],n=Object(r.useState)(0),o=Object(b.a)(n,2),u=o[0],j=o[1],m=Object(r.useState)(C),l=Object(b.a)(m,2),d=l[0],x=l[1],O=Object(r.useState)(""),f=Object(b.a)(O,2),N=f[0],v=f[1],p=Object(r.useState)(!1),h=Object(b.a)(p,2),g=h[0],S=h[1],y=Object(r.useRef)(null),k=Object(r.useRef)(null);function w(e){return Math.floor(Math.random()*(e+1))}function C(){return{firstNumber:w(10),secondNumber:w(10),operator:["+","-","x"][w(2)]}}return Object(r.useEffect)((function(){10!==s&&3!==u||setTimeout((function(){return k.current.focus()}),331)}),[s,u]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"main-ui"+(3===u||10===s?" blurred":""),children:[Object(c.jsxs)("p",{className:"game"+(g?" animate-wrong":""),children:[d.firstNumber," ",d.operator," ",d.secondNumber]}),Object(c.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),y.current.focus(),"+"===d.operator&&(t=d.firstNumber+d.secondNumber),"-"===d.operator&&(t=d.firstNumber-d.secondNumber),"x"===d.operator&&(t=d.firstNumber*d.secondNumber),parseInt(N)===t?a((function(e){return e+1})):(j((function(e){return e+1})),S(!0),setTimeout((function(){return S(!1)}),401)),x(C()),v("")},action:"",className:"game-form",children:[Object(c.jsx)("input",{ref:y,value:N,onChange:function(e){return v(e.target.value)},type:"text",className:"form-field",autoComplete:"off"}),Object(c.jsx)("button",{children:"Submit"})]}),Object(c.jsxs)("p",{className:"stat",children:["You needs ",10-s," more points, and are not allowed to make ",2-u>0?2-u:0," more mistakes."]}),Object(c.jsx)(i,{score:s})]}),Object(c.jsx)("div",{className:"overlay"+(3===u||10===s?" overlay--visible":""),children:Object(c.jsxs)("div",{className:"overlay-inner",children:[Object(c.jsx)("p",{className:"end-message",children:10===s?"Congrats! You won.":"Sorry! You lost."}),Object(c.jsx)("button",{ref:k,onClick:function(){a(0),j(0),v(""),x(C()),y.current.focus()},className:"reset-button",children:"Start Over"})]})})]})};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("app"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9041a274.chunk.js.map