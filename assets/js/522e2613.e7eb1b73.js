"use strict";(self.webpackChunkjstnk=self.webpackChunkjstnk||[]).push([[5381],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9326:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={slug:"InstallScreenSaver-SCR-files",title:"Executing SCR files using desk.cpl and InstallScreenSaver API Call",authors:"joseliyo",tags:["threat hunting","detection","visibility","research"]},l=void 0,c={permalink:"/jstnk9/research/InstallScreenSaver-SCR-files",source:"@site/research/2022-05-03-InstallScreenSaver-SCR-files/2022-05-03-InstallScreenSaver-SCR-files.md",title:"Executing SCR files using desk.cpl and InstallScreenSaver API Call",description:"Summary",date:"2022-05-03T00:00:00.000Z",formattedDate:"May 3, 2022",tags:[{label:"threat hunting",permalink:"/jstnk9/research/tags/threat-hunting"},{label:"detection",permalink:"/jstnk9/research/tags/detection"},{label:"visibility",permalink:"/jstnk9/research/tags/visibility"},{label:"research",permalink:"/jstnk9/research/tags/research"}],readingTime:3.895,truncated:!0,authors:[{name:"Jose Luis S\xe1nchez Mart\xednez",title:"Security Researcher",url:"https://twitter.com/Joseliyo_Jstnk",imageURL:"https://jstnk9.github.io/jstnk9/img/profiles/1574890680450.jpeg",key:"joseliyo"}],prevItem:{title:"Using Jlaive to create batch files from .NET assemblies for defense evasion",permalink:"/jstnk9/research/Jlaive-Antivirus-Evasion-Tool"},nextItem:{title:"DLL Hijacking with DeviceCensus.exe on Windows 11",permalink:"/jstnk9/research/DLL-Hijacking-with-DeviceCensus.exe-on-Windows-11"}},p={authorsImageUrls:[void 0]},m=[{value:"Summary",id:"summary",children:[],level:2},{value:"Testing the behavior",id:"testing-the-behavior",children:[{value:"Sysmon",id:"sysmon",children:[],level:3},{value:"Procmon",id:"procmon",children:[],level:3}],level:2},{value:"Detection",id:"detection",children:[{value:"Sigma rule",id:"sigma-rule",children:[],level:3}],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This blog was made from the following sources."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Reference 1:")," ",(0,r.kt)("a",{parentName:"p",href:"https://vxug.fakedoma.in/zines/29a/29a7/Articles/29A-7.030.txt"},"https://vxug.fakedoma.in/zines/29a/29a7/Articles/29A-7.030.txt")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Reference 2:")," ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/pabraeken/status/998627081360695297"},"https://twitter.com/pabraeken/status/998627081360695297")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Reference 3:")," ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/VakninHai/status/1517027824984547329"},"https://twitter.com/VakninHai/status/1517027824984547329")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Reference 4:")," ",(0,r.kt)("a",{parentName:"p",href:"https://lolbas-project.github.io/lolbas/Libraries/Desk/"},"https://lolbas-project.github.io/lolbas/Libraries/Desk/")))),(0,r.kt)("p",null,"Recently some researchers have discovered a possible execution of binaries using the Windows Desktop Settings Control Panel utility located at ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Windows\\System32\\desk.cpl")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Windows\\SysWOW64\\desk.cpl")," for 32-bit."),(0,r.kt)("p",null,"This utility allows executing a binary with a ",(0,r.kt)("inlineCode",{parentName:"p"},".scr")," extension by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"InstallScreenSaver")," function."),(0,r.kt)("p",null,"The objective of this entry is focused only on identifying the visibility and detection of the operating system."),(0,r.kt)("h2",{id:"testing-the-behavior"},"Testing the behavior"),(0,r.kt)("p",null,"In this case, I'm going to create a copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd.exe")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"joseliyopoc.scr")," on the desktop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"copy C:\\windows\\system32\\cmd.exe C:\\users\\jstnk\\Desktop\\joseliyopoc.scr\n")),(0,r.kt)("p",null,"After that, I run ",(0,r.kt)("inlineCode",{parentName:"p"},"desk.cpl")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"rundll32.exe")," on a new command line passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"InstallScreenSaver")," API call and the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},".scr")," file as parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rundll32.exe desk.cpl,InstallScreenSaver C:\\users\\jstnk\\desktop\\joseliyopoc.scr\n")),(0,r.kt)("h3",{id:"sysmon"},"Sysmon"),(0,r.kt)("p",null,"We can see in Sysmon how there are different events generated during the previous execution. However, focusing on those events that could be of more interest to generate detections are related to events number ",(0,r.kt)("inlineCode",{parentName:"p"},"1 - Process Create")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"13 - Registry Value Set")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jstnk9.github.io/jstnk9/img/scr-research/flow_dk.png#gh-dark-mode-only",alt:"flowdark"}),(0,r.kt)("img",{parentName:"p",src:"https://jstnk9.github.io/jstnk9/img/scr-research/flow_wt.png#gh-light-mode-only",alt:"flowwhite"})),(0,r.kt)("p",null,"In the case of the registry key related to ",(0,r.kt)("inlineCode",{parentName:"p"},"HKU\\<sid>\\Control Panel\\Desktop\\SCRNSAVE.EXE"),", it can be seen that the value in this case is the name of the ",(0,r.kt)("inlineCode",{parentName:"p"},".scr")," file. This information is really useful to generate detection mechanisms based on the entire context of this execution that we are carrying out (execution of ",(0,r.kt)("inlineCode",{parentName:"p"},"rundll32"),", call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"InstallScreenSaver")," API, etc)."),(0,r.kt)("p",null,"The other two values of the keys ",(0,r.kt)("inlineCode",{parentName:"p"},"HKU\\<sid>\\Control Panel\\Desktop\\ScreenSaveActive")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HKU\\<sid>\\Control Panel\\Desktop\\ScreenSaveTimeOut")," are also interesting, since in both cases, after multiple executions of this proof of concept, the values were the same in all cases (with this run by default)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jstnk9.github.io/jstnk9/img/scr-research/sysmon_events_m.png",alt:"sysmon_events_m2"})),(0,r.kt)("p",null,"You can get more information about these registry keys in the following links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ScreenSaveTimeOut: ",(0,r.kt)("a",{parentName:"li",href:"http://systemmanager.ru/win2k_regestry.en/34634.htm"},"http://systemmanager.ru/win2k_regestry.en/34634.htm")),(0,r.kt)("li",{parentName:"ul"},"ScreenSaveActive: ",(0,r.kt)("a",{parentName:"li",href:"http://systemmanager.ru/win2k_regestry.en/93257.htm"},"http://systemmanager.ru/win2k_regestry.en/93257.htm")),(0,r.kt)("li",{parentName:"ul"},"SCRNSAVE.EXE: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/sk-sk/windows/win32/devnotes/scrnsave-exe"},"https://docs.microsoft.com/sk-sk/windows/win32/devnotes/scrnsave-exe"))),(0,r.kt)("p",null,"Something interesting that is important to mention is that, in seconds, thirds, fourths, etc. executions, only two of the three registry keys seen above are modified or there is any kind of interaction with them. These keys are the ones related to ",(0,r.kt)("inlineCode",{parentName:"p"},"ScreenSaveActive")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SCRNSAVE.EXE"),". In both cases, the value will be the same as seen above, unless the ",(0,r.kt)("inlineCode",{parentName:"p"},".scr")," file we run has a different name, in which case the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"SCRNSAVE.EXE")," will be that of the new ",(0,r.kt)("inlineCode",{parentName:"p"},".scr")," file."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jstnk9.github.io/jstnk9/img/scr-research/sysmon_events_m2.png",alt:"sysmon_events_m2"})),(0,r.kt)("h3",{id:"procmon"},"Procmon"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In this Twitter thread you have more info about the execution I did using procmon: ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/Joseliyo_Jstnk/status/1519769245378297856"},"https://twitter.com/Joseliyo_Jstnk/status/1519769245378297856")))),(0,r.kt)("p",null,"In this case, I used a different name for the ",(0,r.kt)("inlineCode",{parentName:"p"},".scr")," file and a different OS version (both W10). The rest of the process was similar. The following image contains the information about the registry keys mentioned above, where it is reflected that new values are established."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jstnk9.github.io/jstnk9/img/scr-research/procm1.png",alt:"procmon1"})),(0,r.kt)("p",null,"When performing different executions, even changing the name of the ",(0,r.kt)("inlineCode",{parentName:"p"},".scr")," file, it can be seen how from the second iteration, only two registry keys are modified. However, the first time we run it, all three keys are changed. The following image shows the 4 executions that I did."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jstnk9.github.io/jstnk9/img/scr-research/procm2.png",alt:"procmon2"})),(0,r.kt)("h2",{id:"detection"},"Detection"),(0,r.kt)("p",null,"The following Elastic Query can help us to detect the behavior described above, if our purpose is detect the changes of the 3 registry keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'((winlog.event_data.EventType:"SetValue" AND winlog.event_data.Image:"*\\\\rundll32.exe") AND ((winlog.event_data.TargetObject:"*\\\\Control Panel\\\\Desktop\\\\ScreenSaveActive*" AND winlog.event_data.Details:"1") OR (winlog.event_data.TargetObject:"*\\\\Control Panel\\\\Desktop\\\\ScreenSaveTimeOut*" AND winlog.event_data.Details:"900") OR (winlog.event_data.TargetObject:"*\\\\Control Panel\\\\Desktop\\\\SCRNSAVE.EXE*" AND winlog.event_data.Details:*.scr)))\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'((winlog.event_data.EventType:"SetValue" AND winlog.event_data.Image:"*\\\\rundll32.exe") AND ((winlog.event_data.TargetObject:"*\\\\Control Panel\\\\Desktop\\\\ScreenSaveActive*" AND winlog.event_data.Details:"1") OR (winlog.event_data.TargetObject:"*\\\\Control Panel\\\\Desktop\\\\ScreenSaveTimeOut*" AND winlog.event_data.Details:"900") OR (winlog.event_data.TargetObject:"*\\\\Control Panel\\\\Desktop\\\\SCRNSAVE.EXE*" AND winlog.event_data.Details:*.scr)))')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jstnk9.github.io/jstnk9/img/scr-research/detection_elastic.png",alt:"detection1"})),(0,r.kt)("p",null,"Howerver, if we want to detect only the key related to the .scr file when it is established using ",(0,r.kt)("inlineCode",{parentName:"p"},"rundll32.exe"),", the following query can help us."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'(winlog.event_data.EventType:"SetValue" AND winlog.event_data.Image:"*\\\\rundll32.exe") AND (winlog.event_data.TargetObject:"*\\\\Control Panel\\\\Desktop\\\\SCRNSAVE.EXE*" AND winlog.event_data.Details:*.scr)\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'(winlog.event_data.EventType:"SetValue" AND winlog.event_data.Image:"*\\\\rundll32.exe") AND (winlog.event_data.TargetObject:"*\\\\Control Panel\\\\Desktop\\\\SCRNSAVE.EXE*" AND winlog.event_data.Details:*.scr)')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://jstnk9.github.io/jstnk9/img/scr-research/detection_elastic2.png",alt:"detection2"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"UPDATE May 6, 2022")),(0,r.kt)("p",null,"New query to avoid false positives related to legitimate use of screen saver. Preventing the SCRNSAVE.EXE registry key contains system32 and syswow64 paths."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'(winlog.event_data.EventType:"SetValue" AND winlog.event_data.Image:"*\\\\rundll32.exe") AND (winlog.event_data.TargetObject:"*\\\\Control Panel\\\\Desktop\\\\SCRNSAVE.EXE*" AND winlog.event_data.Details:*.scr) AND NOT (winlog.event_data.Details:"C:\\\\Windows\\\\System32\\\\*" OR winlog.event_data.Details:"C:\\\\Windows\\\\SysWOW64\\\\*")\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'(winlog.event_data.EventType:"SetValue" AND winlog.event_data.Image:"*\\\\rundll32.exe") AND (winlog.event_data.TargetObject:"*\\\\Control Panel\\\\Desktop\\\\SCRNSAVE.EXE*" AND winlog.event_data.Details:*.scr) AND NOT (winlog.event_data.Details:"C:\\\\Windows\\\\System32\\\\*" OR winlog.event_data.Details:"C:\\\\Windows\\\\SysWOW64\\\\*")')),(0,r.kt)("h3",{id:"sigma-rule"},"Sigma rule"),(0,r.kt)("p",null,"New sigma rule published on GitHub."),(0,r.kt)("p",null,"Sigma link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SigmaHQ/sigma/blob/master/rules/windows/registry/registry_set/registry_set_scr_file_executed_by_rundll32.yml"},"https://github.com/SigmaHQ/sigma/blob/master/rules/windows/registry/registry_set/registry_set_scr_file_executed_by_rundll32.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"title: ScreenSaver Registry Key Set\nid: 40b6e656-4e11-4c0c-8772-c1cc6dae34ce\ndescription: Detects registry key established after masqueraded .scr file execution using Rundll32 through desk.cpl\nstatus: experimental\ndate: 2022/05/04\nmodified: 2022/05/04\nauthor: Jose Luis Sanchez Martinez (@Joseliyo_Jstnk)\nreferences:\n    - https://twitter.com/VakninHai/status/1517027824984547329\n    - https://twitter.com/pabraeken/status/998627081360695297\n    - https://jstnk9.github.io/jstnk9/research/InstallScreenSaver-SCR-files\nlogsource:\n    product: windows\n    category: registry_set\ndetection:\n    selection:\n        EventType: SetValue\n        Image|endswith: '\\rundll32.exe'\n    registry:\n        TargetObject|contains: '\\Control Panel\\Desktop\\SCRNSAVE.EXE'\n        Details|endswith: '.scr'\n    filter:\n        Details|contains: \n        - 'C:\\Windows\\System32\\'\n        - 'C:\\Windows\\SysWOW64\\'\n    condition: selection and registry and not filter\nfalsepositives:\n    - legitimate use of screen saver\nlevel: medium\ntags:\n    - attack.defense_evasion\n    - attack.t1218.011\n")),(0,r.kt)("h2",null," Contact "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Twitter"),": ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/Joseliyo_Jstnk"},"https://twitter.com/Joseliyo_Jstnk")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LinkedIn"),": ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/joseluissm/"},"https://www.linkedin.com/in/joseluissm/")))}u.isMDXComponent=!0}}]);