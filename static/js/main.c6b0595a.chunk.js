(this["webpackJsonptry-ts"]=this["webpackJsonptry-ts"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"Form_form__32yOr",input:"Form_input__1vbEq",button:"Form_button__1ZR31"}},function(t,e,n){t.exports={listItem:"ListItem_listItem__13b7U",listItem__button:"ListItem_listItem__button__usvAS"}},,,function(t,e,n){t.exports={app:"App_app__1wJzH"}},function(t,e,n){t.exports={todoList:"TODOList_todoList__2TyUk"}},function(t,e,n){t.exports=n(14)},,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(5),l=n.n(o),i=(n(13),n(6)),c=n.n(i),u=n(1),s=n(2),m=n.n(s);var f=function(t){var e=t.onAdd,n=Object(a.useState)(""),o=Object(u.a)(n,2),l=o[0],i=o[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),l.length&&(e(l),i(""))},className:m.a.form},r.a.createElement("input",{className:m.a.input,value:l,onChange:function(t){return i(t.target.value)},placeholder:"Enter new task"}),r.a.createElement("button",{type:"submit",className:m.a.button},"Add task"))};function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function v(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var b=r.a.createElement("path",{fill:"currentColor",d:"M32 464a48 48 0 0048 48h288a48 48 0 0048-48V128H32zm272-256a16 16 0 0132 0v224a16 16 0 01-32 0zm-96 0a16 16 0 0132 0v224a16 16 0 01-32 0zm-96 0a16 16 0 0132 0v224a16 16 0 01-32 0zM432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z"}),h=function(t){var e=t.svgRef,n=t.title,a=v(t,["svgRef","title"]);return r.a.createElement("svg",p({viewBox:"0 0 448 512",width:25,height:25,ref:e},a),n?r.a.createElement("title",null,n):null,b)},_=r.a.forwardRef((function(t,e){return r.a.createElement(h,p({svgRef:e},t))})),d=(n.p,n(3)),E=n.n(d);var g=function(t){var e=t.item,n=t.onRemove;return r.a.createElement("li",{className:E.a.listItem},e,r.a.createElement("button",{onClick:function(){return n(e)},className:E.a.listItem__button},r.a.createElement(_,null)))},y=n(7),O=n.n(y);var w=function(){var t=Object(a.useState)(["buy milk","tidy up"]),e=Object(u.a)(t,2),n=e[0],o=e[1],l=function(t){o((function(e){return e.filter((function(e){return e!==t}))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:O.a.todoList},0===n.length&&r.a.createElement("li",null,"There is no any tasks"),n.map((function(t){return r.a.createElement(g,{item:t,onRemove:l,key:t})}))),r.a.createElement(f,{onAdd:function(t){o((function(e){return e.concat(t)}))}}))};var k=function(){return r.a.createElement("section",{className:c.a.app},r.a.createElement("h1",null,"TODO list with TS"),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c6b0595a.chunk.js.map