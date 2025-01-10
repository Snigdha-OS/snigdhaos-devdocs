(()=>{"use strict";var e,t,r,a,o,n={},d={};function i(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,i.c=d,e=[],i.O=(t,r,a,o)=>{if(!r){var n=1/0;for(b=0;b<e.length;b++){r=e[b][0],a=e[b][1],o=e[b][2];for(var d=!0,c=0;c<r.length;c++)(!1&o||n>=o)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(d=!1,o<n&&(n=o));if(d){e.splice(b--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[r,a,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var d=2&a&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,i.d(o,n),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({48:"a94703ab",61:"1f391b9e",98:"a7bd4aaa",134:"393be207",235:"a7456010",286:"d5b4dd46",290:"9ebe7f9d",329:"710ed340",333:"830dd733",401:"17896441",647:"5e95c892",742:"aba21aa0",969:"14eb3368"}[e]||e)+"."+{48:"d2e952eb",61:"3efa138c",98:"58a90176",134:"67dff73b",142:"7146d7d4",235:"09671796",286:"bd94d774",290:"e0a5f182",329:"46486375",333:"cf1e485b",401:"ad468d8d",422:"34139c6e",647:"6aff1f38",742:"81bd4de8",969:"ab4d5ad4"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="dev-contrib:",i.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var d,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),b=0;b<u.length;b++){var f=u[b];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==o+r){d=f;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",o+r),d.src=e),a[e]=[t];var l=(t,r)=>{d.onerror=d.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),c&&document.head.appendChild(d)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/snigdhaos-devdocs/ta/",i.gca=function(e){return e={17896441:"401",a94703ab:"48","1f391b9e":"61",a7bd4aaa:"98","393be207":"134",a7456010:"235",d5b4dd46:"286","9ebe7f9d":"290","710ed340":"329","830dd733":"333","5e95c892":"647",aba21aa0:"742","14eb3368":"969"}[e]||e,i.p+i.u(e)},(()=>{var e={354:0,869:0};i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=i.p+i.u(t),d=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,a[1](d)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],d=r[1],c=r[2],u=0;if(n.some((t=>0!==e[t]))){for(a in d)i.o(d,a)&&(i.m[a]=d[a]);if(c)var b=c(i)}for(t&&t(r);u<n.length;u++)o=n[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(b)},r=self.webpackChunkdev_contrib=self.webpackChunkdev_contrib||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();