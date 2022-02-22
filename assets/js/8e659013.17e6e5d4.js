"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9046],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1459:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="Lab Machines",u={unversionedId:"Contributing/Lab",id:"Contributing/Lab",title:"Lab Machines",description:"Enarx requires specific hardware to run \u2013\xa0and by extension to develop\xa0\u2013 namely a CPU with a supported Trusted Execution Environment.",source:"@site/docs/Contributing/Lab.md",sourceDirName:"Contributing",slug:"/Contributing/Lab",permalink:"/docs/Contributing/Lab",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/Contributing/Lab.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Outreach",permalink:"/docs/Contributing/Outreach"},next:{title:"Introduction",permalink:"/docs/Fellowship/Introduction"}},c=[{value:"Obtaining access",id:"obtaining-access",children:[],level:2},{value:"Using the lab machines",id:"using-the-lab-machines",children:[{value:"Connecting to the machines",id:"connecting-to-the-machines",children:[],level:3},{value:"Adding software packages",id:"adding-software-packages",children:[],level:3},{value:"Report issues",id:"report-issues",children:[],level:3},{value:"Installing Rust",id:"installing-rust",children:[],level:3},{value:"Maintaining long-running sessions",id:"maintaining-long-running-sessions",children:[],level:3}],level:2}],p={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lab-machines"},"Lab Machines"),(0,i.kt)("p",null,"Enarx requires specific hardware to run \u2013\xa0and by extension to develop\xa0\u2013 namely a CPU with a supported Trusted Execution Environment."),(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://packet.com"},"Packet.com"),", we have some lab machines available, with direct hardware access (bare metal). These machines are open to the community to work on."),(0,i.kt)("p",null,"This document explains the rules regarding these machines as well as how to access them and use them."),(0,i.kt)("h2",{id:"obtaining-access"},"Obtaining access"),(0,i.kt)("p",null,"Access to the Enarx Lab machines is relatively open, and the machines are intended to be used by the community. We do expect you to have started contributing to the project and to know you a minimum first, so please join the ",(0,i.kt)("a",{parentName:"p",href:"https://chat.enarx.dev"},"chat")," if you haven't already done so."),(0,i.kt)("p",null,"If you would like access to the Enarx infrastructure, please add yourself to both ",(0,i.kt)("inlineCode",{parentName:"p"},"users.conf")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sshkeys.conf")," at GitLab by doing a merge request:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/enarx/lab"},"https://gitlab.com/enarx/lab")),(0,i.kt)("p",null,"Once the lab machines have been rebooted to pick up the changes, you can log into them using ssh with your ssh key. "),(0,i.kt)("p",null,"You must follow the rules laid out in the kickstart file, reproduced below for clarity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"## Interactive User Policy\n## 1. User names MUST match GitHub/GitLab accounts\n## 2. Users MUST be locked\n## 3. Users MUST define an ssh key\n")),(0,i.kt)("p",null,"Don't forget to also pick a user and group ID (uid, gid). Use the next available number, by looking at the currently used ones."),(0,i.kt)("p",null,"Regarding SSH\xa0keys, please try to stick to something modern."),(0,i.kt)("h2",{id:"using-the-lab-machines"},"Using the lab machines"),(0,i.kt)("p",null,"We currently have two lab machines:"),(0,i.kt)("p",null,"An AMD SEV box, at milan.sev.lab.enarx.dev."),(0,i.kt)("p",null,"An Intel SGX2 box, at icelake.sgx.lab.enarx.dev."),(0,i.kt)("h3",{id:"connecting-to-the-machines"},"Connecting to the machines"),(0,i.kt)("p",null,"Once your user has been created and SSH\xa0key authorized, you can connect using SSH:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ssh my-github-username@milan.sev.lab.enarx.dev\n")),(0,i.kt)("h3",{id:"adding-software-packages"},"Adding software packages"),(0,i.kt)("p",null,"If you need to change the enarx infrastructure, please file a Merge Request\nagainst the appropriate container. Once your merge request is merged,\nwe will reboot the lab systems to pick up the new settings."),(0,i.kt)("h3",{id:"report-issues"},"Report issues"),(0,i.kt)("p",null,"If you found an issue with our Lab machines, please file it on GitLab. If you have a proposed solution, please file a merge request on GitLab."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/enarx/lab/-/issues"},"File issue for Lab machines")," "),(0,i.kt)("h3",{id:"installing-rust"},"Installing Rust"),(0,i.kt)("p",null,"Given Enarx is written in Rust, you will want to install Rust and Cargo, its package manager."),(0,i.kt)("p",null,"To do so, follow the instructions in ",(0,i.kt)("a",{parentName:"p",href:"Code#rust"},"How to contribute code")," and install Rust to your home directory via rustup.rs."),(0,i.kt)("h3",{id:"maintaining-long-running-sessions"},"Maintaining long-running sessions"),(0,i.kt)("p",null,"The lab machines have ",(0,i.kt)("inlineCode",{parentName:"p"},"tmux")," installed, which will enable you to leave things running (such as compilation jobs).  "),(0,i.kt)("p",null,"If you are new to tmux, this ",(0,i.kt)("a",{parentName:"p",href:"https://thoughtbot.com/blog/a-tmux-crash-course"},"crash course")," and ",(0,i.kt)("a",{parentName:"p",href:"https://thevaluable.dev/tmux-boost-productivity-terminal/"},"detailed walkthrough")," of a possible Tmux workflow may come in handy."))}h.isMDXComponent=!0}}]);