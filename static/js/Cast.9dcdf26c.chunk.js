"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[709],{256:function(e,t,n){n.r(t);var s=n(152),c=n(791),r=n(271),i=n(376),a=n(184);t.default=function(){var e=(0,r.UO)().moviesId,t=(0,c.useState)(null),n=(0,s.Z)(t,2),u=n[0],l=n[1],o=(0,c.useState)(null),h=(0,s.Z)(o,2),d=h[0],f=h[1],p=(0,c.useState)(null),_=(0,s.Z)(p,2),j=_[0],m=_[1],v=(0,c.useState)("https://blankposter.com/wp-content/uploads/2021/11/Andrea_Busi_Wack-1-860x1204.jpg"),x=(0,s.Z)(v,1)[0],g=(0,c.useState)(!1),w=(0,s.Z)(g,2),k=w[0],Z=w[1];return(0,c.useEffect)((function(){if(!k)return i.Z.fetchFullMovieCredits(e).then((function(e){m(e.cast),f("resolved")})).catch((function(e){l(e),f("rejected")})),function(){Z(!0)}}),[e,k]),(0,a.jsxs)("div",{children:["rejected"===d&&(0,a.jsx)("h1",{children:u.massage}),"resolved"===d&&(0,a.jsx)("ul",{children:j.map((function(e){var t=e.profile_path,n=e.name,s=e.character,c=e.id;return(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{width:200,src:t?"https://image.tmdb.org/t/p/w500".concat(t):x,alt:n}),(0,a.jsx)("p",{children:n}),(0,a.jsx)("p",{children:s})]},c)}))})]})}}}]);
//# sourceMappingURL=Cast.9dcdf26c.chunk.js.map