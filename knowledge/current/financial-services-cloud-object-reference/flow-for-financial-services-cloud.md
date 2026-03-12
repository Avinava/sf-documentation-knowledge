---
title: "Flow for Financial Services Cloud"
domain: financial-services-cloud-object-reference
topic: flow-for-financial-services-cloud
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.948Z
estimatedTokens: 612
keywords: [Flow, Financial, Services, Cloud, metadata, associated, application, navigates, users, series, screens, query, records, database, execute]
---

# Flow for Financial Services Cloud

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Financial Services Cloud

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## Flow

Financial Services Cloud exposes additional FlowProcessType values on the Flow type in Metadata API.

| Field Name | Field Type | Description |
| --- | --- | --- |
| processType | FlowProcessType (enumeration of type string) | The type of the flow, as determined by the active version. Valid values added by Financial Services Cloud include:FSCLending—A flow for Financial Services Cloud Mortgage. This value is available in API version 46.0 and later. |

## FlowActionCall

Financial Services Cloud exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType(enumeration of type string) | Required. The action type. Additional valid values only for Financial Services Cloud include:createCaseForFeeReversal—Creates a case to request a fee reversal for a client. This value is available in API version 62.0 and later.createFinancialRecords—Creates person accounts, contacts, financial accounts, properties, assets, and liabilities from a residential loan application. This value is available in API version 49.0 and later.createIntegrationPlan—Creates an integration plan record based on an object by using Expression Sets to make decisions and Dynamic Fulfillment Orchestration to create related object records. This value is available in API version 60.0 and later.getPicklistValues—Get picklist values for the specified fields of an object.publishActionableOrchSrcEvent—Publish an actionable orchestration source event by using the payload current value and API name of the source object from a data object data change event.runIntegrationPlan—Triggers an integration plan using Dynamic Fulfillment Orchestration, which ensures each callout happens at the right time by queuing it alongside its dependent steps. This value is available in API version 60.0 and later. |

#### See Also

-   [*Metadata API Developer Guide*: Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm "Metadata API Developer Guide: Flow - HTML (New Window)")
