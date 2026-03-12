---
title: "Flexible Hierarchy Filters Input"
domain: financial-services-cloud-object-reference
topic: flexible-hierarchy-filters-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.361Z
estimatedTokens: 225
keywords: [Flexible, Hierarchy, Filters, Input, representation, filter, conditions, expression, bulk, validation]
---

# Flexible Hierarchy Filters Input

> Input representation for filter conditions and expression used in
        bulk validation.

# Flexible Hierarchy Filters Input

Input representation for filter conditions and expression used in bulk validation.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditions | Flexible Hierarchy Bulk Validation Filter Input[] | List of the conditions based on which the flexible hierarchies are filtered for validation. Each condition defines a field, an operator, and a value. | Optional | 66.0 |
| expression | String | Logical expression that uses the zero-based index, such as 0, 1, and 2, to combine the rules from the conditions list.For example, if you provide three conditions, the expression "0 OR (1 AND 2)" indicates that the API validates hierarchies that match either the first condition (index 0) or both the second (index 1) and third (index 2) conditions together. | Optional | 66.0 |

## Code Examples

```
{
  "conditions": [
    {
      "column": "Name",
      "operator": "Equals",
      "value": "SalesHierarchy"
    },
    {
      "column": "Status",
      "operator": "Equals",
      "value": "Draft"
    }
  ],
  "expression": "0 AND 1"
}
```

## Related Topics

- Flexible Hierarchy Bulk Validation Filter
                                            Input[] (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_flexible_hierarchy_bulk_validation_filter_input.htm)
