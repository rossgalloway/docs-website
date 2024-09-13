---
sidebar_label: 'File Repository Specification Doc 📝'
sidebar_position: 2
---

# YAM Repository Website and File Storage
# Specification Document 

| Info                  |                                      |
| -----------------     | ---------------------------------    |
| Project Name          | Yam Repository Website and File Storage                      |
| Author                | Ross                         |
| Date                  | 2020.09.20                              |
| Discord Handle        | [Discord or TG handle]               |
| Status                | [draft, Final, Approved]             |
| Discourse             | [Insert link when available]         |
| Snapshot              | [Insert link when available]         |

---

> *This document serves to make the goals, requirements, scope, and risks of a new project clear in order to help inform YAM token holders when making decisions about funding work to build it.*

## Project Summary 📝

### What is the goal and purpose of the project?

The purpose of this project is to design, implement, and build a methodology for grant recipients and other contributors to save and store documents and work that are completed while being funded by the Yam DAO. It will also serve as a unified, easy to navigate website for these documents to be viewed.

At heart it is a documentation website build over Github as a content management server. It aims to abstract the website side of things away from contributors and serve as a file system that can be accessed universally.

### What problem does the project solve?

As it currently stands, Contributors to the DAO (including grant recipients) do not have a unified place to save documents and work that they are creating while being funded by the DAO. A key tenet of the Yam Re-Org is the requirement that the work done while funded by a grant be made public or be given directly to YAM token holders in order to receive payment.

The current paradigm typically uses the YAM Discourse server/website and/or github as the places where work is presented, but without a consistent methodology. This makes finding documents and information needed to judge work done more difficult and leaves the door open for work to be lost if a contributor leaves.

Git (the file management system that github uses) is a robust framework for document revision that stores past states of a repository's history and the documents within it. It allows for open editing of documents in tamper evident ways.

### YAM / Ecosystem Benefit

The Yam Re-Org has been focused on reforming the working processes that the DAO uses to get things done. It specifies that grants should be proposed in a particular way with specific documentation and a minimum of information. These requirements are intended so token holders can judge the project's merits and choose to fund it or not. In order to be able to make this judgement, token holders must be able to find this information, and the easier it is to find, the more likely that they make an informed and timely decision.

This project also provides clear guidelines to Grant applicants about where and how their work should be presented and provides an official venue for approved grants to show their work.

In executing this project, we also have to opportunity to address issues around control and fragility of the YAM Github Organization and improve the resiliency of the DAO's online infrastructure.

## Design and Project Scope 🏗️

### Project Scope

> *What are the different elements that need to be built or designed to complete this project?*

This project consists of a few main parts:

- A collection of Github repositories that live within the YAM Github organization. Each Project/Silo would get a repository in which the important documents (requirements docs, grant applications, etc) would be stored. The recipients of the grants for the project would be co-administrators of the repository, shared with members of the gov-ops council.

- A template file structure and template documents that will serve as the basis for the project folder structure. This structure would be standardized across all project/silo repositories so that it can be easily navigated by token holders and other contributors and so that it can be effectively presented via a website managed by the DAO.

- A website that reads from these github repositories and serves the documents contained within them for easy access by the YAM community and token holders. The reference implementation uses the Docusaurus react framework and community built plugins to build the website from the different github repositories. 

    Typical Docusaurus sites have their content and documents live within the file structure of the main website. This website is explicitly designed differently so that contributors can work in their own document repositories that are then pushed to the website automatically.

### Alternatives Considered

> *Are there other potential ways to solve this problem? Why choose this one?*

The first alternative is to not build this and to live with the system that we have. This means posting to the forums and trying to coordinate that way. The issue with this strategy is that Discourse is not intended to be used this way and leads to fragmentation. Some contributors use github, some use notion, some use google docs. Forum posts get discussed, updated, changed, etc and finding the correct information among the many files requires lots of work on the searcher's side, or work to make discourse function in a way it wasn't intended for.

Other tools such as Google Docs or Notion could be used, but they all have trade-offs and aren't as well suited for open source projects.

### Project Requirements

> *Describe what characteristics the project `MUST`, `SHOULD`, and `COULD` have.* 

[replace the text below with Your answer]: #

- When complete, Grant Recipients `MUST` be able to upload files to their repository
- When complete, Token Holders `MUST` be able to view these uploaded files
- When complete, the file structure `MUST` be logical and extendable.
- When complete, The project `MUST` allow markdown files to be uploaded and read.
- When complete, the project `SHOULD` be open source and open to contributions by anyone.
- When complete, the website `SHOULD` be easy to navigate.
- When complete, the website `SHOULD` be recognizable as a YAM website in styling and feel.
- The website `COULD` also contain the YAM documentation, YIP information, and other critical DAO documents.

## Participants 👨‍🚀

### Participants/Users of the Project

> *List the participants who are expected to use and interact with the project in its expected completed form. Describe what their role is and what skills they need to perform this role.*

