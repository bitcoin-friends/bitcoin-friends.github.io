import{S as b,c as k,s as L,F as h,G as g,H as d,u as w,t as v,I as q,K as H,L as M,j as u,g as c,e as p,C,d as _,f as j,D as E,O as $,P as m,n as R,Q as O}from"../../chunks/index-732b226b.js";import{C as S,R as T,a as I}from"../../chunks/Row-78a3ff57.js";import{t as y}from"../../chunks/index-9979a26e.js";function A(o){return o<.5?8*Math.pow(o,4):-8*Math.pow(o-1,4)+1}const D=""+new URL("../../assets/shitcoin-2d3afe32.png",import.meta.url).href;function F(o){let e,a,t,r,s,n,f;return{c(){e=p("h1"),a=C("There is nothing here..."),t=H(),r=p("h3"),s=C("Go back "),n=p("a"),f=C("home"),this.h()},l(l){e=_(l,"H1",{class:!0});var i=j(e);a=E(i,"There is nothing here..."),i.forEach(c),t=M(l),r=_(l,"H3",{class:!0});var x=j(r);s=E(x,"Go back "),n=_(x,"A",{href:!0});var G=j(n);f=E(G,"home"),G.forEach(c),x.forEach(c),this.h()},h(){$(e,"class","svelte-1qiqhsj"),$(n,"href","/"),$(r,"class","svelte-1qiqhsj")},m(l,i){u(l,e,i),m(e,a),u(l,t,i),u(l,r,i),m(r,s),m(r,n),m(n,f)},p:R,d(l){l&&c(e),l&&c(t),l&&c(r)}}}function K(o){let e,a;return{c(){e=p("img"),this.h()},l(t){e=_(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){O(e.src,a=D)||$(e,"src",a),$(e,"alt","Nothing here"),$(e,"class","shitcoin svelte-1qiqhsj")},m(t,r){u(t,e,r)},p:R,d(t){t&&c(e)}}}function N(o){let e,a,t,r;return e=new I({props:{md:"12",class:"text-center mt-5",$$slots:{default:[F]},$$scope:{ctx:o}}}),t=new I({props:{md:"12",class:"text-center mt-5",$$slots:{default:[K]},$$scope:{ctx:o}}}),{c(){h(e.$$.fragment),a=H(),h(t.$$.fragment)},l(s){g(e.$$.fragment,s),a=M(s),g(t.$$.fragment,s)},m(s,n){d(e,s,n),u(s,a,n),d(t,s,n),r=!0},p(s,n){const f={};n&8&&(f.$$scope={dirty:n,ctx:s}),e.$set(f);const l={};n&8&&(l.$$scope={dirty:n,ctx:s}),t.$set(l)},i(s){r||(w(e.$$.fragment,s),w(t.$$.fragment,s),r=!0)},o(s){v(e.$$.fragment,s),v(t.$$.fragment,s),r=!1},d(s){q(e,s),s&&c(a),q(t,s)}}}function P(o){let e,a;return e=new T({props:{style:"margin-top: 10px;",$$slots:{default:[N]},$$scope:{ctx:o}}}),{c(){h(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){d(e,t,r),a=!0},p(t,r){const s={};r&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){a||(w(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function Q(o){let e,a;return e=new S({props:{$$slots:{default:[P]},$$scope:{ctx:o}}}),{c(){h(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){d(e,t,r),a=!0},p(t,[r]){const s={};r&8&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){a||(w(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){q(e,t)}}}function U(o){return y(20,{duration:400,easing:A}),[]}class V extends b{constructor(e){super(),k(this,e,U,Q,L,{})}}export{V as default};
