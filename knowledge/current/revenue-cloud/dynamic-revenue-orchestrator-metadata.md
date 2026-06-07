---
title: "Dynamic Revenue Orchestrator Metadata"
domain: revenue-cloud
topic: dynamic-revenue-orchestrator-metadata
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-06-07T00:37:41.295Z
estimatedTokens: 1269
keywords: [Dynamic, Revenue, Orchestrator, Metadata, deployment, DRO, Cloud, including, setup, paths, configuration]
---

> This table provides the metadata deployment reference for Dynamic Revenue Orchestrator
    (DRO) in Revenue Cloud, including setup paths and configuration details.

# Dynamic Revenue Orchestrator Metadata

This table provides the metadata deployment reference for Dynamic Revenue Orchestrator (DRO) in Revenue Cloud, including setup paths and configuration details.

| Type | Label | Setup Path | Details |
| --- | --- | --- | --- |
| Setup | Dynamic Revenue Orchestrator | Setup > Feature Settings > Dynamic Revenue Orchestrator |  |
| Flag | Dynamic Revenue Orchestrator | Setup > Feature Settings > Dynamic Revenue Orchestrator > Dynamic Revenue Orchestrator Settings |  |
| Flag | In-flight Amendments | Setup > Feature Settings > Dynamic Revenue Orchestrator > Dynamic Revenue Orchestrator Settings |  |
| Flag | Future Dated Steps | Setup > Feature Settings > Dynamic Revenue Orchestrator > Dynamic Revenue Orchestrator Settings |  |
| Flag | Link Task to Step Source | Setup > Feature Settings > Dynamic Revenue Orchestrator > Dynamic Revenue Orchestrator Settings |  |
| Field | Fulfillment User | Setup > Feature Settings > Dynamic Revenue Orchestrator > Dynamic Revenue Orchestrator Settings |  |
| Field | Context Definition | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Sales Transaction Context Definition) |  |
| Field | Context Node for Sales Transaction Header | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Sales Transaction Context Definition) |  |
| Field | Context field for Orchestration Group Key (Optional) | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Sales Transaction Context Definition) |  |
| Field | Context Node for Sales Transaction Item | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Sales Transaction Context Definition) |  |
| Field | Context Node for Sales Transaction Item Relationship | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Sales Transaction Context Definition) |  |
| Field | Context Node for Sales Transaction Item Attribute | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Sales Transaction Context Definition) |  |
| Field | Context Node for Fulfillment Transaction | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Sales Transaction Context Definition) |  |
| Field | Context Node for Fulfillment Transaction Item | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Sales Transaction Context Definition) |  |
| Field | Context Node for Fulfillment Transaction Item Relationship | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Sales Transaction Context Definition) |  |
| Field | Context Node for Fulfillment Transaction Item Attribute | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Sales Transaction Context Definition) |  |
| Field | Context Node for Fulfillment Transaction Item Source Relationship | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Sales Transaction Context Definition) |  |
| Field | Context Definition | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Fulfillment Asset Context Definition) |  |
| Field | Context Node for Fulfillment Asset | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Fulfillment Asset Context Definition) |  |
| Field | Context Node for Fulfillment Asset Attribute | Setup > Feature Settings > Dynamic Revenue Orchestrator > Context Definition Settings (Fulfillment Asset Context Definition) |  |
| Flag | Fallout | Setup > Feature Settings > Dynamic Revenue Orchestrator > Fallout and SLA Settings |  |
| Flag | Service Level Agreement | Setup > Feature Settings > Dynamic Revenue Orchestrator > Fallout and SLA Settings |  |
| Permission Sets | DRO Admin User | Setup > Users > Permission Sets |  |
| Permission Sets | Submit Transactions and Fulfillment User | Setup > Users > Permission Sets |  |
| Permission Sets | Fulfillment Designer | Setup > Users > Permission Sets |  |
| Permission Sets | Fulfillment Manager/Operator | Setup > Users > Permission Sets |  |
| Setup | Procedure Plan Definition | Procedure Plan Setup > Procedure Plan Definitions | The value of UsageType field is Dfo. This is used to define an alternate context mapping for sales transaction context in an order submission flow. See Submit Orders for Decomposition and Order Fulfillment |
| User Permission | Submit Transactions and Orchestrate User |  | Enables user to submit and orchestrate transactions for any object by using Dynamic Revenue Orchestrator. |

#### See Also

-   [*Revenue Cloud Developer Guide*: DynamicFulfillmentOrchestratorSettings](https://developer.salesforce.com/docs/atlas.en-us.262.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/meta_dynamicfulfillmentorchestratorsettings.htm "Revenue Cloud Developer Guide:
    DynamicFulfillmentOrchestratorSettings - HTML (New Window)")
