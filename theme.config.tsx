import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>create-discord-bot</span>,
  project: {
    link: "https://github.com/create-discord-bot/create-discord-bot.github.io",
  },
  docsRepositoryBase:
    "https://github.com/create-discord-bot/create-discord-bot.github.io/tree/main/pages",
  footer: {
    text: `Copyright © ${new Date().getFullYear()} create-discord-bot.`,
  },
};

export default config;
