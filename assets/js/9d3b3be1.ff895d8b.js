"use strict";(self.webpackChunkgovernance_repository=self.webpackChunkgovernance_repository||[]).push([[8125],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(r),p=o,f=h["".concat(l,".").concat(p)]||h[p]||c[p]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9752:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:3,sidebar_label:"Credibly Neutral DAOs"},l="Credibly Neutral, Permissionless DAOs",d={unversionedId:"replantedDocs/A Good DAO/credibly-neutral-daos",id:"replantedDocs/A Good DAO/credibly-neutral-daos",title:"Credibly Neutral, Permissionless DAOs",description:"\ud83d\udca1 Can we make a credibly neutral DAO?",source:"@site/docs/replantedDocs/A Good DAO/credibly-neutral-daos.md",sourceDirName:"replantedDocs/A Good DAO",slug:"/replantedDocs/A Good DAO/credibly-neutral-daos",permalink:"/docs-website/docs/replantedDocs/A Good DAO/credibly-neutral-daos",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Credibly Neutral DAOs"},sidebar:"replantedSidebar",previous:{title:"DAOs are Coordination Mechanisms",permalink:"/docs-website/docs/replantedDocs/A Good DAO/daos-are-coordination-mechanisms"},next:{title:"Good DAOs",permalink:"/docs-website/docs/replantedDocs/A Good DAO/good-daos"}},u={},c=[{value:"Can DAOs be Credibly Neutral?",id:"can-daos-be-credibly-neutral",level:2},{value:"Credible Neutrality",id:"credible-neutrality",level:2},{value:"<strong>Second Order Credible Neutrality</strong>",id:"second-order-credible-neutrality",level:2}],h={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"credibly-neutral-permissionless-daos"},"Credibly Neutral, Permissionless DAOs"),(0,a.kt)("aside",null,"\ud83d\udca1 Can we make a credibly neutral DAO?"),(0,a.kt)("h2",{id:"can-daos-be-credibly-neutral"},"Can DAOs be Credibly Neutral?"),(0,a.kt)("p",null,"In the last section, we explored how DAOs use tokens to coordinate and make decisions in a permissionless way, as well as some of the trade-offs around the speed and complexity of this decision making.  But we didn\u2019t ask where these decisions come from or why we need to make them in the first place. Could we instead make a system that has a robust enough ruleset in which all decisions are trivial?"),(0,a.kt)("p",null,"In fact, we have systems that act almost exactly that way: Ethereum. It too is a system that is constrained by the throughput of data that actors make decisions upon and must communicate across the network. The day to day operations are guided by very clear rule-sets with explicit right and wrong answers, and only in times of crisis or upgrade do subjective questions need to be answered.  "),(0,a.kt)("p",null,"Ethereum (and other blockchains) fit our definition for a DAO quite nicely: \u201cA distributed network of autonomous agents coordinating resources and developing rules to complete some goal or work.\u201d It is a distributed network of nodes coordinating to run a permissionless computational network with a shared state."),(0,a.kt)("h2",{id:"credible-neutrality"},"Credible Neutrality"),(0,a.kt)("p",null,"If Ethereum can be considered a DAO, what does that mean for those of us trying to build other DAOs on top of it? We should start by understanding what makes Ethereum important and valuable. Vitalik Buterin (the inventor of Ethereum) has written about how ",(0,a.kt)("a",{parentName:"p",href:"https://nakamoto.com/credible-neutrality/"},"Credible Neutrality")," is one of the key principals of successful permissionless networks. Credible neutrality is the idea that important infrastructure needs to be provably fair and unbiased. The true value proposition of Ethereum is that the world needs infrastructure that isn't controlled by any one party or state and doesn\u2019t take sides in its use outside the rules defined in its code. It is neutral, and its users, whether they are individuals or nation states, can count on that neutrality."),(0,a.kt)("p",null,"That does not mean that there aren\u2019t values that have grown up around Ethereum and that it will never change. It is a DAO after all, an emergent networks of individual actors, and those are defined by change. But if the actors in the network all agree that credible neutrality is important then the system will be designed to enforce that. Coordinating to do something that is counter to the rules and ethos of the network (i.e. censorship) requires significantly more effort than needed to follow the rules."),(0,a.kt)("p",null,"Can we translate that vision to other, more loosely defined DAOs? Ethereum is often described as a \u201cgovernance minimized\u201d system. There is no token voting and upgrades require significant discussion and deliberation that require the majority of the network nodes to update or the network will fork into 2. This is still a decision making process. Network actors vote through software upgrades and a certain level of consensus must be achieved for the changes to go through."),(0,a.kt)("p",null,"In a DAO with token voting, while the mechanism for making decisions may be slightly different, it does not prevent the DAO from being credibly neutral in how it operates and executes decisions. DAOs have an opportunity to use the neutrality and permissionlessness of Ethereum itself to build their own credibly neutral structures and mechanism."),(0,a.kt)("h2",{id:"second-order-credible-neutrality"},(0,a.kt)("strong",{parentName:"h2"},"Second Order Credible Neutrality")),(0,a.kt)("p",null,"If we describe Ethereum's neutrality as \u201cfirst order neutrality\u201d then we can imagine a DAO can be built on top of it to have \u201csecond order neutrality.\u201d Second order neutrality is an extension of Ethereum's first order neutrality with another, more constrained and specific neutrality that lives at a higher level. Like first order neutrality, as long as all the rules of the system are followed then an action is allowed.  Properly formatted proposals ",(0,a.kt)("em",{parentName:"p"},"must")," be allowed to reach a a governance vote. That element of the DAO is neutral. Whether the proposal passes or fails is not and is decided upon by token holders."),(0,a.kt)("p",null,"The creation and application of the rules that should be followed are carried out by the governance process itself. What constitutes a valid proposal and what resources and systems are needed to enforce that decision must be built into the system. Designers of these systems must consider how to allow anyone to participate and request funding for projects while keeping the treasury safe from attack and freeloading?"),(0,a.kt)("p",null,"Both orders of neutrality require a strong set of rules that participants expect, or better, ",(0,a.kt)("em",{parentName:"p"},"know"),", will be followed. This is what gives the users of the system trust and faith in that system. This is the basis for any long term usage of a neutral system."))}p.isMDXComponent=!0}}]);