(this["webpackJsonpfun-react-lib"]=this["webpackJsonpfun-react-lib"]||[]).push([[6],{131:function(e,t,n){e.exports=n.p+"static/media/infinite-scroll.76a4df80.md"},24:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n.n(r),u=n(8),o=n(0),i=n.n(o),s=n(29),l=n.n(s),f=n(6),p=n(131),m=n.n(p),b=function(){var e=Object(u.a)(c.a.mark((function e(t,n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://randomuser.me/api","/?page=").concat(t,"&results=").concat(n));case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();t.default=function(){var e=Object(o.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1];Object(o.useEffect)((function(){fetch(m.a).then((function(e){return e.text()})).then((function(e){r(e)}))}));var c=function(e){var t=Object(o.useState)(e.data),n=Object(a.a)(t,2),r=n[0],c=n[1],u=Object(o.useState)(e.page),i=Object(a.a)(u,2),s=i[0],l=i[1],f=Object(o.useState)(e.hasMore),p=Object(a.a)(f,2),m=p[0],d=p[1],h=Object(o.useState)(e.isLoading),E=Object(a.a)(h,2),j=E[0],g=E[1],O=Object(o.useState)(e.isError),v=Object(a.a)(O,2),L=v[0],M=v[1];return Object(o.useEffect)((function(){var e=!1;return g(!0),M(!1),b(s,10).then((function(t){e||(c((function(e){return e.concat(t)})),g(!1),M(!1),d(!0))})).catch((function(){M(!0),g(!1)})),function(){e=!0}}),[s]),{data:r,setPage:l,hasMore:m,isLoading:j,isError:L}}({data:[],page:1,hasMore:!0,isLoading:!1,isError:!1}),u=c.data,s=c.setPage,p=c.hasMore,d=c.isLoading,h=c.isError;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{source:n}),i.a.createElement("div",null,i.a.createElement("h2",null,"My User List"),i.a.createElement(f.a,{hasMore:p,isLoading:d,isError:h,triggerFunction:function(){s((function(e){return e+1}))},loadingComponent:i.a.createElement("p",null,"loading..."),errorComponent:i.a.createElement("p",null,"An error ocurred...")},u.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement("h3",null,"".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last)),i.a.createElement("p",null,e.cell," - ",e.email))})))))}}}]);
//# sourceMappingURL=6.0105ec9a.chunk.js.map