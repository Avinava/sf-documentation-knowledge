---
title: "ProductRequest"
domain: mfg-api-devguide
topic: productrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.007Z
estimatedTokens: 1235
keywords: [ProductRequest, order, products, specific, inventory, locations, API, version, 60.0, later, Calls]
---

# ProductRequest

> Represents a request or an order for products to and from specific inventory
         locations. This object is available in API version 60.0 and later.

# ProductRequest

Represents a request or an order for products to and from specific inventory locations. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the product request.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the product request. For example, this may be the case because of which the product is requested.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the product request. |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the product is delivered.This field is a relationship field.Relationship NameDestinationLocationRelationship TypeLookupRefers ToLocation |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| NeedByDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date by which the product must be delivered to fulfill the request. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the product request.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProductRequestNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the product request. |
| ShipToAddress | TypeaddressPropertiesFilter, NillableDescriptionThe address that the product is to be delivered to. |
| ShipToCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city that the product is to be delivered to. |
| ShipToCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country that the product is to be delivered to. |
| ShipToGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe accuracy of the geocode for the shipping address. |
| ShipToLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latitude of the location where the product is to be delivered to. |
| ShipToLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe longitude of the location where the product is to be delivered to. |
| ShipToPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address where the product is to be delivered to. |
| ShipToState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the state where the product is to be delivered to. |
| ShipToStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street address where the product is to be delivered to. |
| ShipmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of shipment. The picklist includes the following values by default:NoneRushOvernightNext Business DayPick Up |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location from which the product is shipped.This field is a relationship field.Relationship NameSourceLocationRelationship TypeLookupRefers ToLocation |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the product transfer. |
| WorkOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order that’s associated with the product request.This field is a relationship field.Relationship NameWorkOrderRelationship TypeLookupRefers ToWorkOrder |
| WorkOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order line item that’s associated with the product request.This field is a relationship field.Relationship NameWorkOrderLineItemRelationship TypeLookupRefers ToWorkOrderLineItem |
