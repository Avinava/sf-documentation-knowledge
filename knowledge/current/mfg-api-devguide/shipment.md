---
title: "Shipment"
domain: mfg-api-devguide
topic: shipment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.282Z
estimatedTokens: 1678
keywords: [Shipment, product, item, that’s, transit, two, inventory, locations, API, version, 60.0, later, Calls]
---

# Shipment

> Represents a product item that’s in transit between two inventory
         locations. This object is available in API version 60.0 and later.

# Shipment

Represents a product item that’s in transit between two inventory locations. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ActualDeliveryDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the product was delivered. |
| DeliveredToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person or entity the product was delivered to.This is a polymorphic relationship field.Relationship NameDeliveredToRelationship TypeLookupRefers ToGroup, User |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the shipment. |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe place the product is to be delivered.This is a relationship field.Relationship NameDestinationLocationRelationship TypeLookupRefers ToLocation |
| ExpectedDeliveryDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the product is expected to be delivered. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the shipment.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ReturnOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe return order associated with a return shipment. |
| ShipFromAddress | TypeaddressPropertiesFilter, NillableDescriptionThe place the product is coming from. |
| ShipFromCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the address where the shipment originates. |
| ShipFromCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the address where the shipment originates. |
| ShipFromGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the address where the shipment originates. |
| ShipFromLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address where the shipment originates. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| ShipFromLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address where the shipment originates. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| ShipFromPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address where the shipment originates. |
| ShipFromState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address where the shipment originates. |
| ShipFromStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address where the shipment originates. |
| ShipToAddress | TypeaddressPropertiesFilter, NillableDescriptionThe physical address where the shipment is delivered. |
| ShipToCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the address where the shipment is delivered. |
| ShipToCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the address where the shipment is delivered. |
| ShipToGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the address where the shipment is delivered. |
| ShipToLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address where the shipment is delivered. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| ShipToLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address where the shipment is delivered. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| ShipToName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe shipment recipient. |
| ShipToPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address where the shipment is delivered. |
| ShipToState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address where the shipment is delivered. |
| ShipToStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address where the shipment is delivered. |
| ShipmentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the shipment. |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe location where the shipment originates.This is a relationship field.Relationship NameSourceLocationRelationship TypeLookupRefers ToLocation |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the shipment. The picklist includes the following values, which can be customized:Shipped—The product is in transit.Delivered—The product is at the source location. |
| TotalItemsQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total quantity of items included in the shipment. This value is calculated as the sum of the quantities of the shipment items in the shipment. |
| TrackingNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe tracking number for the shipment. |
| TrackingUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe URL of the website used for tracking the shipment. |
