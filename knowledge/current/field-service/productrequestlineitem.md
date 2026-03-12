---
title: "ProductRequestLineItem"
domain: field-service
topic: productrequestlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:54.544Z
estimatedTokens: 1774
keywords: [ProductRequestLineItem, part, service, Product, line, items, components, requests, Calls, Special, Access, Rules, Associated, Objects]
---

# ProductRequestLineItem

> Represents a request for a part in field service. Product request
			line items are components of product requests.

# ProductRequestLineItem

Represents a request for a part in field service. Product request line items are components of product requests.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled. You can't use product request line item as a master in an master detail relationship (through a custom field) with a custom object with data.

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account associated with the product request line item.This is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| CareProgramEnrolleeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the care program enrollee associated with the product request line item. This field is available from API version 49.0 and later.This is a relationship field.Relationship NameCareProgramEnrolleeRelationship TypeLookupRefers ToCareProgramEnrollee |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the product request line item.This is a relationship field.Relationship NameCaseRelationship TypeLookupRefers ToCase |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDetails not recorded in the provided fields. |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhere the product is delivered.This is a relationship field.Relationship NameDestinationLocationRelationship TypeLookupRefers ToLocation |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| NeedByDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the product must be delivered by. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product request that the line item belongs to.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToProductRequest |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product associated with the product request line item.This is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductRequestLineItemNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read Only) An auto-assigned number that identifies the product request line item. |
| QuantityRequested | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe amount requested. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnits of the requested product; for example, grams, liters, or units. The picklist values can be customized. |
| ShipToAddress | TypeaddressPropertiesFilter, NillableDescriptionThe physical address where the product is needed. |
| ShipToCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the address where the product is needed. |
| ShipToCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the address where the product is needed. |
| ShipToGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the address where the product is needed. See Compound Field Considerations and Limitations for details on geolocation compound fields. This field is available in the API only. |
| ShipToLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address where the product is needed. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. This field is available in the API only. |
| ShipToLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address where the product is needed. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. This field is available in the API only. |
| ShipToPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address where the product is needed. |
| ShipToState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address where the product is needed. |
| ShipToStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address where the product is needed. |
| ShipmentType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of shipment. The picklist includes the following values, which can be customized:RushOvernightNext Business DayPick Up |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWhere the product is at the time of the request.This is a relationship field.Relationship NameSourceLocationRelationship TypeLookupRefers ToLocation |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the shipment. The picklist includes the following values, which can be customized:DraftSubmittedReceived |
| WorkOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order for which the product is needed.This is a relationship field.Relationship NameWorkOrderRelationship TypeLookupRefers ToWorkOrder |
| WorkOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe work order line item for which the product is needed.This is a relationship field.Relationship NameWorkOrderLineItemRelationship TypeLookupRefers ToWorkOrderLineItem |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ProductRequestLineItemChangeEvent (API version 48.0)

Change events are available for the object.

ProductRequestLineItemFeed

Feed tracking is available for the object.

ProductRequestLineItemHistory

History is available for tracked fields of the object.
