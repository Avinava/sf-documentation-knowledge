---
title: "Category By ID (GET)"
domain: revenue-cloud
topic: category-by-id-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.866Z
estimatedTokens: 278
keywords: [Category, GET, Retrieve, details, individual, category, records, based, ID.]
---

# Category By ID (GET)

> Retrieve details of individual category records based
      on a category ID.

# Category By ID (GET)

Retrieve details of individual category records based on a category ID.

Resource

```

```

Resource example

```

```

```

```

Available version

60.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 60.0 |
| fields | String[] | For internal use only. | Optional | 60.0 |
| language | String | Custom language that you can specify to get translated data for the fields of an object that's enabled for translation. See Translate Product and Product Category Data. | Optional | 64.0 |

Response body for GET

[Categories Output](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_categories_output.htm "Output representation of the retrieved categories result.")

## Code Examples

```
/connect/pcm/categories/categoryId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/pcm/categories/0ZGT100000000qqOAA
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/pcm/categories/0ZGT100000000qqOAA?language=spanish
```

## Related Topics

- Categories Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_categories_output.htm)
