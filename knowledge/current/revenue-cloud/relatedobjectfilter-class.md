---
title: "RelatedObjectFilter Class"
domain: revenue-cloud
topic: relatedobjectfilter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.950Z
estimatedTokens: 530
keywords: [RelatedObjectFilter, Represents, filter, related, objects, used, product, search, discovery, allowing, products, based, criteria., criteria, objectName]
---

# RelatedObjectFilter Class

> Represents a filter for related objects used in product search and discovery, allowing you to filter products based on related object criteria.

# RelatedObjectFilter Class

Represents a filter for related objects used in product search and discovery, allowing you to filter products based on related object criteria.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[RelatedObjectFilter Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_RelatedObjectFilter.htm#apex_runtime_industries_cpq_RelatedObjectFilter_properties)**
    Learn more about the properties available with the RelatedObjectFilter class.

## RelatedObjectFilter Properties

Learn more about the properties available with the RelatedObjectFilter class.

The RelatedObjectFilter class includes these properties.

-   **[criteria](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_RelatedObjectFilter.htm#apex_runtime_industries_cpq_RelatedObjectFilter_criteria)**
    Get or set the list of filter criteria to apply to the related object.
-   **[objectName](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_RelatedObjectFilter.htm#apex_runtime_industries_cpq_RelatedObjectFilter_objectName)**
    Get or set the name of the related object to filter by, such as "Account" or "Opportunity".

### criteria

Get or set the list of filter criteria to apply to the related object.

#### Signature

public List<runtime\_industries\_cpq.FilterCriteriaInputRepresentation> criteria {get; set;}

#### Property Value

Type: List<runtime\_industries\_cpq.FilterCriteriaInputRepresentation>

### objectName

Get or set the name of the related object to filter by, such as "Account" or "Opportunity".

#### Signature

public String objectName {get; set;}

#### Property Value

Type: String

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- RelatedObjectFilter Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_RelatedObjectFilter.htm)
- criteria (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_RelatedObjectFilter.htm)
- objectName (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_RelatedObjectFilter.htm)
