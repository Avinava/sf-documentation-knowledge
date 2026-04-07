---
title: "PurchaseOrderItem"
domain: mfg-api-devguide
topic: purchaseorderitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:24.073Z
estimatedTokens: 740
keywords: [PurchaseOrderItem, individual, line, parent, Purchase, Order, detailing, specific, product, service, procured, captures, core, transactional, data]
---

# PurchaseOrderItem

> Represents an individual line on a parent Purchase Order, detailing a specific
      product or service being procured. It captures the core transactional data including the
      Quantity, UnitPrice, a reference to the Product, and the calculated LineTotal. This object is
      available in API version 65.0 and later.

# PurchaseOrderItem

Represents an individual line on a parent Purchase Order, detailing a specific product or service being procured. It captures the core transactional data including the Quantity, UnitPrice, a reference to the Product, and the calculated LineTotal. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| PurchaseOrderItemNumber | TypeautonumberPropertiesFilter, Group, idLookup, SortDescriptionA unique identifier for the product in the purchase order. |
| PurchaseOrder | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe parent purchase order associated with the product. |
| ProductId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe Id of the product associated with the purchase order. |
| PricebookEntry | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe pricebook entry that defines the price for the specified product. |
| ListPrice | TypecurrencyPropertiesFilter, Group, Nillable, SortDescriptionThe list price of the product. |
| DiscountPercentage | TypepercentPropertiesFilter, Group, Nillable, SortDescriptionThe percentage of discount applied to the unit price of the product. |
| NetUnitPrice | TypecurrencyPropertiesFilter, Group, Nillable, SortDescriptionThe price of the product per unit after applying discounts. |
| OrderedQuantity | TypedoublePropertiesFilter, Group, Nillable, SortDescriptionThe number of units ordered for the product. |
| QuantityUnitOfMeasure | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unit of measure for the ordered quantity. |
| TotalAmount | TypecurrencyPropertiesFilter, Group, Nillable, SortDescriptionThe total cost for the specified product. |
| StatusCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current status of the product in the purchase order. |
| RequestedDeliveryDate | TypedatetimePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe requested delivery date for the product. |
| ShippingLocation | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location to which the product is to be shipped. |
| ShipToContact | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the shipping location. |
| ShippingAddress | TypeaddressPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address to which the product is to be shipped. |
| QuantityReceived | TypedoublePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quantity of the product received to date. |
| AdditionalInfo | TypetextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional notes or remarks related to the product. |
