---
title: "Categories List (GET)"
domain: revenue-cloud
topic: categories-list-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.273Z
keywords: [Categories, List, GET]
---

# Categories List (GET)

# Categories List (GET)

Retrieve the root-level categories of a catalog based on a catalog ID, or subcategories based on a parent category. You can also search, filter, or sort the categories.

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
| depth | Integer | Number of levels in the category hierarchy to return. The default value is 1. | Optional | 60.0 |
| fields | String[] | For internal use only. | Optional | 60.0 |
| language | String | Custom language that you can specify to get translated data for the fields of an object that's enabled for translation. See Translate Product and Product Category Data. | Optional | 64.0 |
| parent​Category​Id | String | ID of the category to fetch the associated hierarchy of subcategories. If unspecified, then the root-level categories are returned. | Optional | 60.0 |

Response body for GET

[Categories Output](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_categories_output.htm "Output representation of the retrieved categories result.")