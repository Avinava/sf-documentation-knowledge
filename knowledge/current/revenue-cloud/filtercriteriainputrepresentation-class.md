---
title: "FilterCriteriaInputRepresentation Class"
domain: revenue-cloud
topic: filtercriteriainputrepresentation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.746Z
estimatedTokens: 969
keywords: [FilterCriteriaInputRepresentation, Contains, store, criteria, details, filter, records, based, supported, properties., attributeType, Usage, operator]
---

# FilterCriteriaInputRepresentation Class

> Contains properties to store criteria details to filter records based on supported
    properties.

# FilterCriteriaInputRepresentation Class

Contains properties to store criteria details to filter records based on supported properties.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[FilterCriteriaInputRepresentation Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterCriteriaInputRepresentation.htm#apex_runtime_industries_cpq_FilterCriteriaInputRepresentation_properties)**
    Learn more about the properties available with the FilterCriteriaInputRepresentation class.

## FilterCriteriaInputRepresentation Properties

Learn more about the properties available with the FilterCriteriaInputRepresentation class.

The FilterCriteriaInputRepresentation class includes these properties.

-   **[attributeType](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterCriteriaInputRepresentation.htm#apex_runtime_industries_cpq_FilterCriteriaInputRepresentation_attributeType)**
    Get details of the search attribute type of the facet for a faceted search.
-   **[operator](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterCriteriaInputRepresentation.htm#apex_runtime_industries_cpq_FilterCriteriaInputRepresentation_operator)**
    Get the operator that's used for the filter criteria.
-   **[property](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterCriteriaInputRepresentation.htm#apex_runtime_industries_cpq_FilterCriteriaInputRepresentation_property)**
    Get the property name to use in the filter, which must be the same as the object field. The supported property is name.
-   **[value](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterCriteriaInputRepresentation.htm#apex_runtime_industries_cpq_FilterCriteriaInputRepresentation_value)**
    Get the value for the filter criteria.

### attributeType

Get details of the search attribute type of the facet for a faceted search.

#### Signature

public String attributeType {get; set;}

#### Property Value

Type: String

#### Usage

Valid values are:

-   ProductStandard
-   ProductCustom
-   ProductDynamicAttribute
-   ProductAttributeStandard
-   ProductAttributeCustom

### operator

Get the operator that's used for the filter criteria.

#### Signature

public String operator {get; set;}

#### Property Value

Type: String

#### Usage

The supported operators are:

-   eq
-   in
-   contains
-   gt—Specifies a greater than criteria. Available from API version 63.0 and later for Number, Date, and Datetime data types only.
-   lt—Specifies a less than criteria. Available from API version 63.0 and later for Number, Date, and Datetime data types only.
-   gte—Specifies a greater than or equal to criteria. Available from API version 63.0 and later for Number, Date, and Datetime data types only.
-   lte—Specifies a less than or equal to criteria. Available from API version 63.0 and later for Number, Date, and Datetime data types only.

### property

Get the property name to use in the filter, which must be the same as the object field. The supported property is name.

#### Signature

public String property {get; set;}

#### Property Value

Type: String

### value

Get the value for the filter criteria.

#### Signature

public String value {get; set;}

#### Property Value

Type: String

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- FilterCriteriaInputRepresentation Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterCriteriaInputRepresentation.htm)
- attributeType (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterCriteriaInputRepresentation.htm)
- operator (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterCriteriaInputRepresentation.htm)
- property (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterCriteriaInputRepresentation.htm)
- value (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_FilterCriteriaInputRepresentation.htm)
