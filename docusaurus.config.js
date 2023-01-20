// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "create-discord-bot",
  tagline: "Bootstrap your discord bot with blazingly fast speeds.",
  url: "https://create-discord-bot.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "create-discord-bot",
  projectName: "create-discord-bot.github.io",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/create-discord-bot/create-discord-bot.github.io/tree/main/docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        indexBlog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content:
            "create-discord-bot, discord-bot, discord bot, discordjs, discord.js, typescript, javascript, scaffolder, templater, discord, nodejs, eslint, prettier, pino, console",
        },
      ],
      navbar: {
        title: "create-discord-bot",
        hideOnScroll: true,
        logo: {
          alt: "create-discord-bot Logo",
          src: "img/favicon.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Documentation",
          },
          {
            href: "https://github.com/create-discord-bot/create-discord-bot",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            label: "GitHub",
            href: "https://github.com/create-discord-bot/create-discord-bot",
          },
          {
            label: "Website Inspiration",
            href: "https://create-react-app.dev/",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} create-discord-bot, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: "img/og.png",
    }),
};

module.exports = config;
