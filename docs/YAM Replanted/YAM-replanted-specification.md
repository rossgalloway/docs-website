---
Reference YGP: 01
title: YAM Replanted Specification Document
status: Draft
author: 'Ross'
created: 2022-06-02
type: Specification Document
sidebar_label: 'Specification Doc 📝'
sidebar_position: 2
---

# YAM Replanted Specification Document 

*This document serves to make the goals, requirements, scope, and risks of a new project clear in order to help inform YAM token holders when making decisions about funding work to build it.*

## Project Summary 📝

### What is the goal and purpose of the project?

   This project aims to build a new framework for the YAM DAO to facilitate better transparency, accountability, and permissionless-ness. It does so by developing a new process by which projects can receive funding. It will clarify the governance process, define and limit the roles of core contributors, and provide an example structure for how DAO-funded projects can be run.

### What problem does the project solve?

   The DAO has struggled to find its purpose and to retain mindshare and contributors. We believe that the causes of this are multi-faceted, including a lack of vision around the mission of the DAO, a lack of thought and investment in the core organizational infrastructure of the DAO, an inability to enforce accountability, and confusion around management of projects.

   In the past, when token holders wanted something done, they proposed a vote and expected someone on the ‘core team’ to fulfill the task. This lead to situations where certain elements of the community expected things from others without any agreement. Contributors were put into working situations they didn’t expect and hadn’t signed up for. The grants system changes this. Grant recipients can work the way they want with the team they want, as long as it is agreed upon in the grant contract. They are their own boss, but with a contractual responsibility to YAM token holders.

## Design and Project Scope 🏗️

### Project Scope

> *What are the different elements that need to be built or designed to complete this project?*

The scope of this project consists generally of the following elements

- design of a new operational and organizational structure for YAM based on a grants model that empowers token holders to make big picture funding decisions and individual actors or groups to apply for funding to do self-directed work for the DAO.
- Full documentation of how a new operating and organizational structure based on a grants model will work and how to use it. This will be via documentation style website.
- Example documents and templates for users of the system to use.
- High level documentation explaining the new system and rationale to token holders who much decide whether they wish to implement it. This will be in the form of a website with blog style posts.
- Design of a "Governance Repository" system to manage and record the decisions and documents produced from running the designed system. This would be a public documents repo where governance and grant proposals are published.

### Alternatives Considered

> *Are there other potential ways to solve this problem? Why choose this one?*

   There are a myriad of ways to try and solve these problems and lots of different DAOs are working to do so. We believe that any solution to these problems must allow YAM to continue to operate with the same ethos that it has in the past: A permissionless, decentralized organization that puts fairness and experimentation at the forefront and doesn’t take shortcuts. We are interested in exploring a system that holds true to these ideals and also functions effectively and accountably.

   In doing so, we will make the following assumptions about how the DAO must operate:

- Anyone `MUST` be able to freely join and leave the DAO at any time.
- The DAO `MUST` not be technically constrained by a limit to the number of token holders or the number of actors who are able to participate in governance.
- The DAO `MUST` not be succeptible to an actor or actors who can exert control over the DAO outside of the accepted mechanisms, namely token voting.
- Anyone who wishes to contribute to the DAO `MUST` be able to apply to do so and their acceptance and compensation `MUST` be be determined by DAO members (token holders).
- All information necessary to participate in the DAO `MUST` be publicly available.
- Participation in the DAO `SHOULD` not be prohibitively expensive in either time or money.

### Project Requirements

> *Describe what characteristics the project `MUST`, `SHOULD`, and `COULD` have.* 

In addition to the assumptions listed in the section above, the ReOrg must have the following additional requirements:

- When complete Token Holders `MUST` be able to understand the new system well enough to vote to implement it. Once implemented, they should be able to use the current communications and voting infrastructure to make decisions about distributing grants to applicants.

- When complete, token holders `SHOULD` know how the first system facilitators (governing council) are elected and be able to elect the facilitators they choose via that mechanism.

- When complete, grant recipients `MUST` be able to understand how to successfully submit an application for a grant and how to go through the process to receive a grant. They must be able to go through this entire process using the existing DAO infrastructure.

- When complete, the facilitators `MUST` be able to successfully guide both token holders and grant recipients through the entire process using existing infrastructure.

- The design `SHOULD` be general enough that it can work if a new on-chain voting mechanism is implemented or governance processes are upgraded.

- The design `SHOULD` only require a similar level of governance participation that the DAO currently has, even if the aim is to increase that participations. If the design can work with less governance overhead and acheive the same goals, that is preferred.

## Participants and User Flow 👨‍🚀

### Participants/Users of the Project

