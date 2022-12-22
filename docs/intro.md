---
sidebar_position: 1
---

# Introduction

Get up and running in **less than 10 minutes!**

## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, we recommended to check all checkboxes related to dependencies.
- Basic Javascript and NodeJS knowledge.

## Generate a new project

Generate a new Discord bot using the **create-discord-bot CLI tool**.

It will be automatically generated when you run the command:

```bash
npx @flzyy/create-discord-bot
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

This should ask you a few questions, just answer all of them and we can proceed.

```bash
? Where would you like to create the discord bot ? 
# This is where you want to put the files for your Discord bot. (./ by default)

? What is the name of your bot ?
# Doesn't really matter, but it's the name included in package.json.

? What language do you want to use ? #(Use arrow keys)
❯ Typescript # Recommended, similar to Javascript but it gives you type safety and intellisense.
❯ Javascript # Default Javascript.

? What type of logging do you want to use ? #(Use arrow keys)
❯ Default # Default console.log/error/info/warn
❯ Pino # Recommended: low overhead, nicely formatted.

? Do you want to enable ESLint ? #(y/n)
# Recommended, points out errors and bad practices in your code. 

? Do you want to enable Prettier ? #(y/n)
# Recommended, formats your code and makes it generally more readable.
```

## Complete the Setup

First <code>cd</code> into the folder you created (Not needed if you created it in the root directory).

Then, run this command to install all of your dependencies.
```bash
  npm install # or `npm i`
```

:::tip Important!
If you haven't already **[created a discord bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html)**, follow the linked guide and get your Bot's Token and Client ID.
:::

Once you've done that open the newly created <code>.env</code> file, in it you should see the following:

```text
DISCORD_TOKEN="YOUR TOKEN HERE"
CLIENT_ID="YOUR CLIENT ID HERE"
```

Paste your Token and Client ID accordingly.

Now, run the following command:

```bash
npm start
```

And you should now see that your bot is online! You might also see that it has the command <code>/ping</code>, run it and if it replies your bot is now properly working!