"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2432],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1072:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={slug:"2019-12-01-current-trusted-execution-environment-landscape",title:"Current Trusted Execution Environment landscape",authors:["axel","lily"],tags:["Red Hat's Blog"]},u=void 0,c={permalink:"/resources/2019-12-01-current-trusted-execution-environment-landscape",source:"@site/resources/2019-12-01-current-trusted-execution-environment-landscape.md",title:"Current Trusted Execution Environment landscape",description:"If you run software on someone\u2019s servers, you have a problem. You can\u2019t be sure your data and code aren\u2019t being observed, or worse, tampered with \u2014 trust is your only assurance. But there is hope, in the form of Trusted Execution Environments (TEEs) and a new open source project, Enarx, that will make use of TEEs to minimize the trust you need to confidently run on other people\u2019s hardware. This article delves into this problem, how TEE\u2019s work and their limitations, providing a TEE primer of sorts, and explaining how Enarx aims to work around these limitations. It is the next in a series that started with Trust No One, Run Everywhere\u2013Introducing Enarx.",date:"2019-12-01T00:00:00.000Z",formattedDate:"December 1, 2019",tags:[{label:"Red Hat's Blog",permalink:"/resources/tags/red-hats-blog"}],truncated:!1,authors:[{name:"Axel Simon",title:"Security Team",url:"https://github.com/axelsimon",imageURL:"https://github.com/axelsimon.png",key:"axel"},{name:"Lily Sturmann",title:"Software Engineer",url:"https://github.com/lkatalin",imageURL:"https://github.com/lkatalin.png",key:"lily"}],frontMatter:{slug:"2019-12-01-current-trusted-execution-environment-landscape",title:"Current Trusted Execution Environment landscape",authors:["axel","lily"],tags:["Red Hat's Blog"]},prevItem:{title:"Protecting data on public clouds and edges with confidential computing",permalink:"/resources/2019-12-30-protecting-data-on-public-clouds-and-edges-with-confidential-computing"},nextItem:{title:"Enarx goes multi-platform",permalink:"/resources/2019-10-28-enarx-goes-multi-platform"}},l={authorsImageUrls:[void 0,void 0]},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you run software on someone\u2019s servers, you have a problem. You can\u2019t be sure your data and code aren\u2019t being observed, or worse, tampered with \u2014 trust is your only assurance. But there is hope, in the form of Trusted Execution Environments (TEEs) and a new open source project, Enarx, that will make use of TEEs to minimize the trust you need to confidently run on other people\u2019s hardware. This article delves into this problem, how TEE\u2019s work and their limitations, providing a TEE primer of sorts, and explaining how Enarx aims to work around these limitations. It is the next in a series that started with Trust No One, Run Everywhere\u2013Introducing Enarx."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Source"),": Red Hat Emerging Technologies"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Link"),": ",(0,a.kt)("a",{parentName:"p",href:"https://next.redhat.com/2019/12/02/current-trusted-execution-environment-landscape/"},"https://next.redhat.com/2019/12/02/current-trusted-execution-environment-landscape/")))}d.isMDXComponent=!0}}]);