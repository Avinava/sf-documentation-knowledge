---
title: "Commerce: Return Order Line Item Mapping"
domain: data-cloud
topic: commerce-return-order-line-item-mapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:14.142Z
estimatedTokens: 476
keywords: [Commerce, Order, Line, Item, Mapping, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects]
---

# Commerce: Return Order Line Item Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Return Order Line Item data is information about a
         product that a customer has returned to the seller.

# Commerce: Return Order Line Item Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Return Order Line Item data is information about a product that a customer has returned to the seller.

## DLO to DMO Mapping

These data mappings relate to the ReturnOrderLineItem object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | ReturnOrderProduct | id |
| CurrencyIsoCode | picklist | ReturnOrderProduct | RepaymentAmountCurrency |
| OrderItemSummaryId | reference | ReturnOrderProduct |  |
| Product2Id | reference | ReturnOrderProduct | ProductId |
| QuantityReturned | double | ReturnOrderProduct | ReturnedQuantityCount |
| QuantityUnitOfMeasure | picklist | ReturnOrderProduct | ReturnedQuantityUOM |
| ReasonForReturn | picklist | ReturnOrderProduct | ReturnReasonCode |
| RepaymentMethod | picklist | ReturnOrderProduct | RepaymentMethod |
| ReturnOrderId | reference | ReturnOrderProduct | ReturnOrderId |
| ReturnOrderLineItemNumber | string | ReturnOrderProduct | ReturnOrderItemNumber |
| SystemModstamp | dateTime | ReturnOrderProduct | SystemModstamp |
| TotalPrice | currency | ReturnOrderProduct |  |
| TotalLineAmountWithTax | currency | ReturnOrderProduct |  |
| TotalTaxAmount | currency | ReturnOrderProduct |  |
| TotalAdjustmentAmount | currency | ReturnOrderProduct |  |
| TotalAdjustmentAmountWithTax | currency | ReturnOrderProduct |  |
| TotalAdjustmentTaxAmount | currency | ReturnOrderProduct |  |
| TotalAmount | currency | ReturnOrderProduct | RepaymentAmount |
| TotalLineAmount | currency | ReturnOrderProduct |  |
| TotalLineTaxAmount | currency | ReturnOrderProduct |  |
| Description | textarea | ReturnOrderProduct | Description |
