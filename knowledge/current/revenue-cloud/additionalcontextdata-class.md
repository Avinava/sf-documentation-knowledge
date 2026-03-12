---
title: "AdditionalContextData Class"
domain: revenue-cloud
topic: additionalcontextdata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.646Z
estimatedTokens: 521
keywords: [AdditionalContextData, Contains, include, list, additional, context, data, nodes., nodes, used, along, definition, hydration., additionalContextData]
---

# AdditionalContextData Class

> Contains properties to include a list of additional context data nodes. These nodes are
    used along with the context definition nodes for data hydration.

# AdditionalContextData Class

Contains properties to include a list of additional context data nodes. These nodes are used along with the context definition nodes for data hydration.

## Namespace

[runtime\_industries\_cpq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm "The runtime_industries_cpq namespace provides classes and methods to search products or to manage products, catalogs, and categories.")

-   **[AdditionalContextData Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_AdditionalContextData.htm#apex_runtime_industries_cpq_AdditionalContextData_properties)**
    Set the AdditionalContextData class property to specify a list of additional nodes for data hydration.

## AdditionalContextData Properties

Set the AdditionalContextData class property to specify a list of additional nodes for data hydration.

The AdditionalContextData class includes this property.

-   **[additionalContextData](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_AdditionalContextData.htm#apex_runtime_industries_cpq_AdditionalContextData_additionalContextData)**
    Include a list of additional nodes that are used along with the context definition nodes for data hydration. The maximum number of supported nodes is 10.

### additionalContextData

Include a list of additional nodes that are used along with the context definition nodes for data hydration. The maximum number of supported nodes is 10.

#### Signature

public List<runtime\_industries\_cpq.ContextDataInput> additionalContextData {get; set;}

#### Property Value

Type: List<[runtime\_industries\_cpq.ContextDataInput](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ContextDataInput.htm#apex_class_runtime_industries_cpq_ContextDataInput "Get details of a context.")\>

## Related Topics

- runtime_industries_cpq (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_runtime_industries_cpq.htm)
- AdditionalContextData Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_AdditionalContextData.htm)
- additionalContextData (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_AdditionalContextData.htm)
- runtime_industries_cpq.ContextDataInput (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_runtime_industries_cpq_ContextDataInput.htm)
