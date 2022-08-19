"use strict";(self.webpackChunkgovernance_repository=self.webpackChunkgovernance_repository||[]).push([[8211],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),h=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=h(o),d=a,m=p["".concat(l,".").concat(d)]||p[d]||c[d]||r;return o?n.createElement(m,s(s({ref:t},u),{},{components:o})):n.createElement(m,s({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var h=2;h<r;h++)s[h]=o[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3491:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return h},toc:function(){return c}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),s=["components"],i={slug:"Why",title:"Why?",authors:"ross",tags:["why?"]},l=void 0,h={permalink:"/blog/Why",source:"@site/blog/2022-06-28-why.md",title:"Why?",description:"What are the reasons for this new workflow and how is better than simply using Discourse and other tools? Lets explore some of the reasons why building a governance repo using github, docusaurus, and a few other open source tools is a no-brainer upgrade for YAM.",date:"2022-06-28T00:00:00.000Z",formattedDate:"June 28, 2022",tags:[{label:"why?",permalink:"/blog/tags/why"}],readingTime:9.77,truncated:!0,authors:[{name:"Ross",title:"Governance Repositooooooor",url:"https://github.com/rossgalloway",imageURL:"https://github.com/rossgalloway.png",key:"ross"}],frontMatter:{slug:"Why",title:"Why?",authors:"ross",tags:["why?"]}},u={authorsImageUrls:[void 0]},c=[{value:"Strap in!",id:"strap-in",level:3},{value:"Why Github?",id:"why-github",level:3},{value:"Pros",id:"pros",level:2},{value:"A Decentralized, Permissionless Repository for Documents",id:"a-decentralized-permissionless-repository-for-documents",level:3},{value:"A Single Source of Truth",id:"a-single-source-of-truth",level:3},{value:"(Potential) Cons",id:"potential-cons",level:2},{value:"The GitHub Learning Curve",id:"the-github-learning-curve",level:3},{value:"Another peice of Infrastructure to Maintain",id:"another-peice-of-infrastructure-to-maintain",level:3},{value:"Mapping out the Full DAO Stack",id:"mapping-out-the-full-dao-stack",level:2}],p={toc:c};function d(e){var t=e.components,o=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"What are the reasons for this new workflow and how is better than simply using Discourse and other tools? Lets explore some of the reasons why building a governance repo using github, docusaurus, and a few other open source tools is a no-brainer upgrade for YAM."),(0,r.kt)("h3",{id:"strap-in"},"Strap in!"),(0,r.kt)("p",null,"Not all changes are for the better, and pretty much every change has trade-offs. I set out to build a governance repository because I saw that much of the information about YAM is dispersed over a number of different sites and locations, with different admin rights for each and unclear accuracy. This is something that we are going to need to tackle in the near future, so it makes sense to start thinking about it now. It is important to use the best tools for the job at hand and I believe that we can do this while using the tools that we already rely on, while adding in a few new, open source ones."),(0,r.kt)("h3",{id:"why-github"},"Why Github?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub is free. There is no recurring expense to store our documents there. And there is less risk of losing documents if payments stop because there are no payments in the first place."),(0,r.kt)("li",{parentName:"ul"},'GitHub forces open source work. Publishing to GitHub makes the published documents available to anyone who wants to view or "fork" them.'),(0,r.kt)("li",{parentName:"ul"},'Github is already part of the DAO\'s tech stack and is a common tool among many DAOs. Learning the basics of how GitHub (and git) work is one of those things that everyone that works at a DAO should do. It is a key element in "crypto-literacy".'),(0,r.kt)("li",{parentName:"ul"},'Github uses a "pull model" which allows work to be done in a fully permissionless way, with only the acceptance of that work as the point in which gatekeeping can occur. This coincides well with the Re-Org model that we are trying to instantiate at YAM.'),(0,r.kt)("li",{parentName:"ul"},"Docusaurus, which is used to build the pretty front end, is open source software built with the most common front-end javascript framework, React. It is relateively simple, but if needed also can be very powerful, leveraging the full power of React. It is also the same framework as the main Yam website."),(0,r.kt)("li",{parentName:"ul"},"All of these tools use Markdown as the main way to write the text for the docs and proposals. Markdown is a simple language that allows the writer to focus on the content while ensuring legibility. It is the same text editing method that notion and discourse use, so it can translate between those media quickly and easily.")),(0,r.kt)("p",null,"These are the quick hitting high points, but there are more things to consider, both pros and cons. Lets look at some."),(0,r.kt)("h2",{id:"pros"},"Pros"),(0,r.kt)("h3",{id:"a-decentralized-permissionless-repository-for-documents"},"A Decentralized, Permissionless Repository for Documents"),(0,r.kt)("p",null,"YAM, as a decentralized organization, takes pride in the fact that anyone, anywhere can join the DAO and participate in decision making. As long as you have access to ethereum and choose to buy YAM tokens no one can stop you. In the same way, the Re-Org structure is explicitly designed so that anyone, anywhere can come propose a project to the DAO. This should be as permissionless as possible. And once the proposal and project are approved, the documents need to live somewhere that is easy for DAO voters to find and review."),(0,r.kt)("p",null,"Github provides a way for anyone to come see the existing documents that have been approved, fork the template files, and start working on their own proposals. They can then publicly submit their documents for review within the same platform with built in tools for that review and versioning. The YAM governance system follows a similar permissions structure, where anyone can submit proposals and votes, but the execution of those proposals has a higher bar for acceptance. The Governance and Operations Council (GSC) already operates with the mandate to execute approved proposals, and this model easily extends to merging in GitHub pull requests."),(0,r.kt)("h3",{id:"a-single-source-of-truth"},"A Single Source of Truth"),(0,r.kt)("p",null,"The new YAM Re-Org introduces a number of new processes and documents that anyone applying for a grant, or to start a new project at YAM will need to be familiar with. Getting a new applicant up to speed on how to use each of these documents will have a learning curve and require education, good examples, and documentation. This repository, because it is built on a documentation framework, easily allows for documentation to be presented side by side with the stored documents. It also provides a clean interface to browse through contracts without having to navigate long discussion threads and discord channels."),(0,r.kt)("p",null,"Almost all DAOs already use GitHub as a source of truth for their code and YAM is no different. The code for the DAO smart contracts, on-chain transactions, website, and more all live on GitHub. While GitHub is not perfect, it is an industry standard and if used correctly can be quite censorship resistant. If it is good enough for our code base then it should be good enough for our grant contracts."),(0,r.kt)("p",null,"Looking at a specification document and wondering whether it conforms to the template? It is right there on the site. Wondering what the next step in the process is? If the docs live in the Governance Repository then the answer is just a click away. Want to see how another project wrote a document? It is right there?"),(0,r.kt)("h2",{id:"potential-cons"},"(Potential) Cons"),(0,r.kt)("h3",{id:"the-github-learning-curve"},"The GitHub Learning Curve"),(0,r.kt)("p",null,"GitHub is scary. I get it. I was there a few months ago. I still get confused sometimes when something doesn't work. being told to go to the command line and enter something like this is not good UX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git checkout -b temp\ngit reset --hard {OLDCOMMIT}\ncp /var/my-site/* .\n[commit changes]\ngit merge origin/master\n")),(0,r.kt)("p",null,'But realistically, you don\'t need to use the command line to use GitHub and you can do everything you need for YAM governance within the website and other "normie-friendly" markdown tools. At its core, GitHub, and other development tools are simply fancy collaborative text editors. '),(0,r.kt)("p",null,"This learning curve is only present for the grant applicants. It can all be abstracted away for the voters. We are already insisting that anyone who wants to work for YAM needs to learn and apply for a grant, which is going to be a new process for most applicants. Using github is a small part of that, and if we design the system right, it can make the process easier by making documents more accessible and the process clearer."),(0,r.kt)("p",null,"We will need documentation on how to set up an account, fork the repo, submit pull requests, etc. I am committed to that challenge and believe we can flatten the learning curve! And at the same time, Grant Applicants will come away with an additional skill."),(0,r.kt)("h3",{id:"another-peice-of-infrastructure-to-maintain"},"Another peice of Infrastructure to Maintain"),(0,r.kt)("p",null,'This change adds another workflow into our process. We already have tools that we use. Why not just keep using them? I talked about some of those reasons in the "Pros" section, so I won\'t repeat them. Instead I want to focus on using the right tools for the job. Right now, contributors to the DAO use Discord, Discourse, Notion, and Github as our main collaboration tools, and snapshot and our website for governance. Telegram gets used a bit, but tends to be secondary. We also have our main website to maintain and the different docs, and any other websites that are created (synths, etc).'),(0,r.kt)("p",null,"But what isn't mentioned is that the Governance Repository can ",(0,r.kt)("em",{parentName:"p"},"reduce")," the amount of infrastructure overhead of the DAO. I don't expect the repo (and github in general) to replace Notion, Discord, or Discourse. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Discord is our living room. It is the casual space where discussions happen and news can be announced.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Discourse is where longer form, serious discussions happen, and I expect that it is used alongside the governance repo. Each document in the repo will have a link to the discussion thread. High level conversations of scope, intent, and viability of projects should continue to be discussed there. Detailed conversations of specific content and formatting should happen in github. Both are based on Markdown text editing so they play well together.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Notion is a great tool to work collaboratively, especially with databases and other rich content, and because it also uses markdown, it is relatively easy to go back and forth. But Notion is a tool for teams, and we are building out a DAO that won't have a \"core team\". It isn't permissionless by default, and costs a monthly fee to use. These characteristics make it less suitable as the base layer for DAO governance and information sharing, even if many contributors continue to use it."))),(0,r.kt)("p",null,"What the Governance Repository can replace is Gitbook. Docusaurus (the underlying software the Repo is built on) serves the same purpose as gitbook, focused on documentation. Existing documentation can easily be ported to the Governance Repo to have all our important information in one place, and streamline the working process for updating it. If you can submit a grant proposal, you can update the docs."),(0,r.kt)("p",null,"At the same time, it lessens the burden on Discourse and Notion as the place where our documents live. Neither are fully suited to be permissionless repositories. Instead they can be freed to be the places where conversations about projects happen, and collaboration on projects happens."),(0,r.kt)("h2",{id:"mapping-out-the-full-dao-stack"},"Mapping out the Full DAO Stack"),(0,r.kt)("p",null,"I will end by laying out what tools I see the DAO using and how we do so."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Discord")," and the main ",(0,r.kt)("strong",{parentName:"p"},"YAM website")," together serve as the first place that interested parties go to find out more about the project. They are the starting points that lead to deeper dives into the DAO. Discord is the place for the real time discussions and collaboration. These are for everyone. Those looking for more in depth information on the DAO and how it works can be directed to the ",(0,r.kt)("strong",{parentName:"p"},"Governance Repo")," which would have the most up to date documentation as well as the current, pending, and completed silos.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAM voters and token holders, along with Discord, would use the ",(0,r.kt)("strong",{parentName:"p"},"Governance Repo")," to browse Silos and brush up on how the system works. Discuss the different projects on ",(0,r.kt)("strong",{parentName:"p"},"Discourse"),", and then vote on ",(0,r.kt)("strong",{parentName:"p"},"Snapshot")," and the ",(0,r.kt)("strong",{parentName:"p"},"YAM Website")," (although there are some new tools like ",(0,r.kt)("a",{parentName:"p",href:"https://withtally.com"},"Tally")," that we should look at for voting).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Grant applications would use the ",(0,r.kt)("strong",{parentName:"p"},"Governance Repo")," along with ",(0,r.kt)("strong",{parentName:"p"},"GitHub")," to submit documents. They may wish to use a markdown editor like ",(0,r.kt)("a",{parentName:"p",href:"https://hackmd.io"},"hackmd")," or ",(0,r.kt)("a",{parentName:"p",href:"https://dillinger.io/"},"Dillinger")," or can use their own IDE like vscode. Everything can be done on GitHub.com though. Discussions would happen on ",(0,r.kt)("strong",{parentName:"p"},"Discourse")," and editing and review of the documents will happen there and on ",(0,r.kt)("strong",{parentName:"p"},"GitHub"),". Once they have succeeded in receiving a grant, they can work in whatever software way they want, and the DAO may wish to let them use the ",(0,r.kt)("strong",{parentName:"p"},"Notion"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Governance Facilitatooooors would help users on ",(0,r.kt)("strong",{parentName:"p"},"Discord")," and ",(0,r.kt)("strong",{parentName:"p"},"Discourse"),", and steward proposals through the process. This would include help with writing and uploading silo applications and grant proposals. They would also be responsible for keeping the documentation up to date on the ",(0,r.kt)("strong",{parentName:"p"},"Governance Repo"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Finally, the infrastructure maintainoooors would keep the ",(0,r.kt)("strong",{parentName:"p"},"Governance Repo")," and main ",(0,r.kt)("strong",{parentName:"p"},"YAM website")," up to date and working (both require some skill with javascript and react), as well as make sure the github is in good working order, and merge pull requests that pass vetting and votes. "))),(0,r.kt)("p",null,"All the tools in the stack mentioned above are open source (except notion and discord, but who is counting). "),(0,r.kt)("p",null,"I hope I have convinced you. Thank's for coming to my TED talk."))}d.isMDXComponent=!0}}]);