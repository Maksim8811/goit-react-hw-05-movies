"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[972],{972:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=n(439),a=n(765),u=n(791),c=n(490),i=n(184),s=function(){var t=(0,u.useState)([]),e=(0,r.Z)(t,2),n=e[0],s=e[1];return(0,u.useEffect)((function(){(0,a.Df)().then(s)}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:"title",children:"Trending today"}),(0,i.jsx)(c.Z,{movies:n})]})}},490:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(689),a=n(87),u=n(184),c=function(t){var e=t.movies,n=(0,r.TH)();return(0,u.jsx)(u.Fragment,{children:e.map((function(t){var e=t.id,r=t.original_title,c=t.name;return(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:n},className:"link",children:r||c})})},e)}))})}},765:function(t,e,n){n.d(e,{Df:function(){return s},IQ:function(){return p},Jh:function(){return f},V0:function(){return d},dV:function(){return o}});var r=n(861),a=n(757),u=n.n(a),c=n(243),i="0374e7ed31d5e8507eaf6ae86e4e0e15",s=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=972.341527e6.chunk.js.map