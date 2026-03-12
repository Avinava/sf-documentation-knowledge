---
title: "Flow for Public Sector Solutions"
domain: psc-api
topic: flow-for-public-sector-solutions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.541Z
estimatedTokens: 331
keywords: [Flow, Sector, Solutions, metadata, associated, application, navigates, users, series, screens, query, records, database, execute, logic]
---

# Flow for Public Sector Solutions

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Public Sector Solutions

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Public Sector Solutions exposes additional actionType values for the FlowActionCall Metadata type. For more information on Flow and FlowActionCall Metadata Type, see [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm "HTML (New Window)").

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required. The action type. Additional valid values only for Public Sector Solutions include:createBenefitDisbursement—Create a benefit disbursement for an eligible benefit assignment. For example, create a benefit disbursement request to offer monetary benefits through direct cash assistance or subsidies. Available in API version 57.0 and later.runRecordAggrBatchProcDef—Runs a Data Processing Engine definition to process an asynchronous batch job that creates or updates record aggregation results. Available in API version 59.0 and later. |
