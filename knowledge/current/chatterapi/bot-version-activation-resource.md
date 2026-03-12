---
title: "Bot Version Activation Resource"
domain: chatterapi
topic: bot-version-activation-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.658Z
estimatedTokens: 278
keywords: [Bot, Version, Activation, Resource, change]
---

# Bot Version Activation Resource

> Get and change the activation information of a bot
    version.

# Bot Version Activation Resource

Get and change the activation information of a bot version.

Resource

```

```

Available version

50.0

HTTP methods

GET, POST

Request body for POST

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | Activation status of the bot version. Values are:ActiveInactiveActivation status must be specified in the status request parameter or the Bot Version Activation Input request body. | Optional | 50.0 |

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | Activation status of the bot version. Values are:ActiveInactiveActivation status must be specified in the status request parameter or the Bot Version Activation Input request body. | Optional | 50.0 |

Response body for GET and POST

[Bot Version Activation Info](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_bot_version_activation_info.htm "Success or failure information of the bot version activation.")

## Code Examples

```
/connect/bot-versions/botVersionId/activation
```

## Related Topics

- Bot Version Activation Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_bot_version_activation_info.htm)
