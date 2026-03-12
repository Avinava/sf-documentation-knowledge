---
title: "Interest Tag Categories (GET)"
domain: psc-api
topic: interest-tag-categories-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.521Z
estimatedTokens: 312
keywords: [Interest, Tag, Categories, Retrieve, assigned]
---

# Interest Tag Categories (GET)

> Retrieve a list of tag categories assigned to an Interest
    Tag.

# Interest Tag Categories (GET)

Retrieve a list of tag categories assigned to an Interest Tag.

Resource

```

```

Example for GET

```

```

Available version

54.0

Requires Chatter

No

HTTP methods

GET

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| limit | Integer | The maximum number of tag categories to return in the response. | Optional | 54.0 |
| offset | Integer | The offset for the next set of results. The offset parameter specifies the end of the last batch retrieved. For example, to retrieve 15 tag categories at a time:Request the first 15 with an offset of 0.Request the second 15 with an offset of 15. | Optional | 54.0 |
| orderBy | String | Order the results to display by the tag category name. | Optional | 54.0 |
| sort | String | Sort the results in ascending or descending order. | Optional | 54.0 |
| tagId | String | The ID of an Interest Tag for which you want to get the assigned tag categories. | Required | 54.0 |

Response body for GET

[Tag Category List](atlas.en-us.psc_api.meta/psc_api/connect_responses_tag_category_list.htm "Output representation of a list of tag categories assigned to an Interest Tag.")

## Code Examples

```
/connect/interest-tags/categories
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect
/interest-tags/categories?tagId=0qOxx0000004C94EAE
```

## Related Topics

- Tag Category List (atlas.en-us.psc_api.meta/psc_api/connect_responses_tag_category_list.htm)
