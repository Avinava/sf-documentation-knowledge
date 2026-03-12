---
title: "Interest Tag and Category Create"
domain: psc-api
topic: interest-tag-and-category-create
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.089Z
estimatedTokens: 177
keywords: [Interest, Tag, Category, Output, representation, simultaneously, creating, tags, categories]
---

# Interest Tag and Category Create

> Output representation of the details for simultaneously creating interest tags and
    categories.

# Interest Tag and Category Create

Output representation of the details for simultaneously creating interest tags and categories.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| categories | Category Create Details[] | List of categories that are created. | Small, 65.0 | 65.0 |
| errors | Interest Tag and Category Error Details[] | List of errors that occurred during the operation. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | Small, 65.0 | 65.0 |
| tags | Tag Create Details[] | List of tags that are created. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "categories": [
    {
      "id": "0qRxx00000001tlEAA",
      "name": "Insurance"
    }
  ],
  "errors": [],
  "isSuccess": true,
  "tags": [
    {
      "id": "0qOxx0000004CvQEAU",
      "name": "Term"
    },
    {
      "id": "0qOxx0000004CvREAU",
      "name": "Life"
    }
  ]
}
```

## Related Topics

- Category Create Details (atlas.en-us.psc_api.meta/psc_api/connect_responses_category_created_result.htm)
- Interest Tag and Category Error Details (atlas.en-us.psc_api.meta/psc_api/connect_responses_interest_tag_and_category_error_output.htm)
- Tag Create Details (atlas.en-us.psc_api.meta/psc_api/connect_responses_tag_created_output.htm)
