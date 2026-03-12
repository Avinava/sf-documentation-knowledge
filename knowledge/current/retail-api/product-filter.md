---
title: "Product Filter"
domain: retail-api
topic: product-filter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.130Z
estimatedTokens: 254
keywords: [Product, Filter, criteria, setProductFilter2]
---

# Product Filter

> This section provides information about Product
   Filter criteria.

# Product Filter

This section provides information about Product Filter criteria.

## setProductFilter2

-   Description: Sets the Product Filter Criteria.
-   Classname: Promotion2BoApiCoreWorkflowSteps
-   Method: setProductFilter

| Property | Description | Required or Optional |
| --- | --- | --- |
| .IncludedProducts | The external IDs of the manual products to include. | Optional |
| .ExcludedProducts | The external IDs of the manual products to exclude. | Optional |
| .Criteria.Category | The external IDs of the manual categories to include. | Optional |
| .Criteria.Subcategory | The external IDs of the manual subcategories to include. | Optional |
| .Criteria.Brand | The external IDs of the manual brands to include. | Optional |
| .Criteria.Package | The external IDs of the manual packages to include. | Optional |
| Criteria.Flavor | The external IDs of the manual flavors to include. | Optional |

This workflow step sets the Filter\_Criteria\_\_c property for promotion and tactic.

```

```

## Code Examples

```
{
    "ExcludedProducts": [...],
    "IncludedProducts" : [...],       // Id List of the manual products. These id's can be SFDC Id's or product external ids
    "Criteria": {
        "Brand" : [...],            // An object where the keys indicate the product level and the values the list of selected items. Id's can be SFDC Id's or product external ids
        "Category" : [...]
    }
}
```
