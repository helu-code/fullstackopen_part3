(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),u=t.n(r),c=(t(20),t(2)),l=t(3),i=t.n(l),m=function(e){var n=e.text,t=e.handleChange;return o.a.createElement("div",null,"filter shown with",o.a.createElement("input",{value:n,onChange:t}))},d=function(e){var n=e.name,t=e.handleNameChange,a=e.number,r=e.handleNumberChange,u=e.handleSubmit;return o.a.createElement("form",{onSubmit:u},o.a.createElement("div",null,"name:",o.a.createElement("input",{value:n,onChange:t})),o.a.createElement("div",null,"number:",o.a.createElement("input",{value:a,onChange:r})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},f="/api/persons",s=function(){return i.a.get(f).then(function(e){return e.data})},h=function(e){return i.a.post(f,e).then(function(e){return e.data})},b=function(e,n){return i.a.put("".concat(f,"/").concat(e),n).then(function(e){return e.data})},g=function(e){return i.a.delete("".concat(f,"/").concat(e)).then(function(e){return e.data})},v=function(e){var n=e.name,t=e.number,a=e.handleClick;return o.a.createElement("div",null,n+" "+t,o.a.createElement("button",{onClick:a},"delete"))},E=function(e){var n=e.message,t=e.msgType;return console.log("Notification msg",n),null===n?null:1===t?o.a.createElement("div",{className:"error"},n):o.a.createElement("div",{className:"warning"},n)},p=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],r=n[1],u=Object(a.useState)(""),l=Object(c.a)(u,2),i=l[0],f=l[1],p=Object(a.useState)(""),w=Object(c.a)(p,2),O=w[0],j=w[1],C=Object(a.useState)(""),k=Object(c.a)(C,2),S=k[0],N=k[1],y=Object(a.useState)(null),P=Object(c.a)(y,2),T=P[0],x=P[1],D=Object(a.useState)(0),I=Object(c.a)(D,2),J=I[0],B=I[1];Object(a.useEffect)(function(){console.log("effect"),s().then(function(e){r(e)})},[]);var H=t.filter(function(e){return e.name.indexOf(S)>-1}),U=function(e){console.log("Delete",e);var n=t.findIndex(function(n){return n.id===e}),a=t[n].name;window.confirm("Haluat siis varmasti poistaa henkil\xf6n "+a)&&g(e).then(function(n){console.log(n),r(t.filter(function(n){return n.id!==e})),x("Person '".concat(a,"' removed")),setTimeout(function(){x(null)},2e3)})};return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(E,{message:T,msgType:J}),o.a.createElement(m,{text:S,handleChange:function(e){N(e.target.value)}}),o.a.createElement("h2",null,"add a new"),o.a.createElement(d,{name:i,handleNameChange:function(e){f(e.target.value)},number:O,handleNumberChange:function(e){j(e.target.value)},handleSubmit:function(e){e.preventDefault(),console.log("button clicked",e.target);var n=t.find(function(n){return console.log("element.name",e.target),n.name===i});if(console.log("found=",n),n)return window.confirm("".concat(i," is already added to phonebook, replase the old number with a new one?"))&&(n.number=O,b(n.id,n).then(function(e){console.log("UpdatePerson"),r(t.map(function(e){return e.id!==n.id?e:n})),x("Person '".concat(n.name,"' updated")),setTimeout(function(){x(null)},2e3)}).catch(function(e){B(1),x("Person '".concat(n.name,"' was already removed from server")),setTimeout(function(){x(null),B(1)},5e3),r(t.filter(function(e){return e.id!==n.id}))})),f(""),void j("");h({name:i,number:O}).then(function(e){console.log(e),r(t.concat(e)),f(""),j(""),x("Person '".concat(i,"' added")),setTimeout(function(){x(null)},2e3)})}}),o.a.createElement("h2",null,"Numbers"),H.map(function(e){return o.a.createElement("div",{key:e.name},o.a.createElement(v,{name:e.name,number:e.number,handleClick:function(){return U(e.id)}}))}))};u.a.render(o.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.515f618f.chunk.js.map