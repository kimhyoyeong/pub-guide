(function(){"use strict";var e={3886:function(e,t,n){var a=n(5130),r=n(8363),u=n(1387),l=n(6768),o=n.p+"img/signon.c1d2dcb3.svg",i=n(782);const s={class:"q-pa-md items-start"},c=(0,l.Lk)("div",{class:"column items-center"},[(0,l.Lk)("img",{src:o,alt:"CONCENTRIX",style:{width:"300px"}}),(0,l.Lk)("div",{class:"text-h2 q-pb-md"},"콘센트릭스 웹접근성 가이드")],-1),d=(0,l.Lk)("h3",{class:"text-h3 q-mb-none"},"인증 프로세스",-1),f=(0,l.Lk)("h4",{class:"text-h4"},"갱신시",-1),p=(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,"1년 주기로 웹접근성 인증 갱신"),(0,l.Lk)("li",null," 1차 심사 결과서 받은 후 수정 기간 평균 7일 정도 소요 예정 (심사 보고서 수정 기준 개발 및 타 채널 수정건 있을 경우 일정 확인 필요) "),(0,l.Lk)("li",null," 1차 심사 결과서 전체 검토 및 담당자 분류 하여 CTTD & 개발팀에 수정 가이드 전달 "),(0,l.Lk)("li",null,"최종 합격 하여 인증서 취득 후 푸터의 인증 마크 교체 작업 진행")],-1),m=(0,l.Lk)("h4",{class:"text-h4"},"신규 심사시",-1),b=(0,l.Lk)("ul",null,[(0,l.Lk)("li",null," 자가 진단 도구를 활용하여 사전 점검 및 오류사항 수정 후, 웹접근성 인증 심사 신청 필요 ")],-1),g=(0,l.Lk)("h3",{class:"text-h3 q-mb-none"},"참조 문서",-1),v=(0,l.Lk)("a",{href:"https://www.wa.or.kr/board/view.asp?sn=22592&page=1&search=&SearchString=&BoardID=0004&cate=",target:"_blank"}," 한국형 웹 콘텐츠 접근성 지침 2.2",-1),h=(0,l.Lk)("h3",{class:"text-h3 q-mb-none"},"자가진단 도구",-1),k=(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,"크롬 확장프로그램"),(0,l.Lk)("li",null,"명도 대비 검사"),(0,l.Lk)("li",null,"마크업 오류 검사"),(0,l.Lk)("li",null,"내레이터 (윈도우 스크린리더)")],-1);var y={__name:"index",setup(e){const t=(0,i.Pj)(),n=[{label:"인증 프로세스",id:"index1-1"},{label:"참고 문서",id:"index1-2"},{label:"자가진단 도구",id:"index1-3"}];return t.commit("setSideMenuItems",n),(e,t)=>{const n=(0,l.g2)("q-card"),a=(0,l.g2)("q-card-section"),r=(0,l.g2)("q-separator");return(0,l.uX)(),(0,l.CE)("div",s,[(0,l.bF)(n,{flat:"",bordered:"",class:"my-card q-mt-md q-pa-md"},{default:(0,l.k6)((()=>[c])),_:1}),(0,l.bF)(n,{id:"index1-1",flat:"",class:"my-card q-mt-md"},{default:(0,l.k6)((()=>[(0,l.bF)(a,null,{default:(0,l.k6)((()=>[d])),_:1}),(0,l.bF)(a,{class:"q-pt-none"},{default:(0,l.k6)((()=>[f,p])),_:1}),(0,l.bF)(r,{inset:""}),(0,l.bF)(a,null,{default:(0,l.k6)((()=>[m,b])),_:1})])),_:1}),(0,l.bF)(n,{id:"index1-2",flat:"",class:"my-card q-mt-md"},{default:(0,l.k6)((()=>[(0,l.bF)(a,null,{default:(0,l.k6)((()=>[g])),_:1}),(0,l.bF)(a,{class:"q-pt-none"},{default:(0,l.k6)((()=>[v])),_:1})])),_:1}),(0,l.bF)(n,{id:"index1-3",flat:"",class:"my-card q-mt-md"},{default:(0,l.k6)((()=>[(0,l.bF)(a,null,{default:(0,l.k6)((()=>[h])),_:1}),(0,l.bF)(a,{class:"q-pt-none"},{default:(0,l.k6)((()=>[k])),_:1})])),_:1})])}}};const q=y;var _=q;const x=[{path:"/",name:"index",component:_,props:I},{path:"/page1",name:"page1",component:()=>n.e(735).then(n.bind(n,3735)),props:I},{path:"/page2",name:"page2",component:()=>n.e(85).then(n.bind(n,8085)),props:I},{path:"/page3",name:"page3",component:()=>n.e(490).then(n.bind(n,5490)),props:I}],w=(0,u.aE)({history:(0,u.LA)("/pub-guide/"),routes:x});function I(e){return{activeIndex:parseInt(e.query.activeIndex)||0}}var F=w,L=(n(4114),n(4232));const C=["onClick"],O=(0,l.Lk)("img",{src:o,alt:"CONCENTRIX"},null,-1),E={name:"SideMenu"};var j=Object.assign(E,{props:{menuItems:{type:Array,required:!0},activeIndex:{type:Number,required:!0}},setup(e){const t=(0,u.rd)(),n=e;function r(e,n){const a=document.getElementById(e.id),r=document.querySelector(".q-header");a&&(window.scrollTo({top:a.offsetTop-r.offsetHeight,behavior:"smooth"}),t.push({query:{activeIndex:n}}))}return(e,t)=>{const u=(0,l.g2)("q-item-section"),o=(0,l.g2)("q-item"),i=(0,l.g2)("q-separator"),s=(0,l.g2)("q-avatar"),c=(0,l.g2)("q-list"),d=(0,l.g2)("q-scroll-area"),f=(0,l.g2)("q-drawer");return(0,l.uX)(),(0,l.Wv)(f,{persistent:"",bordered:"",class:"bg-grey-1",width:240},{default:(0,l.k6)((()=>[(0,l.bF)(d,{class:"fit"},{default:(0,l.k6)((()=>[(0,l.bF)(c,{padding:""},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.menuItems,((e,t)=>((0,l.uX)(),(0,l.Wv)(o,{key:t},{default:(0,l.k6)((()=>[(0,l.bF)(u,null,{default:(0,l.k6)((()=>[(0,l.Lk)("button",{type:"button",onClick:(0,a.D$)((n=>r(e,t)),["prevent"]),class:(0,L.C4)(["q-item__btn",{active:t===n.activeIndex}])},(0,L.v_)(e.label),11,C)])),_:2},1024)])),_:2},1024)))),128)),(0,l.bF)(i,{class:"q-mt-md q-mb-xs"}),(0,l.bF)(o,{class:"justify-center"},{default:(0,l.k6)((()=>[(0,l.bF)(s,null,{default:(0,l.k6)((()=>[O])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}});const T=j;var P=T,M={__name:"App",setup(e){const t=(0,u.rd)(),n=(0,i.Pj)(),a=(0,l.EW)((()=>n.state.pages)),r=(0,l.EW)((()=>n.state.activeIndex)),o=(0,l.EW)((()=>n.state.leftDrawerOpen));(0,l.wB)((()=>t.currentRoute.value.query.activeIndex),(e=>{n.commit("setActiveIndex",e?parseInt(e):0)})),(0,l.sV)((()=>{console.log("컴포넌트가 마운트되었습니다.")}));const s=(0,l.EW)((()=>{const e=a.value.find((e=>e.path===t.currentRoute.value.path));return n.commit("setCurrentPage",t.currentRoute.value.path),e?.sideMenuItems||[]}));function c(){n.commit("toggleLeftDrawer")}function d(){window.scrollTo(0,0),n.commit("closeLeftDrawer")}return(e,t)=>{const n=(0,l.g2)("q-btn"),u=(0,l.g2)("router-link"),i=(0,l.g2)("q-toolbar-title"),f=(0,l.g2)("q-toolbar"),p=(0,l.g2)("q-route-tab"),m=(0,l.g2)("q-tabs"),b=(0,l.g2)("q-header"),g=(0,l.g2)("router-view"),v=(0,l.g2)("q-page-container"),h=(0,l.g2)("q-layout");return(0,l.uX)(),(0,l.Wv)(h,{view:"hHh lpR lFf",class:"inner-wrap"},{default:(0,l.k6)((()=>[(0,l.bF)(b,{bordered:"",class:"text-white","height-hint":"98"},{default:(0,l.k6)((()=>[(0,l.bF)(f,null,{default:(0,l.k6)((()=>[(0,l.bF)(n,{dense:"",flat:"",round:"",icon:"menu",onClick:c}),(0,l.bF)(i,null,{default:(0,l.k6)((()=>[(0,l.bF)(u,{to:"/"},{default:(0,l.k6)((()=>[(0,l.eW)("웹접근성 가이드 v1")])),_:1})])),_:1})])),_:1}),(0,l.bF)(m,{align:"left"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.value,(e=>((0,l.uX)(),(0,l.Wv)(p,{key:e.path,to:e.path,label:e.label,onClick:d},null,8,["to","label"])))),128))])),_:1})])),_:1}),(0,l.bF)(P,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e),menuItems:s.value,activeIndex:r.value},null,8,["modelValue","menuItems","activeIndex"]),(0,l.bF)(v,null,{default:(0,l.k6)((()=>[(0,l.bF)(g)])),_:1})])),_:1})}}};const A=M;var S=A;const D=(0,i.y$)({state(){return{leftDrawerOpen:!0,activeIndex:0,currentPage:"/",pages:[{path:"/",label:"소개",sideMenuItems:[]},{path:"/page1",label:"인식의 용이성",sideMenuItems:[]},{path:"/page2",label:"운용의 용이성",sideMenuItems:[]},{path:"/page3",label:"이해의 용이성",sideMenuItems:[]}]}},mutations:{toggleLeftDrawer(e){e.leftDrawerOpen=!e.leftDrawerOpen},setActiveIndex(e,t){e.activeIndex=t},setSideMenuItems(e,t){const n=e.pages.find((t=>t.path===e.currentPage));n&&(n.sideMenuItems=t)},setCurrentPage(e,t){e.currentPage=t}},actions:{setQueryActiveIndex({commit:e},t){const n=t?parseInt(t):0;e("setActiveIndex",n)}}});var W=D;const X=(0,a.Ef)(S);X.use(r.y87,{plugins:{}}),X.use(W),X.use(F),X.mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var u=t[a]={exports:{}};return e[a].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,u){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],u=e[c][2];for(var o=!0,i=0;i<a.length;i++)(!1&u||l>=u)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(o=!1,u<l&&(l=u));if(o){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[a,r,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{85:"7c6acfab",490:"7722d5e0",735:"aeff0c21"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="pub-guide:";n.l=function(a,r,u,l){if(e[a])e[a].push(r);else{var o,i;if(void 0!==u)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+u){o=d;break}}o||(i=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",t+u),o.src=a),e[a]=[r];var f=function(t,n){o.onerror=o.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),i&&document.head.appendChild(o)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/pub-guide/"}(),function(){var e={524:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var u=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=u);var l=n.p+n.u(t),o=new Error,i=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var u=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+u+": "+l+")",o.name="ChunkLoadError",o.type=u,o.request=l,r[1](o)}};n.l(l,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,u,l=a[0],o=a[1],i=a[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(i)var c=i(n)}for(t&&t(a);s<l.length;s++)u=l[s],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(c)},a=self["webpackChunkpub_guide"]=self["webpackChunkpub_guide"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(3886)}));a=n.O(a)})();
//# sourceMappingURL=app.319f5c8b.js.map