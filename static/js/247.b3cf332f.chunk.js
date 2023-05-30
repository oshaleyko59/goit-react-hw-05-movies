"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{6700:function(e,t,n){n.d(t,{Q:function(){return r}});var r={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},1247:function(e,t,n){n.r(t);var r=n(9439),a=n(2791),c=n(7689),o=n(171),s=n(6793),i=n(587),u=n(6700),p=n(184);t.default=function(){var e=(0,c.UO)().id,t=(0,a.useState)(u.Q.IDLE),n=(0,r.Z)(t,2),l=n[0],h=n[1],f=(0,a.useState)([]),g=(0,r.Z)(f,2),v=g[0],d=g[1],w=(0,a.useState)(null),m=(0,r.Z)(w,2),E=m[0],x=m[1];return(0,a.useEffect)((function(){return h(u.Q.PENDING),o.Z.fetchMovieCast(e).then((function(e){var t=e.cast;d(t),h(u.Q.RESOLVED)})).catch((function(e){x(e),h(u.Q.REJECTED),d([])})),function(){o.Z.abortFetch()}}),[e]),(0,p.jsxs)("div",{children:[l===u.Q.REJECTED&&(0,p.jsx)(s.Z,{msg:E.message}),l===u.Q.PENDING&&(0,p.jsx)(i.Z,{}),l===u.Q.RESOLVED&&(v.length?(0,p.jsx)("ul",{children:v.map((function(e){var t=e.id,n=e.character,r=e.name,a=e.profile_path,c="https://image.tmdb.org/t/p/w92".concat(a);return(0,p.jsxs)("li",{children:[(0,p.jsx)("div",{children:a?(0,p.jsx)("img",{src:c,alt:r}):(0,p.jsx)("p",{children:"No photo"})}),(0,p.jsx)("p",{children:r}),(0,p.jsxs)("p",{children:["Character: ",n]})]},t)}))}):(0,p.jsx)("p",{children:"Sorry, there is no information about the cast..."}))]})}},6793:function(e,t,n){n.d(t,{Z:function(){return u}});var r,a=n(2007),c=n.n(a),o=n(168),s=n(6444).ZP.p(r||(r=(0,o.Z)(["\n  margin-top: 38px;\n  margin-left: auto;\n  margin-right: auto;\n  color: red;\n  font-size: 24px;\n  font-weight: 700;\n"]))),i=n(184);s.propTypes={msg:c().string};var u=function(e){var t=e.msg;return(0,i.jsx)(s,{children:t||"Something unexpected happed..."})}},171:function(e,t,n){var r,a=n(5861),c=n(7757),o=n.n(c),s=n(1243),i="https://api.themoviedb.org/3/",u="b3cb1db782e55dafd1da39b95bd6f5f2";function p(){return(p=(0,a.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new AbortController,t="".concat(i,"trending/movie/week?api_key=").concat(u,"&page=1&language=en-US"),e.next=5,s.Z.get(t,{signal:r.signal});case 5:return n=e.sent,e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return l=(0,a.Z)(o().mark((function e(t){var n,a,c,p=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:1,e.prev=1,r=new AbortController,a="".concat(i,"/search/movie?api_key=").concat(u,"&language=en-US&page=").concat(n,"&query=").concat(t),e.next=6,s.Z.get(a,{signal:r.signal});case 6:return c=e.sent,e.abrupt("return",c.data);case 10:throw e.prev=10,e.t0=e.catch(1),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),l.apply(this,arguments)}function h(){return(h=(0,a.Z)(o().mark((function e(t){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new AbortController,n="".concat(i,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US"),e.next=5,s.Z.get(n,{signal:r.signal});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(){return(f=(0,a.Z)(o().mark((function e(t){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new AbortController,n="".concat(i,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"),e.next=5,s.Z.get(n,{signal:r.signal});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function g(){return(g=(0,a.Z)(o().mark((function e(t){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new AbortController,n="".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US"),e.next=5,s.Z.get(n,{signal:r.signal});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var v={fetchTrendingMovies:function(){return p.apply(this,arguments)},fetchMovieCast:function(e){return f.apply(this,arguments)},fetchMovieDetails:function(e){return h.apply(this,arguments)},fetchMovieReviews:function(e){return g.apply(this,arguments)},fetchSearchMovies:function(e){return l.apply(this,arguments)},abortFetch:function(){r&&r.abort()}};t.Z=v}}]);
//# sourceMappingURL=247.b3cf332f.chunk.js.map