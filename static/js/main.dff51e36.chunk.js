(this.webpackJsonpzadanie=this.webpackJsonpzadanie||[]).push([[0],{18:function(t,n,e){},21:function(t,n,e){"use strict";e.r(n);var a=e(1),r=e(0),i=e.n(r),c=e(9),o=e.n(c),u=(e(18),e(7)),d=e(2),s=e(3);function l(){var t=Object(d.a)(["\n  border-right: 1px solid #000;\n  border-bottom: 2px solid #000;\n  width: 15px;\n  height: 15px;\n"]);return l=function(){return t},t}function f(){var t=Object(d.a)(["\n  border-left: 1px solid #000;\n  border-right: 1px solid #000;\n  border-bottom: 2px solid #000;\n  width: 15px;\n  height: 15px;\n"]);return f=function(){return t},t}function x(){var t=Object(d.a)(["\n  display: flex;\n  @media (max-width: 870px) {\n    transform: rotate(90deg);\n  }\n"]);return x=function(){return t},t}function b(){var t=Object(d.a)(["\n  margin: 0;\n  padding: 0;\n  align-self: flex-start;\n  @media (max-width: 870px) {\n    ","\n  }\n"]);return b=function(){return t},t}function h(){var t=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 870px) {\n    ","\n  }\n"]);return h=function(){return t},t}function j(){var t=Object(d.a)(["\n  text-align: center;\n  margin-right: .5rem;\n  & h3 {\n    margin: 0;\n    padding: 0;\n  }\n  & p {\n    font-size: 10px;\n    margin: 0;\n  }\n"]);return j=function(){return t},t}function g(){var t=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  @media (max-width: 870px) {\n    flex-direction: column;\n    max-height: 440px;\n    flex-wrap: wrap;\n  }\n"]);return g=function(){return t},t}function v(){var t=Object(d.a)(["\n  display: flex;\n  @media (max-width: 870px) {\n    width: 140px;\n    flex-direction: column;\n  }\n"]);return v=function(){return t},t}var p=s.a.div(v()),m=s.a.div(g()),O=s.a.div(j()),D=s.a.div(h(),(function(t){return t.last&&"align-self: flex-start"})),w=s.a.h5(b(),(function(t){return t.last&&"margin-left: -25px !important"})),T=s.a.div(x()),y=s.a.div(f()),Z=s.a.div(l());function M(t){return t.getMinutes()<30?30:60}function H(t){return"available"===t?"#2f74bc":"notavailable"===t?"#52afaf":"delayed"===t?"#f2a53c":void 0}var F=["Ni","Pn","Wt","\u015ar","Cz","Pt","So"];var C=function(t){var n=t.date,e=t.data,c=[];return Array(25).fill().forEach((function(t,n){return c.push({hour:n,firstHalf:i.a.createRef(),secondHalf:i.a.createRef()})})),Object(r.useEffect)((function(){e.forEach((function(t){var n=t.startDate,e=t.endDate,a=t.status;n=new Date(n),e=new Date(e);for(var r=n;r<e;r.setMinutes(M(r)))r.getMinutes()<30&&(c[r.getHours()].firstHalf.current.style.backgroundColor=H(a)),r.getMinutes()>=30&&(c[r.getHours()].secondHalf.current.style.backgroundColor=H(a))}))}),[]),n=new Date(n),Object(a.jsxs)(p,{children:[Object(a.jsxs)(O,{children:[Object(a.jsx)("h3",{children:F[n.getDay()]}),Object(a.jsxs)("p",{children:[n.getFullYear(),"-",n.getMonth()+1,"-",n.getDate()]})]}),Object(a.jsx)(m,{children:c.map((function(t,e){var r=t.hour,i=t.firstHalf,c=t.secondHalf;return Object(a.jsxs)(a.Fragment,{children:[window.innerWidth<870&&12==e&&Object(a.jsx)(D,{last:24===e,children:Object(a.jsx)(w,{last:!0,style:{marginLeft:r>=10?-9:-5},children:r})},"".concat(n,"-").concat(e)),Object(a.jsxs)(D,{last:24===e,children:[Object(a.jsx)(w,{last:24===e,style:{marginLeft:r>=10?-9:-5},children:r}),24!==r&&Object(a.jsxs)(T,{children:[Object(a.jsx)(y,{ref:i}),Object(a.jsx)(Z,{ref:c})]})]},"".concat(n,"-").concat(e))]})}))})]})};function k(){var t=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 870px) {\n    flex-direction: row;\n  }\n"]);return k=function(){return t},t}var z=s.a.div(k());function E(t){var n=new Date(t),e=n.getMonth()<10?"0".concat(n.getMonth()):n.getMonth(),a=n.getDate()<10?"0".concat(n.getDate()):n.getDate();return"".concat(n.getFullYear(),"-").concat(e,"-").concat(a)}var L=function(t){var n=t.calendar.map((function(t){return E(t.startDate)})).filter((function(t,n,e){return e.indexOf(t)===n}));return n=n.map((function(n){var e=t.calendar.filter((function(t){return E(t.startDate)===n}));return{date:n,data:e}})),Object(a.jsx)(z,Object(u.a)(Object(u.a)({},t),{},{children:n.map((function(t){var n=t.data,e=t.date;return Object(a.jsx)(C,{date:e,data:n})}))}))};var P=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(L,{calendar:[{startDate:"2020-10-25T02:00:00.0Z",endDate:"2020-10-25T03:00:00.0Z",status:"available"},{startDate:"2020-10-25T03:00:00.000Z",endDate:"2020-10-25T03:30:00.000Z",status:"notavailable"},{startDate:"2020-10-25T09:00:00.000Z",endDate:"2020-10-25T11:00:00.000Z",status:"notavailable"},{startDate:"2020-10-25T15:00:00.000Z",endDate:"2020-10-25T17:00:00.000Z",status:"delayed"},{startDate:"2020-10-26T12:00:00.000Z",endDate:"2020-10-26T13:00:00.000Z",status:"available"},{startDate:"2020-10-26T13:00:00.000Z",endDate:"2020-10-26T14:00:00.000Z",status:"notavailable"},{startDate:"2020-10-27T15:00:00.000Z",endDate:"2020-10-27T15:30:00.000Z",status:"delayed"}]})})},S=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,22)).then((function(n){var e=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;e(t),a(t),r(t),i(t),c(t)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),S()}},[[21,1,2]]]);
//# sourceMappingURL=main.dff51e36.chunk.js.map