import{d as e,c as p}from"./Row.d3206988.js";import{S as g,i as y,s as L,G as u,k as _,l as k,m as b,h,J as m,b as w,O as I,W as f,E as d,H as v}from"./index.3571f21b.js";function E(s){return s.style.display="block",{duration:e(s),tick:a=>{a===0&&s.classList.add("show")}}}function H(s){return s.classList.remove("show"),{duration:e(s),tick:a=>{a===0&&(s.style.display="none")}}}function S(s,t){const a=t.horizontal?"width":"height";return s.style[a]=`${s.getBoundingClientRect()[a]}px`,s.classList.add("collapsing"),s.classList.remove("collapse","show"),{duration:e(s),tick:i=>{i>0?s.style[a]="":i===0&&(s.classList.remove("collapsing"),s.classList.add("collapse"))}}}function W(s,t){const a=t.horizontal,l=a?"width":"height";return s.classList.add("collapsing"),s.classList.remove("collapse","show"),s.style[l]=0,{duration:e(s),tick:c=>{c<1?a?s.style.width=`${s.scrollWidth}px`:s.style.height=`${s.scrollHeight}px`:(s.classList.remove("collapsing"),s.classList.add("collapse","show"),s.style[l]="")}}}function q(s){return s.style.display="block",{duration:e(s),tick:a=>{a>0&&s.classList.add("show")}}}function B(s){return s.classList.remove("show"),{duration:e(s),tick:a=>{a===1&&(s.style.display="none")}}}function x(s){let t,a=[s[1],{class:s[0]}],l={};for(let i=0;i<a.length;i+=1)l=u(l,a[i]);return{c(){t=_("i"),this.h()},l(i){t=k(i,"I",{class:!0}),b(t).forEach(h),this.h()},h(){m(t,l)},m(i,c){w(i,t,c)},p(i,[c]){m(t,l=I(a,[c&2&&i[1],c&1&&{class:i[0]}]))},i:f,o:f,d(i){i&&h(t)}}}function O(s,t,a){let l;const i=["class","name"];let c=d(t,i),{class:o=""}=t,{name:r=""}=t;return s.$$set=n=>{t=u(u({},t),v(n)),a(1,c=d(t,i)),"class"in n&&a(2,o=n.class),"name"in n&&a(3,r=n.name)},s.$$.update=()=>{s.$$.dirty&12&&a(0,l=p(o,`bi-${r}`))},[l,c,o,r]}class D extends g{constructor(t){super(),y(this,t,O,x,L,{class:2,name:3})}}export{D as I,S as a,E as b,W as c,H as d,B as e,q as m};
