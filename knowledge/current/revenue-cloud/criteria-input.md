---
title: "Criteria Input"
domain: revenue-cloud
topic: criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:07.932Z
estimatedTokens: 425
keywords: [Criteria, Input, representation, filter, item]
---

# Criteria Input

> Input representation of the filter criteria item request.

# Criteria Input

Input representation of the filter criteria item request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeType | String | Search attribute type of the facet for a faceted search. Valid values are:ProductStandardProductCustomProductDynamicAttributeProductAttributeStandardProductAttributeCustomThis property is applicable if the Use Indexed Data For Product Listing and Search toggle from the Product Discovery Settings page from Setup is enabled. | Optional | 63.0 |
| criteriaType | String | Type of criteria for the filter. Valid value is:CustomWhereCondition | Required | 60.0 |
| operator | String | Operator used for the filter criteria. The supported operators are:eqincontains—This value isn’t applicable if the Use Indexed Data For Product Listing and Search toggle from the Product Discovery Settings page from Setup is enabled.gt—Specifies a greater than criteria. Available from API version 63.0 and later for Number, Date, and Datetime data types only.lt—Specifies a less than criteria. Available from API version 63.0 and later for Number, Date, and Datetime data types only.gte—Specifies a greater than or equal to criteria. Available from API version 63.0 and later for Number, Date, and Datetime data types only.lte—Specifies a less than or equal to criteria. Available from API version 63.0 and later for Number, Date, and Datetime data types only. | Required | 60.0 |
| property | String | Property name to use in the filter, which must be the same as the object field. | Required | 60.0 |
| value | Object | Value for the filter criteria. | Required | 60.0 |

## Code Examples

```
"criteria":
[{
   "attributeType": "ProductStandard",
   "property": "name",
   "operator": "eq",
   "value": "iPhone"
},
{
   "criteriaType": "CustomWhereCondition",
   "value": "(effectiveenddate = null OR effectiveenddate >= 2024-06-25)"
}
]
```
