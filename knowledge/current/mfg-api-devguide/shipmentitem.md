---
title: "ShipmentItem"
domain: mfg-api-devguide
topic: shipmentitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.288Z
estimatedTokens: 469
keywords: [ShipmentItem, product, that’s, included, shipment, API, version, 60.0, later, Calls]
---

# ShipmentItem

> Represents a product that’s included in a shipment. This object is
      available in API version 60.0 and later.

# ShipmentItem

Represents a product that’s included in a shipment. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the shipment item. |
| ExpectedDeliveryDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionExpected delivery date of the shipment that contains the shipment item. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the shipment item.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| Quantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity of products represented by the shipment item. |
| ReturnOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe return order line item associated with the shipment item that’s part of a return shipment. |
| ShipmentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe shipment that contains the shipment item.This field is a relationship field.Relationship NameShipmentRelationship TypeLookupRefers ToShipment |
| ShipmentItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the shipment item. |
| TrackingNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe tracking number of the shipment that contains the shipment item. |
| TrackingUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe tracking URL of the shipment that contains the shipment item. |
