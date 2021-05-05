(self.webpackChunk=self.webpackChunk||[]).push([[9062,7182],{5318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7378);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,p=function(e,t){if(null==e)return{};var r,a,p={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,p=e.mdxType,n=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=p,h=u["".concat(c,".").concat(m)]||u[m]||l[m]||n;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=r.length,o=new Array(n);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6565:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var a=r(9603),p=r(120),n=(r(7378),r(5318)),o=r(7404),i={slug:"/puppet-providers/",title:"Wechaty Puppet Providers",sidebar_label:"Puppet Providers: Index"},c={unversionedId:"puppet-providers/overview",id:"puppet-providers/overview",isDocsHomePage:!1,title:"Wechaty Puppet Providers",description:"For different instant messaging (IM) systems (such as WeChat, Whatsapp, and TikTok), the Wechaty community builds separate RPA modules for each, and we call those modules Wechaty Puppet.",source:"@site/docs/puppet-providers/overview.mdx",sourceDirName:"puppet-providers",slug:"/puppet-providers/",permalink:"/docs/puppet-providers/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/overview.mdx",version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1620189141,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"Puppet Providers: Index",frontMatter:{slug:"/puppet-providers/",title:"Wechaty Puppet Providers",sidebar_label:"Puppet Providers: Index"},sidebar:"docs",previous:{title:"Polyglot: DIY",permalink:"/docs/polyglot/diy/"},next:{title:"Puppet Provider: WeChat",permalink:"/docs/puppet-providers/wechat"}},s=[{value:"Wechaty Puppet Providers",id:"wechaty-puppet-providers",children:[]},{value:"History",id:"history",children:[]},{value:"See Also",id:"see-also",children:[]},{value:"Blogs",id:"blogs",children:[]}],d={toc:s};function l(e){var t=e.components,r=(0,p.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.default,{mdxType:"Badges"}),(0,n.kt)("p",null,"For different instant messaging (IM) systems (such as WeChat, Whatsapp, and TikTok), the Wechaty community builds separate RPA modules for each, and we call those modules ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet"},"Wechaty Puppet"),"."),(0,n.kt)("p",null,"Wechaty Puppet Provider is an NPM module for a specific IM protocol Wechaty Puppet."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-NAME\nexport WECHATY_PUPPET=wechaty-puppet-NAME\nnpm start\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You can switch between different Wechaty Puppet Provider by changing your ",(0,n.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET")," environment variable. All your source code should work between different tokens without any changes.")),(0,n.kt)("h2",{id:"wechaty-puppet-providers"},"Wechaty Puppet Providers"),(0,n.kt)("p",null,"Now, we have the following Wechaty Puppet Providers:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Platform"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Protocol"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Stable"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-providers/wechat"},"WeChat")),(0,n.kt)("td",{parentName:"tr",align:"center"},"WeChat"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Web"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-providers/whatsapp"},"Wahtsapp")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Whatsapp"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Web"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Alpha")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"official-account/"},"Official Account")),(0,n.kt)("td",{parentName:"tr",align:"center"},"WeChat Official Account"),(0,n.kt)("td",{parentName:"tr",align:"center"},"API"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Alpha")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-providers/gitter"},"Gitter")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Gitter"),(0,n.kt)("td",{parentName:"tr",align:"center"},"API"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Alpha")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-providers/lark"},"Lark")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Lark"),(0,n.kt)("td",{parentName:"tr",align:"center"},"API"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Alpha")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-providers/padlocal"},"PadLocal")),(0,n.kt)("td",{parentName:"tr",align:"center"},"WeChat"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Pad"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-providers/wechat4u"},"WeChat4U")),(0,n.kt)("td",{parentName:"tr",align:"center"},"WeChat"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Web"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Alpha")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-providers/service"},"Service")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Universal"),(0,n.kt)("td",{parentName:"tr",align:"center"},"gRPC"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-providers/mock"},"Mock")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Universal"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Mock"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Beta")))),(0,n.kt)("h2",{id:"history"},"History"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/03/04/wechaty-puppet-providers-trends/"},"Wechaty Puppet Providers Trends, Huan, Mar 4, 2021")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021"))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("p",null,"If you want to learn more about the concepts behind Wechaty Puppet Provider, you can read:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/specs/puppet"},"Wechaty Puppet Specification")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021"))),(0,n.kt)("p",null,"For a deeper understanding of the Puppet in Wechaty, you can read its source code from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts"},"https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts")),(0,n.kt)("h2",{id:"blogs"},"Blogs"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021"))))}l.isMDXComponent=!0},7404:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var a=r(9603),p=r(120),n=(r(7378),r(5318)),o={},i={unversionedId:"puppet-providers/transclusions/badges",id:"puppet-providers/transclusions/badges",isDocsHomePage:!1,title:"badges",description:"Wechaty Puppet WeChat",source:"@site/docs/puppet-providers/transclusions/badges.mdx",sourceDirName:"puppet-providers/transclusions",slug:"/puppet-providers/transclusions/badges",permalink:"/docs/puppet-providers/transclusions/badges",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/transclusions/badges.mdx",version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1620189141,formattedLastUpdatedAt:"5/5/2021",frontMatter:{}},c=[],s={toc:c};function d(e){var t=e.components,r=(0,p.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/puppet-providers/wechat"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-WeChat-blueviolet",alt:"Wechaty Puppet WeChat"})),"\n",(0,n.kt)("a",{parentName:"p",href:"/docs/puppet-providers/whatsapp"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Whatsapp-blueviolet",alt:"Wechaty Puppet Whatsapp"})),"\n",(0,n.kt)("a",{parentName:"p",href:"/docs/puppet-providers/official-account"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Official%20Account-blueviolet",alt:"Wechaty Puppet Official Account"})),"\n",(0,n.kt)("a",{parentName:"p",href:"/docs/puppet-providers/gitter"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Gitter-blueviolet",alt:"Wechaty Puppet Gitter"})),"\n",(0,n.kt)("a",{parentName:"p",href:"/docs/puppet-providers/lark"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Lark-blueviolet",alt:"Wechaty Puppet Lark"})),"\n",(0,n.kt)("a",{parentName:"p",href:"/docs/puppet-providers/padlocal"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-PadLocal-blueviolet",alt:"Wechaty Puppet PadLocal"})),"\n",(0,n.kt)("a",{parentName:"p",href:"/docs/puppet-providers/wechat4u"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-WeChat4U-blueviolet",alt:"Wechaty Puppet WeChat4U"})),"\n",(0,n.kt)("a",{parentName:"p",href:"/docs/puppet-providers/service"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Service-blueviolet",alt:"Wechaty Puppet Service"})),"\n",(0,n.kt)("a",{parentName:"p",href:"/docs/puppet-providers/mock"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Mock-blueviolet",alt:"Wechaty Puppet Mock"})),"\n",(0,n.kt)("a",{parentName:"p",href:"/docs/puppet-providers/diy"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Provider-DIY-blueviolet",alt:"Wechaty Puppet DIY"}))))}d.isMDXComponent=!0}}]);