---
title: "Flow for Product Configurator"
domain: revenue-cloud
topic: flow-for-product-configurator
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-21T00:39:54.456Z
estimatedTokens: 245
keywords: [FlowActionCall, Flow, Product, Configurator, metadata, application, navigates, users, series, screens, query, records, database, execute, logic, provide, branching, capability, user, build, dynamic, applications]
---

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Product Configurator

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Product Configurator exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Product Configurator include:runConfigRules—Run rules for a specific quote or order based on a context ID or transaction ID, and process other steps that are part of the configuration directly within a Flow. This action decouples rule execution from configurations to enable independent execution of rules and for easier retrieval of responses. |
