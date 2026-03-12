---
title: "Interest Tag"
domain: psc-api
topic: interest-tag
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.086Z
estimatedTokens: 142
keywords: [Interest, Tag, Output, representation]
---

# Interest Tag

> Output representation of the details of an Interest
    Tag.

# Interest Tag

Output representation of the details of an Interest Tag.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| categories | Tag Category[] | The categories assigned to an Interest Tag. | Small, 54.0 | 54.0 |
| name | String | The name of an Interest Tag. | Small, 54.0 | 54.0 |
| recordAssignmentId | String | The record assignment ID of an Interest Tag and a record. | Small, 54.0 | 54.0 |
| tagId | String | The ID of an Interest Tag. | Small, 54.0 | 54.0 |

## Code Examples

```
{
    "categories" : [ {
      "categoryId" : "0qRxx0000000001EAA",
      "name" : "life",
      “icon” : “custom:custom11”,
    } ],
    "name" : "school",
    "tagId" : "0qOxx0000004C92EAE",
    “recordAssignmentId” : “0qRxx0000004C9mm”
  }
```

## Related Topics

- Tag Category (atlas.en-us.psc_api.meta/psc_api/connect_responses_tag_category.htm)
