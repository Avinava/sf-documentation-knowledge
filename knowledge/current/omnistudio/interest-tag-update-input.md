---
title: "Interest Tag Update Input"
domain: omnistudio
topic: interest-tag-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.510Z
estimatedTokens: 144
keywords: [Interest, Tag, Input, representation]
---

# Interest Tag Update Input

> Input representation of an Interest Tag update
      request.

# Interest Tag Update Input

Input representation of an Interest Tag update request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addCategoryIds | String[] | The categories to assign to an Interest Tag. | Optional | 54.0 |
| removeCategoryIds | String[] | The categories to remove from an Interest Tag. | Optional | 54.0 |
| tagDescription | String | The description of an Interest Tag. | Optional | 54.0 |
| tagName | String | The name of an Interest Tag. | Optional | 54.0 |

## Code Examples

```
{
   "tagDescription":"High networth group",
   "tagName":"High networth",
   "addCategoryIds":[
      "0ZOi000001CkbWugnd",
      "0ZOi000001CkbWugne",
      "0ZOi000001CkbWugnf"
   ],
   "removeCategoryIds":[
      "0ZOi000001CkbWnnnn",
   ]
}
```
