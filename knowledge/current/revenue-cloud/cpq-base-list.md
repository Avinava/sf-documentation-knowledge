---
title: "CPQ Base List"
domain: revenue-cloud
topic: cpq-base-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.393Z
keywords: [CPQ, Base, List]
---

# CPQ Base List

# CPQ Base List

Output representation of the list of catalogs, categories, or products based on the request.

JSON example

This example shows a sample catalog list.

```

```

This example shows a sample category list.

```

```

This example shows a sample product list.

```

```

This example shows a sample of the list of products retrieved based on the Laptop search term.

```

```

This example shows a sample of the results of a qualification procedure that’s executed on a list of product IDs.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| api​Status | API Status | Status of the API request. | Small, 60.0 | 60.0 |
| context​Id | String | ID of the context. | Small, 60.0 | 60.0 |
| correlation​Id | String | Unique ID of the request. | Small, 60.0 | 60.0 |
| cursor | String | Unique ID to represent the position of each product in the dataset. | Small, 60.0 | 60.0 |
| facets | Search Products Facet | Details of the faceted search. | Small, 63.0 | 63.0 |
| limit | Integer | Number of items fetched in the response. | Small, 60.0 | 60.0 |
| offSet | Integer | Offset size from which the item count is fetched. | Small, 60.0 | 60.0 |
| query | Map<String, Object>> | Query that was used for the search request. | Small, 60.0 | 60.0 |
| result | Any response body | Result that contains the list of catalogs, categories, or products as per the requested resource. | Small, 60.0 | 60.0 |
| total | Integer | Number of fetched records. | Small, 60.0 | 60.0 |
| user​Context | User Context | User context details. For example, account ID or contact ID. | Small, 60.0 | 60.0 |