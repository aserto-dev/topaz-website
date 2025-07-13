// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Topaz',
  tagline: 'An open-source, self-hosted, fine-grained access control service for cloud native applications',
  url: 'https://www.topaz.sh',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aserto-dev', // Usually your GitHub org/user name.
  projectName: 'topaz', // Usually your repo name.

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    ['docusaurus2-dotenv',
      {
        path: "./.env", // The path to your environment variables.
        safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
        systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
        silent: false, //  If true, all warnings will be suppressed
        expand: false, // Allows your variables to be "expanded" for reusability within your .env file
        defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
      }
    ],
    ['@docusaurus/plugin-google-tag-manager',
      {
        containerId:
            process.env.REACT_APP_GOOGLE_TAG_MANAGER_ID ?? '_',
      }
    ],
    //'docusaurus-plugin-hubspot',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/aserto-dev/topaz-website/edit/main/',
          routeBasePath: "docs",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: process.env.REACT_APP_ALGOLIA_API_KEY || '_',
        indexName: process.env.REACT_APP_ALGOLIA_INDEX_NAME || '_',
        appId: process.env.REACT_APP_ALGOLIA_APP_ID || '_',
        contextualSearch: false,
      },
      navbar: {
        title: 'Topaz',
        logo: {
          alt: 'Topaz Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Why Topaz?',
          },
          {
            type: 'doc',
            docId: 'getting-started/index',
            position: 'left',
            label: 'Docs',
          },
          {
            html: '<img height="18" src="/img/slack-logo.svg" alt="community slack" />',
            position: 'right',
            href: 'https://topaz-authz.slack.com'
          },
          {
            html: '<img width="150px" src="https://img.shields.io/github/stars/aserto-dev/topaz?style=for-the-badge&logo=github&logoColor=%23e7e7e7&logoSize=auto&label=Topaz&labelColor=rgb(36%2C37%2C38)&color=rgb(100%2C100%2C100)&link=https%3A%2F%2Fgithub.com%2Faserto-dev%2Ftopaz" alt="github topaz" />',
            position: 'right',
            href: 'https://github.com/aserto-dev/topaz'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/asertocommunity/shared_invite/zt-yjvq8kwy-M_wtwFO35I9ToJiHg1Tutg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/aserto_com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/aserto-com'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/aserto-dev/topaz',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:maintainers@topaz.sh',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - built with <span role="img" aria-label="heart">❤️</span> by <a href="https://www.aserto.com/" target="_blank">Aserto</a>.`,
      },
      image: 'img/topaz.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'csharp', 'rego', 'ruby', 'java', 'properties'],
      },
      /*
      hubspot: {
        accountId: process.env.REACT_APP_HUBSPOT_ACCOUNT_ID ?? '_'
      },
      */
    }),
};

module.exports = config;
