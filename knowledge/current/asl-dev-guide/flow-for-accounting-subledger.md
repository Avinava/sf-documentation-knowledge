---
title: "Flow for Accounting Subledger"
domain: asl-dev-guide
topic: flow-for-accounting-subledger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.595Z
estimatedTokens: 238
keywords: [Flow, Accounting, Subledger, metadata, associated, application, navigates, users, series, screens, query, records, database, execute, logic]
---

# Flow for Accounting Subledger

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Accounting Subledger

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Accounting Subledger exposes additional actionType values for the FlowActionCall Metadata type. For more information on Flow and FlowActionCall Metadata Type, see [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm).

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required. The action type. Additional valid values only for Accounting Subledger include:generateTransactionJournals—Generate transaction journal records. Available in API version 57.0 and later. |