> *List the participants who are expected to use and interact with the project in its expected completed form. Describe what their role is and what skills they need to perform this role.*

#### Token Holders (YAM voters)

   - **Role**: They control the Treasury. They decide on the large scale decisions around the direction of the DAO and what projects to fund.

   - **Necessary Skills**: A token holder should have a basic understanding of how DAOs and blockchains work in order to make good decisions about their development, but not explicit skills are needed. The better educated the token holder, the higher chance that they will govern well.

   - **How they interact with the project**: Token Holders must be able to find information about the workings of the DAO. This includes information about the grants that they need to approve and information about the processes to do so. They interact with the project via discord, discussion forums, github, snapshot votes, and on-chain votes. They should have a web-3 wallet (metamask as the standard) in order to store their tokens and vote on governance actions or delegate voting power.

#### Grant Recipients (builders and developers)

   - **Role**: Build, design, and work on specific parts of Yam or projects to make the DAO or the wider crypto landscape better.

   - **Necessary Skills**: This varies based on the work they are applying to do for the DAO. They should be able to communicate effectively in English and able to navigate the approvals process and the review processes for their work. They should be able to post a document to github, or willing to learn how.

   - **How they interact with the project**: Grant applicants and Recipients interact with the project via discord and the Discourse discussion forum, as well as via github to submit work and documents.

#### System Facilitators

   - **Role**: They make sure that the above 2 parties are able to coordinate and keep the system and DAO working smoothly.

   - **Necessary Skills**: They must understand how the YAM governance process works and be able to guide token holders and grant applicants and recipients through it. The system facilitators who write and vet proposal code should be experienced in writing solidity and using github to review proposals. They should be able to communicate why a proposal or process may be lacking in completeness.

   - **How they interact with the project**: Facilitators will interact with the Discord and  Discourse discussion forums for discussions. Some with use Github to review code and may create snapshot and on-chain votes.

![image](https://user-images.githubusercontent.com/58150151/171889229-053acb81-9ca5-4c3f-9b8f-fc71b7803898.png)

### User Flow

> *What is the full user flow for this project. Is this all part of the scope?*

[insert this info]

## Risks ❗

### Dependencies

> *Are there other projects or contracts that the project will interact with? How will they do so? What are the security risks from these interactions?*

This project will utilize the existing YAM governance contracts and governance infrastructure, including Discord, Discourse, Github, Snapshot, and the YAM website. There are limited changes to the way that the DAO interacts with these pieces of infrastructure. The initial version will not make significant changes to how they are used, but may make suggestions about future improvements and changes.

### Security Assumptions

> *What security assumptions need to be made for this project to be successful?*

The security assumptions for this project are equivalent to the current YAM security assumptions. This project makes the assumption that YAM token holders are capable of making important decisions about the future of the DAO and how to spend the treasury. It makes assumptions that YAM token holders are capable of vetting projects that it chooses to fund.

### Financial Risks

> *Are there financial risks to either the DAO or to users of the project?*

This project does not involve any changes to the way the YAM treasury or YAM token holders interact with the treasury of their own funds. How tokens are stored and used to vote does not change. The authors cannot make any statements about what this project will do for the YAM token price and we consider any gain or loss of value in the YAM token to be out of scope of this proposal.

## Comparable Projects 👀

> *Are there similar examples to the proposal that token holders can use to compare or understand the scope?*

There are other projects that utilized similar governance structures and models to what we are proposing, and while those are not directly applicable, they may be helpful to look at to understand what we are trying to achieve.

<https://docs.synthetix.io/governance/>

<https://docs.element.fi/governance-council/council-protocol-overview>

<https://aavegrants.org/>

<https://compoundgrants.org/>

## Project Time-Frame ⏲️

> *Please provide a rough estimate of the time expected to fulfill different parts of the scope, as well as full completion of the project. This does not need to detail all parts, but should provide a general overview of how long the project may take. More detailed information should live in grant applications*

Projecting a timeframe for this work is difficult as the design portion is hard to predict. But most of the big design questions seem to be clear and mostly answered, and now simply need more documentation. We believe that the full re-org can be presented in July. It then needs review and approval by YAM stakeholders, and following that, work on building out some of the necessary infrastructure like a "governance repository" website that will need to be built. Work for these later peices and other complementary work like a protocol owned liquidity or Treasury Yield distribution specifications can begin when presentations, community input, and consensus building is happening.

We expect work on this project will be ongoing for the next few months at least to build out and develop everything needed to make the Re-Org work.

## Additional Information ❓

> *Please add any additional information here that doesn't have a place to go above and you think is important to fully specify this project.*

No Additional info.

---

:heart: :rocket: :sweet_potato:

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
