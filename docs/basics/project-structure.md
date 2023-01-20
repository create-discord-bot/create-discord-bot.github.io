---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Project Structure

After you've created your project, it should be like this now:

```text
src/
├─ commands/
│  ├─ ping.(js/ts)
├─ events/
│  ├─ interactionCreate.(js/ts)
│  ├─ ready.(js/ts)
├─ types (only if using ts)/
│  ├─ index.d.ts
├─ utils (only if using Pino)/
│  ├─ logger.(js/ts)
├─ index.(js/ts)
├─ register(gu/gl/both).(js/ts)
.env
.eslintignore (only if using eslint)
.eslintrc.JSON (only if using eslint)
.gitignore
.prettierignore (only if using prettier)
.prettierrc.JSON (only if using prettier)
package-lock.json
package.json
tsconfig.json (only if using ts)
```

:::tip
We recommend using the sidebar over to the right to browse through files and directories.
:::

## node_modules/

**This will only be here if you've already installed your dependencies**. It contains all files and scripts for
your installed packages.

## src/

This folder contains all of the files that you will use to create commands, events and
contains your bot's files.

### index.(js/ts)

It is your project's main entry point; it contains the code that initializes all your command and event files.

### register(gl/gu or both).(js/ts)

It is the file used by your project to register the commands to discord's 'backend', so any new commands will show up and can be used. (GL means Global, GU means Guild only. [Learn more](../options/deployment.MD))

### commands/

This folder contains all of the commands for your bot.

#### ping.(js/ts)

The basic starter command returns a WebSocket ping.

### events/

It contains all the events that your bot will call when executed.

#### interactionCreate.(js/ts)

A basic starter event is called when a user attempts to call a slash command. It finds the file in the commands directory and executes them. Passes a [Command Interaction](https://discord.js.org/#/docs/discord.js/main/class/CommandInteraction) object the command uses to gain metadata and reply to the user.

#### ready.(js/ts)

A basic starter event is called once the bot logs into the console online.

### types/

**This folder is only created if you're using Typescript.** Contains types for extending the discord.js module's Client to include a commands property. You are required to keep Typescript from complaining.

#### index.d.ts

A file that contains the types for extending the discord.js module's Client object to include a commands
property.

### utils

**This folder is only created if you're using Pino**. Contains utilities/helpers that will be used by most
or all main files.

#### logger.(js/ts)

Imports logger from Pino and exports it for use by other files.

## .env

This file contains all details that your bot needs to start up. (Token and Client ID)

:::danger
Do not leak this file! Doing so could lead to malicious attempts by people to abuse your bot! If you're using Git
remember to include this in the .gitignore file.
:::

## .eslintignore

**This will only be here if you've enabled ESLint**. Files that ESLint will be ignored in the linting process.

## .eslintrc.JSON

**This will only be here if you've enabled ESLint**. Configuration file for ESLint. [Learn more](https://eslint.org/docs/latest/user-guide/configuring/)

## .gitignore

A file that contains a list of files that will be ignored and not be committed or pushed by Git.

## .prettierignore

**This will only be here if you've enabled Prettier**. Files that Prettier will be ignored in the formatting process.

## .prettierrc.JSON

**This will only be here if you've enabled Prettier**. Configuration file for Prettier. [Learn more](https://prettier.io/docs/en/options.html)

## package-lock.json

**This will only be here if you've already installed dependencies**. An automatically generated file for any operations where npm modifies either the node_modules tree or package.json. [Learn more](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json?v=true)

## package.json

Contains metadata for your bot, such as name, version, description, [devDependencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file), [dependencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file).

## tsconfig.json

**This will only be here if you're using Typescript**. Configuration file for Typescript. [Learn more](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
