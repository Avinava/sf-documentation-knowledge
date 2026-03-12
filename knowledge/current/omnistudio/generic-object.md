---
title: "Generic Object"
domain: omnistudio
topic: generic-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.451Z
estimatedTokens: 76
keywords: [Generic, Input, attributes]
---

# Generic Object

> Input for generic object attributes.

# Generic Object

Input for generic object attributes.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| value | Object | Field name-value pairs or a list of grouped field name-value pairs. | Required | 57.0 |

## Code Examples

```
{
  "value": [
    {
      "Participant": "003xx000004WhGKAA0",
      "Status": "Active",
      "age_of_participant": 30
    },
    {
      "Participant": "003xx000004WhGdAAK",
      "Status": "Active",
      "age_of_participant": 20
    }
  ]
}
```
