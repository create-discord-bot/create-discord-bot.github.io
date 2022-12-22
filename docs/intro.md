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

? Do you want to enable ESLint ? #(y/n)
# Recommended, points out errors and bad practices in your code. 

? Do you want to enable Prettier ? #(y/n)
# Recommended, formats your code and makes it generally more readable.
```

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
