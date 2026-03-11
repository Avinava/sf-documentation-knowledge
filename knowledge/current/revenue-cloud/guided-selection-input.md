---
title: "Guided Selection Input"
domain: revenue-cloud
topic: guided-selection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.147Z
keywords: [Guided, Selection, Input]
---

# Guided Selection Input

# Guided Selection Input

Input representation of the guided selection details.

JSON example

This input request includes properties from the Products List API. To learn about the other input properties, see [Products List (POST)](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_products_list.htm "HTML (New Window)").

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| guided​Selection​ResponseId | String | Response identifier of the guided selection. | Required if the searchTerms property isn’t specified. | 62.0 |
| searchTerms | Guided Selection Search Term Input[] | Search terms of the guided selection. | Required if the guided​Selection​ResponseId property isn’t specified. | 62.0 |

If both the guided​Selection​ResponseId and searchTerms properties are specified, then the searchTerms property is considered in the input request.