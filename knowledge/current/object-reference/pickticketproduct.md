---
title: "PickTicketProduct"
domain: object-reference
topic: pickticketproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.875Z
estimatedTokens: 921
keywords: [PickTicketProduct, quantity, product, picked, part, PickTicket, include, quantities, multiple, FulfillmentOrders, API, version, 57.0, later, Calls]
---

# PickTicketProduct

> Represents a quantity of a product to be picked as part of a PickTicket. It
         can include quantities for multiple FulfillmentOrders. This object is available in API
      version 57.0 and later.

# PickTicketProduct

Represents a quantity of a product to be picked as part of a PickTicket. It can include quantities for multiple FulfillmentOrders. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available with an Order Management Growth license.

## Fields

| Field | Details |
| --- | --- |
| PickTicketId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the PickTicket associated with the PickTicketProduct.This field is a relationship field.Relationship NamePickTicketRelationship TypeLookupRefers ToPickTicket |
| PickTicketProductNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the PickTicketProduct. |
| PickedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionQuantity of the PickTicketProduct that has been picked. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the product associated with the PickTicketProduct.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionProduct code of the product associated with the PickTicketProduct. |
| Quantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionTotal quantity that’s requested to be picked of the associated product. |
| RejectReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe reason why some or all of the requested quantity isn’t being picked.Possible values are:DefectedOtherOut of stock |
| RejectedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe requested quantity that hasn’t been picked. When the status category of the associated PickTicket is set to Completed, this value is automatically calculated as Quantity - PickedQuantity. |
| StockKeepingUnit | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe stock keeping unit (SKU) of the associated product. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PickTicketProductFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

#### See Also

-   [PickTicket](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticket.htm "A PickTicket represents quantities of one or more products to be picked for fulfillment at a location. It can include products belonging to one or more fulfillment orders. This object is available in API version 57.0 and later.")

-   [PickTicketAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticketassignment.htm "Represents the association of a FulfillmentOrder with a PickTicket. A PickTicket has one PickTicketAssignment for each FulfillmentOrder containing products to be picked as part of that PickTicket. This object is available in API version 57.0 and later.")

-   [Product2](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_product2.htm "Represents a product that your company sells.")

## Related Topics

- PickTicketProductFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- PickTicket (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticket.htm)
- PickTicketAssignment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticketassignment.htm)
- Product2 (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_product2.htm)
