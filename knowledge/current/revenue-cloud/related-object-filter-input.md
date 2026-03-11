---
title: "Related Object Filter Input"
domain: revenue-cloud
topic: related-object-filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.206Z
keywords: [Related, Object, Filter, Input]
---

# Related Object Filter Input

# Related Object Filter Input

Input representation of the request to filter records of a related object.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | Filter Criteria Input[] | Criteria to filter the related objects. | Required if the relatedObjectFilters property is specified. | 60.0 |
| object​Name | String | Name of the object that’s related to the main object. | Required if the relatedObjectFilters property is specified. | 60.0 |