---
title: "Address"
domain: health-cloud-object-reference
topic: address
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.195Z
estimatedTokens: 383
keywords: [Address, FHIR, resource, maps, Contact​Point​Address​, Salesforce, V4.0, Clinical, Data, Model, Mapping, mailing, billing, home, Calls, Special, Access, Rules, Usage, Associated]
---

# Address

> Represents a mailing, billing, or home address.

# Address

Represents a mailing, billing, or home address.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The following access checks must be enabled:

-   Industries Insurance
-   Retail Execution
-   Industries Visit
-   Field Service
-   Order Management
    -   Perms: FulfillmentOrder, OrderSummary,AdvancedOrderManagement, OrderCCS
    -   Prefs: OrdersEnabled, EnhancedCommerceOrders
-   Public Sector
-   Employee Experience
-   Contact Tracing For Employees

You can create an address only when creating a location.

## Fields

| Field Name | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe full address. |
| AddressType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionPicklist of address types. The values are:MailingShippingBillingHome |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address city. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address country. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of the address. |
| DrivingDirections | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDirections to the address. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the address’s latitude and longitude coordinates. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| LocationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Filter, Group, Sort, UpdateDescriptionPicklist of location types. The available values are:Warehouse (default)SiteVanPlant |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the address. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionA lookup field to the parent location.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToLocation |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address postal code. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address state. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address street. |
| TimeZone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPicklist of available time zones. |

## Usage

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

“Address” in Salesforce can also refer to the Address compound field found on many standard objects. When referencing the Address object in your Apex code, always use Schema.Address instead of Address to prevent confusion with the standard Address compound field. If referencing both the address object and the Address field in the same snippet, you can differentiate between the two by using System.Address for the field and Schema.Address for the object.

## Associated Object

This object has the following associated object. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AddressHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 62.0)

History is available for tracked fields of the object.

## Related Topics

- AddressHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
