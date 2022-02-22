"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1580],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,m=h["".concat(o,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1166:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],c={title:"2021-11-09 Outreach Meeting",authors:["enarx"],tags:["Meeting"]},o="Present",s={permalink:"/resources/2021/11/09/outreach-meeting",source:"@site/resources/2021-11-09-outreach-meeting.md",title:"2021-11-09 Outreach Meeting",description:"* Mike",date:"2021-11-09T00:00:00.000Z",formattedDate:"November 9, 2021",tags:[{label:"Meeting",permalink:"/resources/tags/meeting"}],truncated:!1,authors:[{name:"Enarx",imageURL:"https://github.com/enarxbot.png",key:"enarx"}],frontMatter:{title:"2021-11-09 Outreach Meeting",authors:["enarx"],tags:["Meeting"]},prevItem:{title:"Confidential Computing: logging and debugging",permalink:"/resources/2021-11-16-logging-debugging"},nextItem:{title:"Enarx First Release",permalink:"/resources/2021-11-02-enarx-first-release"}},u={authorsImageUrls:[void 0]},p=[{value:"General discussion",id:"general-discussion",children:[{value:"New Enarx.dev Website",id:"new-enarxdev-website",children:[],level:3},{value:"Outreachy",id:"outreachy",children:[],level:3}],level:2},{value:"Events",id:"events",children:[{value:"Cloud Security Alliance",id:"cloud-security-alliance",children:[],level:3},{value:"RSA-C NA 2022",id:"rsa-c-na-2022",children:[],level:3},{value:"OC3",id:"oc3",children:[],level:3},{value:"FOSDEM",id:"fosdem",children:[],level:3},{value:"Privacy-Enhancing Technology Summit Europe",id:"privacy-enhancing-technology-summit-europe",children:[],level:3},{value:"Privacy-Enhancing Technology Summit USA",id:"privacy-enhancing-technology-summit-usa",children:[],level:3}],level:2}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mike"),(0,i.kt)("li",{parentName:"ul"},"Nick")),(0,i.kt)("h1",{id:"agenda"},"Agenda"),(0,i.kt)("h2",{id:"general-discussion"},"General discussion"),(0,i.kt)("h3",{id:"new-enarxdev-website"},"New Enarx.dev Website"),(0,i.kt)("p",null,"Enarx's new website continues evolving. We added a Resources section, where users can filter for different resources: articles, blog posts, events, meetings, podcasts, and releases. The homepage now highlights Docs, Resources, GitHub, Meetings, Events, and Chat. The documentation has been updated and there were various fixes. Next steps include implementing search and developing a better deployment workflow."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://enarx.dev/"},"https://enarx.dev/")),(0,i.kt)("h3",{id:"outreachy"},"Outreachy"),(0,i.kt)("p",null,"The Enarx project received 10 Outreachy applicants, of which 9 were able to successfully complete the first task this past month. Looking at the work developed by these 9 applicants, we are considering 3 strong candidates for an internship. The WebAssembly tutorials developed by these applicants are available at:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/outreachy"},"https://github.com/enarx/outreachy")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"Mike and Nick discussed several upcoming events:"),(0,i.kt)("h3",{id:"cloud-security-alliance"},"Cloud Security Alliance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rolling CFP till 2021-12-31"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cvent.com/c/abstracts/6e04faab-fd38-4df4-b2a3-2e2780b7c24b"},"https://www.cvent.com/c/abstracts/6e04faab-fd38-4df4-b2a3-2e2780b7c24b"))),(0,i.kt)("h3",{id:"rsa-c-na-2022"},"RSA-C NA 2022"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dates: 2022-02-07"),(0,i.kt)("li",{parentName:"ul"},"Proposal submitted.")),(0,i.kt)("h3",{id:"oc3"},"OC3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dates: 2022-02-17"),(0,i.kt)("li",{parentName:"ul"},"CFP deadline: 2021-12-07"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.oc3.dev/"},"https://www.oc3.dev/"))),(0,i.kt)("h3",{id:"fosdem"},"FOSDEM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dates: 2022-02-05 - 2022-02-06"),(0,i.kt)("li",{parentName:"ul"},"CFP deadline: 2021-11-30"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://fosdem.org/2022/"},"https://fosdem.org/2022/"))),(0,i.kt)("h3",{id:"privacy-enhancing-technology-summit-europe"},"Privacy-Enhancing Technology Summit Europe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dates: 2022-04-05 to 2022-04-06"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.kisacoresearch.com/events/privacy-enhancing-technology-summit-europe"},"https://www.kisacoresearch.com/events/privacy-enhancing-technology-summit-europe"))),(0,i.kt)("h3",{id:"privacy-enhancing-technology-summit-usa"},"Privacy-Enhancing Technology Summit USA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dates: 2022-05-17 to 2022-05-19"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.kisacoresearch.com/events/privacy-enhancing-tech-summit-usa"},"https://www.kisacoresearch.com/events/privacy-enhancing-tech-summit-usa"))))}d.isMDXComponent=!0}}]);