#### User Group 1

- **Role**: Grant Recipient

- **Necessary Skills**: Grant recipients need to be able to upload and format markdown (.md) files to github via pull requests. Tutorials for how to do this should be provided. They should have a basic understanding of how git works.

- **How they interact with the project**: They can interact either using the github website, desktop application, or directly via an IDE like VSCode. 

#### User Group 2

- **Role**: Token Holders

- **Necessary Skills**: They should be able to navigate a website.

- **How they interact with the project**: They interact with the file system website to view the documents that have been saved there. 

#### User Group 3

- **Role**: Gov-Ops Council

- **Necessary Skills**: The Gov-Ops council must be capable of creating repositories on behalf of grant recipients and help them upload files to them. They should be able to approve pull requests and provide feedback on formatting.

- **How they interact with the project**: Once a grant has been voted on and approved, Gov-Ops should create a new repository in the Yam-finance github for that project/silo. The Grant recipient should receive write access to that repo and either have their documents uploaded for them, or helped to upload. Gov-Ops will then make sure the documents are formatted correctly and review submissions. 

## User Flow 💧

> *What is the full user flow for this project. Is this all part of the scope?*

1. A new Grant applicant has an idea to build something for the DAO and plan to apply for a grant. They navigate to the YAM documentation page (also hosted on the YAM Information Repository website). 
2. They find the template repository and clone the repository to their own hard-drive or their own github account. 
3. They then use the templates for specification and grant application documents and submit their proposal to YAM governance.
4. If / when their grant is accepted, the Gov-Ops council creates a new repository in the YAM Github Organization for their project and adds the grant recipient as an admin for that repository.
5. The grant recipient then makes a pull request to merge their repository with the new repository. 
6. Gov-Ops assists with formatting and when complete and merged, they add the new project github repository to the YAM Information Repository website (It is a few lines of code).
7. Upon completion of grant deliverables and milestones, the grant recipient uploads their documentation to the project repo. They can also post it on the forum and link to the original grant application and specification that is stored on the YAM Information Repository.
8. Token holders review the documents and determine whether the scope of work has been completed. They then release payment of the grant.

## Risks ❗

### Dependencies

> *Are there other projects or contracts that the project will interact with? How will they do so? What are the security risks from these interactions?*

The codebase dependencies of this project include:

- [Github](https://github.com/) as the main file storage layer.
- [Docusaurus](https://docusaurus.io/) as the open source react framework to build the website.
- [Docusaurus-plugin-remote-content](https://github.com/rdilweb/docusaurus-plugin-remote-content) to pull data from github
- [docusaurus-lib-list-remote](https://github.com/1amcode/docusaurus-lib-list-remote) to select the files to pull. This is a modification to the remote content plugin.

full list from the docusaurus build:
``` json
  "dependencies": {
    "@docusaurus/core": "^2.0.1",
    "@docusaurus/preset-classic": "^2.0.1",
    "@mdx-js/react": "^1.6.22",
    "clsx": "^1.1.1",
    "docusaurus-plugin-remote-content": "^3.1.0",
    "minimatch": "^5.1.0",
    "octokit": "^1.8.1",
    "prism-react-renderer": "^1.3.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "^2.0.1"
  },
```

### Security Assumptions

> *What security assumptions need to be made for this project to be successful?*

The security assumptions made are:

- The open source software used to make this site are mostly bug free.
- Github is a safe place to store files and that the DAO will not get de-platformed (see tornado cash). If this is a significant concern then we should be actively looking to use more decentralized products like radicle.
- That a security model can be designed to limit the power grant recipients have in the github organization while still allowing them to work effectively and use the repositories.

### Financial Risks

> *Are there financial risks to either the DAO or to users of the project?*

There are no explicit financial risks to the DAO other than the cost to build out the system and site.

## Comparable Projects 👀

> *Are there similar examples to the proposal that token holders can use to compare or understand the scope?*

I don't know of any exactly comparable projects, but the best mental model for this projects is a cross between a documentation site and web hosting. Many other projects use Docusaurus for their documentation needs. Notable projects include [Yearn documentation](https://docs.yearn.finance/) and [Polkadot](https://wiki.polkadot.network/). Almost all crypto projects use github as their code repository. Many also use it for documentation and storing other information. In the end, Github is just cloud storage for text files (and occasional other files).

## Project Time-Frame ⏲️

> *Please provide a rough estimate of the time expected to fulfill different parts of the scope, as well as full completion of the project. This does not need to detail all parts, but should provide a general overview of how long the project may take. More detailed information should live in grant applications*

Much of the work to build this has been done already as part of the Yam Re-Org grant. It requires another few months of part time work to clean up and work out some of the issues. 

## Additional Information ❓

> *Please add any additional information here that doesn't have a place to go above and you think is important to fully specify this project.*



---

:heart: :rocket: :sweet_potato:

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
