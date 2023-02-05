---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Command Line Arguments

With create-discord-bot, you can add command line arguments when executing the CLI tool to skip questions.
Such as `--p=true`; adding this will skip the prompt for Prettier and enable it too.

## --directory, --d

This option will set the directory where the files are created.

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --d=./
```

## --language, --l

This option will set the language used in your bot.

### Options

- `typescript`
- `javascript`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --l=typescript
```

## --logger, --o

This option will set the logger used in your bot.

### Options

- `default`
- `pino`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --o=pino
```

## --deployment, --m

This option will set the added deployment methods.

### Options

- `guild`
- `global`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --m=registergu,registergl
```

## --prettier, --p

This option will enable or disable Prettier.

### Options

- `true`
- `false`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --p=true
```

## --eslint, --e

This option will enable or disable ESLint.

### Options

- `true`
- `false`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --e=true
```

## --packageManager, --g

This option will set the package manager used by the CLI tool at the end to install the dependencies you can
also, set this to "no" if you don't want to install the dependencies automatically or don't set it at all to
receive the choices in the CLI tool.

### Options

- `npm`
- `pnpm`
- `yarn`
- `no`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --g=npm
```
