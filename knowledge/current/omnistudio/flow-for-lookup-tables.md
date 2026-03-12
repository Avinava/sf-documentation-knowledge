---
title: "Flow for Lookup Tables"
domain: omnistudio
topic: flow-for-lookup-tables
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:50.487Z
estimatedTokens: 235
keywords: [Flow, Lookup, Tables, metadata, associated, application, navigates, users, series, screens, query, records, database, execute, logic]
---

# Flow for Lookup Tables

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Lookup Tables

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Business Rules Engine exposes additional actionType values for the FlowActionCall Metadata type. For more information on Flow and FlowActionCall metadata type, see [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm).

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required. The action type. Additional valid values only for Lookup Tables include:runDecisionMatrix—Invoke a decision matrix in a flow. This value is available in API version 55.0 and later. |
