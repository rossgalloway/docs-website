"use strict";(self.webpackChunkgovernance_repository=self.webpackChunkgovernance_repository||[]).push([[6644],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:4,sidebar_label:"Optimistic Grants"},l="Optimistic Grants",c={unversionedId:"replantedDocs/The New Yam DAO Model/optimistic-grants",id:"replantedDocs/The New Yam DAO Model/optimistic-grants",title:"Optimistic Grants",description:"What are they?",source:"@site/docs/replantedDocs/03-The New Yam DAO Model/optimistic-grants.md",sourceDirName:"replantedDocs/03-The New Yam DAO Model",slug:"/replantedDocs/The New Yam DAO Model/optimistic-grants",permalink:"/docs-website/docs/replantedDocs/The New Yam DAO Model/optimistic-grants",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Optimistic Grants"},sidebar:"replantedSidebar",previous:{title:"Yam Grants",permalink:"/docs-website/docs/replantedDocs/The New Yam DAO Model/yam-grants"},next:{title:"Grants Process",permalink:"/docs-website/docs/replantedDocs/The New Yam DAO Model/the-grants-process"}},p={},d=[{value:"What are they?",id:"what-are-they",level:2},{value:"The full process would be as follows",id:"the-full-process-would-be-as-follows",level:3},{value:"Questions to answer",id:"questions-to-answer",level:3}],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"optimistic-grants"},"Optimistic Grants"),(0,a.kt)("h2",{id:"what-are-they"},"What are they?"),(0,a.kt)("p",null,"Optimistic Grants are a way to streamline the YAM grants process and limit token holder overhead while maintaining security and accountability for the DAO. Optimistic grants are conceived based on inspiration from other \u201coptimistic\u201d models for systems such as Element.fi\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://docs.element.fi/governance-council/council-protocol-smart-contracts/optimistic-grants"},"optimistic grants program"),", Joey Santoro\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/fei-protocol/decentralized-governance-structures-9c4eb8a3e452"},"Optimistic Approval"),", and the way optimistic rollups work."),(0,a.kt)("p",null,"The term \u201coptimistic\u201d refers to the expectation that the person doing the work will complete the work. That is the default state, but there are easy ways to make a dispute in which the matter is escalated to the standard verification methods. Optimistic models use governance as an adjudication layer that is only used if needed. It relies on there being at least one person who is paying attention and willing to make a claim of wrongdoing."),(0,a.kt)("p",null,"In the model described here, once a grant proposal is submitted and approved, the milestone payments for the grant would be paid without a full snapshot vote upon posting of the completion of the milestone, unless an objection is made. Only if an objection is made would the payment be contested and go to a snapshot vote. Unlike the ",(0,a.kt)("a",{parentName:"p",href:"http://Element.fi"},"Element.fi")," version of optimistic grants which uses a specific contract to hold funds, there will still need to be an on-chain vote to pay the grant recipient from the treasury, but this payment would be routine and included in the monthly on-chain transaction.  "),(0,a.kt)("h3",{id:"the-full-process-would-be-as-follows"},"The full process would be as follows"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The grant applicant would go through the application process as described ",(0,a.kt)("a",{parentName:"li",href:"/docs-website/docs/replantedDocs/The%20New%20Yam%20DAO%20Model/the-grants-process"},"here")," in which the scope of work and deliverables for the project are laid out and approved."),(0,a.kt)("li",{parentName:"ol"},"Work begins on the project funded by the grant and when the first deliverable or milestone is completed per the approved grant specification, it would be posted for review."),(0,a.kt)("li",{parentName:"ol"},"If there are no objections then payment for the milestone will be added to the next on-chain transaction. If an objection is raised about the work then it should be posted and reviewed and a snapshot vote created to determine whether the payment or grant contract need to be adjusted."),(0,a.kt)("li",{parentName:"ol"},"After the snapshot vote, the approved path forward is followed and any payment is added to the next on-chain transaction.")),(0,a.kt)("h3",{id:"questions-to-answer"},"Questions to answer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How much time should a milestone be reviewed for before it is paid? There should be a minimum amount of time to ensure that the work can be reviewed and any objections brought up."),(0,a.kt)("li",{parentName:"ul"},"How much time for evidence and rebuttal should be allowed after a milestone is objected to? This needs to be calibrated to prevent griefing attacks where someone submits a protracted objection to prevent timely payment, but also allow enough time for governance to understand if the contract has been breached."),(0,a.kt)("li",{parentName:"ul"},"What kind of process, templates, and documentation is needed for effective oversight? A document that explains why the payment is being objected to with evidence and rationale sets the standard for effective objections.")))}h.isMDXComponent=!0}}]);