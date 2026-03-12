---
title: "Flow for Salesforce Pricing"
domain: revenue-cloud
topic: flow-for-salesforce-pricing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.332Z
estimatedTokens: 234
keywords: [Flow, Salesforce, Pricing, metadata, associated, application, navigates, users, series, screens, query, records, database, execute, logic]
---

# Flow for Salesforce Pricing

> Represents the metadata associated with a flow. With Flow, you can create an
    application that navigates users through a series of screens to query and update records in the
    database. You can also execute logic and provide branching capability based on user input to
    build dynamic applications.

# Flow for Salesforce Pricing

Represents the metadata associated with a flow. With Flow, you can create an application that navigates users through a series of screens to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Salesforce Pricing exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Salesforce Pricing include:runSalesforcePricing—Invoke the Pricing Connect API by providing the context, pricing procedure, and price waterfall details.runSalesforceHeadlessPricing—Invoke the Pricing Connect API by providing the pricing data and details of a context, pricing procedure, and price waterfall. |
