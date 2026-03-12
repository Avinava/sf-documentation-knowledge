---
title: "Flow for Channel Revenue Management"
domain: channel-revenue-management-dev-guide
topic: flow-for-channel-revenue-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.866Z
estimatedTokens: 292
keywords: [Flow, Channel, Revenue, Management, metadata, associated, application, navigates, users, series, screens, query, records, database, execute]
---

# Flow for Channel Revenue Management

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Channel Revenue Management

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Channel Revenue Management exposes additional actionType values for the FlowActionCall Metadata type. For more information on Flow and FlowActionCall Metadata Type, see [Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_visual_workflow.htm).

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required. The action type. Additional valid values only for Channel Revenue Management include:adjustPartnerInvShipAndDebit— Adjusts the point of sale during ship and debit claim processing to a different partner unsold inventory. Available in API version 64.0 and later.adjustPartnerUnsoldInventory— Adjusts the partner unsold inventory quantities and prices. Available in API version 64.0 and later. |
