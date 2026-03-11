---
title: "Shipment"
domain: field-service
topic: shipment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:13.031Z
keywords: [Shipment, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# Shipment

# Shipment

Represents the transport of inventory in field service or a shipment of order items in Order Management.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

At least one of these features must be enabled:

-   Order Management
-   Field Service
-   B2B Commerce
-   Health Cloud Visit Inventory
-   Consumer Goods Cloud Retail Execution

## Fields

| Field Name | Details |
| --- | --- |
| ActualDeliveryDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the product was delivered. |
| DeliveredToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person or entity the product was delivered to.This is a polymorphic relationship field.Relationship NameDeliveredToRelationship TypeLookupRefers ToGroup, User |
| DeliveryMethodId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe delivery method used for the shipment.This field is available in API version 51.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDetails not recorded in the provided fields |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe place the product is to be delivered.This is a relationship field.Relationship NameDestinationLocationRelationship TypeLookupRefers ToLocation |
| ExpectedDeliveryDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the product is expected to be delivered. |
| FulfillmentOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fulfillment order that the shipment belongs to.This field is available in API version 51.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| OrderSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order summary associated with the shipment.This field is available in API version 51.0 and later. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the shipment.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Provider | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe company or person making the transfer. |
| ReturnOrderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor a return Shipment, the associated ReturnOrder.This field is available in API version 53.0 and later. |
| ShipFromAddress | TypeaddressPropertiesFilter, NillableDescriptionThe place the product is coming from. The compound form of the ship to address. Read-only. For details on compound address fields, see Address Compound Fields. |
| ShipFromCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the address where the shipment originates. |
| ShipFromCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the address where the shipment originates. |
| ShipFromGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the address where the shipment originates. See Compound Field Considerations and Limitations for details on geolocation compound fields.NoteThis field is available in the API only. |
| ShipFromLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address where the shipment originates. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields.NoteThis field is available in the API only. |
| ShipFromLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address where the shipment originates. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields.NoteThis field is available in the API only. |
| ShipFromPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address where the shipment originates. |
| ShipFromState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address where the shipment originates. |
| ShipFromStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address where the shipment originates. |
| ShipToAddress | TypeaddressPropertiesFilter, NillableDescriptionThe physical address where the shipment is delivered. The compound form of the ship to address. Read-only. For details on compound address fields, see Address Compound Fields. |
| ShipToCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city of the address where the shipment is delivered. |
| ShipToCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country of the address where the shipment is delivered. |
| ShipToGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode for the address where the shipment is delivered. See Compound Field Considerations and Limitations for details on geolocation compound fields.NoteThis field is available in the API only. |
| ShipToLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address where the shipment is delivered. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields.NoteThis field is available in the API only. |
| ShipToLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address where the shipment is delivered. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields.NoteThis field is available in the API only. |
| ShipToName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe shipment recipient. |
| ShipToPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code of the address where the shipment is delivered. |
| ShipToState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state of the address where the shipment is delivered. |
| ShipToStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street of the address where the shipment is delivered. |
| ShipmentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the shipment. |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe field service location where the shipment originates.This is a relationship field.Relationship NameSourceLocationRelationship TypeLookupRefers ToLocation |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the shipment. The picklist includes the following values, which can be customized:Created—Shipment has been created.Delivered—Shipment has been delivered.In Transit—Shipment is in transit.Shipped—Order has been shipped.Voided—Shipment has been cancelled. |
| TotalItemsQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total quantity of items included in the shipment. This value is calculated as the sum of the quantities of the shipment items in the shipment.This field is available in API version 51.0 and later. |
| TrackingNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTracking number for the shipment. |
| TrackingUrl | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionURL of website used for tracking the shipment. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ShipmentChangeEvent (API version 48.0)

Change events are available for the object.

ShipmentFeed

Feed tracking is available for the object.

ShipmentHistory

History is available for tracked fields of the object.

ShipmentOwnerSharingRule

Sharing rules are available for the object.

ShipmentShare

Sharing is available for the object.