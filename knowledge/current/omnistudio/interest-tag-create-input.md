---
title: "Interest Tag Create Input"
domain: omnistudio
topic: interest-tag-create-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.504Z
estimatedTokens: 137
keywords: [Interest, Tag, Input, representation, creating, Tags]
---

# Interest Tag Create Input

> Input representation for creating Interest Tags.

# Interest Tag Create Input

Input representation for creating Interest Tags.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| categoryId | String | The category ID of an Interest Tag. | Required | 54.0 |
| recordId | String | ID of the record to assign an Interest Tag. | Optional | 54.0 |
| tagDescription | String | The description of an Interest Tag. | Optional | 54.0 |
| tagName | String | The unique name of an Interest Tag. | Required | 54.0 |

## Code Examples

```
{
   "interestTagList":[
      {
         "tagDescription":"Golf",
         "tagName":"Golf",
         "categoryId":"0qRxx0000000001EAA",
         "recordId" : "001xx000003DGQyAAO"
      }
   ]
}
```
