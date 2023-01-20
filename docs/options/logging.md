---
sidebar_position: 4
---

# Logging

Logging events, errors, and info is a necessary thing to be able to create better functioning and more easily understandable code; that's why create-discord-bot includes options to integrate high-quality loggers into its ecosystem.

## [Pino](https://getpino.io/)

Pino is the recommended option by create-discord-bot and a recommendation of the [Discord.JS Guide](https://discordjs.guide).

Pino is a very low overhead, lightweight logging utility that outputs JSON and can transport its logs to a separate file or both. It can also be prettified/formatted with [pino-pretty](https://www.npmjs.com/package/pino-pretty), transforming it into a more human-readable format.

### Example

![Image of pino and pino-pretty working](https://raw.githubusercontent.com/pinojs/pino-pretty/HEAD/demo.png)
<sub>Courtesy of <a href="https://github.com/pinojs/pino-pretty">pino-pretty</a></sub>

## Default

Normal console.log, error, warn, and info that outputs plain text.

### Adding Color

There are multiple ways to add colour to your logs, one of which is to use [ansi escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors).

```js
console.log("\x1b[32mI'm GREEN\x1b[0m");
// I'm GREEN (in green)
```

However, some libraries can help to ease and abstract the process, such as:

- [Chalk](https://www.npmjs.com/package/chalk) - Small package with easy-to-use chainable functions
- [Pico-colors](https://www.npmjs.com/package/picocolors) - Lightweight and fast.
- [Kleur](https://www.npmjs.com/package/kleur) - Alternative to Chalk.
- [Kolorist](https://www.npmjs.com/package/kolorist) - Alternative to Chalk.

## Other options

There are also other options that might fit your use case better, such as:

- [Winston](https://www.npmjs.com/package/winston) - A logger for just about everything
- [Bunyan](https://www.npmjs.com/package/bunyan) - A simple and fast JSON logging library
- [Bole](https://www.npmjs.com/package/bole) - A tiny JSON logger, optimised for speed and simplicity
