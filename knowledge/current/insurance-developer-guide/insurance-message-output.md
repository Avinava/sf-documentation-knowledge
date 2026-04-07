---
title: "Insurance Message Output"
domain: insurance-developer-guide
topic: insurance-message-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:52.530Z
estimatedTokens: 102
keywords: [Insurance, Message, informational, error]
---

> Output representation of an insurance message, which can be informational or an error.

# Insurance Message Output

Output representation of an insurance message, which can be informational or an error.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | Content of the message. | Small, 65.0 | 65.0 |
| type | String | Type of message, such as Info or Error. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "message": "Plan is eligible for this member.",
  "type": "Info"
}
```
