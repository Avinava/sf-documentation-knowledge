---
title: "Flow for Automotive Cloud"
domain: automotive-cloud
topic: flow-for-automotive-cloud
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.685Z
estimatedTokens: 301
keywords: [Flow, Automotive, Cloud, metadata, associated, application, navigates, users, series, screens, query, records, database, execute, logic]
---

# Flow for Automotive Cloud

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Automotive Cloud

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Automotive Cloud exposes additional actionType values for the FlowActionCall Metadata type. For more information on Flow and FlowActionCall Metadata Type, see [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm).

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required. The action type. Additional valid values only for Automotive Cloud include:replenishInventoryUsingPolicy—Executes inventory policy to identify stock shortages, determine the optimal source location, and automate replenishment. Available in API version 65.0 and later.transformMfgProgramForecasts—Submits a message to a queue service to asynchronously process and transform manufacturing program forecasts. Available in API version 64.0 and later. |
