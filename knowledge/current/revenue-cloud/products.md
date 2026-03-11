---
title: "Products"
domain: revenue-cloud
topic: products
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T14:37:50.497Z
keywords: [Products]
---

# Products

# Products

Output representation of the list of retrieved products.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Small, 60.0 | 60.0 |
| count | Integer | Total count of the products matching the request query. | Small, 60.0 | 60.0 |
| facets | Search Facet | Details of the faceted search. This property is applicable if the Use Indexed Data For Product Listing and Search toggle from the Product Discovery Settings page from Setup is enabled. | Small, 63.0 | 63.0 |
| products | Product[] | List of products matching the request query. | Small, 60.0 | 60.0 |
| status | Status | Status of the request. | Small, 60.0 | 60.0 |