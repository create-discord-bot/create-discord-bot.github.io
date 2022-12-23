"use strict";(self.webpackChunkcreate_discord_bot=self.webpackChunkcreate_discord_bot||[]).push([[280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,y=c["".concat(s,".").concat(u)]||c[u]||m[u]||a;return n?o.createElement(y,l(l({ref:t},d),{},{components:n})):o.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},l="Deployment",i={unversionedId:"basics/deployment",id:"basics/deployment",title:"Deployment",description:"Deployment/registering commands is in layman's terms; publishing your commands over to Discord's servers.",source:"@site/docs/basics/deployment.md",sourceDirName:"basics",slug:"/basics/deployment",permalink:"/docs/basics/deployment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/deployment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tooling",permalink:"/docs/basics/tooling"}},s={},p=[{value:"Global Deployment",id:"global-deployment",level:2},{value:"Guild Deployment",id:"guild-deployment",level:2},{value:"Where to deploy",id:"where-to-deploy",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"Deployment/registering commands is in layman's terms; publishing your commands over to Discord's servers.\nDeploying commands are required as if not done any metadata about the command, such as command name, description, options, etc. will not update nor new commands will appear as well."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Discord rate limits the amount of deployments you can have per day to 200.")),(0,r.kt)("h2",{id:"global-deployment"},"Global Deployment"),(0,r.kt)("p",null,"Any files in ",(0,r.kt)("inlineCode",{parentName:"p"},"commands/")," that end with ",(0,r.kt)("inlineCode",{parentName:"p"},".(js/ts)")," will be deployed to all servers. It will be automatically\nexecuted when the following command is called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,r.kt)("p",null,"However you can also call it yourself by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run registergl\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"GUILD_ID")," portion of your .env file if you're only going to be using global deployment.")),(0,r.kt)("h2",{id:"guild-deployment"},"Guild Deployment"),(0,r.kt)("p",null,"Any files in ",(0,r.kt)("inlineCode",{parentName:"p"},"commands/")," that end with ",(0,r.kt)("inlineCode",{parentName:"p"},".gu.(js/ts)")," will be deployed to the guild id written in your .env file.\nIt will be automatically executed when the following command is called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,r.kt)("p",null,"However you can also call it yourself by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run registergu\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can get a server's guild id by right-clicking on the server's icon and clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy ID")," button.")),(0,r.kt)("h2",{id:"where-to-deploy"},"Where to deploy"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Guild-based deployment of commands is best suited for development and testing in your own personal server.\nOnce you're satisfied that it's ready, deploy the command globally to publish it to all guilds that your bot\nis in."),(0,r.kt)("p",{parentName:"blockquote"},"You may wish to have a separate application and token in the Discord Dev Portal for your dev application, to\navoid duplication between your guild-based commands and the global deployment."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://discordjs.guide/creating-your-bot/command-deployment.html#where-to-deploy"},"discordjs.guide")))))}c.isMDXComponent=!0}}]);