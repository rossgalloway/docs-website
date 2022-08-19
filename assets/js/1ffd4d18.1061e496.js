"use strict";(self.webpackChunkgovernance_repository=self.webpackChunkgovernance_repository||[]).push([[8884],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=r.createContext({}),c=function(e){var t=r.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(h.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,h=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(h,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4264:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return h},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3,sidebar_label:"History"},h="History",c={unversionedId:"yamDocs/History_new",id:"yamDocs/History_new",title:"History",description:"The Birth of YAM",source:"@site/docs/yamDocs/History_new.md",sourceDirName:"yamDocs",slug:"/yamDocs/History_new",permalink:"/docs/yamDocs/History_new",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"History"},sidebar:"yamSidebar",previous:{title:"Yam DAO's Mission",permalink:"/docs/yamDocs/mission_new"},next:{title:"Governance Overview",permalink:"/docs/yamDocs/governance_new"}},l={},d=[{value:"The Birth of YAM",id:"the-birth-of-yam",level:2},{value:"The death of Rebasing",id:"the-death-of-rebasing",level:2},{value:"A (somewhat) Fresh Start",id:"a-somewhat-fresh-start",level:2},{value:"Work on Streamlining the DAO",id:"work-on-streamlining-the-dao",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"history"},"History"),(0,a.kt)("h2",{id:"the-birth-of-yam"},"The Birth of YAM"),(0,a.kt)("p",null,"YAM was created in August of 2020 and released in a week long ",(0,a.kt)("em",{parentName:"p"},"fair launch")," where two fifths of the supply was given away to the DeFi Community. This was a false start as a bug in the code required a migration to a new temporary token contract, before finally launching with corrected and audited code a month later in September. the YAM token was an experiment with a mechanism called rebasing (see ampleforth, but in a nutshell it is an accounting trick to move token volatility from price into supply) as a way to build a community managed treasury. YAM was designed so that as the price of the token increased, some of the value inherent in that increase flowed into the treasury (",(0,a.kt)("a",{parentName:"p",href:"_rebasing_info.md"},"the details are complicated"),"). This succeeded in building a $3 million dollar treasury for the DAO over a few months, controlled by YAM token holders. The purpose and use of this treasury was left open ended by the project creators, all of whom have now stepped away from the project to let it truly be community run."),(0,a.kt)("h2",{id:"the-death-of-rebasing"},"The death of Rebasing"),(0,a.kt)("p",null,"In crypto, nothing stays simple for long. Although the treasury was growing and a small community had formed to tend to it and the protocol, many were not happy with how the rebasing mechanism worked. It was deemed to extract an excessive amount of value from periods of growth, and was criticized for not having a mechanism to return value in periods where the price fell. After lots of back and forth, disputes and arguments, a decision was made to stop the rebasing functionality in the token and turn it into a vanilla governance token. In late December of 2020, governance voted to turn off rebasing."),(0,a.kt)("h2",{id:"a-somewhat-fresh-start"},"A (somewhat) Fresh Start"),(0,a.kt)("p",null,"2021 started with the DAO re-invigorated to begin it's journey as a traditional DAO. There were a number of internal projects that were being developed: Degenerative (Yam Synths), Umbrella (Yam Protection), and DAO House (Yam Treasuries). Contributors were beginning to manage and grow the treasury by investing it in other sympathetic projects in the space. On the operation front, the DAO began building out a framework to compensate contributors and streamline governance."),(0,a.kt)("p",null,"In the following months, those working on the DAO learned that building products is hard and what seems to initially be a promising idea sometimes runs head first into the reality of implementation and viability. Umbrella and DAOHouse both started out as exciting projects and ran into numerous hurdles, exacerbated by a lack of developers and the expertise really required to push them forward. The DAO had significant turnover in key roles, which further slowed things down, and the initial launch of YAM Synths did not generate the excitement that many had hoped for. But through those struggles there have been new learnings about what the space needs and how to build it. "),(0,a.kt)("h2",{id:"work-on-streamlining-the-dao"},"Work on Streamlining the DAO"),(0,a.kt)("p",null,"While the removal of the rebasing mechanism in December 2020 lead to a new focus on building products for the DAO, the same organizational structure from the start of the DAO remained. After the DAO's rocky experience with new project releases, the beginning of a bear market, and a slow attrition of contributors and the token price, it became clear that the old model needed to be reconsidered. In 2022, work began in earnest on the ",(0,a.kt)("em",{parentName:"p"},"Yam ReOrg")," which focuses on overhauling the way the DAO gets work done by focusing on distributing grants to project teams directly and empowering token holders to determine the future of the DAO."),(0,a.kt)("p",null,"This is where YAM stands today. The rest of the history is yet to be written, and if you want to come add to it then come say hi in the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/qceE8SQjXs"},"Discord")," server or on the ",(0,a.kt)("a",{parentName:"p",href:"https://forum.yam.finance/"},"forums"),"."))}m.isMDXComponent=!0}}]);