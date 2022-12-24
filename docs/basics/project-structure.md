---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Project Structure

After you've created your project it should like this now:

```text
src/
├─ commands/
│  ├─ ping.(js/ts)
├─ events/
│  ├─ interactionCreate.(js/ts)
│  ├─ ready.(js/ts)
├─ types (only if using ts)/
│  ├─ index.d.ts
├─ utils (only if using pino)/
│  ├─ logger.(js/ts)
├─ index.(js/ts)
├─ register.(js/ts)
.env
.eslintignore (only if using eslint)
.eslintrc.json (only if using eslint)
.gitignore
.prettierignore (only if using prettier)
.prettierrc.json (only if using prettier)
package-lock.json
package.json
tsconfig.json (only if using ts)
```

:::tip
We recommend to use the sidebar over to the right to browse through files and directories.
:::
## node_modules/
**This will only be here if you've already installed your dependencies**. Contains all files and scripts for
your installed packages.

## src/
This folder contains all of the files that you will use to create commands, events and
contains your bot's files.

### index.(js/ts)
This is your project's main entry point, it contains the code that initializes all your command and event files.

### register(gl/gu or both).(js/ts)
This is the file used by your project to register the commands to discord's 'backend', so that any new commands will show up and can be used. (GL means Global, GU means Guild only. [Learn more](deployment.md))

### commands/
This folder contains all of the commands for your bot.

#### ping.(js/ts)
Basic starter command, returns websocket ping.

### events/
Contains all of the events that will be called when executed by your bot.

#### interactionCreate.(js/ts)
Basic starter event, is called when user attempts to call a slash command. It finds the file in the commands directory and executes them. Passes a [Command Interaction](https://discord.js.org/#/docs/discord.js/main/class/CommandInteraction) object that is used by the command to gain metadata and reply to the user.

#### ready.(js/ts)
Basic starter event, is called once the bot is online, currently logs to the console.

### types/
**This folder is only created if you're using Typescript.** Contains types for extending the discord.js module's Client to include a commands property. Required to keep Typescript from complaining. 

#### index.d.ts
File that contains that contains the types for extending discord.js module's Client object to include a commands
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
**This will only be here if you've enabled ESLint**. Files that ESLint will ignore linting for.

## .eslintrc.json
**This will only be here if you've enabled ESLint**. Configuration file for ESLint. [Learn more](https://eslint.org/docs/latest/user-guide/configuring/)

## .gitignore
Files that will be ignored and not be commited or pushed by Git.

## .prettierignore
**This will only be here if you've enabled Prettier**. Files that Prettier will ignore formatting for.

## .prettierrc.json
**This will only be here if you've enabled Prettier**. Configuration file for Prettier. [Learn more](https://prettier.io/docs/en/options.html)

## package-lock.json
**This will only be here if you've already installed dependencies**. Contains a list of all packages that were
installed. [Learn more](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json?v=true)

## package.json
Contains metadata for your bot, such as name, version, description, [devDependencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file), [dependencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file).

## tsconfig.json
**This will only be here if you're using Typescript**. Configuration file for Typescript. [Learn more](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)