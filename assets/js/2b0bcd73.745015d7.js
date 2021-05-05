(self.webpackChunk=self.webpackChunk||[]).push([[9006],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9932:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=n(9603),r=n(120),i=(n(7378),n(5318)),o={title:"Write documentation"},s={unversionedId:"contributing/documentation",id:"contributing/documentation",isDocsHomePage:!1,title:"Write documentation",description:"We place a high importance on consistency and readability of documentation.",source:"@site/docs/contributing/documentation.md",sourceDirName:"contributing",slug:"/contributing/documentation",permalink:"/docs/contributing/documentation",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/contributing/documentation.md",version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1620189141,formattedLastUpdatedAt:"5/5/2021",frontMatter:{title:"Write documentation"},sidebar:"docs",previous:{title:"Advice for new contributors",permalink:"/docs/contributing/new-contributors"},next:{title:"Wechaty contributor program",permalink:"/docs/contributor-program/"}},l=[{value:"Getting the raw documentation",id:"getting-the-raw-documentation",children:[]},{value:"Getting started with Docusaurus",id:"getting-started-with-docusaurus",children:[]},{value:"How the documentation is organized",id:"how-the-documentation-is-organized",children:[]},{value:"Writing style",id:"writing-style",children:[]},{value:"Commonly used terms",id:"commonly-used-terms",children:[]},{value:"Wechaty-specific terminology",id:"wechaty-specific-terminology",children:[]},{value:"Guidelines for Markdown files",id:"guidelines-for-markdown-files",children:[]},{value:"Special Thanks",id:"special-thanks",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We place a high importance on consistency and readability of documentation.\nWe aim to improve it as often as possible."),(0,i.kt)("p",null,"Documentation changes generally come in two forms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"General improvements: typo corrections, error fixes and better\nexplanations through clearer writing and more examples.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"New features: documentation of features that have been added to the\nframework since the last release."))),(0,i.kt)("p",null,"This section explains how writers can craft their documentation changes\nin the most useful and least error-prone ways."),(0,i.kt)("h2",{id:"getting-the-raw-documentation"},"Getting the raw documentation"),(0,i.kt)("p",null,"Though Wechaty's documentation is intended to be read as HTML at\n",(0,i.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/"},"https://wechaty.js.org/docs/"),", we edit it as a collection of markdown files for\nmaximum flexibility. These files live in the top-level ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus/docs/"),"\ndirectory at Wechaty Website repository at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org"},"https://github.com/wechaty/wechaty.js.org"),"."),(0,i.kt)("p",null,"If you'd like to start contributing to our docs, get the latest version of\nWechaty website from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org"},"website repository"),"."),(0,i.kt)("h2",{id:"getting-started-with-docusaurus"},"Getting started with Docusaurus"),(0,i.kt)("p",null,"Wechaty's documentation uses the ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," documentation system v2.\nThe basic idea is that powered by markdown with JSX supported(MDX), built using React documentation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"https://docusaurus.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mdxjs.com/"},"https://mdxjs.com/"))),(0,i.kt)("p",null,"To build the documentation locally, install NPM dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,i.kt)("p",null,"Then build the website:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run docusaurus:start\n")),(0,i.kt)("p",null,"To get started contributing, you'll want to read the :ref:",(0,i.kt)("inlineCode",{parentName:"p"},"reStructuredText\nreference <sphinx:rst-index>"),"."),(0,i.kt)("p",null,"Your locally-built documentation will be themed differently than the\ndocumentation at ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus docs introduction"),".\nThis is OK! If your changes look good on your local machine, they'll look good\non the website."),(0,i.kt)("h2",{id:"how-the-documentation-is-organized"},"How the documentation is organized"),(0,i.kt)("p",null,"The documentation is organized into several categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/"},"Tutorials")," take the reader by the hand through a series\nof steps to create something."),(0,i.kt)("p",{parentName:"li"},"The important thing in a tutorial is to help the reader achieve something\nuseful, preferably as early as possible, in order to give them confidence."),(0,i.kt)("p",{parentName:"li"},"Explain the nature of the problem we're solving, so that the reader\nunderstands what we're trying to achieve. Don't feel that you need to begin\nwith explanations of how things work - what matters is what the reader does,\nnot what you explain. It can be helpful to refer back to what you've done and\nexplain afterwards.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/explainations/"},"Explainations")," aim to explain a concept or subject at a\nfairly high level."),(0,i.kt)("p",{parentName:"li"},"Link to reference material rather than repeat it. Use examples and don't be\nreluctant to explain things that seem very basic to you - it might be the\nexplanation someone else needs."),(0,i.kt)("p",{parentName:"li"},"Providing background context helps a newcomer connect the topic to things\nthat they already know.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/references/"},"References")," contain technical reference for APIs.\nThey describe the functioning of Wechaty's internal machinery and instruct in\nits use."),(0,i.kt)("p",{parentName:"li"},"Keep reference material tightly focused on the subject. Assume that the\nreader already understands the basic concepts involved but needs to know or\nbe reminded of how Wechaty does it."),(0,i.kt)("p",{parentName:"li"},"Reference guides aren't the place for general explanation. If you find\nyourself explaining basic concepts, you may want to move that material to a\ntopic guide.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/howto/"},"How-to Guides")," are recipes that take the reader through\nsteps in key subjects."),(0,i.kt)("p",{parentName:"li"},"What matters most in a how-to guide is what a user wants to achieve.\nA how-to should always be result-oriented rather than focused on internal\ndetails of how Wechaty implements whatever is being discussed."),(0,i.kt)("p",{parentName:"li"},"These guides are more advanced than tutorials and assume some knowledge about\nhow Wechaty works. Assume that the reader has followed the tutorials and don't\nhesitate to refer the reader back to the appropriate tutorial rather than\nrepeat the same material."))),(0,i.kt)("h2",{id:"writing-style"},"Writing style"),(0,i.kt)("p",null,'When using pronouns in reference to a hypothetical person, such as "a user with\na session cookie", gender neutral pronouns (they/their/them) should be used.\nInstead of:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"he or she... use they."),(0,i.kt)("li",{parentName:"ul"},"him or her... use them."),(0,i.kt)("li",{parentName:"ul"},"his or her... use their."),(0,i.kt)("li",{parentName:"ul"},"his or hers... use theirs."),(0,i.kt)("li",{parentName:"ul"},"himself or herself... use themselves.")),(0,i.kt)("p",null,'Try to avoid using words that minimize the difficulty involved in a task or\noperation, such as "easily", "simply", "just", "merely", "straightforward", and\nso on. People\'s experience may not match your expectations, and they may become\nfrustrated when they do not find a step as "straightforward" or "simple" as it\nis implied to be.'),(0,i.kt)("h2",{id:"commonly-used-terms"},"Commonly used terms"),(0,i.kt)("p",null,"Here are some style guidelines on commonly used terms throughout the\ndocumentation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Wechaty")," ","\u2014"," when referring to the framework, capitalize Wechaty.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"email")," ","\u2014"," no hyphen.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TypeScript/JavaScript")," ","\u2014"," when referring to the language, capitalize TypeScript/JavaScript.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"realize"),", ",(0,i.kt)("strong",{parentName:"p"},"customize"),", ",(0,i.kt)("strong",{parentName:"p"},"initialize"),", etc. ","\u2014",' use the American\n"ize" suffix, not "ise."')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"subclass")," ","\u2014",' it\'s a single word without a hyphen, both as a verb\n("subclass that model") and as a noun ("create a subclass").')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Web"),", ",(0,i.kt)("strong",{parentName:"p"},"World Wide Web"),", ",(0,i.kt)("strong",{parentName:"p"},"the Web")," ","\u2014"," note Web is always\ncapitalized when referring to the World Wide Web.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"website")," ","\u2014"," use one word, without capitalization."))),(0,i.kt)("h2",{id:"wechaty-specific-terminology"},"Wechaty-specific terminology"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Puppet")," ","\u2014"," it's capitalized.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Puppet Provider")," ","\u2014"," it's capitalized.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Puppet Service")," ","\u2014"," it's capitalized.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TOKEN")," ","\u2014"," it's all capitalized."))),(0,i.kt)("h2",{id:"guidelines-for-markdown-files"},"Guidelines for Markdown files"),(0,i.kt)("p",null,"These guidelines regulate the format of our MD (Markdown) and MDX (Markdown + JSX)\ndocumentation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In section titles, capitalize only initial words and proper nouns.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Wrap the documentation at 80 characters wide, unless a code example\nis significantly less readable when split over two lines, or for another\ngood reason.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The main thing to keep in mind as you write and edit docs is that the\nmore semantic markup you can add the better. So:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-md"},"Add `django.contrib.auth` to your `INSTALLED_APPS`...\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use these heading styles::"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-md"},"# One\n\n## Two\n\n### Three\n\n#### Four\n  \n##### Five\n")))),(0,i.kt)("h2",{id:"special-thanks"},"Special Thanks"),(0,i.kt)("p",null,"I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/django/django/blob/main/docs/internals/contributing/writing-documentation.txt"},"Django contributing docs")))}p.isMDXComponent=!0}}]);