---
sidebar_position: 3
---

# Deployment

Deployment/registering commands is, in layman's terms, publishing your commands over to Discord's servers. Deploying commands is required; if not done, any metadata about the command, such as command name, description, options, etcetera, will not update, nor will new commands appear.

:::caution
Discord rate limits the amount of deployments you can have per day to 200.
:::

## Global Deployment

Any files in `commands/` that end with `.(js/ts)` will be deployed to all servers.

You can call it by running the following command:

```bash
npm run deploy:global
```

:::tip
You can remove the `GUILD_ID` portion of your .env file if you're only going to be using global deployment.
:::

## Guild Deployment

Any files in `commands/` that end with `.gu.(js/ts)` will be deployed to the guild id written in your .env file.

You can call it by running the following command:

```bash
npm run deploy:guild
```

:::tip
You can get a server's guild id by right-clicking on the server's icon and clicking the `Copy ID` button.
:::

## Where to deploy

> Guild-based deployment of commands is best suited for development and testing in your own personal server.
> Once you're satisfied that it's ready, deploy the command globally to publish it to all guilds that your bot
> is in.
>
> You may wish to have a separate application and token in the Discord Dev Portal for your dev application, to
> avoid duplication between your guild-based commands and the global deployment.
>
> _[discordjs.guide](https://discordjs.guide/creating-your-bot/command-deployment.html#where-to-deploy)_
