---
title: "Flow for Transaction Management"
domain: revenue-cloud
topic: flow-for-transaction-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.491Z
estimatedTokens: 562
keywords: [Flow, Transaction, Management, metadata, associated, application, users, series, pages, query, records, database, run, logic, provide]
---

# Flow for Transaction Management

> The flow for Transaction Management represents the metadata associated with a flow.
    With Flow, you can create an application that takes users through a series of pages to query and
    update the records in the database. You can also run logic and provide branching capability
    based on user input to build dynamic applications.

# Flow for Transaction Management

The flow for Transaction Management represents the metadata associated with a flow. With Flow, you can create an application that takes users through a series of pages to query and update the records in the database. You can also run logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Transaction Management exposes additional actionType values for the FlowActionCall metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values for Transaction Management are:createContract—Create a contract from a specific quote record.createOrderFromQuote—Create an order from a quote record.createServiceDocument—Create service documents from work orders, work order line items, or service appointments.getRenewableAssetsSummary—Retrieve details about renewable assets in a given order. You can use this information to create renewal opportunities. Added in API version 64.0 and later.createOrUpdateAssetFromOrder—Create an asset for each order item in the specified order. New assets are created for a new order. Modify existing assets for change order requests, such as a renewal or a cancellation.createOrUpdateAssetFromOrderItem—Create assets from individual order items within an order. Track assets after the individual line items of an order reach a certain stage in their lifecycle, such as submitted, fulfilled, or provisioned. If the order item is part of a renewal, an amendment, or a cancellation, existing assets are changed.initiateAmendment—Initiate and execute the amendment of an asset.initiateRenewal—Initiate and execute the renewal of an asset.initiateCancellation—Initiate and execute the cancellation of an asset.initiateRollBackLastAction—Initiate the reversal of the last action on an asset to rectify any transactional errors or to meet changing business requirements.createOrdersFromQuote—Create multiple orders from a single quote instead of a single order, ensuring easier order management and fulfillment operations.initiateTransfer—Transfer an asset or multiple assets from one account to another. |

/
