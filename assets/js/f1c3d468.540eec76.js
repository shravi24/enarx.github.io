"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1821],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8892:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return l},toc:function(){return p},default:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={title:"2021-10-26 Outreach Meeting",authors:["enarx"],tags:["Meeting"]},s="Present",c={permalink:"/resources/2021/10/26/outreach-meeting",source:"@site/resources/2021-10-26-outreach-meeting.md",title:"2021-10-26 Outreach Meeting",description:"* Nick",date:"2021-10-26T00:00:00.000Z",formattedDate:"October 26, 2021",tags:[{label:"Meeting",permalink:"/resources/tags/meeting"}],truncated:!1,authors:[{name:"Enarx",imageURL:"https://github.com/enarxbot.png",key:"enarx"}],frontMatter:{title:"2021-10-26 Outreach Meeting",authors:["enarx"],tags:["Meeting"]},prevItem:{title:"Alamo: First Release",permalink:"/resources/2021-10-26-alamo-first-release"},nextItem:{title:"2021-10-12 Outreach Meeting",permalink:"/resources/2021/10/12/outreach-meeting"}},l={authorsImageUrls:[void 0]},p=[{value:"General discussion",id:"general-discussion",children:[{value:"New Enarx.dev Website",id:"new-enarxdev-website",children:[],level:3},{value:"Outreachy",id:"outreachy",children:[],level:3}],level:2},{value:"Events",id:"events",children:[{value:"Cloud Security Alliance",id:"cloud-security-alliance",children:[],level:3}],level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nick"),(0,o.kt)("li",{parentName:"ul"},"Penglin"),(0,o.kt)("li",{parentName:"ul"},"Shaun")),(0,o.kt)("h1",{id:"agenda"},"Agenda"),(0,o.kt)("h2",{id:"general-discussion"},"General discussion"),(0,o.kt)("h3",{id:"new-enarxdev-website"},"New Enarx.dev Website"),(0,o.kt)("p",null,"Nick introduced Enarx's new website with a focus on documentation."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://enarx.dev/"},"https://enarx.dev/")),(0,o.kt)("p",null,"The website uses Docusaurus with support for markdown, versioning, and i18n. It provides a single-page application, leveraging the full power of React:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"https://docusaurus.io/")),(0,o.kt)("h3",{id:"outreachy"},"Outreachy"),(0,o.kt)("p",null,'Nick gave an update on the Outreachy program. After a brief introduction to Confidential Computing and Enarx, the focus has been on understanding WebAssembly and building the first demos. Applicants developed some examples of running WebAssembly "inside" the browser and "outside." The reason is because when starting out with WebAssembly, it\'s not obvious that you can have it run standalone. Most examples (in the Internet) in fact target the browser. There are also examples of embedding into other programming languages. Some applicants had to redo their work, so that took some time.'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/enarx/outreach/issues/15"},"https://github.com/enarx/outreach/issues/15")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.outreachy.org/"},"https://www.outreachy.org/")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("h3",{id:"cloud-security-alliance"},"Cloud Security Alliance"),(0,o.kt)("p",null,"Rolling CFP till 2021-December-31. Let's create a proposal in October/November."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cvent.com/c/abstracts/6e04faab-fd38-4df4-b2a3-2e2780b7c24b"},"https://www.cvent.com/c/abstracts/6e04faab-fd38-4df4-b2a3-2e2780b7c24b")))}h.isMDXComponent=!0}}]);