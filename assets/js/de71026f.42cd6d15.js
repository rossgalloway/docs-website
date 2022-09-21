"use strict";(self.webpackChunkgovernance_repository=self.webpackChunkgovernance_repository||[]).push([[8816],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},309:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=["components"],s={sidebar_label:"Specification Doc \ud83d\udcdd",sidebar_position:1},l="UMA Delegated Voting",c={unversionedId:"siloDocs/umaVotingSilo/UMA Voting Specification",id:"siloDocs/umaVotingSilo/UMA Voting Specification",title:"UMA Delegated Voting",description:"| Info                  |                                          |",source:"@site/docs/siloDocs/umaVotingSilo/UMA Voting Specification.md",sourceDirName:"siloDocs/umaVotingSilo",slug:"/siloDocs/umaVotingSilo/UMA Voting Specification",permalink:"/docs-website/docs/siloDocs/umaVotingSilo/UMA Voting Specification",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Specification Doc \ud83d\udcdd",sidebar_position:1},sidebar:"siloSidebar",previous:{title:"UMA Delegated Voting",permalink:"/docs-website/docs/siloDocs/umaVotingSilo/"},next:{title:"Application \ud83d\udcdd",permalink:"/docs-website/docs/siloDocs/umaVotingSilo/Grant-001/UMA voting Grant Application 1"}},d={},h=[{value:"Project Summary \ud83d\udcdd",id:"project-summary-",level:2},{value:"What is the goal and purpose of the project?",id:"what-is-the-goal-and-purpose-of-the-project",level:3},{value:"What problem does the project solve?",id:"what-problem-does-the-project-solve",level:3},{value:"YAM / Ecosystem Benefit",id:"yam--ecosystem-benefit",level:3},{value:"Design and Project Scope \ud83c\udfd7\ufe0f",id:"design-and-project-scope-\ufe0f",level:2},{value:"Project Scope",id:"project-scope",level:3},{value:"Step 1. Deploy the contracts necessary to allow a third party to vote in UMA governance with YAM treasury UMA tokens. The following substeps are needed:",id:"step-1-deploy-the-contracts-necessary-to-allow-a-third-party-to-vote-in-uma-governance-with-yam-treasury-uma-tokens-the-following-substeps-are-needed",level:4},{value:"Step 2. The designated voter should do the work to vote on UMA DVM disputes and governance actions as they occur.",id:"step-2-the-designated-voter-should-do-the-work-to-vote-on-uma-dvm-disputes-and-governance-actions-as-they-occur",level:4},{value:"Step 3. Write documentation that helps future delegates and YAM governance participants understand and participate in UMA governance.",id:"step-3-write-documentation-that-helps-future-delegates-and-yam-governance-participants-understand-and-participate-in-uma-governance",level:4},{value:"Alternatives Considered",id:"alternatives-considered",level:3},{value:"Project Requirements",id:"project-requirements",level:3},{value:"Hard Requirements",id:"hard-requirements",level:4},{value:"Soft Requirements",id:"soft-requirements",level:4},{value:"Participants and User Flow \ud83d\udc68\u200d\ud83d\ude80",id:"participants-and-user-flow-",level:2},{value:"Participants/Users of the Project",id:"participantsusers-of-the-project",level:3},{value:"User Group 1",id:"user-group-1",level:4},{value:"User Group 2",id:"user-group-2",level:4},{value:"User Flow",id:"user-flow",level:3},{value:"Risks \u2757",id:"risks-",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Security Assumptions",id:"security-assumptions",level:3},{value:"Financial Risks",id:"financial-risks",level:3},{value:"Comparable Projects \ud83d\udc40",id:"comparable-projects-",level:2},{value:"Project Time-Frame \u23f2\ufe0f",id:"project-time-frame-\ufe0f",level:2},{value:"Additional Information \u2753",id:"additional-information-",level:2}],p={toc:h};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uma-delegated-voting"},"UMA Delegated Voting"),(0,r.kt)("h1",{id:"project-specification"},"Project Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Info"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Project Name"),(0,r.kt)("td",{parentName:"tr",align:null},"UMA Delegated Voting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Author"),(0,r.kt)("td",{parentName:"tr",align:null},"Ross")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"2022.09.12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Discord Handle"),(0,r.kt)("td",{parentName:"tr",align:null},"Ross \ud83c\udf60#2221")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"[draft]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Discourse"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://forum.yam.finance/t/uma-delegated-voting-project-specification/1736"},"UMA Delegated Voting - Project Specification Discussion"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snapshot"),(0,r.kt)("td",{parentName:"tr",align:null},"[Insert link when available]")))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"This document serves to make the goals, requirements, scope, and risks of a new project clear in order to help inform YAM token holders when making decisions about funding work to build it."))),(0,r.kt)("h2",{id:"project-summary-"},"Project Summary \ud83d\udcdd"),(0,r.kt)("h3",{id:"what-is-the-goal-and-purpose-of-the-project"},"What is the goal and purpose of the project?"),(0,r.kt)("p",null,"The purpose of this project is to participate in UMA governance and voting in the UMA DVM oracle using the UMA tokens that the YAM treasury holds. Voting correctly in UMA DVM disputes and governance votes earns UMA (0.05% of the total supply is minted on every vote and given out to voters who voted with the majority). The YAM DAO owns approximately ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x8348c5ec31d486e6e4207fc0b17a906a0806550d"},"41,873 UMA tokens"),", worth approximately $116,400 at the time of writing, which can be used to vote and earn rewards. The Goal is to grow the value and number of UMA tokens that the YAM treasury holds and to continue to cultivate the DAO's relationship with UMA."),(0,r.kt)("h3",{id:"what-problem-does-the-project-solve"},"What problem does the project solve?"),(0,r.kt)("p",null,"Treasury UMA does not earn a return when sitting in the treasury and is not being used to better the UMA protocol and actively increase it's value."),(0,r.kt)("p",null,"If the DAO is committed to having a ongoing relationship with the UMA team and Risk Labs, and also wants to hold UMA and earn a return on that UMA, then this project allows for all of those. Voting earns UMA and the act of discussing and participating in the UMA ecosystem re-affirms our relationship with the UMA protocol."),(0,r.kt)("h3",{id:"yam--ecosystem-benefit"},"YAM / Ecosystem Benefit"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"What value does your project add to YAM and the wider ecosystem? How do we measure that benefit?"))),(0,r.kt)("p",null,"There are 2 main benefits; one direct, and one indirect."),(0,r.kt)("p",null,'The direct benefit are the earned UMA rewards from voting. These vary month by month based on the number of disputes that happen as well as the number of other voters. I have been voting with the UMA on behalf of YAM for the last 2 months and the treasury has earned ~1,285 UMA tokens (valued at $3,520). If we round to 500 UMA per month as an estimate, we can predict roughly 6000 UMA per year earned, which is ~15% APR denominated in UMA tokens. These revenues need to be balanced with the costs to vote (the cost of the grant) to get a "profit" number.'),(0,r.kt)("p",null,"The indirect benefit is that of community building and business development. We have had a fruitful relationship with UMA and the UMA team. While work on YamSynths has stopped for the time being, the UMA team has been supportive of us in the past and are a good connection for the DAO to have. Their oracle product is useful and they continue to look for new innovative use cases for it. The use case for YamSynths has been difficult to get right, but may bear fruit in the future and our continued relationship with UMA adds value to the YAM ecosystem. Voting in governance and DVM disputes helps solidify this relationship, keeps the DAO visible in their community, and provides a way for DAO members to understand UMA products better, with the hope that they may choose to build on top of our existing codebase, or come up with new products."),(0,r.kt)("h2",{id:"design-and-project-scope-\ufe0f"},"Design and Project Scope \ud83c\udfd7\ufe0f"),(0,r.kt)("h3",{id:"project-scope"},"Project Scope"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"What are the different elements that need to be built or designed to complete this project?"))),(0,r.kt)("h4",{id:"step-1-deploy-the-contracts-necessary-to-allow-a-third-party-to-vote-in-uma-governance-with-yam-treasury-uma-tokens-the-following-substeps-are-needed"},"Step 1. Deploy the contracts necessary to allow a third party to vote in UMA governance with YAM treasury UMA tokens. The following substeps are needed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"[optional]"," the DAO should determine who it wants to be its voting delegate for its UMA tokens. (This can be decided later if necessary)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"An instance of UMA's 2-Key designated voting contract needs to be created with the correct YAM governance contract as the owner. The default parameter when creating this contract is that the contract creator will be set as the voting delegate."),(0,r.kt)("p",{parentName:"li"},"This is done by calling the newDesignatedVoting() function on the UMA ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xDE7c02aD2b925587Bd16724810f994a2948c4a38#writeContract"},"designatedVotingFactory")," contract and entering the ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x8b4f1616751117c38a0f84f9a146cca191ea3ec5"},"YAM timelock contract")," in the address field. This can alternately be done using the UMA voting dApp at ",(0,r.kt)("a",{parentName:"p",href:"https://vote.umaproject.org"},"https://vote.umaproject.org")),(0,r.kt)("p",{parentName:"li"},"Once this contract is created, it can be checked according to these instructions: ",(0,r.kt)("a",{parentName:"p",href:"https://contracts.docs.umaproject.org/uma-tokenholders/voting-2key#recommended-verify"},"https://contracts.docs.umaproject.org/uma-tokenholders/voting-2key#recommended-verify"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The DAO should then send a test transaction fund the contract with a test amount of UMA (i.e. 2 UMA) and then withdraw some UMA in order to confirm that the contract works. If some UMA is left over in the contract, the ",(0,r.kt)("em",{parentName:"p"},"designated voter")," can then test the voting process. This can be done as part of one of the monthly on-chain transactions."),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"All code is for reference only and should not be assumed to be totally accurate"))),(0,r.kt)("p",{parentName:"li"}," The code to be used when interacting with the YAM governor would look something like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Send test amount of UMA to twoKeyContract\n\n// set YAM Treasury as contract to interact with\ntargets[x] = address(RESERVES);\n//call oneTimeTransfers() function to send test funds\nsignatures[x] = "oneTimeTransfers(address[],uint256[],address[])";\n   address[] memory whosOne = new address[](1);\n   uint256[] memory amountsOne = new uint256[](1);\n   address[] memory tokensOne = new address[](1);\n   // where to send\n   whosOne[0] = address(twoKeyContract);\n   // How much to send\n   amountsOne[0] = uint256(testDepositAmount);\n   // what token to send\n   tokensOne[0] = address(UMA);\ncalldatas[x] = abi.encode(whosOne, amountsOne, tokensOne);\n\n// Withdraw test amount of UMA from twoKeyContract\n// set twoKeyContract as contract to interact with\ntargets[x+1] = address(twoKeyContract);\n// call withdrawERC20() function\nsignatures[x+1] = "withdrawErc20(address,uint256)";\n// set token and amount to withdraw\ncalldatas[x+1] = abi.encode(address(UMA), uint256(testWithdrawAmount));\n')))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"once the UMA has been sent, the delegate should confirm that they can vote with the contract, claim rewards to the contract, etc.This can all be done via the UMA voting dApp at vote.umaproject.org.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The DAO can choose to change the delegate at this point. It would do so by calling a different function on the 2-key contract called resetMember() with the new delegate in the address field and ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"  in the roleId field. The code would look like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// set twoKeyContract as contract to interact with\ntargets[0] = address(TwoKeyContractAddress);\n//call resetMember() function\nsignatures[0] = "resetMember(uint256, address)";\n// choose role and new delegate address\ncalldatas[0] = abi.encode(1, address(newDelegate));\n')),(0,r.kt)("p",{parentName:"li"},"After the above 5 steps, the balance of the UMA in the treasury can be transferred to the 2-key contract per step 3 above."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"The ",(0,r.kt)("a",{parentName:"em",href:"https://etherscan.io/tx/0xdac43c5cf53ad5e7225908b4330848b877e62e1b19092cae0b23e9e7c718e490/"},"testing was been completed")," as of mid-June, 2022 and the rest of the UMA ",(0,r.kt)("a",{parentName:"em",href:"https://etherscan.io/tx/0x8ca31ff377a6a16fbb2bda36d6f395946f4eeea04859fe45a97a4b6ebec34317"},"was sent to the Two Key Contract")," in mid-July, 2022"))))),(0,r.kt)("h4",{id:"step-2-the-designated-voter-should-do-the-work-to-vote-on-uma-dvm-disputes-and-governance-actions-as-they-occur"},"Step 2. The designated voter should do the work to vote on UMA DVM disputes and governance actions as they occur."),(0,r.kt)("p",null,"UMA DVM disputes can occur at any time, depending on the contracts that are expiring or if there are disputes on the Across Bridge. Voting in these disputes occurs the following day after they are made and last for 48 hours. The first 24 hours are when voting occurs and the next are when the votes are revealed. The voter must participate in both steps, and vote correctly to receive a reward."),(0,r.kt)("h4",{id:"step-3-write-documentation-that-helps-future-delegates-and-yam-governance-participants-understand-and-participate-in-uma-governance"},"Step 3. Write documentation that helps future delegates and YAM governance participants understand and participate in UMA governance."),(0,r.kt)("h3",{id:"alternatives-considered"},"Alternatives Considered"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Are there other potential ways to solve this problem? Why choose this one?"))),(0,r.kt)("p",null,"I see 3 alternatives to doing this work:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Do nothing. Leave the UMA sitting in the YAM Treasury. This costs the least upfront and has no ongoing costs, but the UMA earns nothing and does not grow the relationship between YAM and UMA."),(0,r.kt)("li",{parentName:"ol"},"Invest the UMA somewhere to earn a return on the UMA. This may earn a return on the UMA, although there are not a lot of places to deposit UMA for yield. It probably won't have ongoing maintanence costs, but also probably wont grow the relationship between YAM and UMA."),(0,r.kt)("li",{parentName:"ol"},"Sell the UMA for something else. If the DAO does not want to hold UMA, participate in the ecosystem, or further the relationship with UMA then it could be sold and invested in other ways.")),(0,r.kt)("p",null,"As mentioned above, If the DAO is committed to having a ongoing relationship with the UMA team and Risk Labs, and also wants to hold UMA and earn a return on that UMA, then this project allows for all of those, at the cost of paying someone to vote on behalf of the DAO."),(0,r.kt)("h3",{id:"project-requirements"},"Project Requirements"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Describe what characteristics the project ",(0,r.kt)("inlineCode",{parentName:"em"},"MUST"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"SHOULD"),", and ",(0,r.kt)("inlineCode",{parentName:"em"},"COULD")," have."))),(0,r.kt)("h4",{id:"hard-requirements"},"Hard Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YAM token holders, via governance ",(0,r.kt)("inlineCode",{parentName:"li"},"MUST")," be able maintain control of the UMA that is being voted with.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"YAM token holders, via governance ",(0,r.kt)("inlineCode",{parentName:"li"},"MUST")," be able to change the ",(0,r.kt)("em",{parentName:"li"},"designated voter"),"."),(0,r.kt)("li",{parentName:"ul"},"YAM token holders, via governance ",(0,r.kt)("inlineCode",{parentName:"li"},"MUST")," be able to remove the UMA from the voting contract."),(0,r.kt)("li",{parentName:"ul"},"YAM token holders, via governance ",(0,r.kt)("inlineCode",{parentName:"li"},"MUST")," be able to add UMA to the voting contract."))),(0,r.kt)("li",{parentName:"ul"},"YAM token holders ",(0,r.kt)("inlineCode",{parentName:"li"},"MUST")," be able to see how the ",(0,r.kt)("em",{parentName:"li"},"Designated Voter")," has voted."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"Designated Voter")," ",(0,r.kt)("inlineCode",{parentName:"li"},"MUST NOT")," be able to remove UMA from the contract."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"Designated Voter")," ",(0,r.kt)("inlineCode",{parentName:"li"},"MUST")," be able to vote in all UMA votes."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"Designated Voter")," ",(0,r.kt)("inlineCode",{parentName:"li"},"MUST")," be able to claim voting rewards on behalf of the DAO.")),(0,r.kt)("h4",{id:"soft-requirements"},"Soft Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"Designated Voter")," ",(0,r.kt)("inlineCode",{parentName:"li"},"SHOULD")," provide timely updates on their votes and make it easy to see how they voted."),(0,r.kt)("li",{parentName:"ul"},"There ",(0,r.kt)("inlineCode",{parentName:"li"},"SHOULD")," be documentation that enables a average YAM token holder to understand how the project works."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"Designated Voter")," ",(0,r.kt)("inlineCode",{parentName:"li"},"COULD")," allow YAM token holders to give input in votes, or design a system to automate that input.")),(0,r.kt)("h2",{id:"participants-and-user-flow-"},"Participants and User Flow \ud83d\udc68\u200d\ud83d\ude80"),(0,r.kt)("h3",{id:"participantsusers-of-the-project"},"Participants/Users of the Project"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"List the participants who are expected to use and interact with the project in its expected completed form. Describe what their role is and what skills they need to perform this role."))),(0,r.kt)("h4",{id:"user-group-1"},"User Group 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Role"),": Designated Voter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Necessary Skills"),": Must be able to interact with the UMA smart contracts to vote and understand the UMA system well enough to make decisions about votes that maximize the returns for the DAO. They should be able to communicate their rationale to the UMA and YAM communities.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"How they interact with the project"),": The ",(0,r.kt)("em",{parentName:"p"},"Designated Voter")," will need to be a member of the UMA discord to receive notifications about votes and receive the pertinent information about them. They will vote using existing UMA interfaces (",(0,r.kt)("a",{parentName:"p",href:"https://vote.umaproject.org"},"https://vote.umaproject.org"),") using their own Ethereum wallet and infrastructure. They should be willing to engage in discussions about the validity of disputes and do their best to verify the parameters of the disputes."))),(0,r.kt)("h4",{id:"user-group-2"},"User Group 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Role"),": YAM Token Holder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Necessary Skills"),": They should be able to determine whether the ",(0,r.kt)("em",{parentName:"p"},"Designated Voter")," is doing a good job or not. This includes checking if they have voted and whether they have voted correctly. They should be able to propose a snapshot vote to remove the designated voter if desired and work with Gov-Ops to execute that vote.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"How they interact with the project"),": In the initial stage of the project, token holders can determine if the voter is performing their work by reviewing UMA discord to see votes and check the deployed Two Key Contract to see whether the ",(0,r.kt)("em",{parentName:"p"},"Designated Voter")," has voted and revealed votes. They can either use etherscan to look at the deployed voting contract (",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x8348c5ec31d486e6e4207fc0b17a906a0806550d"},"0x8348c5EC31D486e6E4207fC0B17a906A0806550d"),") or the UMA provided ",(0,r.kt)("a",{parentName:"p",href:"https://dune.com/uma_protocol/uma-protocol"},"Dune dashboard"),"."))),(0,r.kt)("h3",{id:"user-flow"},"User Flow"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"What is the full user flow for this project. Is this all part of the scope?"))),(0,r.kt)("p",null,"Once the Two Key voting Contract is deployed and funded by the treasury (see steps above in scope), the ",(0,r.kt)("em",{parentName:"p"},"Designated Voter"),' will watch for UMA votes to participate in, and when available do the research needed to make an informed, best choice vote. They should review the evidence posted in the "Evidence Rationale" section of the UMA forum and may post their own rationale. Before the end of the commit period, they should connect to ',(0,r.kt)("a",{parentName:"p",href:"https://vote.umaproject.org"},"https://vote.umaproject.org")," to submit their votes, and then return within 24 hours to reveal the votes. If they voted correctly, they will be rewarded with UMA tokens, which they can claim and are deposited into the two key contract to be used for future votes."),(0,r.kt)("p",null,"Yam Token holders can follow along and review this process in real time by querying the Ethereum blockchain and/or using the dune dashboard listed above. If they feel that the ",(0,r.kt)("em",{parentName:"p"},"designated voter")," is not performing their role effectively they can create a proposal to change the voting address in the contract and stop any grants that are being paid out."),(0,r.kt)("h2",{id:"risks-"},"Risks \u2757"),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Are there other projects or contracts that the project will interact with? How will they do so? What are the security risks from these interactions?"))),(0,r.kt)("p",null,"The main dependency here is that the ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x8348c5ec31d486e6e4207fc0b17a906a0806550d#code"},"UMA two key voting contract")," and ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0xde7c02ad2b925587bd16724810f994a2948c4a38#code"},"contract factory"),". If either are flawed and exploitable this would put the treasury owned UMA at risk. The DAO is relying on the engineering skills of the UMA team and their auditors to mitigate this risk. This contract has been used extensively in the past and should be safe."),(0,r.kt)("p",null,"Another risk is that a governance transaction to add or remove UMA from the two key contract could result in lost funds. These transactions should be checked before being executed, as all YAM on-chain transactions are. Generally, the difficulty level with interacting with the two key contract is low, so this should be a small risk."),(0,r.kt)("h3",{id:"security-assumptions"},"Security Assumptions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"What security assumptions need to be made for this project to be successful?"))),(0,r.kt)("p",null,"The security of the two key contract, as mentioned above is the main assumption. Assuming the contract has no hidden problems, there is no way for the ",(0,r.kt)("em",{parentName:"p"},"Designated Voter")," to steal funds or do anything other than vote and claim rewards."),(0,r.kt)("p",null,"Another risk is that a governance transaction to add or remove UMA from the two key contract could result in lost funds. These transactions should be checked before being executed, as all YAM on-chain transactions are. Generally, the difficulty level with interacting with the two key contract is low, so this should be a small risk."),(0,r.kt)("h3",{id:"financial-risks"},"Financial Risks"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Are there financial risks to either the DAO or to users of the project?"))),(0,r.kt)("p",null,"There is no risk of losing funds due to voting poorly as there is no penalty for voting incorrectly, other than missing out of potential rewards. If there is a contract exploit as discussed in the last 2 sections then funds could be at risk. "),(0,r.kt)("p",null,"The price of the UMA token is not something that the DAO or this project can control and like most cryptocurrencies is very volatile."),(0,r.kt)("h2",{id:"comparable-projects-"},"Comparable Projects \ud83d\udc40"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Are there similar examples to the proposal that token holders can use to compare or understand the scope?"))),(0,r.kt)("p",null,"Not that I can think of. If you have any suggestions please let me know!"),(0,r.kt)("h2",{id:"project-time-frame-\ufe0f"},"Project Time-Frame \u23f2\ufe0f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Please provide a rough estimate of the time expected to fulfill different parts of the scope, as well as full completion of the project. This does not need to detail all parts, but should provide a general overview of how long the project may take. More detailed information should live in grant applications"))),(0,r.kt)("p",null,"All of the testing and deployment of the contracts has already been completed. The work still left to be done is the actual voting, which is a continuous job and the time committment will vary by the number and complexity of the different votes and disputes. Based on the prior 2 months of votes, I expect the time committment to be between 5 and 10 hours per month."),(0,r.kt)("p",null,"Creating additional documentation, writing summaries of votes, and potentially creating interfaces to make reviewing the votes easier will take additional time, but they are all secondary to the key mission of voting with the UMA, and can be funded as token holders see fit."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2753"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Please add any additional information here that doesn't have a place to go above and you think is important to fully specify this project."))),(0,r.kt)("p",null,"I have been voting on UMA proposals for the last 2 months. So far I haven't voted incorrectly, although I did miss a reveal period once. You can read posts on the process here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://forum.yam.finance/t/report-on-voting-with-uma/1694"},"https://forum.yam.finance/t/report-on-voting-with-uma/1694")),(0,r.kt)("li",{parentName:"ul"},"Update in June compensation request: ",(0,r.kt)("a",{parentName:"li",href:"https://forum.yam.finance/t/22-07-06-specific-architectures-ross-contributor-compensation-request/1698#voting-with-uma-yambassadors-13"},"https://forum.yam.finance/t/22-07-06-specific-architectures-ross-contributor-compensation-request/1698#voting-with-uma-yambassadors-13")),(0,r.kt)("li",{parentName:"ul"},"Update in July Compensation Request: ",(0,r.kt)("a",{parentName:"li",href:"https://forum.yam.finance/t/22-09-05-specific-architectures-ross-contributor-compensation-request/1730#voting-with-uma-yambassadors-15"},"https://forum.yam.finance/t/22-09-05-specific-architectures-ross-contributor-compensation-request/1730#voting-with-uma-yambassadors-15"))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u2764\ufe0f \ud83d\ude80 \ud83c\udf60"),(0,r.kt)("p",null,"Copyright and related rights waived via ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."))}u.isMDXComponent=!0}}]);