"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[875],{6700:function(e,n,t){t.d(n,{Q:function(){return r}});var r={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},6793:function(e,n,t){t.d(n,{Z:function(){return u}});var r,a=t(2007),c=t.n(a),s=t(168),i=t(6444).ZP.p(r||(r=(0,s.Z)(["\n  margin-top: 38px;\n  margin-left: auto;\n  margin-right: auto;\n  color: red;\n  font-size: 24px;\n  font-weight: 700;\n"]))),o=t(184);i.propTypes={msg:c().string};var u=function(e){var n=e.msg;return(0,o.jsx)(i,{children:n||"Something unexpected happed..."})}},8875:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(9439),a=t(7689),c=t(1087),s=t(2791),i=t(184),o=function(e){var n=e.movie,t=n.overview,r=n.title,a=n.genres,c=n.vote_average,s=n.poster_path,o="https://image.tmdb.org/t/p/w342".concat(s);return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:s?(0,i.jsx)("img",{src:o,alt:"film poster"}):(0,i.jsx)("div",{children:"No poster"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:r}),(0,i.jsxs)("p",{children:["User score: ",Math.round(10*c),"%"]}),(0,i.jsx)("h3",{children:"Overview"}),(0,i.jsx)("p",{children:t}),(0,i.jsx)("h3",{children:"Genres"}),(0,i.jsx)("p",{children:a.map((function(e){return e.name})).join(" ")})]})]})},u=t(6793),l=t(587),p=t(171),h=t(6700),d=function(){var e,n,t=(0,s.useState)(null),d=(0,r.Z)(t,2),v=d[0],f=d[1],g=(0,s.useState)(null),x=(0,r.Z)(g,2),w=x[0],m=x[1],j=(0,s.useState)(h.Q.IDLE),E=(0,r.Z)(j,2),b=E[0],Z=E[1],k=(0,a.UO)().id,y=(0,a.TH)(),_=(0,s.useRef)(null!==(e=null===(n=y.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,s.useEffect)((function(){return Z(h.Q.PENDING),p.Z.fetchMovieDetails(k).then((function(e){f(e),Z(h.Q.RESOLVED)})).catch((function(e){m(e),Z(h.Q.REJECTED),f(null)})),function(){p.Z.abortFetch()}}),[k]),(0,i.jsxs)("div",{children:[b===h.Q.REJECTED&&(0,i.jsx)(u.Z,{msg:w.message}),b===h.Q.PENDING&&(0,i.jsx)(l.Z,{}),b===h.Q.RESOLVED&&(0,i.jsxs)("div",{children:[(0,i.jsxs)(c.rU,{to:_.current,children:["\u2190"," Go back"]}),(0,i.jsx)(o,{movie:v}),(0,i.jsx)("h4",{children:"Additional information"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,i.jsx)(s.Suspense,{fallback:(0,i.jsx)(l.Z,{}),children:(0,i.jsx)(a.j3,{})})]})}},171:function(e,n,t){var r,a=t(5861),c=t(7757),s=t.n(c),i=t(1243),o="https://api.themoviedb.org/3/",u="b3cb1db782e55dafd1da39b95bd6f5f2";function l(){return(l=(0,a.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new AbortController,n="".concat(o,"trending/movie/week?api_key=").concat(u,"&page=1&language=en-US"),e.next=5,i.Z.get(n,{signal:r.signal});case 5:return t=e.sent,e.abrupt("return",t.data);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return p=(0,a.Z)(s().mark((function e(n){var t,a,c,l=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>1&&void 0!==l[1]?l[1]:1,e.prev=1,r=new AbortController,a="".concat(o,"/search/movie?api_key=").concat(u,"&language=en-US&page=").concat(t,"&query=").concat(n),e.next=6,i.Z.get(a,{signal:r.signal});case 6:return c=e.sent,e.abrupt("return",c.data);case 10:throw e.prev=10,e.t0=e.catch(1),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),p.apply(this,arguments)}function h(){return(h=(0,a.Z)(s().mark((function e(n){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new AbortController,t="".concat(o,"movie/").concat(n,"?api_key=").concat(u,"&language=en-US"),e.next=5,i.Z.get(t,{signal:r.signal});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(){return(d=(0,a.Z)(s().mark((function e(n){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new AbortController,t="".concat(o,"movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"),e.next=5,i.Z.get(t,{signal:r.signal});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(){return(v=(0,a.Z)(s().mark((function e(n){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new AbortController,t="".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US"),e.next=5,i.Z.get(t,{signal:r.signal});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var f={fetchTrendingMovies:function(){return l.apply(this,arguments)},fetchMovieCast:function(e){return d.apply(this,arguments)},fetchMovieDetails:function(e){return h.apply(this,arguments)},fetchMovieReviews:function(e){return v.apply(this,arguments)},fetchSearchMovies:function(e){return p.apply(this,arguments)},abortFetch:function(){r&&r.abort()}};n.Z=f}}]);
//# sourceMappingURL=875.fa51a7bf.chunk.js.map