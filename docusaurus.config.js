// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Import docusaurus-lib-list-remote
const listRemote = require('./docusaurus-lib-list-remote.js')

// Define external repository
// example (for https://github.com/ethereum/EIPs/tree/master/):
//   listRemote.createRepo('ethereum', 'EIPs', 'master')
const siloDocs = listRemote.createRepo(
  'rossgalloway', 
  'YAM-Project-Silos', 
  'master'
)

const YAMDocs = listRemote.createRepo(
  "rossgalloway",
  "YAM-documentation",
  "master"
);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "YAM Information Repository",
  tagline: "Your one-stop shop for YAM Governance and Project info",
  url: "https://rossgalloway.github.io",
  baseUrl: "/docs-website/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/yamfavicon.ico",
  staticDirectories: ["static", "docs/siloDocs"],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rossgalloway", // Usually your GitHub org/user name.
  projectName: "docs-website", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  /*
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  */
/*
  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "remote-silos", // used by CLI, must be path safe
        id: "remoteSilos",
        outDir: "docs/siloDocs", // the base directory to output to.
        //noRuntimeDownloads: "true",

        // helper function to reduce duplication
        // (as sourceBaseUrl can be built with information passed to `repo`)
        sourceBaseUrl: listRemote.buildRepoRawBaseUrl(siloDocs),

        // main usage: list remote files from the repo for a given list of path filters
        // and optionally the second list of filters for files to be excluded
        documents: listRemote.listDocuments(
          siloDocs,
          ["*"],
          [".gitignore"]
        ),
      },
    ],

    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "yam-docs", // used by CLI, must be path safe
        id: "remoteDocs",
        outDir: "docs/yamDocs", // the base directory to output to.
        //noRuntimeDownloads: "true",

        // helper function to reduce duplication
        // (as sourceBaseUrl can be built with information passed to `repo`)
        sourceBaseUrl: listRemote.buildRepoRawBaseUrl(YAMDocs),

        // main usage: list remote files from the repo for a given list of path filters
        // and optionally the second list of filters for files to be excluded
        documents: listRemote.listDocuments(
          YAMDocs,
          ["*"],
          ["old-docs/*", "Tutorials/github.md", "Tutorials/images/*", "readme.*"]
        ),
      },
    ],
  ],
*/
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // sidebarCollapsed: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "YAM Information Repository",
        logo: {
          alt: "YAM emoji logo",
          src: "img/yam-emoji-windows.png",
        },
        items: [
          {
            type: "doc",
            docId: "yamDocs/docStart",
            /*position: "left",*/
            label: "YAM Documentation",
          },
          {
            type: "doc",
            docId: "siloDocs/silo-readme",
            /*position: "left",*/
            label: "Silo and Grant Documents",
          },
          /*
          {
            type: "doc",
            docId: "siloDocs/silo-readme",
            position: "left",
            label: "YIPs",
          },
          */
          {
            to: "/blog",
            label: "Blog",
            /*position: "left",*/
          },
          {
            href: "https://yam.finance",
            label: "Main YAM Website",
            position: "right",
          },
        ],
      },
      announcementBar: {
        id: "announcement-bar",
        content:
          "This website is still being built and is in beta, please be patient. If you would like to help build it, come say hi in the discord",
        // backgroundColor: "#00D184",
        // textColor: "#d1004d",
        isCloseable: false,
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "Github",
            href: "https://github.com/yam-finance",
          },
          {
            label: "Discord",
            href: "https://discord.gg/kHUz6EVAKt",
          },
          {
            label: "Twitter",
            href: "https://twitter.com/YamFinance",
          },
          {
            html: `
              <p>❤️🚀🍠 Copyright and related rights waived via 
            <a href="https://creativecommons.org/publicdomain/zero/1.0"> CC0 </a>
            </p>
              `,
          },
        ],
        // copyright: '❤️🚀🍠 Copyright and related rights waived via ' <a href="https://creativecommons.org/publicdomain/zero/1.0/")> CC0. </> ' Built with ❤️ by YAM using Docusaurus',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
