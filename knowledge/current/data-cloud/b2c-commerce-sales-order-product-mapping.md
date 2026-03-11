---
title: "B2C Commerce: Sales Order Product Mapping"
domain: data-cloud
topic: b2c-commerce-sales-order-product-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.727Z
keywords: [B2C, Commerce, Sales, Order, Product, Mapping, DLO, DMO]
---

# B2C Commerce: Sales Order Product Mapping

# B2C Commerce: Sales Order Product Mapping

After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Sales Order Product object represents an order.

## DLO to DMO Mapping

These data mappings relate to the Sales Order Product object used with the B2C Commerce connector. You can add or customize the data mappings.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| currencyCodeAlpha3 | text | Sales Order Product | Discount Amount Currency |
| text | Sales Order Product | List Price Amount Currency |
| text | Sales Order Product | Unit Price Amount Currency |
| text | Sales Order Product | Unit Tax Amount Currency |
| discountAmount | number | Sales Order Product | Discount Amount |
| orderPlacedTimestamp | date | Sales Order Product | Created Date |
| date | Sales Order Product | Last Modified Date |
| productId | text | Sales Order Product | Product |
| quantityValue | number | Sales Order Product | Ordered Quantity |
| unique_id | text | Sales Order Product | Sales Order Product |
| unique_orderId | text | Sales Order Product | Sales Order |
| unitGrossPrice | number | Sales Order Product | List Price Amount |
| unitGrossPriceAfterDiscounts | number | Sales Order Product | Unit Price Amount |
| unitTax | number | Sales Order Product | Unit Price Amount |