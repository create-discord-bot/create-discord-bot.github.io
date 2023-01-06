---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Command Line Arguments

With create-discord-bot you can also add command line arguments when executing the CLI tool to skip questions.
Such as `--p=true`, adding this will skip the prompt for Prettier and enable it too.

## --directory

This option will set the directory where the files are created and skip the prompt for directory in the CLI
tool.

### Aliases

- `dir`
- `d`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --dir=./
```

## --language

This option will the set the language used in your bot and skip the prompt for directory in the CLI tool.

### Options

- `typescript`
- `javascript`

### Aliases

- `lang`
- `l`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --lang=typescript
```

## --logger

This option will set the logger used in your bot and skip the prompt for directory in the CLI tool.

### Options

- `default`
- `pino`

### Aliases

- `log`
- `lo`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --log=pino
```

## --deployment

This option will set the deployment methods that are added and skip the prompt for it in the CLI tool.

### Options

- `guild`
- `global`

### Aliases

- `de`
- `deploy`
- `dep`
- `deployments`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --de=registergu,registergl
```

## --prettier

This option will enable or disable Prettier and skip the prompt for it in the CLI tool.

### Options

- `true`
- `false`

### Aliases

- `prt`
- `pr`
- `p`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --p=true
```

## --eslint

This option will enable or disable ESLint and skip the prompt for it in the CLI tool.

### Options

- `true`
- `false`

### Aliases

- `esl`
- `es`
- `e`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --e=true
```

## --packageManager

This option will set the package manager used by the CLI tool at the end to install the dependencies you can
also set this to "no" if don't want to install the dependencies automatically or don't set it at all to
receive the choices in the CLI tool.

### Options

- `npm`
- `pnpm`
- `yarn`
- `no`

### Aliases

- `pgm`
- `pm`

### Example Usage

```bash
npm init @flzyy/discord-bot@latest --pm=npm
```