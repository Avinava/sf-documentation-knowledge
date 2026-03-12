---
title: "FilterInputRepresentation Class"
domain: revenue-cloud
topic: filterinputrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.751Z
estimatedTokens: 538
keywords: [FilterInputRepresentation, Contains, filter, filters, records, based, supported, criteria., Usage]
---

# FilterInputRepresentation Class

> Contains the filter property to filters records based on supported criteria.

# FilterInputRepresentation Class

Contains the filter property to filters records based on supported criteria.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[FilterInputRepresentation Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterInputRepresentation.htm#apex_runtime_industries_cpq_FilterInputRepresentation_properties)**
    Learn more about the available properties with the FilterInputRepresentation class.

## FilterInputRepresentation Properties

Learn more about the available properties with the FilterInputRepresentation class.

The FilterInputRepresentation class includes these properties.

-   **[filter](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterInputRepresentation.htm#apex_runtime_industries_cpq_FilterInputRepresentation_filter)**
    Filters records based on supported criteria. The supported property is name.

### filter

Filters records based on supported criteria. The supported property is name.

#### Signature

public runtime\_industries\_cpq.Filter filter {get; set;}

#### Property Value

Type: [runtime\_industries\_cpq.Filter](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_Filter.htm#apex_class_runtime_industries_cpq_Filter "Contains the criteria property to store the details of a filter criteria, which is used to filter records.")

#### Usage

The supported operators are:

-   eq
-   in
-   contains—This value isn't applicable if the **Use Indexed Data For Product Listing and Search** toggle from the Product Discovery Settings page from Setup is enabled.

If multiple criteria are specified, then the resultant criteria are combined by using the and operator.

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- FilterInputRepresentation Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterInputRepresentation.htm)
- filter (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterInputRepresentation.htm)
- runtime_industries_cpq.Filter (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_Filter.htm)
