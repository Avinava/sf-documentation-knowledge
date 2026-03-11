---
title: "Product Classification Details Input"
domain: revenue-cloud
topic: product-classification-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.170Z
keywords: [Product, Classification, Details, Input]
---

# Product Classification Details Input

# Product Classification Details Input

Input representation of the request to fetch details of product classification records, including their attributes and attribute categories.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| catalogSystems | String[] | Name of the catalog system. Valid value is:epc—Enterprise Product Catalog | Optional | 66.0 |
| product​ClassificationIds | String[] | List of product classification IDs for which you want to retrieve product details. In the epc catalog system, these values are the Product2 record IDs. | Required | 66.0 |