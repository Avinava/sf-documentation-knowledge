---
title: "Flow for Usage Management"
domain: revenue-cloud
topic: flow-for-usage-management
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.902Z
estimatedTokens: 337
keywords: [Flow, Usage, Management, metadata, associated, application, navigates, users, series, screens, query, records, database, execute, logic]
---

# Flow for Usage Management

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Usage Management

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Usage Management exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Usage Management include:invokeSummaryCreationService—Invoke the service that creates various summaries, such as usage, ratable, and liable summaries where the usage amount is zero. The service also checks and updates the billing period of the usage entitlement account if the billing period is expired.processConsumptionOverages—Process consumption overages for the usage summary records with SummaryComplete status. This action uses the entitlement service to process the overages.refreshUsageEntitlementBucket—Refresh entitlements by evaluating the usage entitlement bucket records and creating a new usage entitlement entry.retriggerEntlCreaProc—Retrigger entitlement creation process for failed or unprocessed assets. |
