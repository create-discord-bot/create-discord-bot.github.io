---
sidebar_position: 2
---

# Tooling

Tools like ESLint and Prettier come as an option with create-discord-bot.
These tools can aid your development experience greatly by catching some bugs
before production and formatting your code to make it more readable.

## [ESLint](https://eslint.org/)
> ESLint statically analyzes your code to quickly find problems. 
> It is built into most text editors and you can run 
> ESLint as part of your continuous integration pipeline.
>
> *- ESLint.org*

### Editor Setup

If you want to get the live code linting and quick fixes recommendations while you're editing, you can integrate
ESLint into your editor using extensions/addons.

- **[Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**
- **[Jetbrains Webstorm](https://www.jetbrains.com/help/webstorm/eslint.html)**
- **[Sublime Text](https://packagecontrol.io/packages/ESLint)**
- **[Vim/NeoVim](https://github.com/dense-analysis/ale)**

### Configuration

You can [configure ESLint to your liking](https://eslint.org/docs/latest/user-guide/configuring/), to enable or disable certain linting properties or change if it's a warning or error. However there are very high quality preconfigured ESLint configurations that can fast track
your development.

- **[Discord.JS Guide](https://discordjs.guide/preparations/setting-up-a-linter.html#setting-up-eslint-rules)**
- **[Google](https://github.com/google/eslint-config-google)**
- **[Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)**
- **[Facebook](https://www.npmjs.com/package/eslint-config-fbjs)**
- **[ESLint](https://github.com/eslint/eslint/tree/master/packages/eslint-config-eslint)**
- **[Shopify](https://github.com/Shopify/web-foundation/blob/main/packages/eslint-plugin/README.md)**

<a href="https://github.com/dustinspecker/awesome-eslint#configs"><sub>For more configurations visit awesome-eslint.</sub></a>

### Usage

Though it is recommended to use Editor Integration for linting you can still use ESLint's powerful CLI
to lint multiple files or folders at once. [Learn more](https://eslint.org/docs/latest/user-guide/command-line-interface)

You can run the following command to lint specific files:
```bash
npx eslint file1.js src/file2.js lib/file3.js # etc...
```

Or this command for directories and all of it's files:
```bash
npx eslint directory/**/* # ** means all folders and * means all files
```

You can also use globs to select a large amount of files:
```bash
npx eslint *.js # all javascript files in `root`
npx eslint **/*.js #all javascript files in `root` and in all folders that are in `root`.
```

[Learn more about globs](https://en.wikipedia.org/wiki/Glob_(programming)) or [test glob patterns](https://toools.cloud/miscellaneous/glob-tester)


## [Prettier](https://prettier.io/)

> **What is Prettier?**
> - An opinionated code formatter
> - Supports many languages
> - Integrates with most editors
> - Has few options
> 
> **Why?**
> - Your code is formatted on save
> - No need to discuss style in code review
> - Saves you time and energy
> - And more
>
> *- Prettier.io*

### Editor Setup
To get formatting on save, easier usage and better developer experience it's recommended to integrate
Prettier with your editor. Due to this, Prettier has integrations for most code editors. [Learn more](https://prettier.io/docs/en/editors.html)

- **[Visual Studio Code](https://github.com/prettier/prettier-vscode)**
- **[Emacs](https://github.com/prettier/prettier-emacs)**
- **[Vim](https://github.com/prettier/vim-prettier)**
- **[Sublime Text](https://github.com/prettier/vim-prettier)**
- **[Jetbrains Webstorm, Pycharm, etc.](https://prettier.io/docs/en/webstorm.html)**
- **[Visual Studio](https://github.com/madskristensen/JavaScriptPrettier)**
- **[Espresso](https://github.com/eablokker/espresso-prettier)**

[See more](https://prettier.io/docs/en/editors.html)

### Configuration
Though Prettier is opinionated and comes with it's own high quality configuration, you can still change aspects about it. Things like single or double quote, tabs or spaces, etc.. [Read about it here](https://prettier.io/docs/en/options.html)

### Usage

Though it is recommended to use Editor Integration for formatting your code you can still use 
Prettier's powerful CLI to format multiple files or 
folders at once. [Learn more](https://prettier.io/docs/en/cli.html)

You can run the following command to format a specific file:
```bash
npx prettier --write file1.js # --write makes prettier apply it's changes.
```

Or this command for directories and all of it's files:
```bash
npx prettier directory/**/* # ** means all folders and * means all files
```

You can also use globs to select a large amount of files:
```bash
npx prettier *.js # all javascript files in `root`
npx prettier **/*.js #all javascript files in `root` and in all folders that are in `root`.
```

[Learn more about globs](https://en.wikipedia.org/wiki/Glob_(programming)) or [test glob patterns](https://toools.cloud/miscellaneous/glob-tester)