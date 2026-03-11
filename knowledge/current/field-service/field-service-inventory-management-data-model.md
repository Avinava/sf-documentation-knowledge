---
title: "Field Service Inventory Management Data Model"
domain: field-service
topic: field-service-inventory-management-data-model
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.279Z
keywords: [Field, Service, Inventory, Management, Data, Model, Note, See]
---

# Field Service Inventory Management Data Model

# Field Service Inventory Management Data Model

Use Field Service’s inventory objects to track the storage, request, consumption, return, and retirement of items in your inventory.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

Asterisks in the following diagrams signify required fields.

Inventory management starts with product items, which represent the stock of a particular product at a particular location. Each product item is associated with a product and a location in Salesforce. For example, if you have 50 hammers stored in your Warehouse A location and 200 stored in Warehouse B, create one product item for each location. Product items list a quantity at the location that is updated automatically when inventory is transferred or consumed.

![Product item diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_pi.png&folder=field_service_dev)

If the Inventory Location option is selected on a location, it means that inventory can be stored there. Product items can be associated only with inventory locations.

You can link a location to multiple accounts and service territories. For example, if a location is a shopping mall, you can choose to associate it with every account that operates a store in the mall. You can also create addresses for a location, such as a mailing and home address. And to keep track of customer sites, create associated locations, which contain lookups to an account and a location.

![Location diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_inv_basic.png&folder=field_service_dev)

If a particular product is needed to complete a field service job, add products required to ensure that the assigned service resources arrive prepared. Products required can be child records of work orders, work order line items, and work types. Work order and work order line items inherit their work type’s products required.

When a product is consumed during the completion of a work order, track its consumption by creating a product consumed record. You can add products consumed to work orders or work order line items. Track product consumption at the line item level if you want to know which products were used for each line item’s tasks.

The way you use products consumed depends on how closely you want to track the state of your inventory in Salesforce. If you want to track the entire life cycle of items in your inventory, including their storage, transfer, and consumption, link your product consumed records to product items. This approach ensures that your inventory numbers update automatically to reflect the consumption of products from your inventory. If you want to track product consumption only, however, specify a **Price Book Entry** on each product consumed record and leave the **Product Item** field blank.

![Products required diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_pr.png&folder=field_service_dev)

The movement of items into and out of your inventory and between locations is tracked using these objects:

-   Product requests are orders for products, which you might create when stock is running low.
-   Product request line items are subdivisions of a product request.
-   Product transfers track the movement of product items between inventory locations.
-   Shipments represent the shipment of product items between locations.
-   Product item transactions describe actions performed on a product item. They’re auto-generated records that help you track when inventory is replenished, consumed, or adjusted.
-   Return orders track the return of a product item due to damage, order errors, or other reasons.
-   Return order line items are subdivisions of a return order.

![Inventory diagram](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Ffield_service%2Fimages%2Ffsl_dev_inv_full.png&folder=field_service_dev)

#### See Also

-   [Set Up Your Field Service Inventory](https://help.salesforce.com/articleView?id=fs_set_up_parts.htm&language=en_US "Set Up Your Field Service Inventory - HTML (New Window)")
    
-   [Guidelines for Transferring Inventory](https://help.salesforce.com/articleView?id=fs_product_transfers.htm&language=en_US "Guidelines for Transferring Inventory - HTML (New Window)")
    
-   [Guidelines for Consuming Inventory](https://help.salesforce.com/articleView?id=fs_products_consumed.htm&language=en_US "Guidelines for Consuming Inventory - HTML (New Window)")
    
-   [Common Inventory Management Tasks](https://help.salesforce.com/articleView?id=fs_parts_guidelines.htm&language=en_US "Common Inventory Management Tasks - HTML (New Window)")