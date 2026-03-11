---
title: "Commerce: Return Order Mapping"
domain: data-cloud
topic: commerce-return-order-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.941Z
keywords: [Commerce, Return, Order, Mapping, DLO, DMO]
---

# Commerce: Return Order Mapping

# Commerce: Return Order Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Return Order data is about the return of order products in Salesforce Order Management.

## DLO to DMO Mapping

These data mappings relate to the ReturnOrder object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | id | ReturnOrder | Id |
| CaseId | reference | ReturnOrder | CaseId |
| CurrencyIsoCode | picklist | ReturnOrder | CurrencyCode |
| ExpectedArrivalDate | dateTime | ReturnOrder | ExpectedArrivalDate |
| OrderSummaryId | reference | ReturnOrder | SalesOrderId |
| ReturnOrderNumber | string | ReturnOrder | ReturnAutorizationNumber |
| TotalFeeAdjustAmount | currency | ReturnOrder | TotalFeeAdjustAmount |
| TotalFeeAdjustAmtWithTax | currency | ReturnOrder | TotalFeeAdjustAmtWithTax |
| TotalFeeAdjustTaxAmount | currency | ReturnOrder | TotalFeeAdjustTaxAmount |
| TotalFeeAmount | currency | ReturnOrder | TotalFeeAmount |
| TotalFeeAmtWithTax | currency | ReturnOrder | TotalFeeAmtWithTax |
| TotalFeeTaxAmount | currency | ReturnOrder | TotalFeeTaxAmount |
| SystemModstamp | dateTime | ReturnOrder | SystemModstamp |
| AccountId | reference | ReturnOrder | CustomerAccountId |
| TotalAmount | currency | ReturnOrder | TotalAmount |
| GrandTotalAmount | currency | ReturnOrder | GrandTotalAmount |
| TotalDeliveryAdjustAmount | currency | ReturnOrder | TotalDeliveryAdjustAmount |
| TotalDeliveryAdjustAmtWithTax | currency | ReturnOrder | TotalDeliveryAdjustAmtWithTax |
| TotalDeliveryAdjustTaxAmount | currency | ReturnOrder | TotalDeliveryAdjustTaxAmount |
| TotalDeliveryAmount | currency | ReturnOrder | TotalDeliveryAmount |
| TotalDeliveryAmtWithTax | currency | ReturnOrder | TotalDeliveryAmtWithTax |
| TotalDeliveryTaxAmount | currency | ReturnOrder | TotalDeliveryTaxAmount |
| TotalProductAdjustAmount | currency | ReturnOrder | TotalProductAdjustAmount |
| TotalProductAdjustAmtWithTax | currency | ReturnOrder | TotalProductAdjustAmtWithTax |
| TotalProductAdjustTaxAmount | currency | ReturnOrder | TotalProductAdjustTaxAmount |
| TotalTaxAmount | currency | ReturnOrder | TotalTaxAmount |
| Status | picklist | ReturnOrder | ReturnOrderStatusId |
| StatusCategory | picklist | ReturnOrder | StatusCategory |
| Description | textarea | ReturnOrder | Description |
| TotalProductAmount | currency | ReturnOrder | TotalProductAmount |
| TotalProductAmtWithTax | currency | ReturnOrder | TotalProductAmtWithTax |
| TotalProductTaxAmount | currency | ReturnOrder | TotalProductTaxAmount |