---
title: "Field Service Pricing Data Model"
domain: field-service
topic: field-service-pricing-data-model
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:55.584Z
estimatedTokens: 605
keywords: [Field, Service, Pricing, Data, Model, Link, work, orders, products, assets, org, track, product, pricing, being, performed, customers’, installed, products., Note]
---

# Field Service Pricing Data Model

> Link work orders to products or assets in your org to track product pricing and work
  being performed on your customers’ installed products.

# Field Service Pricing Data Model

Link work orders to products or assets in your org to track product pricing and work being performed on your customers’ installed products.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Asterisks in the following diagram signify required fields.

![Pricing diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_pricing.png&folder=field_service_dev)

If you’ve set up a product catalog in Salesforce to track the goods and services your business offers, you can associate items in your price books with work orders and their line items, similar to the way you can associate products with opportunities or orders. If you specify a price book on a work order, this allows you to link each work order line item to a price book entry (product) from the price book. List price, discount, and quantity are defined at the line-item level.

For example, if you create a work order for a solar panel installation, select a price book in the Price Book lookup field on the work order. Then, use the Price Book Entry lookup field on its work order line items to select goods or services listed in your price book, such as Site Assessment, Solar Panel, and Inverter. A quick glance at a completed work order’s line items shows you which products from your product catalog were sold as part of the work order.

After a product is purchased and installed for a customer, it is typically tracked as an asset in Salesforce. The Asset lookup field on work orders and work order line items allows you to track work being performed on a specific asset. It also makes it possible to view a history of all work completed on the asset.

If an asset is replaced or upgraded, the relationship between the old and new asset is tracked in an asset relationship record. An asset relationship lists a start and end time—for instance, if the replacement asset is being leased—and a relationship type, which must be defined by the admin.

#### See Also

-   [Work Order Pricing Guidelines for Field Service](https://help.salesforce.com/articleView?id=wo_pricing.htm&language=en_US "Work Order Pricing Guidelines for Field Service - HTML (New Window)")

-   [Equal Asset Relationships](https://help.salesforce.com/articleView?id=assets_wo_equal.htm&language=en_US "Equal Asset Relationships - HTML (New Window)")
