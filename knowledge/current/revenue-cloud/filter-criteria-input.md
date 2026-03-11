---
title: "Filter Criteria Input"
domain: revenue-cloud
topic: filter-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.140Z
keywords: [Filter, Criteria, Input]
---

# Filter Criteria Input

# Filter Criteria Input

Input representation of the criteria to filter records based on supported properties.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeType | String | Search attribute type of the facet for a faceted search. Valid values are:ProductStandardProductCustomProductDynamicAttributeProductAttributeStandardProductAttributeCustom | Optional | 63.0 |
| operator | String | Operator used for the filter criteria.The supported operators are:eqincontainsgt—Specifies a greater than criteria. Available from API version 63.0 and later for Number, Date, and Datetime data types only.lt—Specifies a less than criteria. Available from API version 63.0 and later for Number, Date, and Datetime data types only.gte—Specifies a greater than or equal to criteria. Available from API version 63.0 and later for Number, Date, and Datetime data types only.lte—Specifies a less than or equal to criteria. Available from API version 63.0 and later for Number, Date, and Datetime data types only. | Required | 60.0 |
| property | String | Property name to use in the filter, which must be the same as the object field.The supported property is name. | Required | 60.0 |
| value | Object | Value for the filter criteria. | Required | 60.0 |