---
title: "Flow for Dynamic Revenue Orchestrator"
domain: revenue-cloud
topic: flow-for-dynamic-revenue-orchestrator
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:02:02.360Z
estimatedTokens: 395
keywords: [Flow, Dynamic, Revenue, Orchestrator, metadata, associated, application, navigates, users, series, screens, query, records, database, execute]
---

# Flow for Dynamic Revenue Orchestrator

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Dynamic Revenue Orchestrator

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Dynamic Revenue Orchestrator exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Dynamic Revenue Orchestrator include:decomposeSalesTransaction—Decompose a sales transaction, such as a quote, order, or order summary.freezeSalesTransaction—Freeze a sales transaction to disable the modification of a line item.getPointOfNoReturn—Get details about the point of no return milestone for each line item in a sales transaction.orchestrateSalesTransaction—Initiate the orchestration process for a sales transaction.orchestrateTransaction—Orchestrate a transaction for any domain-specific object, such as a collection plan for Revenue billing, that requires the composition and execution of a fulfillment plan.submitOrder—Submit an order to Dynamic Revenue Orchestrator (DRO) for fulfillment.submitSalesTransaction—Initiate the fulfillment process of any sales transaction, such as a quote, an order, or an order summary.unfreezeSalesTransaction—Unfreeze a sales transaction to enable the modification of a line item. |
