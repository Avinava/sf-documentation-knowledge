---
title: "Flexible Hierarchy Bulk Validation (POST)"
domain: financial-services-cloud-object-reference
topic: flexible-hierarchy-bulk-validation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.439Z
estimatedTokens: 501
keywords: [Flexible, Hierarchy, Bulk, Validation, POST, Validate, multiple, hierarchies, asynchronously, providing, IDs, applying, filter, criteria, selecting]
---

# Flexible Hierarchy Bulk Validation (POST)

> Validate multiple flexible hierarchies asynchronously by providing a list of IDs,
      applying filter criteria, or selecting all draft hierarchies.

# Flexible Hierarchy Bulk Validation (POST)

Validate multiple flexible hierarchies asynchronously by providing a list of IDs, applying filter criteria, or selecting all draft hierarchies.

This API processes the input parameters in a strict order of precedence. The shouldIncludeAllHierarchies parameter takes the highest precedence over hierarchyIds and filters. If shouldIncludeAllHierarchies is set to false, then the specified list of hierarchyIds are considered for validation. If shouldIncludeAllHierarchies is set to false and hierarchyIds list isn't specified, then the filter parameter is used to select the hierarchies for validation.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filters | Flexible Hierarchy Filters Input | Object that contains filter criteria to dynamically select the flexible hierarchies for validation. | Required if shouldIncludeAllHierarchies is false and hierarchyIds list is empty. | 66.0 |
| hierarchyIds | String[] | IDs of flexible hierarchies for validation.If this list is specified, it takes precedence over the filters parameter. | Required if shouldIncludeAllHierarchies is set to false. | 66.0 |
| shouldInclude​AllHierarchies | Boolean | Indicates whether all the flexible hierarchies that are in draft state must be included for validation (true) or not (false).If set to true, this parameter takes the highest precedence, and values that are specified in hierarchyIds and filters are not considered for validation. | Optional | 66.0 |

Response body for POST

[Flexible Hierarchy Bulk Validation Details](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_flexible_hierarchy_bulk_validation.htm "Output representation to display the status of bulk validation request.")

## Code Examples

```
/connect/flexible-hierarchies/actions/bulk-validate
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/flexible-hierarchies/actions/bulk-validate
```

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
- Flexible
                     Hierarchy Bulk Validation Details (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_flexible_hierarchy_bulk_validation.htm)
