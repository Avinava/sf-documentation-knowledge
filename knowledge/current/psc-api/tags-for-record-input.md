---
title: "Tags for Record Input"
domain: psc-api
topic: tags-for-record-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.264Z
estimatedTokens: 93
keywords: [Tags, Record, Input, representation, Interest]
---

# Tags for Record Input

> Input representation of Interest Tags for a record.

# Tags for Record Input

Input representation of Interest Tags for a record.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordId | String | The Salesforce object record ID. | Required | 54.0 |
| tagIds | String[] | The list of the Interest Tag IDs. | Required | 54.0 |

## Code Examples

```
{ 
  "tagsForRecord":{
      "recordId":"001i000001AWbWuabc",
      "tagIds":[
         “0TOi000001AWbWugta”,
         “0TOi000001AWbWugtb”
      ]
   }
}
```
