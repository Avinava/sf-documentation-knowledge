---
title: "Commerce: Fulfillment Order Item Adjustment"
domain: data-cloud
topic: commerce-fulfillment-order-item-adjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.868Z
keywords: [Commerce, Fulfillment, Order, Item, Adjustment, DLO, DMO, Mapping]
---

# Commerce: Fulfillment Order Item Adjustment

# Commerce: Fulfillment Order Item Adjustment

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Fulfillment Order Item Adjustment data is a price adjustment that is calculated at the level of a specific fulfillment order product.

## DLO to DMO Mapping

These data mappings relate to the FulfillmentOrderItemAdjustment object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | FulfillmentOrderProductPriceAdjustment | id |
| FulfillmentOrderItemAdjustmentNumber | string | FulfillmentOrderProductPriceAdjustment | FulfOrderProdtPriceAdjNbrText |
| FulfillmentOrderLineItemId | reference | FulfillmentOrderProductPriceAdjustment | FulfillmentOrderProductId |
| OrderItemAdjustLineSummaryId | reference | FulfillmentOrderProductPriceAdjustment | SalesOrderProductPriceAdjustment |
| Amount | currency | FulfillmentOrderProductPriceAdjustment | AdjustmentAmount |
| TotalTaxAmount | currency | FulfillmentOrderProductPriceAdjustment | TotalAdjustmentTaxAmount |
| TotalAmtWithTax | currency | FulfillmentOrderProductPriceAdjustment | TotalAdjustmentAmount |
| Description | reference | FulfillmentOrderProductPriceAdjustment | Description |
| SystemModstamp | dateTime | FulfillmentOrderProductPriceAdjustment | SystemModstamp |