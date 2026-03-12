---
title: "Flow for Insurance Quoting"
domain: insurance-developer-guide
topic: flow-for-insurance-quoting
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:41.002Z
estimatedTokens: 504
keywords: [Flow, Insurance, Quoting, metadata, associated, application, users, series, pages, query, records, database, execute, logic, provide]
---

# Flow for Insurance Quoting

> Represents the metadata associated with a flow. Use Flow to create an application that
    takes users through a series of pages to query and update records in the database. You can also
    execute logic and provide branching capability based on user input to build dynamic
    applications.

# Flow for Insurance Quoting

Represents the metadata associated with a flow. Use Flow to create an application that takes users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Insurance Quoting exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Insurance Quoting include:addEligibleInsuranceClauses—Add eligible insurance clauses to a quote or context. You must specify either a quote ID or a context ID, and either an instance key or a quote line item ID along with insurance product clause details.createInsuranceQuote—Create an Insurance quote by using a context ID or a set of user inputs that represent quote details.createInsuranceRating—Create a runtime context that contains the details to create a quote.generateInsuranceClauses—Generate insurance clauses based on the specified quote and context information. You must specify either quote ID or context ID to generate insurance clauses.getEligibleInsuranceClauses—Get eligible insurance clauses based on quote ID and context ID. You must specify either a quote ID or a context ID, and either an instance key or a quote line item ID to get the eligible insurance clauses.getInsuranceQuoteDetails—Get the details of an insurance quote.getInsuranceRatingInput—Get the rating input data for the insurance products to support the pricing calculations and coverage analysis.repriceInsuranceProduct—Recalculate the price of Insurance products based on user inputs.repriceInsuranceProduct—Recalculate the price of insurance products based on user inputs.updateInsuranceQuote—Update an existing insurance quote by adding, updating, or deleting nodes and optionally executing pricing and rules. |
