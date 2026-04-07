---
title: "Flow for Insurance Product Administration"
domain: insurance-developer-guide
topic: flow-for-insurance-product-administration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:03.971Z
estimatedTokens: 198
keywords: [Flow, Insurance, Product, Administration, metadata, associated, application, users, series, pages, query, records, database, execute, logic]
---

# Flow for Insurance Product Administration

> Represents the metadata associated with a flow. Use Flow to create an application that
    takes users through a series of pages to query and update records in the database. You can also
    execute logic and provide branching capability based on user input to build dynamic
    applications.

# Flow for Insurance Product Administration

Represents the metadata associated with a flow. Use Flow to create an application that takes users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Insurance Product Administration exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Insurance Product Administration include:invokeUnderwritingRules—Invoke the underwriting rules for different insurance records during the run time. |
