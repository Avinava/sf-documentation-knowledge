---
title: "Recipient Group Input"
domain: comms-developer-guide
topic: recipient-group-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.028Z
estimatedTokens: 165
keywords: [Recipient, Group, Input, representation, recipients, add, remove]
---

# Recipient Group Input

> Input representation of the recipients required to add or remove
      them from a recipient group.

# Recipient Group Input

Input representation of the recipients required to add or remove them from a recipient group.

JSON example

```

```

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recipientsAction | String | Recipient action you want to perform, such as adding or removing a recipient from a group. | Required | 64.0 |
| recipientsList | List <String> | List of recipients that you want to add or removed from a group. | Optional | 64.0 |
| additionalParameters | Map<String, String> | Parameter to include additional parameter. | Optional | 64.0 |

## Code Examples

```
{
  "recipientsAction": "Add/Remove",
  "recipientsList": ["recipientId1", "recipientId2"],
  "additionalParameters": {
       "key1": "value1"
  }
}
```
