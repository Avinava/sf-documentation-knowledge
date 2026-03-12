---
title: "Interest Tag Item Input"
domain: psc-api
topic: interest-tag-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.187Z
estimatedTokens: 147
keywords: [Interest, Tag, Item, Input, representation, tags]
---

# Interest Tag Item Input

> Input representation for the details of the interest tags.

# Interest Tag Item Input

Input representation for the details of the interest tags.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordId | String | ID of the record to associate with the interest tag. | Optional | 65.0 |
| tagDescription | String | Description of the interest tag. | Optional | 65.0 |
| tagId | String | ID of the interest tag. | Required if tagName isn't specified. | 65.0 |
| tagName | String | Name of the interest tag. | Required if tagId isn't specified. | 65.0 |

## Code Examples

```
{
  "tags": [
    {
      "tagName": "Budgeting",
      "tagDescription": "Budgeting description.",
      "recordId": "001xx000003DGQyAAO",
      "tagId": "0qOxx0000004CKKEA2"
    }
  ]
}
```
