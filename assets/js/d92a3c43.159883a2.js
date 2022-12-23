"use strict";(self.webpackChunkcreate_discord_bot=self.webpackChunkcreate_discord_bot||[]).push([[798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),h=n,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:3},i="Resources",s={unversionedId:"resources",id:"resources",title:"Resources",description:"Listed on this page are a couple of resources that can aid you in your development of the discord bot.",source:"@site/docs/resources.md",sourceDirName:".",slug:"/resources",permalink:"/docs/resources",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/basics/deployment"}},c={},d=[{value:"Discord.JS Documentation",id:"discordjs-documentation",level:2},{value:"Discord.JS Guide",id:"discordjs-guide",level:2},{value:"Discord Developer Documentation",id:"discord-developer-documentation",level:2},{value:"NodeJS Learn",id:"nodejs-learn",level:2},{value:"Typescript Handbook",id:"typescript-handbook",level:2},{value:"That Weird Javascript Course",id:"that-weird-javascript-course",level:2},{value:"Eloquent Javascript",id:"eloquent-javascript",level:2},{value:"Google",id:"google",level:2}],l={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"resources"},"Resources"),(0,n.kt)("p",null,"Listed on this page are a couple of resources that can aid you in your development of the discord bot.\nRanging from Discord.JS specific to the Discord API and to general Javascript/Typescript knowledge."),(0,n.kt)("h2",{id:"discordjs-documentation"},(0,n.kt)("a",{parentName:"h2",href:"https://discord.js.org/#/docs/discord.js/main/general/welcome"},"Discord.JS Documentation")),(0,n.kt)("p",null,"The official documentation for the Discord.JS library, it covers everything from every Class to Methods to Functions and etc. It is a great reference to see and learn about everything in Discord.JS."),(0,n.kt)("h2",{id:"discordjs-guide"},(0,n.kt)("a",{parentName:"h2",href:"https://discordjs.guide/"},"Discord.JS Guide")),(0,n.kt)("p",null,"The official guide for Discord.JS, it covers a lot of topics in great detail with code samples, explanations\nand step by step tutorials on how to do something."),(0,n.kt)("h2",{id:"discord-developer-documentation"},(0,n.kt)("a",{parentName:"h2",href:"https://discord.com/developers/docs/intro"},"Discord Developer Documentation")),(0,n.kt)("p",null,"The official Discord Development Documentation, it focuses on the Discord API which can be useful in Discord.JS\nto understand types, requirements, and generally just how everything works."),(0,n.kt)("h2",{id:"nodejs-learn"},(0,n.kt)("a",{parentName:"h2",href:"https://nodejs.dev/en/learn/"},"NodeJS Learn")),(0,n.kt)("p",null,"Official interactive learning guide for NodeJS, the runtime used by create-discord-bot, It covers everything\nabout NodeJS, things like methods, functions, keywords, and best practices."),(0,n.kt)("h2",{id:"typescript-handbook"},(0,n.kt)("a",{parentName:"h2",href:"https://www.typescriptlang.org/docs/handbook/"},"Typescript Handbook")),(0,n.kt)("p",null,"Official Typescript handbook, useful to first learn about Typescript, with things like interfaces, types, etc.\nand also a reference for Typescript."),(0,n.kt)("h2",{id:"that-weird-javascript-course"},(0,n.kt)("a",{parentName:"h2",href:"https://fireship.io/courses/javascript/intro-history/"},"That Weird Javascript Course")),(0,n.kt)("p",null,"A free, short course made by Jeff Delaney, it teaches the basics of Javascript; data types, objects, functions\nvariables, etc."),(0,n.kt)("h2",{id:"eloquent-javascript"},(0,n.kt)("a",{parentName:"h2",href:"https://eloquentjavascript.net/"},"Eloquent Javascript")),(0,n.kt)("p",null,"An ebook made by Marijn Haverbeke, it teaches everything about Javascript including things like values,\noperators, keywords, error handling, expressions, asynchronous programming and more."),(0,n.kt)("h2",{id:"google"},(0,n.kt)("a",{parentName:"h2",href:"https://google.com/"},"Google")),(0,n.kt)("p",null,"A search engine made by Google, contains everything about everything in most cases. ",(0,n.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/how-to-search-google-like-a-pro/"},"Learn more")))}p.isMDXComponent=!0}}]);