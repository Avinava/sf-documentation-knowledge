---
title: "Product Configurator Standard Objects"
domain: revenue-cloud
topic: product-configurator-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.360Z
estimatedTokens: 607
keywords: [Product, Configurator, Standard, Objects, data, model, manage, flow]
---

# Product Configurator Standard Objects

> The Product Configurator data model provides objects and fields to manage the product
  configurator flow.

# Product Configurator Standard Objects

The Product Configurator data model provides objects and fields to manage the product configurator flow.

-   **[ExpressionSetConstraintObj](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_expressionsetconstraintobj.htm)**
    Represents the association between a Product object and the constraint model tags defined in a given constraint model. This object is available in API version 63.0 and later.
-   **[ProductConfigurationFlow](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productconfigurationflow.htm)**
    Specifies the many-to-many relationship between Product Classification, Product, and Flow Definition objects. The flow definition is used to configure standalone and bundled products of a specific product classification along with the product attributes, quantities, and product selling models. This object is available in API version 60.0 and later.
-   **[ProductConfigFlowAssignment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productconfigflowassignment.htm)**
    A junction object that represents the many-to-many relationship between Product Configuration Flow, Product, and Product Classification. This object is available in API version 60.0 and later.
-   **[ProductConfigurationRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productconfigurationrule.htm)**
    Represents the validation, inclusion, and exclusion rules for products in the context of the selling process. The selling process can be quoting, configuration, or ordering. This object is available in API version 61.0 and later.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Overview of Salesforce Objects and Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Object Reference for the Salesforce Platform: Overview of Salesforce Objects
    and Fields  - HTML (New Window)")

-   [*SOAP API Developer Guide*: Introduction to SOAP API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "SOAP API Developer Guide: Introduction to SOAP API - HTML (New Window)")

## Related Topics

- ExpressionSetConstraintObj (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_expressionsetconstraintobj.htm)
- ProductConfigurationFlow (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productconfigurationflow.htm)
- ProductConfigFlowAssignment (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productconfigflowassignment.htm)
- ProductConfigurationRule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productconfigurationrule.htm)
