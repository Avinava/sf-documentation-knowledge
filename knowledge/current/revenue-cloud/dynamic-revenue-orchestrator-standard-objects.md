---
title: "Dynamic Revenue Orchestrator Standard Objects"
domain: revenue-cloud
topic: dynamic-revenue-orchestrator-standard-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:08.730Z
estimatedTokens: 2471
keywords: [Dynamic, Revenue, Orchestrator, Standard, Objects, data, model, provides, objects, fields, manage, details, product’s, fulfillment.]
---

# Dynamic Revenue Orchestrator Standard Objects

> The Dynamic Revenue Orchestrator data model provides objects and fields to manage
  details of a product’s fulfillment.

# Dynamic Revenue Orchestrator Standard Objects

The Dynamic Revenue Orchestrator data model provides objects and fields to manage details of a product’s fulfillment.

-   **[AssetFulfillmentDecomp](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetfulfillmentdecomp.htm)**
    Represents the relationship between an ordered asset and its corresponding fulfillment asset. This object is available in API version 62.0 and later.
-   **[FulfillmentAsset](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentasset.htm)**
    Represents an instance of a technical product used to provide a customer asset. This object is available in API version 61.0 and later.
-   **[FulfillmentAssetAttribute](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentassetattribute.htm)**
    Represents an attribute of a fulfillment asset. This object is available in API version 61.0 and later.
-   **[FulfillmentAssetRelationship](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentassetrelationship.htm)**
    Represents a relationship between two fulfillment assets. This object is available in API version 61.0 and later.
-   **[FulfillmentFalloutRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentfalloutrule.htm)**
    Represents the fulfillment fallout handling rule. This object is available in API version 61.0 and later.
-   **[FulfillmentLineAttribute](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentlineattribute.htm)**
    Represents an attribute of a fulfillment order line. This object is available in API version 61.0 and later.
-   **[FulfillmentLineRel](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentlinerel.htm)**
    Represents a relationship between two fulfillment order lines. This object is available in API version 61.0 and later.
-   **[FulfillmentLineSourceRel](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentlinesourcerel.htm)**
    Represents the relationship between a fulfillment order line and its decomposition source. This object is available in API version 61.0 and later.
-   **[FulfillmentPlan](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentplan.htm)**
    Represents a set of steps to be created to fulfill the order. This object is available in API version 61.0 and later.
-   **[FulfillmentStep](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentstep.htm)**
    Represents a task that's required to perform a certain action as part of order fulfillment. This task can be manual or automated. This object is available in API version 61.0 and later.
-   **[FulfillmentStepDefinition](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentstepdefinition.htm)**
    Represents a definition of a step that must be executed during fulfillment orchestration. This object is available in API version 61.0 and later.
-   **[FulfillmentStepDefinitionGroup](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentstepdefinitiongroup.htm)**
    Represents a set of fulfillment step definitions. This object is available in API version 61.0 and later.
-   **[FulfillmentStepDependency](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentstepdependency.htm)**
    Represents a dependency between tasks by defining the order between a task and one that depends on it. This object is available in API version 61.0 and later.
-   **[FulfillmentStepDependencyDef](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentstepdependencydef.htm)**
    Represents a dependency that must be created between two fulfillment step records. This object is available in API version 62.0 and later.
-   **[FulfillmentStepJeopardyRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentstepjeopardyrule.htm)**
    Represents the duration and tolerance for the step in the fulfillment process to allow the overall tracking of rules and risks. This object is available in API version 61.0 and later.
-   **[FulfillmentStepSource](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentstepsource.htm)**
    Represents a link between a fulfillment step and the corresponding order lines. This object is available in API version 61.0 and later.
-   **[FulfillmentTaskAssignmentRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmenttaskassignmentrule.htm)**
    Represents a set of actions that assign a task to a user or queue. This object is available in API version 63.0 and later.
-   **[FulfillmentWorkspace](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentworkspace.htm)**
    Represents a visual designer for fulfillment plans that can have multiple step groups and their dependencies. This object is available in API version 61.0 and later.
-   **[FulfillmentWorkspaceItem](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentworkspaceitem.htm)**
    Represents information about the attributes that are used in the definition for a fulfillment step group. This object is available in API version 61.0 and later.
-   **[ProductDecompEnrichmentRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productdecompenrichmentrule.htm)**
    Represents mappings between fields and attributes. Enrichment rules are part of a decomposition rule, and are used to propagate data to fulfillment order lines. This object is available in API version 61.0 and later.
-   **[ProdtDecompEnrchVarMap](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_prodtdecompenrchvarmap.htm)**
    Represents the mapping of a field context tag or an attribute to a variable within an expression set. This object is available in API version 64.0 and later.
-   **[ProductFulfillmentDecompRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productfulfillmentdecomprule.htm)**
    Represents a rule that determines how an order is broken into sub-orders with specific technical details that help in order fulfillment. It can be applied to a commercial or a technical product. This object is available in API version 61.0 and later.
-   **[ProductFulfillmentScenario](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_productfulfillmentscenario.htm)**
    Represents a link between a product and the corresponding group of fulfillment steps that's necessary to fulfill that product. This object is available in API version 61.0 and later.
-   **[SalesTrxnDeleteEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_salestrxndeleteevent.htm)**
    Represents the platform event that triggers the deletion of sales transaction fulfillment request records when the corresponding reference records are deleted. This object is available in API version 64.0 and later.
-   **[SalesTransactionFulfillReq](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_salestransactionfulfillreq.htm)**
    Represents the statuses of all the sub-orders that belong to the selected commercial or technical product. This object is available in API version 62.0 and later.
-   **[ValTfrm](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_valtfrm.htm)**
    Represents mappings between fields and attributes. Enrichment rules are part of a decomposition rule, and are used to propagate data to fulfillment order lines. This object is available in API version 61.0 and later.
-   **[ValTfrmGrp](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_valtfrmgrp.htm)**
    Represents a rule that determines how an order is broken into sub-orders with specific technical details that help in order fulfillment. The rule can be applied to a commercial or a technical product. This object is available in API version 61.0 and later.

#### See Also

-   [*Object Reference for the Salesforce Platform*: Overview of Salesforce Objects and Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Object Reference for the Salesforce Platform: Overview of Salesforce Objects
    and Fields  - HTML (New Window)")

-   [*SOAP API Developer Guide*: Introduction to SOAP API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "SOAP API Developer Guide: Introduction to SOAP API - HTML (New Window)")

## Related Topics

- AssetFulfillmentDecomp (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_assetfulfillmentdecomp.htm)
- FulfillmentAsset (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentasset.htm)
- FulfillmentAssetAttribute (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentassetattribute.htm)
- FulfillmentAssetRelationship (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentassetrelationship.htm)
- FulfillmentFalloutRule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentfalloutrule.htm)
- FulfillmentLineAttribute (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentlineattribute.htm)
- FulfillmentLineRel (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentlinerel.htm)
- FulfillmentLineSourceRel (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentlinesourcerel.htm)
- FulfillmentPlan (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentplan.htm)
- FulfillmentStep (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_fulfillmentstep.htm)
