---
title: "Commerce: Order Item Summary Change Mapping"
domain: data-cloud
topic: commerce-order-item-summary-change-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.086Z
estimatedTokens: 246
keywords: [Commerce, Order, Item, Summary, Change, Mapping, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model]
---

# Commerce: Order Item Summary Change Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Item Summary Change data is a change log for
         a sales order.

# Commerce: Order Item Summary Change Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Item Summary Change data is a change log for a sales order.

## DLO to DMO Mapping

These data mappings relate to the OrderItemSummaryChange object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | SalesOrderChangeLog | id |
| ChangeOrderItemId | reference | SalesOrderChangeLog | ChangeSalesOrderProductId |
| OrderSummaryId | reference | SalesOrderChangeLog | RelatedSalesOrderIdChangeSalesOrderId |
| OrderItemSummaryId | reference | SalesOrderChangeLog | RelatedSalesOrderProductId |
| OrderItemSummaryChangeNumber | string | SalesOrderChangeLog | SalesOrderChangeLogName |
| SystemModstamp | dateTime | SalesOrderChangeLog | SystemModstamp |
