---
title: "ProductTransfer"
domain: object-reference
topic: producttransfer
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.505Z
estimatedTokens: 2073
keywords: [ProductTransfer, transfer, inventory, locations, service, Calls, Special, Access, Rules, Associated, Objects]
---

# ProductTransfer

> Represents the transfer of inventory between locations in field
			service.

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

[ProductTransferChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[ProductTransferFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductTransferHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductTransferOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProductTransferShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductTransferChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ProductTransferFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ProductTransferHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ProductTransferOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ProductTransferShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
