"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[971],{376:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(861),c=n(311),a=n.n(c),s={API_KEY:"5ff0c13d688b2eddbe0c220a112dc9cb",BASE_URL:"https://api.themoviedb.org/3/"},o=s.BASE_URL,i=s.API_KEY;function u(){return(u=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t,"&page=").concat(n));case 2:if(!(r=e.sent).ok){e.next=9;break}return e.next=6,r.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("Not found"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function e(){var t,n,r=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,fetch("".concat(o,"trending/movie/day?api_key=").concat(i,"&page=").concat(t));case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"movie/").concat(t,"?api_key=").concat(i));case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("Not found"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("Not found"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("Not found"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d={fetchSearchByKeyword:function(e,t){return u.apply(this,arguments)},fetchTrending:function(){return p.apply(this,arguments)},fetchFullMovieInfo:function(e){return l.apply(this,arguments)},fetchFullMovieCredits:function(e){return h.apply(this,arguments)},fetchFullMovieReviews:function(e){return f.apply(this,arguments)}},x=d},140:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(152),c=n(791),a=n(523),s=n(271),o=n(376),i="App_link__91nmW",u="App_activeLink__Pj8iz App_link__91nmW",p=n(184),l=(0,c.lazy)((function(){return n.e(709).then(n.bind(n,256))})),h=(0,c.lazy)((function(){return n.e(753).then(n.bind(n,205))})),f=function(){var e=(0,s.$B)(),t=e.url,n=e.path,f=(0,s.UO)().moviesId,d=(0,c.useState)(null),x=(0,r.Z)(d,2),v=x[0],j=x[1],k=(0,c.useState)(null),m=(0,r.Z)(k,2),b=m[0],w=m[1],_=(0,c.useState)(null),y=(0,r.Z)(_,2),g=y[0],Z=y[1],A=(0,c.useState)("https://blankposter.com/wp-content/uploads/2021/11/Andrea_Busi_Wack-1-860x1204.jpg"),E=(0,r.Z)(A,2),S=E[0],N=E[1],P=(0,c.useState)(!1),C=(0,r.Z)(P,2),B=C[0],I=C[1];return(0,c.useEffect)((function(){if(!B)return o.Z.fetchFullMovieInfo(f).then((function(e){Z(e),null!==e.poster_path&&N("https://image.tmdb.org/t/p/w300".concat(e.poster_path)),w("resolved")})).catch((function(e){j(e),w("rejected")})),function(){I(!0)}}),[f,B]),(0,p.jsxs)("div",{children:["rejected"===b&&(0,p.jsx)("h1",{children:v.massage}),"resolved"===b&&(0,p.jsxs)("div",{children:[(0,p.jsx)("hr",{}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{type:"button",children:(0,p.jsx)(a.rU,{to:"/",children:"\u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})})}),(0,p.jsx)("hr",{}),(0,p.jsx)("img",{src:S,alt:g.title}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{children:["Additional information",(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(a.OL,{exact:!0,className:i,activeClassName:u,to:"".concat(t,"/casr"),children:"Casr"})}),(0,p.jsx)("li",{children:(0,p.jsx)(a.OL,{exact:!0,className:i,activeClassName:u,to:"".concat(t,"/reviews"),children:"Reviews"})})]}),(0,p.jsx)("hr",{}),(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)("h1",{children:"\u0417\u0410\u0413\u0420\u0423\u0416\u0410\u0415\u041c..."}),children:(0,p.jsxs)(s.rs,{children:[(0,p.jsx)(s.AW,{path:"".concat(n,"/casr"),exact:!0,children:(0,p.jsx)(l,{})}),(0,p.jsx)(s.AW,{path:"".concat(n,"/reviews"),exact:!0,children:(0,p.jsx)(h,{})})]})})]})]})]})}}}]);
//# sourceMappingURL=MovieDetailsPage.bf23ecc0.chunk.js.map