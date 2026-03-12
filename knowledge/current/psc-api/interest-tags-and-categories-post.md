---
title: "Interest Tags and Categories (POST)"
domain: psc-api
topic: interest-tags-and-categories-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.559Z
estimatedTokens: 217
keywords: [Interest, Tags, Categories, POST, simultaneously, Associate, specific, records]
---

# Interest Tags and Categories (POST)

> Create interest tags and categories simultaneously. Associate existing categories and
    tags with specific records.

# Interest Tags and Categories (POST)

Create interest tags and categories simultaneously. Associate existing categories and tags with specific records.

This API supports creating up to 10 categories and 200 tags in total per request.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| interestTags | Interest Tag and Category Item Input[] | List of tag categories and interest tags. | Required | 65.0 |

Response body for POST

[Interest Tag and Category Create](atlas.en-us.psc_api.meta/psc_api/connect_responses_interest_tag_and_category_create_output.htm "Output representation of the details for simultaneously creating interest tags and categories.")

## Code Examples

```
/connect/interest-tags/tags-and-categories
```

```
https://yourInstance.salesforce.com/services/data/66.0/connect/interest-tags/tags-and-categories
```

```
{
  "interestTags": [
    {
      "categoryName": "Financial Planning",
      "categoryDescription": "Financial planning description.",
      "categoryIcon": "custom:custom45",
      "categoryId": "0qRxx000000001dEAA",
      "tags": [
        {
          "tagName": "Budgeting",
          "tagDescription": "Budgeting description.",
          "recordId": "001xx000003DGQyAAO",
          "tagId": "0qOxx0000004CKKEA2"
        }
      ]
    }
  ]
}
```

## Related Topics

- Interest Tag and Category Item
                                    Input[] (atlas.en-us.psc_api.meta/psc_api/connect_requests_interest_tag_and_category_item_input.htm)
- Interest Tag and
              Category Create (atlas.en-us.psc_api.meta/psc_api/connect_responses_interest_tag_and_category_create_output.htm)
