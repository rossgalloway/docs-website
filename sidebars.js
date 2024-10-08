/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  siloSidebar: [
    {
      type: 'autogenerated',
      dirName: 'siloDocs',
    },
  ],

  /*
  silo sidebar mockup
  
  Grant Docs
  │
  ├── Getting Started 
  │   
  ├── Templates category
  │   ├── Specification template.md
  │   ├── grant request template
  │   └── payment request template
  │
  └── Projects category  
      │
      ├── Project 1 category (This is a github repo)
      │    ├── readme.md
      │    ├── Specification doc.md
      │    ├── Grant 1 category
      │    │   ├── Application
      │    │   ├── Payment request 1      
      │    │   ├── Payment request 2
      │    │   └── ...
      │    ├── Grant 2 category
      │    │   ├── Application
      │    │   ├── Payment request 1      
      │    │   ├── Payment request 2
      │    │   └── ... 
      │    ├── Deliverables category (If needed)
      │    └── Other (if needed)
      │
      ├── Project 2 category (This is a github repo)
      │    ├── readme.md
      │    ├── Specification doc.md
      │    ├── Grant 1 category
      │    │   ├── Application
      │    │   ├── Payment request 1      
      │    │   ├── Payment request 2
      │    │   └── ...
      │    ├── Grant 2 category
      │    │   ├── Application
      │    │   ├── Payment request 1      
      │    │   ├── Payment request 2
      │    │   └── ... 
      │    ├── Deliverables category (If needed)
      │    ├── Other (if needed)

  */

  docsSidebar: [
    {
      type: 'autogenerated',
      dirName: 'yamDocs',
    },
  ],

  replantedSidebar: [
    {
      type: 'autogenerated',
      dirName: 'replantedDocs',
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
}

module.exports = sidebars
