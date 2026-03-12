---
title: "ShipmentItem"
domain: object-reference
topic: shipmentitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.116Z
estimatedTokens: 952
keywords: [ShipmentItem, order, item, included, shipment, API, version, 51.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# ShipmentItem

> Represents an order item included in a shipment. This object is available
    in API version 51.0 and later.

# ShipmentItem

Represents an order item included in a shipment. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

At least one of these features must be enabled:

-   Order Management
-   Field Service
-   B2B Commerce
-   Health Cloud Visit Inventory
-   Consumer Goods Cloud Retail Execution

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the shipment item. |
| ExpectedDeliveryDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionExpected delivery date of the shipment that contains the shipment item. |
| FulfillmentOrderLineItemId | TypereferencePropertiesFilter, Nillable, SortDescriptionThe FulfillmentOrderLineItem (fulfillment order product) corresponding to the shipment item. |
| OrderItemSummaryId | TypereferencePropertiesFilter, Nillable, SortDescriptionThe OrderItemSummary (order product summary) corresponding to the shipment item. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product represented by the shipment item.This is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| Quantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity of products represented by the shipment item. |
| ReturnOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor a return ShipmentItem, the associated ReturnOrderLineItem.This field is available in API version 53.0 and later. |
| ShipmentId | TypereferencePropertiesCreate, Filter, Group, SortDescription(Master-Detail) The shipment that contains the shipment item.This is a relationship field.Relationship NameShipmentRelationship TypeLookupRefers ToShipment |
| ShipmentItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the shipment item. |
| TrackingNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe tracking number of the shipment that contains the shipment item. |
| TrackingUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe tracking URL of the shipment that contains the shipment item. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ShipmentItemFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ShipmentItemHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

#### See Also

-   [Shipment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shipment.htm "Represents the transport of inventory in field service or a shipment of order items in Order Management.")

-   [FulfillmentOrderLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm "Represents a product or delivery charge belonging to a FulfillmentOrder. Corresponds to an OrderItemSummary. This object is available in API version 48.0 and later.")

## Related Topics

- ShipmentItemFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ShipmentItemHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- Shipment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shipment.htm)
- FulfillmentOrderLineItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm)
