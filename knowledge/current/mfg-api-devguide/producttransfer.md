---
title: "ProductTransfer"
domain: mfg-api-devguide
topic: producttransfer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.114Z
estimatedTokens: 1696
keywords: [ProductTransfer, transfer, movement, product, item, two, inventory, locations, API, version, 60.0, later, Calls]
---

# ProductTransfer

> Represents the transfer or the movement of a product item between two
         inventory locations. This object is available in API version 60.0 and later.

# ProductTransfer

Represents the transfer or the movement of a product item between two inventory locations. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the product transfer. |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe place the product is to be delivered.This is a relationship field.Relationship NameDestinationLocationRelationship TypeLookupRefers ToLocation |
| ExpectedPickupDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the product is expected to be picked up. |
| IsReceived | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies if the product was received (true) or not (false). |
| IsProduct2Serialized | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the product associated with the product transfer is a serialized product (true) or not (false).The default value is false. |
| IsReceived | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the product was received (true) or not (false).The default value is false. |
| IsSent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the product was sent as a part of the transfer (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the product transfer.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product that’s associated with the product transfer.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| Product2TransferRecordMode | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf serialized, specifies when the serial number is recorded. It is visible on the product transfer as a read-only field depending on the field-level security. Possible values are:SendAndReceive —The serial number is recorded when sending or receiving.ReceiveOnly —The serial number is recorded when receiving only.Relationship NameProduct2.TransferRecordModeRelationship TypeLookupRefers ToProduct2.TransferRecordMode |
| ProductRequestId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product request that’s associated with the product transferThis field is a relationship field.Relationship NameProductRequestRelationship TypeLookupRefers ToProductRequest |
| ProductRequestLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product request line item associated with the product transfer.This field is a relationship field.Relationship NameProductRequestLineItemRelationship TypeLookupRefers ToProductRequestLineItem |
| ProductTransferNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number that identifies the product transfer. |
| QuantityReceived | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity of product received at the destination location. |
| QuantitySent | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity of product sent from the source location. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe units of the product, for example grams, liters, or units.Possible values are:Each |
| ReceivedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person that receives the product at the destination location.This field is a polymorphic relationship field.Relationship NameReceivedByRelationship TypeLookupRefers ToGroup, User |
| ReturnOrderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe return order associated with the product transfer.This field is a relationship field.Relationship NameReturnOrderRelationship TypeLookupRefers ToReturnOrder |
| ReturnOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe return order line item associated with the product transfer.This field is a relationship field.Relationship NameReturnOrderLineItemRelationship TypeLookupRefers ToReturnOrderLineItem |
| ShipmentExpectedDeliveryDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the shipment is expected at the product transfer shipment. |
| ShipmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe shipment associated with the product transfer.This field is a relationship field.Relationship NameShipmentRelationship TypeLookupRefers ToShipment |
| ShipmentStatus | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe status of the shipment associated with the product transfer. |
| ShipmentTrackingNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe number of the shipment associated with the product transfer. |
| ShipmentTrackingUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe tracking URL of the shipment associated with the product transfer. |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source location associated with the product transfer.This field is a relationship field.Relationship NameSourceLocationRelationship TypeLookupRefers ToLocation |
| SourceProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product item associated with the product transfer.This field is a relationship field.Relationship NameSourceProductItemRelationship TypeLookupRefers ToProductItem |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the product transfer. |
