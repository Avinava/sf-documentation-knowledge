---
title: "Product Classification Details Collection"
domain: revenue-cloud
topic: product-classification-details-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.461Z
keywords: [Product, Classification, Details, Collection]
---

# Product Classification Details Collection

# Product Classification Details Collection

Output representation that contains a collection of product classification details along with any processing errors.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Product Catalog Management Error[] | List of errors encountered during the processing of the API request. | Small, 66.0 | 66.0 |
| productClassifications | Product Classification Details[] | List of product classification detail records that match the requested product classification IDs. | Small, 66.0 | 66.0 |
| success | Boolean | Indicates whether the API request is successful (true) or has failed (false). | Small, 66.0 | 66.0 |