---
title: "PurchaseOrder"
domain: mfg-api-devguide
topic: purchaseorder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:24.063Z
estimatedTokens: 891
keywords: [PurchaseOrder, Purchase, Order, entity, captures, formal, Buyer, Supplier, supply, goods, services, identified, unique, PurchaseOrderNumber, tracks]
---

# PurchaseOrder

> Represents the Purchase Order entity that captures a formal request from a
      Buyer to a Supplier to supply goods or services. It is identified by a unique
      PurchaseOrderNumber and tracks the order's lifecycle via a StatusCode. It defines commercial
      terms like the TotalAmount, BillingAccount, and the governing PriceBook. This object is
      available in API version 65.0 and later.

# PurchaseOrder

Represents the Purchase Order entity that captures a formal request from a Buyer to a Supplier to supply goods or services. It is identified by a unique PurchaseOrderNumber and tracks the order's lifecycle via a StatusCode. It defines commercial terms like the TotalAmount, BillingAccount, and the governing PriceBook. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| PurchaseOrderNumber | TypeautonumberPropertiesFilter, Group, idLookup, SortDescriptionA unique identifier for the purchase order. |
| PurchaseOrderDate | TypedatetimePropertiesFilter, Group, Nillable, SortDescriptionThe date and time when the purchase order was created. |
| PurchaseOrderType | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe type of the purchase order such as standard, blanket, and contract. |
| BuyerAccount | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe buyer account that initiated the purchase order. |
| SupplierAccount | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe supplier account that received the purchase order. |
| BuyerContact | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe primary contact person associated with the buyer account. |
| SupplierContact | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe primary contact person associated with the supplier account. |
| StatusCode | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe current status of the product in the purchase order. |
| BillingAccount | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe account to which invoices are issued for the purchase order. |
| BillToContact | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe contact associated with the billing account. |
| PriceBook | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe price book that specifies the item prices applicable to the purchase order. |
| AdditionalInfo | TypetextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional notes or remarks related to the purchase order. |
| TotalAmount | TypetextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSum of all total amounts from the PO Lines. |
| ExternalPurchaseOrderNumber | TypetextPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference number associated with the purchase order. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the context in which the Purchase Order is created. |
| RequestedDeliveryDate | TypedatetimePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe requested delivery date for the product. |
| ShippingLocation | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location to which the product is to be shipped. |
| ShippingAddress | TypeaddressPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address to which the product is to be shipped. |
| ShipToContact | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contact associated with the shipping location. |
| ShipToAccount | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the shipping location. |
