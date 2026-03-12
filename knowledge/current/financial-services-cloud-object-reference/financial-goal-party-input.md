---
title: "Financial Goal Party Input"
domain: financial-services-cloud-object-reference
topic: financial-goal-party-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.342Z
estimatedTokens: 124
keywords: [Financial, Goal, Party, Input, adding, removing, members]
---

# Financial Goal Party Input

> Input for adding or removing financial goal members.

# Financial Goal Party Input

Input for adding or removing financial goal members.

JSON example

In this example, role is a custom field.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of a Person Account that represents a goal member. | At least one required | 59.0 |
| customFields | Map<String, Object> | Custom fields added for a particular banking institution. | Optional | 59.0 |

## Code Examples

```
{
  "accountId": "001xx000003GYyJAAW",
  "customFields": {
    "role": "Auto purchaser"
  }
}
```
