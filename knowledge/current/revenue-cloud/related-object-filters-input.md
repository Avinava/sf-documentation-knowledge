---
title: "Related Object Filters Input"
domain: revenue-cloud
topic: related-object-filters-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.208Z
keywords: [Related, Object, Filters, Input]
---

# Related Object Filters Input

# Related Object Filters Input

Input representation of the request to filter related objects.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | Criteria[] | Criteria to filter the related objects. | Required if the relatedObjectFilters property is specified. | 60.0 |
| objectName | String | API name of the object that’s related to the main object. | Required if the relatedObjectFilters property is specified. | 60.0 |