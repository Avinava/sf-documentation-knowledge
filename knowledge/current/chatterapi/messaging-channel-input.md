---
title: "Messaging Channel Input"
domain: chatterapi
topic: messaging-channel-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.970Z
estimatedTokens: 154
keywords: [Messaging, Channel, Input, Data]
---

# Messaging Channel Input

> Data required to create a Messaging channel.

# Messaging Channel Input

Data required to create a Messaging channel.

Root XML tag

<messagingChannel>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| external​AccountId | String | ID of an account of the external channel specified in messageType. |  | 57.0 |
| messageType | String | Type of channel. Values are:Facebook—A Facebook message. | Required | 44.0 |
| messaging​PlatformKey | String | ID of the Messaging channel on the external service. This value can be found in the GET response. | Required | 44.0 |

## Code Examples

```
{
  "messageType": "Facebook",
  "messagingPlatformKey": "234420552541404",
  "externalAccountId": "394847389739"
}
```
