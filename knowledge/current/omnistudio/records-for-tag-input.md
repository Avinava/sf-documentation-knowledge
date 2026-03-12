---
title: "Records for Tag Input"
domain: omnistudio
topic: records-for-tag-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:48.726Z
estimatedTokens: 91
keywords: [Records, Tag, Input, representation, records, Interest, Tag.]
---

# Records for Tag Input

> Input representation of records for an Interest Tag.

# Records for Tag Input

Input representation of records for an Interest Tag.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordIds | String[] | The Salesforce object record IDs. | Required | 54.0 |
| tagId | String | The ID of an Interest Tag. | Optional | 54.0 |

## Code Examples

```
{
   "recordsForTag":{
      "tagId":"0TOi000001AWbWugta",
      "recordIds":[
         “001i000001AWbWuabc”,
         001i000001AWbWuabd”
      ]
   }
}
```
