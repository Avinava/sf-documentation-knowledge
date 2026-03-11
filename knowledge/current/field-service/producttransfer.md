---
title: "ProductTransfer"
domain: field-service
topic: producttransfer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:12.799Z
keywords: [ProductTransfer, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# ProductTransfer

# ProductTransfer

Represents the transfer of inventory between locations in field service.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDetails not recorded in the provided fields. |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe place the product is to be delivered.This is a relationship field.Relationship NameDestinationLocationRelationship TypeLookupRefers ToLocation |
| ExpectedPickupDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the product is expected to be picked up. |
| IsReceived | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionCheckbox identifying that the product was received. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product request was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product request was last viewed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionOwner of the product transfer.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup field for the product associated with the product transfer.This is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| Product2TransferRecordMode | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf serialized, indicates when the serial number is recorded. It is visible on the product transfer as a read-only field depending on the field-level security. Possible values are:SendAndReceive —The serial number is recorded when sending or receiving.ReceiveOnly —The serial number is recorded when receiving only.Relationship NameProduct2.TransferRecordModeRelationship TypeLookupRefers ToProduct2.TransferRecordMode |
| ProductRequestId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionLookup field for the product request associated with the product transfer.This is a relationship field.Relationship NameProductRequestRelationship TypeLookupRefers ToProductRequest |
| ProductRequestLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup field for the product request line item associated with the product transfer.This is a relationship field.Relationship NameProductRequestLineItemRelationship TypeLookupRefers ToProductRequestLineItem |
| ProductTransferNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-assigned number that identifies the product transfer. |
| QuantityReceived | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount of product received at the destination location. |
| QuantitySent | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionAmount of product sent from the source location. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe units of the product, for example grams, liters, or units. |
| ReceivedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup field for the contact who received the product at the destination location.This is a polymorphic relationship field.Relationship NameReceivedByRelationship TypeLookupRefers ToGroup, User |
| ReturnOrderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe return order associated with the product transfer.This is a relationship field.Relationship NameReturnOrderRelationship TypeLookupRefers ToReturnOrder |
| ReturnOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe return order line item associated with the product transfer.This is a relationship field.Relationship NameReturnOrderLineItemRelationship TypeLookupRefers ToReturnOrderLineItem |
| ShipmentExpectedDeliveryDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionLookup field for the shipment related to the product transfer. |
| ShipmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup field for the shipment related to the product transfer.This is a relationship field.Relationship NameShipmentRelationship TypeLookupRefers ToShipment |
| ShipmentStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionLookup field for the shipment related to the product transfer. |
| ShipmentTrackingNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLookup field for the shipment related to the product transfer. |
| ShipmentTrackingUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionLookup field for the shipment related to the product transfer. |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup field for the source location related to the product transfer.This is a relationship field.Relationship NameSourceLocationRelationship TypeLookupRefers ToLocation |
| SourceProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup field for the product item related to the product transfer.Relationship NameSourceProductItemRelationship TypeLookupRefers ToProductItem |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the product transfer. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ProductTransferChangeEvent (API version 48.0)

Change events are available for the object.

ProductTransferFeed

Feed tracking is available for the object.

ProductTransferHistory

History is available for tracked fields of the object.

ProductTransferOwnerSharingRule

Sharing rules are available for the object.

ProductTransferShare

Sharing is available for the object.