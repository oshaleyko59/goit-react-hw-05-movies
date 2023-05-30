"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{6700:function(n,e,t){t.d(e,{Q:function(){return r}});var r={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},5743:function(n,e,t){t.d(e,{Fg:function(){return p},gq:function(){return l},ks:function(){return g},tu:function(){return f}});var r,a,o,c,i=t(168),s=t(6444),u=t(1087),p=(0,s.ZP)(u.rU)(r||(r=(0,i.Z)(["\n  color: green;\n\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    color: green;\n  }\n"]))),l=s.ZP.div(a||(a=(0,i.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),f=s.ZP.div(o||(o=(0,i.Z)(["\n  margin: 8px;\n  display: flex;\n  flex-direction: column;\n  border-bottom: solid gray 1px;\n  flex-grow: 2;\n"]))),g=(0,s.ZP)(u.rU)(c||(c=(0,i.Z)(["\n  margin-bottom: 8px;\n  width: 80px;\n  text-decoration: none;\n  padding: 0 4px;\n  color: orangered;\n  border-radius: 4px;\n  border: solid 1px;\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"])))},6793:function(n,e,t){t.d(e,{Z:function(){return u}});var r,a=t(2007),o=t.n(a),c=t(168),i=t(6444).ZP.p(r||(r=(0,c.Z)(["\n  margin-top: 38px;\n  margin-left: auto;\n  margin-right: auto;\n  color: red;\n  font-size: 24px;\n  font-weight: 700;\n"]))),s=t(184);i.propTypes={msg:o().string};var u=function(n){var e=n.msg;return(0,s.jsx)(i,{children:e||"Something unexpected happed..."})}},2676:function(n,e,t){var r=t(7689),a=t(5743),o=t(184);e.Z=function(n){var e=n.movies,t=n.home,c=void 0!==t&&t,i=(0,r.TH)();return(0,o.jsx)("ul",{children:e.map((function(n){var e=n.title,t=n.id;return(0,o.jsx)("li",{children:(0,o.jsxs)(a.Fg,{to:c?"movies/".concat(t):"".concat(t),state:{from:i},children:[e,(0,o.jsx)("br",{})]})},t)}))})}},5415:function(n,e,t){t.r(e);var r=t(9439),a=t(2791),o=t(171),c=t(2676),i=t(6793),s=t(587),u=t(6700),p=t(184);e.default=function(){var n=(0,a.useState)(u.Q.IDLE),e=(0,r.Z)(n,2),t=e[0],l=e[1],f=(0,a.useState)([]),g=(0,r.Z)(f,2),v=g[0],d=g[1],h=(0,a.useState)(null),m=(0,r.Z)(h,2),x=m[0],w=m[1],Z=(0,a.useCallback)((function(){l(u.Q.PENDING),o.Z.fetchTrendingMovies().then((function(n){var e=n.results;d(e),l(u.Q.RESOLVED)})).catch((function(n){w(n),l(u.Q.REJECTED),d([])}))}),[]);return(0,a.useEffect)((function(){return Z(),function(){o.Z.abortFetch()}}),[Z]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Trending today"}),t===u.Q.REJECTED&&(0,p.jsx)(i.Z,{msg:x.message}),t===u.Q.RESOLVED&&(0,p.jsx)(c.Z,{home:!0,movies:v}),t===u.Q.PENDING&&(0,p.jsx)(s.Z,{})]})}},171:function(n,e,t){var r,a=t(5861),o=t(7757),c=t.n(o),i=t(1243),s="https://api.themoviedb.org/3/",u="b3cb1db782e55dafd1da39b95bd6f5f2";function p(){return(p=(0,a.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=new AbortController,e="".concat(s,"trending/movie/week?api_key=").concat(u,"&page=1&language=en-US"),n.next=5,i.Z.get(e,{signal:r.signal});case 5:return t=n.sent,n.abrupt("return",t.data);case 9:throw n.prev=9,n.t0=n.catch(0),new Error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function l(){return l=(0,a.Z)(c().mark((function n(e){var t,a,o,p=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=p.length>1&&void 0!==p[1]?p[1]:1,n.prev=1,r=new AbortController,a="".concat(s,"/search/movie?api_key=").concat(u,"&language=en-US&page=").concat(t,"&query=").concat(e),n.next=6,i.Z.get(a,{signal:r.signal});case 6:return o=n.sent,n.abrupt("return",o.data);case 10:throw n.prev=10,n.t0=n.catch(1),new Error(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[1,10]])}))),l.apply(this,arguments)}function f(){return(f=(0,a.Z)(c().mark((function n(e){var t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=new AbortController,t="".concat(s,"movie/").concat(e,"?api_key=").concat(u,"&language=en-US"),n.next=5,i.Z.get(t,{signal:r.signal});case 5:return a=n.sent,n.abrupt("return",a.data);case 9:throw n.prev=9,n.t0=n.catch(0),new Error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function g(){return(g=(0,a.Z)(c().mark((function n(e){var t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=new AbortController,t="".concat(s,"movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"),n.next=5,i.Z.get(t,{signal:r.signal});case 5:return a=n.sent,n.abrupt("return",a.data);case 9:throw n.prev=9,n.t0=n.catch(0),new Error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function v(){return(v=(0,a.Z)(c().mark((function n(e){var t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=new AbortController,t="".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US"),n.next=5,i.Z.get(t,{signal:r.signal});case 5:return a=n.sent,n.abrupt("return",a.data);case 9:throw n.prev=9,n.t0=n.catch(0),new Error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}var d={fetchTrendingMovies:function(){return p.apply(this,arguments)},fetchMovieCast:function(n){return g.apply(this,arguments)},fetchMovieDetails:function(n){return f.apply(this,arguments)},fetchMovieReviews:function(n){return v.apply(this,arguments)},fetchSearchMovies:function(n){return l.apply(this,arguments)},abortFetch:function(){r&&r.abort()}};e.Z=d}}]);
//# sourceMappingURL=415.4b3deb57.chunk.js.map