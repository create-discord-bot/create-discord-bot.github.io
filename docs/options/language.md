---
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Language

There are 2 available flavors of Javascript in create-discord-bot; Javascript, and Typescript.

## Typescript

Typescript is our personal recommendation, due to it's Type-safety and advance Intellisense, you'll be able
to catch bugs before you push your bot into production and improve your developer experience.

### Tools

- **[tsx](https://github.com/esbuild-kit/tsx)** - Default Typescript executor included with create-discord-bot,faster than ts-node and other executors, can also do live-reload.
- **[swc](https://github.com/swc-project/swc)** - Typescript compiler, can minify, mangle, and compress your code to increase performance, faster than babel and others. (Doesn't do type-checking)
- **[tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html)** - Included compiler with Typescript, does typechecking, can also compile to earlier ES versions.

## Javascript

Simpler and easier to use, and less steps needed to execute than Typescript.

:::tip
You can add the following to the top of your Javascript file, to have basic type checking and intellisense
similar to Typescript.

```
// @ts-check
``` 
:::

### Tools
- **[nodemon](https://nodemon.io/)** - Default live-reload executor included, no longer needed if your using NodeJS v19+ which has the `--watch` flag that does something similarly.