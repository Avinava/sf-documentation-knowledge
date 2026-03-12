---
title: "Flexible Hierarchy Bulk Validation Input"
domain: financial-services-cloud-object-reference
topic: flexible-hierarchy-bulk-validation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.358Z
estimatedTokens: 265
keywords: [Flexible, Hierarchy, Bulk, Validation, Input, representation, validate, hierarchies, asynchronously]
---

# Flexible Hierarchy Bulk Validation Input

> Input representation to validate flexible hierarchies in bulk
        asynchronously.

# Flexible Hierarchy Bulk Validation Input

Input representation to validate flexible hierarchies in bulk asynchronously.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filters | Flexible Hierarchy Filters Input | Object that contains filter criteria to dynamically select the flexible hierarchies for validation. | Required if shouldIncludeAllHierarchies is false and hierarchyIds list is empty. | 66.0 |
| hierarchyIds | String[] | IDs of flexible hierarchies for validation.If this list is specified, it takes precedence over the filters parameter. | Required if shouldIncludeAllHierarchies is set to false. | 66.0 |
| shouldInclude​AllHierarchies | Boolean | Indicates whether all the flexible hierarchies that are in draft state must be included for validation (true) or not (false).If set to true, this parameter takes the highest precedence, and values that are specified in hierarchyIds and filters are not considered for validation. | Optional | 66.0 |

## Code Examples

```
{
  "filters": {
    "conditions": [
      {
        "column": "Name",
        "operator": "Equals",
        "value": "SalesHierarchy"
      }
    ],
    "expression": "0"
  },
  "hierarchyIds": [
    "001xx000003DGQyAAO",
    "001xx000003DGQzAAO"
  ],
  "shouldIncludeAllHierarchies": false
}
```

## Related Topics

- Flexible Hierarchy Filters
                                            Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_flexible_hierarchy_filters_input.htm)
