(this["webpackJsonptill-counter"]=this["webpackJsonptill-counter"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(7),s=t.n(r),i=(t(12),t(13),t(0));var o=function(e){return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("h1",{children:e.title})})},l=t(4),u=t(6);var d=function(e){return Object(i.jsxs)("div",{className:"denomination",children:[Object(i.jsxs)("label",{className:"denom-label",children:["$",e.denomination.toFixed(2)]}),Object(i.jsx)("input",{id:"denom-"+e.denomination,type:"text",className:"denom-input",step:e.denomination,min:"0",pattern:e.regex,defaultValue:"0.00",onChange:e.onChange,onBlur:e.onBlur}),Object(i.jsx)("label",{id:"count-"+e.denomination,className:"denom-count",children:"0"})]})};var j=function(e){var n=c.a.useState([]),t=Object(u.a)(n,2),a=t[0],r=t[1],s=c.a.useState(0),o=Object(u.a)(s,2),j=o[0],b=o[1],m=function(e){var n=e.target.id,t=parseFloat(e.target.value),c=a.findIndex((function(e){return e.denom===n}));-1===c&&r((function(e){return[].concat(Object(l.a)(e),[{denom:n,value:t}])})),c>-1&&r((function(e){return[].concat(Object(l.a)(e.slice(0,c)),[{denom:n,value:t}],Object(l.a)(e.slice(c+1)))}))},h=function(){a.length>0&&b((function(){return a.map((function(e){return e.value})).reduce((function(e,n){return e+n}))}))};function x(e){var n="";switch(e){case 100:n="([0-9]*[0]{2}|0).[0]{2}";break;case 50:n="([0-9]*[05]{1}[0]|0).[0]{2}";break;case 20:n="([0-9]*[02468]{1}[0]|0).[0]{2}";break;case 10:n="[0-9]*[0].[0]{2}";break;case 5:n="[0-9]*[05].[0]{2}";break;case 2:n="[0-9]*[02468].[0]{2}";break;case 1:n="[0-9]+.[0]{2}";break;case.5:n="[0-9]+.[05][0]";break;case.2:n="[0-9]+.[02468][0]";break;case.1:n="[0-9]+.[0-9][0]";break;case.05:n="[0-9]+.[0-9][05]"}return n}var O=[];return e.denoms.forEach((function(e){O.push(Object(i.jsx)(d,{denomination:e,regex:x(e),onChange:m,onBlur:h},"denom-".concat(e)))})),Object(i.jsxs)("div",{className:"tillcounter",children:[O,Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:"total",children:Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Total:"})," ",Object(i.jsxs)("span",{className:"total-span",children:["$",j.toFixed(2)]})]})})]})};var b=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{title:"Till Counter"}),Object(i.jsx)(j,{denoms:[100,50,20,10,5,2,1,.5,.2,.1,.05]})]})};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.966397f4.chunk.js.map