---
title: "ProductRequest"
domain: object-reference
topic: productrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.421Z
estimatedTokens: 1929
keywords: [ProductRequest, order, part, parts, service, Calls, Special, Access, Rules, Associated, Objects]
---

# ProductRequest

> Represents an order for a part or parts in field
		service.

# ProductRequest

Represents an order for a part or parts in field service.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

Authenticated external users can create and update ProductRequest objects.

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the product request.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the product request.This is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only if the multicurrency feature is enabled. Contains the ISO code for any currency allowed by the organization. The label in the user interface is Currency ISO Code. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA text field for details not recorded in the provided fields. |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhere the product is delivered.This is a relationship field.Relationship NameDestinationLocationRelationship TypeLookupRefers ToLocation |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product request was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product request was last viewed. |
| NeedByDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the product must be delivered by. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the shipment.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductRequestNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-assigned number that identifies the shipment. |
| ShipToAddress | TypeaddressPropertiesFilter, NillableDescriptionThe address that the product is to be delivered to. |
| ShipToCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city that the product is to be delivered to. |
| ShipToCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country that the product is to be delivered to. |
| ShipToCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA two letter uppercase country code conforming to the ISO 3166-1 alpha-2 standard. |
| ShipToGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe accuracy of the geocode for the shipping address. |
| ShipToLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude of the location where the product is to be delivered to. |
| ShipToLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude of the location where the product is to be delivered to. |
| ShipToPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address where the product is to be delivered to. |
| ShipToState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the state where the product is to be delivered to. |
| ShipToStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA two letter uppercase state code conforming to the ISO 3166-1 alpha-2 standard. |
| ShipToStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street address where the product is to be delivered to. |
| ShipmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of shipment. The picklist includes the following values by default:NoneRushOvernightNext Business DayPick Up |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location the product is shipped from.This is a relationship field.Relationship NameSourceLocationRelationship TypeLookupRefers ToLocation |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the product transfer. |
| WorkOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order that the product request is related to.This is a relationship field.Relationship NameWorkOrderRelationship TypeLookupRefers ToWorkOrder |
| WorkOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order line item that the product request is related to.This is a relationship field.Relationship NameWorkOrderLineItemRelationship TypeLookupRefers ToWorkOrderLineItem |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProductRequestChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[ProductRequestFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProductRequestHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProductRequestOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProductRequestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProductRequestChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ProductRequestFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ProductRequestHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ProductRequestOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ProductRequestShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
