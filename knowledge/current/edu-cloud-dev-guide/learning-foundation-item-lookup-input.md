---
title: "Learning Foundation Item Lookup Input"
domain: edu-cloud-dev-guide
topic: learning-foundation-item-lookup-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.830Z
estimatedTokens: 112
keywords: [Learning, Foundation, Item, Lookup, Input, representation]
---

# Learning Foundation Item Lookup Input

> Input representation of the lookup details for a learning foundation item.

# Learning Foundation Item Lookup Input

Input representation of the lookup details for a learning foundation item.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| foundation​ItemId | String | Learning course ID to be deleted. This ID represents a prerequisite, corequisite, or recommendation to be removed from the learning record. | Optional | 62.0 |

## Code Examples

```
{
  "deleteRecords": [
    {
      "foundationItemId": "0wwLT00000004gLYAQ"
    },
    {
      "foundationItemId": "0wwLT00000004elYAA"
    }
  ]
}
```
