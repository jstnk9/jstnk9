"use strict";(self.webpackChunkjstnk=self.webpackChunkjstnk||[]).push([[1565],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3996:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={slug:"GobRAT-Malware",title:"Dissecting GobRAT behaviors - Linux malware",authors:"joseliyo",tags:["threat hunting","detection","analysis","research","GobRAT","malware","sigma"]},l=void 0,c={permalink:"/jstnk9/research/GobRAT-Malware",source:"@site/research/2023-05-30-GobRAT-Linux-Malware/2023-05-30-GobRAT-Linux-Malware.md",title:"Dissecting GobRAT behaviors - Linux malware",description:"Summary",date:"2023-05-30T00:00:00.000Z",formattedDate:"May 30, 2023",tags:[{label:"threat hunting",permalink:"/jstnk9/research/tags/threat-hunting"},{label:"detection",permalink:"/jstnk9/research/tags/detection"},{label:"analysis",permalink:"/jstnk9/research/tags/analysis"},{label:"research",permalink:"/jstnk9/research/tags/research"},{label:"GobRAT",permalink:"/jstnk9/research/tags/gob-rat"},{label:"malware",permalink:"/jstnk9/research/tags/malware"},{label:"sigma",permalink:"/jstnk9/research/tags/sigma"}],readingTime:19.02,truncated:!0,authors:[{name:"Jose Luis S\xe1nchez Mart\xednez",title:"Security Researcher",url:"https://twitter.com/Joseliyo_Jstnk",imageURL:"https://jstnk9.github.io/jstnk9/img/profiles/1574890680450.jpeg",key:"joseliyo"}],prevItem:{title:"Malicious document identified in the conflict Israel & Gaza themed about terrorist organizations related to Iran",permalink:"/jstnk9/research/Malicious-Iran-Document-APT"},nextItem:{title:"Analyzing AsyncRAT distributed in Colombia by Blind Eagle",permalink:"/jstnk9/research/AsyncRAT-Analysis"}},u={authorsImageUrls:[void 0]},m=[{value:"Summary",id:"summary",children:[],level:2}],p={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blogs.jpcert.or.jp/en/2023/05/gobrat.html"},"JPCERT/CC discovered")," recently attacks that infected routers in Japan with malware around February 2023."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://jstnk9.github.io/jstnk9/img/research-gobrat/gobrat_graph.png",alt:"graph"})),(0,i.kt)("p",null,"This analysis is focused in the loaders discovered by them"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"60bcd645450e4c846238cf0e7226dc40c84c96eba99f6b2cffcd0ab4a391c8b3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3e44c807a25a56f4068b5b8186eee5002eed6f26d665a8b791c472ad154585d1"))),(0,i.kt)("p",null,"Some of the behaviors identified in the routers, are too generic, which means that can be used in Linux endpoints intrusions too. For that reason, I decided to analyze the samples and contribute to the Sigma community to idenfity new detection opportunities based on the samples and the analysis of JPCERT/CC."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The objective of the analysis is to provide information about the execution of these loaders and how we can detect them using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SigmaHQ/sigma"},"Sigma Rules")))))}d.isMDXComponent=!0}}]);