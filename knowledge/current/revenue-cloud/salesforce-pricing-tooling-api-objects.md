---
title: "Salesforce Pricing Tooling API Objects"
domain: revenue-cloud
topic: salesforce-pricing-tooling-api-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:08.952Z
estimatedTokens: 1206
keywords: [Salesforce, Pricing, Tooling, API, Objects, exposes, metadata, used, developer, tooling, access, through, REST, SOAP., API’s, SOQL, capabilities, many, types, allow]
---

# Salesforce Pricing Tooling API Objects

> Tooling API exposes metadata used in developer tooling that you can access through REST
  or SOAP. Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller
  pieces of metadata.

# Salesforce Pricing Tooling API Objects

Tooling API exposes metadata used in developer tooling that you can access through REST or SOAP. Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller pieces of metadata.

-   **[PricingActionParameters](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingactionparameters.htm)**
    Represents a pricing action associated to a context definition and a pricing procedure. This object is available in API version 60.0 and later.
-   **[PricingProcedureOutputMap](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingprocedureoutputmap.htm)**
    Represents the mapping of the outputs of the pricing procedures to the associated lookup tables. Each record specifies the output mapping of the associated lookup table based on the pricing component type specified in the Pricing Recipe Table Mapping object. This object is available in API version 60.0 and later.
-   **[PricingRecipe](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingrecipe.htm)**
    Represents one out of various data models or sets of entities of a particular cloud that'll be consumed by the pricing data store during design and run time. This object is available in API version 60.0 and later.
-   **[PricingRecipeTableMapping](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingrecipetablemapping.htm)**
    Represents the mapping of pricing components of a lookup table with the chosen pricing recipe. This object is available in API version 60.0 and later.
-   **[ProcedureOutputResolution](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_procedureoutputresolution.htm)**
    Represents the pricing resolution for an pricing element determined using strategy name and formula. This object is available in API version 63.0 and later.
-   **[ProcedurePlanCriterion](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/tooling_api_objects_procedureplancriterion.htm)**
    Represents a criterion within a procedure plan option record. This object is available in API version 62.0 and later.
-   **[ProcedurePlanDefinition](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/tooling_api_objects_procedureplandefinition.htm)**
    Represents the setup of a unified procedure from a list of multiple procedures that can be sequenced in any order based on business needs. Each procedure plan definition contains sections and subsections where procedures can be configured by using a lookup table or rule-based criteria. This object is available in API version 62.0 and later.
-   **[ProcedurePlanDefinitionVersion](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/tooling_api_objects_procedureplandefinitionversion.htm)**
    Represents the versions for a procedure plan definition. Multiple versions under a procedure plan definition must be active at a time, which can be resolved at run time using the rank field. This object is available in API version 62.0 and later.
-   **[ProcedurePlanOption](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/tooling_api_objects_procedureplanoption.htm)**
    Represents the selection criteria of how a procedure can be configured for a selected procedure plan section record. This object is available in API version 62.0 and later.
-   **[ProcedurePlanSection](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/tooling_api_objects_procedureplansection.htm)**
    Represents various procedure setup sections for a procedure plan definition. Each section enables the setup of a procedure of a type that can be further determined by using a rule-based criteria or it can be set based on a selected lookup table. This object is available in API version 62.0 and later.
-   **[ProcedurePlanVariable](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/tooling_api_objects_procedureplanvariable.htm)**
    Represents the setup for any adhoc user-defined variable that can be linked to a procedure plan definition record. This object is available in API version 62.0 and later.

#### See Also

-   [*Tooling API Developer Guide*: Introducing Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/intro_api_tooling.htm "Tooling API Developer Guide: Introducing Tooling API - HTML (New Window)")

## Related Topics

- PricingActionParameters (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingactionparameters.htm)
- PricingProcedureOutputMap (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingprocedureoutputmap.htm)
- PricingRecipe (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingrecipe.htm)
- PricingRecipeTableMapping (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_pricingrecipetablemapping.htm)
- ProcedureOutputResolution (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_procedureoutputresolution.htm)
- ProcedurePlanCriterion (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/tooling_api_objects_procedureplancriterion.htm)
- ProcedurePlanDefinition (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/tooling_api_objects_procedureplandefinition.htm)
- ProcedurePlanDefinitionVersion (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/tooling_api_objects_procedureplandefinitionversion.htm)
- ProcedurePlanOption (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/tooling_api_objects_procedureplanoption.htm)
- ProcedurePlanSection (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/tooling_api_objects_procedureplansection.htm)
