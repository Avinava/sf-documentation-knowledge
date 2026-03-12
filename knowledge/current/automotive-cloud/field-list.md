---
title: "Field List"
domain: automotive-cloud
topic: field-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.818Z
estimatedTokens: 98
keywords: [Input, representation, match]
---

# Field List

> Input representation of a field match that contains the field name and value.

# Field List

Input representation of a field match that contains the field name and value.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | Name of the field. | Optional | 60.0 |
| value | Object | Field value of the additional criteria for incoming events. | Optional | 60.0 |

## Code Examples

```
{
  "fieldList": [
    {
      "field": "priority__c",
      "value": "high"
    }
  ]
}
```
