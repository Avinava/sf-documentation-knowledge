---
title: "Categories List (POST)"
domain: revenue-cloud
topic: categories-list-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.251Z
keywords: [Categories, List, POST]
---

# Categories List (POST)

# Categories List (POST)

Get a list of categories and subcategories of a specified catalog. This API is a composite API for Product Discovery.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| catalog​Id | String | ID of the catalog. | Required | 60.0 |
| correlation​Id | String | Unique identifier value that’s attached to the requests and messages, and accepts references to a particular transaction or event chain. | Optional | 60.0 |
| user​Context | User Context Input | User context details. For example, account ID or contact ID. | Optional | 60.0 |

Response body for POST

[CPQ Base List](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_cpq_base_list_output.htm "Output representation of the list of catalogs, categories, or products based on the request.")