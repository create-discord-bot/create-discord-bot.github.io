"use strict";(self.webpackChunkcreate_discord_bot=self.webpackChunkcreate_discord_bot||[]).push([[883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4},i="Logging",l={unversionedId:"options/logging",id:"options/logging",title:"Logging",description:"Logging events, errors, and info is a necessary thing to be able to create better functioning and more easily",source:"@site/docs/options/logging.md",sourceDirName:"options",slug:"/options/logging",permalink:"/docs/options/logging",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/options/logging.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/options/deployment"},next:{title:"Resources",permalink:"/docs/resources"}},p={},s=[{value:"Pino",id:"pino",level:2},{value:"Example",id:"example",level:3},{value:"Default",id:"default",level:2},{value:"Adding Color",id:"adding-color",level:3},{value:"Other options",id:"other-options",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logging"},"Logging"),(0,r.kt)("p",null,"Logging events, errors, and info is a necessary thing to be able to create better functioning and more easily\nunderstandable code."),(0,r.kt)("h2",{id:"pino"},(0,r.kt)("a",{parentName:"h2",href:"https://getpino.io/"},"Pino")),(0,r.kt)("p",null,"Pino is the recommended option by create-discord-bot, and a recommendation of the ",(0,r.kt)("a",{parentName:"p",href:"https://discordjs.guide"},"Discord.JS Guide"),"."),(0,r.kt)("p",null,"Pino is a very low overhead, lightweight logging utility that outputs to json and can also transport its logs\nto a separate file or both. It can also be prettified/formatted with ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pino-pretty"},"pino-pretty"),"\nwhich transforms it to a more human readable format."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/pinojs/pino-pretty/HEAD/demo.png",alt:"Image of pino and pino-pretty working"})),(0,r.kt)("sub",null,"Courtesy of ",(0,r.kt)("a",{href:"https://github.com/pinojs/pino-pretty"},"pino-pretty")),(0,r.kt)("h2",{id:"default"},"Default"),(0,r.kt)("p",null,"Normal console.log, error, warn, info that outputs plain text."),(0,r.kt)("h3",{id:"adding-color"},"Adding Color"),(0,r.kt)("p",null,"There are multiple ways to add color to your logs, one of which is to use ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ANSI_escape_code#Colors"},"ansi escape codes"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(\"\\x1b[32mI'm GREEN\\x1b[0m\");\n// I'm GREEN (in green)\n")),(0,r.kt)("p",null,"However there are also libraries that can help to ease and abstract the process such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/chalk"},"Chalk")," - Small package with easy to use chainable functions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/picocolors"},"Pico-colors")," - Lightweight and fast."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/kleur"},"Kleur")," - Alternative to Chalk."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/kolorist"},"Kolorist")," - Alternative to Chalk.")),(0,r.kt)("h2",{id:"other-options"},"Other options"),(0,r.kt)("p",null,"There are also other options that might fit your use case better such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/winston"},"Winston")," - A logger for just about everything"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/bunyan"},"Bunyan")," - A simple and fast JSON logging library"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/bole"},"Bole")," - A tiny JSON logger, optimised for speed and simplicity")))}u.isMDXComponent=!0}}]);