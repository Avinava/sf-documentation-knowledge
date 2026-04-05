---
title: "Dynamic Revenue Orchestrator Objects"
domain: revenue-cloud
topic: dynamic-revenue-orchestrator-objects
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-05T00:23:22.369Z
estimatedTokens: 681
keywords: [Dynamic, Revenue, Orchestrator, Objects, deployment, sequence, API, lookup, Cloud]
---

# Dynamic Revenue Orchestrator Objects

> This table provides the deployment sequence, object types, API names, and lookup fields
    for Dynamic Revenue Orchestrator objects in Revenue Cloud.

# Dynamic Revenue Orchestrator Objects

This table provides the deployment sequence, object types, API names, and lookup fields for Dynamic Revenue Orchestrator objects in Revenue Cloud.

| Object Use Type | Object Name | Object API | Deployment Sequence | Lookup Fields (Foreign Keys) |
| --- | --- | --- | --- | --- |
| Configuration | Fulfillment Step Definition Group | FulfillmentStepDefinitionGroup | 1 | None |
| Configuration | Fulfillment Step Definition | FulfillmentStepDefinition | 2 | Ruleset, ExpressionSet, FulfillmentStepDefinitionGroup, IntegrationProviderDef, User, Queue |
| Configuration | Fulfillment Step Dependency Definition | FulfillmentStepDependencyDef | 3 | FulfillmentStepDefinition |
| Configuration | Product Fulfillment Scenario | ProductFulfillmentScenario | 4 | FulfillmentStepDefinitionGroup, Ruleset, Product2, ProductClassification, FlowDefinition, StageDefinition, FlowRecord, FlowOrchestration |
| Configuration | Fulfillment Workspace | FulfillmentWorkspace | 5 | None |
| Configuration | Fulfillment Workspace Item | FulfillmentWorkspaceItem | 6 | FulfillmentWorkspace, FulfillmentStepDefinitionGroup |
| Configuration | Fulfillment Fallout Rule | FulfillmentFalloutRule | 7 | IntegrationProviderDef, Group |
| Configuration | Fulfillment Step Jeopardy Rule | FulfillmentStepJeopardyRule | 8 | IntegrationProviderDef |
| Configuration | Fulfillment Task Assignment Rule | FulfillmentTaskAssignmentRule | 9 | Ruleset, ExpressionSet, User, Queue |
| Configuration | Product Fulfillment Decomposition Rule | ProductFulfillmentDecompRule | 1 | Ruleset, Product2, ProductClassification |
| Configuration | Value Transformation Group | ValTfrmGrp | 2 | None |
| Configuration | Value Transformation | ValTfrm | 3 | ValTfrmGrp, AttributePicklistValue |
| Configuration | Product Decomposition Enrichment Rule | ProductDecompEnrichmentRule | 4 | ProductFulfillmentDecompRule, ExpressionSet, AttributeDefinition, ValTfrmGrp, DecisionMatrixDefinition |
| Configuration | Product Decomposition Enrichment Variable Mapping | ProdtDecompEnrchVarMap | 5 | ProductDecompEnrichmentRule, AttributeDefinition |

#### See Also

-   [*Revenue Cloud Developer Guide*: Dynamic Revenue Orchestrator Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/dynamic_revenue_orchestrator_std_objects_parent.htm "Revenue Cloud Developer Guide: Dynamic Revenue Orchestrator Standard
    Objects - HTML (New Window)")

-   [Explore the Revenue Cloud Data Model](https://help.salesforce.com/s/articleView?id=ind.data_model_overview.htm&language=en_US "Explore the Revenue Cloud Data Model - HTML (New Window)")
