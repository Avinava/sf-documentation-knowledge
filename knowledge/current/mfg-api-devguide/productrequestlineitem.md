---
title: "ProductRequestLineItem"
domain: mfg-api-devguide
topic: productrequestlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.021Z
estimatedTokens: 1464
keywords: [ProductRequestLineItem, product, that’s, requested, part, line, items, components, requests, item, associated, specific, API, version, 60.0]
---

# ProductRequestLineItem

> Represents a product that’s requested as a part of a product request. Product
         request line items are components of product requests. Each line item is associated with a
         specific product being requested. This object is available in API version 60.0 and
      later.

# ProductRequestLineItem

Represents a product that’s requested as a part of a product request. Product request line items are components of product requests. Each line item is associated with a specific product being requested. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the product request line item.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the product request line item.This field is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the product request line item. |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe destination of the product delivery.This is a relationship field.Relationship NameDestinationLocationRelationship TypeLookupRefers ToLocation |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| NeedByDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the product must be delivered by. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product request that’s associated with the product request line item.This field is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToProductRequest |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product associated with the product request line item.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductRequestLineItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number for the product request line item. |
| QuantityRequested | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity of the requested product. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe units of the requested product; for example, grams, liters, or units. The picklist values can be customized. |
| ShipToAddress | TypeaddressPropertiesFilter, NillableDescriptionThe physical address where the product is needed. |
| ShipToCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the address where the product is needed. |
| ShipToCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the address where the product is needed. |
| ShipToGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the address where the product is needed. |
| ShipToLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address where the product is needed. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| ShipToLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address where the product is needed. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| ShipToPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address where the product is needed. |
| ShipToState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address where the product is needed. |
| ShipToStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address where the product is needed. |
| ShipmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of shipment. The picklist includes the following values, which can be customized:RushOvernightNext Business DayPick Up |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhere the product is at the time of the request.This is a relationship field.Relationship NameSourceLocationRelationship TypeLookupRefers ToLocation |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the shipment. The picklist includes the following values, which can be customized:DraftSubmittedReceived |
| WorkOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order for which the product is needed.This is a relationship field.Relationship NameWorkOrderRelationship TypeLookupRefers ToWorkOrder |
| WorkOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order line item for which the product is needed.This is a relationship field.Relationship NameWorkOrderLineItemRelationship TypeLookupRefers ToWorkOrderLineItem |
