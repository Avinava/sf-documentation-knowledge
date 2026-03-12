---
title: "InvoiceAddressGroup"
domain: object-reference
topic: invoiceaddressgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.313Z
estimatedTokens: 716
keywords: [InvoiceAddressGroup, Stores, buyer's, address, API, version, 50.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# InvoiceAddressGroup

> Stores the buyer's address information. This object is available in API
      version 50.0 and later.

# InvoiceAddressGroup

Stores the buyer's address information. This object is available in API version 50.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoiceaddressgroup.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionBuyer's address. Compound field that summarizes the invoice address group's address component fields. |
| City | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe buyer's city. |
| Country | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe buyer's country. |
|  |  |
| GeocodeAccuracy | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe accuracy rating for the geocode of the address group. The accuracy rating contains information about the location of a latitude and longitude. |
| InvoiceAddressGroupNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number, such as DOC-000001. |
| InvoiceId | TypereferencePropertiesFilter, Group, SortDescriptionID of the invoice associated with the address group.This field is a relationship field.Relationship NameInvoiceRelationship TypeLookupRefers ToInvoice |
| Latitude | TypedoublePropertiesFilter, Nillable, SortDescriptionThe buyer's latitude. |
| Longitude | TypedoublePropertiesFilter, Nillable, SortDescriptionThe buyer's longitude. |
| PostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe buyer's postal code or ZIP code. |
| State | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe buyer's state. |
| Street | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe buyer's street. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InvoiceAddressGroupHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InvoiceAddressGroupHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
