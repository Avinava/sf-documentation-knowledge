---
title: "Commerce: Order Item Summary Mapping"
domain: data-cloud
topic: commerce-order-item-summary-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.896Z
keywords: [Commerce, Order, Item, Summary, Mapping, DLO, DMO]
---

# Commerce: Order Item Summary Mapping

# Commerce: Order Item Summary Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Item Summary data is information about a component of a sales order that identifies a product or service sold to the customer.

## DLO to DMO Mapping

These data mappings relate to the OrderItemSummary object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | SalesOrderProduct | id |
| OrderSummaryId | reference | SalesOrderProduct | SalesOrderId |
| CurrencyIsoCode | picklist | SalesOrderProduct | UnitTaxAmountCurrency |
| ShippingCostAmountCurrency |
| ShippingTaxAmountCurrency |
| HandlingCostAmountCurrency |
| ListPriceAmountCurrency |
| DiscountAmountCurrency |
| UnitPriceAmountCurrency |
| OrderDeliveryGroupSummaryId | reference | SalesOrderProduct | SalesOrderDeliveryGroupId |
| Product2Id | reference | SalesOrderProduct | ProductId |
| ProductCode | string | SalesOrderProduct | OrderProductNumber |
| Type | picklist | SalesOrderProduct | SalesOrderProductTypeId |
| TypeCode | picklist | SalesOrderProduct | SalesOrderProductSubTypeId |
| CreatedDate | dateTime | SalesOrderProduct | CreatedDate |
| SystemModstamp | dateTime | SalesOrderProduct | SystemModstamp |
| ListPrice | currency | SalesOrderProduct | ListPriceAmount |
| UnitPrice | currency | SalesOrderProduct | UnitPriceAmount |
| TotalPrice | currency | SalesOrderProduct | TotalPriceAmount |
| AdjustedLineAmount | currency | SalesOrderProduct | AdjustedSalesOrderProductAmount |
| TotalAdjustedLineTaxAmount | currency | SalesOrderProduct | TotalTaxAmount |
| GrossUnitPrice | currency | SalesOrderProduct | GrossUnitPriceAmount |
| TotalAdjustmentAmtWithTax | currency | SalesOrderProduct | TotalWithTaxAdjustmentAmount |
| AdjustedLineAmtWithTax | currency | SalesOrderProduct | WithTaxAdjustedLineAmount |
| TotalLineAdjustmentAmtWithTax | currency | SalesOrderProduct | TotalWithTaxLineAdjustmentAmount |
| TotalAdjustmentDistAmtWithTax | currency | SalesOrderProduct | TotalWithTaxDistAdjustmentAmount |
| TotalAmtWithTax | currency | SalesOrderProduct | SalesOrderProductAdjustedTaxAmount |
| TotalLineAmountWithTax | currency | SalesOrderProduct | TotalWithTaxLineAmount |
| QuantityAllocated | double | SalesOrderProduct | AllocatedQuantity |
| QuantityOrdered | double | SalesOrderProduct | OrderedQuantity |
| QuantityFulfilled | double | SalesOrderProduct | QuantityFulfilled |
| QuantityReturned | double | SalesOrderProduct | ProductReturnedQuantity |
| QuantityNetOrdered | double | SalesOrderProduct | AvailableQuantity |
| TotalTaxAmount | currency | SalesOrderProduct | TotalTaxAmount |
| TotalAdjustmentAmount | currency | SalesOrderProduct | TotalAdjustmentAmount |
| TotalAdjustmentTaxAmount | currency | SalesOrderProduct | TotalAdjustmentTaxAmount |
| TotalLineAmount | currency | SalesOrderProduct | TotalLineAmount |
| TotalLineTaxAmount | currency | SalesOrderProduct | TotalProductTaxAmount |
| TotalLineAdjustmentAmount | currency | SalesOrderProduct | TotalLineAdjustmentAmount |
| TotalLineAdjustmentTaxAmount | currency | SalesOrderProduct | TotalAdjustmentTaxAmount |
| TotalAdjustmentDistAmount | currency | SalesOrderProduct | TotalDistributedAdjustmentAmount |
| TotalAdjustmentDistTaxAmount | currency | SalesOrderProduct | TotalDistributedAdjustmentTaxAmount |
| ServiceDate | date | SalesOrderProduct | PromisedDate |
| RequestedStartDate |
| Status | picklist | SalesOrderProduct | SalesOrderProductStatusId |
| Description | textarea | SalesOrderProduct | Description |
| PricebookEntryId | reference | SalesOrderProduct | PricebookEntryId |