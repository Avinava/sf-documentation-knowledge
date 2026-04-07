---
title: "Flow for Salesforce Contracts"
domain: clm-developer-guide
topic: flow-for-salesforce-contracts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:24.590Z
estimatedTokens: 189
keywords: [FlowActionCall, Flow, Salesforce, Contracts, metadata, application, navigates, users, series, screens, query, records, database, execute, logic, provide, branching, capability, user, build, dynamic, applications]
---

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Salesforce Contracts

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Salesforce Contracts exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Salesforce Contracts includes:searchContractDocument—Search the latest contract document version based on the user's query. |
