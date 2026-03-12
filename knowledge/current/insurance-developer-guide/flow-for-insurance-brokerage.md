---
title: "Flow for Insurance Brokerage"
domain: insurance-developer-guide
topic: flow-for-insurance-brokerage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.827Z
estimatedTokens: 305
keywords: [Flow, Insurance, Brokerage, metadata, associated, application, users, series, pages, query, records, database, execute, logic, provide]
---

# Flow for Insurance Brokerage

> Represents the metadata associated with a flow. Use Flow to create an application that
    takes users through a series of pages to query and update records in the database. You can also
    execute logic and provide branching capability based on user input to build dynamic
    applications.

# Flow for Insurance Brokerage

Represents the metadata associated with a flow. Use Flow to create an application that takes users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Insurance Brokerage exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Insurance Brokerage include:computeProducerSplits—Compute the producer splits for the producers associated with an Insurance Policy, for a Commission Statement Line Item.createProducerCommissions—Create records for the commissions that producers receive for the insurance policy associated with the specified commission statement line item, and update the commission statement line item record status.findInsurancePolicy—Get the insurance policy associated with a commission statement line item that matches the specified criteria, and update the status of the commission statement line item record. |
