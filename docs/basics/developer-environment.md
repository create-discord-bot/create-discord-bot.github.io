---
sidebar_position: 3
---

# Developer Environment

## Scripts

Scripts or NPM scripts are ways to create reusable bash/shell commands such as:

```JSON
"scripts": {
    "hi": "echo \"hello world\"",
},
```

And can be executed using the following syntax.

```bash
npm run SCRIPT_NAME

# or in special cases such as `start`

npm start
```

| name            | description                                                                            | requirement                  |
| --------------- | -------------------------------------------------------------------------------------- | ---------------------------- |
| `start`         | uses nodemon/TSX to start your Discord bot with live reloading.                        | None                         |
| `deploy:global` | Deploys your Discord bot's commands globally. [Learn more](../options/deployment.md)   | Have global deployment added |
| `deploy:guild`  | Deploys your Discord bot's commands in a guild. [Learn more](../options/deployment.md) | Have guild deployment added  |

## ENV

The `.env` file in your root directory contains secret information about your discord bot required for the
bot to function correctly.

:::danger
Do not leak this file! Doing so could lead to malicious attempts by people to abuse your bot! If you're using Git, remember to include this in the .gitignore file.
:::

### Configuration

| name            | description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `DISCORD_TOKEN` | Your Discord bot's token is used by the code to log in.                                   |
| `CLIENT_ID`     | Your Discord bot's client id is used by the code to deploy your commands.                 |
| `GUILD_ID`      | Your Discord bot's guild id is used by the code to deploy your commands with guild scope. |
