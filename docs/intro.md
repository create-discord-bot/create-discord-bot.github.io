---
sidebar_position: 1
slug: /
---

# Introduction

Get up and running in **less than 10 minutes!**

## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, we recommended checking all checkboxes related to dependencies.
- Basic Javascript and NodeJS knowledge.

## Generate a new project

Generate a new Discord bot using the **create-discord-bot CLI tool**.

It will be automatically generated when you run the command:

```bash
npm init @flzyy/discord-bot@latest
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

It should ask you a few questions; answer them, and we can proceed. You can also add [command line arguments](basics/command-line arguments) to skip some questions or be able to skip them all.

```bash
? Where would you like to create the discord bot ?
# This is where you want to put the files for your Discord bot. (./ by default)

? What language do you want to use ? #(Use arrow keys)
❯ Typescript # Recommended, similar to Javascript, gives you type safety and intellisense.
❯ Javascript # Default Javascript.

? What type of logging do you want to use ? #(Use arrow keys)
❯ Default # Default console.log/error/info/warn
❯ Pino # Recommended: low overhead, nicely formatted.

? What deployment method(s) do you want to use ? #(Press space to select, a to toggle, i to invert selection and enter to proceed)
◉ Global # Will add global command deployment.
◯ Guild # Will add guild-only command deployment.

? Do you want to enable ESLint ? #(y/n)
# Recommended, points out errors and bad practices in your code.

? Do you want to enable Prettier ? #(y/n)
# Recommended, formats your code and makes it generally more readable.

# ...

? Would you like to install dependencies now ?
❯ npm
❯ yarn
❯ pnpm
❯ No
```

## Complete the Setup

First, <code>cd</code> into the folder you created (Not needed if you made it in the root directory).

If you chose not to install dependencies now in the CLI tool, run the following command to install dependencies:

```bash
npm install # or pnpm/yarn
```

:::tip Important!
If you haven't already **[created a discord bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html)**, follow the linked guide and get your Bot's Token and Client ID.
:::

Once you've done that, open the newly created <code>.env</code> file; in it, you should see the following:

```text
DISCORD_TOKEN="YOUR TOKEN HERE"
CLIENT_ID="YOUR CLIENT ID HERE"
GUILD_ID="YOUR GUILD ID HERE"
```

Paste your Token and Client ID accordingly. And you should only need to fill in <code>GUILD_ID</code> if you
want to use [guild only deployments](options/deployment.md).

Now, run the following command:

```bash
npm start
```

And you should now see that your bot is online! You might also know that it has the command <code>/ping</code>; run it, and if it replies, your bot is working correctly!
