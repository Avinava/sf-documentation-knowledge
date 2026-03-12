---
title: "CreditMemoAddressGroup"
domain: object-reference
topic: creditmemoaddressgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.537Z
estimatedTokens: 902
keywords: [CreditMemoAddressGroup, Stores, buyer's, address, determine, amount, tax, credit, buyer, memo, issued, API, version, 55.0, later]
---

# CreditMemoAddressGroup

> Stores the buyer's address information, which is used to determine the amount
         of tax to credit to a buyer when a credit memo is issued. This object is available in
      API version 55.0 and later.

# CreditMemoAddressGroup

Stores the buyer's address information, which is used to determine the amount of tax to credit to a buyer when a credit memo is issued. This object is available in API version 55.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update()

## Special Access Rules

This object is available with Subscription Management and Billing (Revenue Cloud).

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_creditmemoaddressgroup.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionBuyer’s address. |
| City | TypestringPropertiesFilter, Group, Nillable, SortDescriptionBuyer's city. |
| Country | TypestringPropertiesFilter, Group, Nillable, SortDescriptionBuyer's country. |
| CreditMemoAddressGroupNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number, such as 0000123, that represents the address group. |
| CreditMemoId | TypereferencePropertiesFilter, Group, SortDescriptionID of the credit memo associated with the address group.This field is a relationship field.Relationship NameCreditMemoRelationship TypeLookupRefers ToCreditMemo |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code associated with the credit memo.The default value is USD. |
| GeocodeAccuracy | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe accuracy rating for the geocode of the address group. An accuracy rating contains information about the location of a latitude and longitude.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this address group. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this address group. |
| Latitude | TypedoublePropertiesFilter, Nillable, SortDescriptionLatitude of the buyer’s address. |
| Longitude | TypedoublePropertiesFilter, Nillable, SortDescriptionLongitude of the buyer’s address. |
| PostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe buyer’s postal code or ZIP code. |
| State | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe buyer’s state. |
| Street | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe buyer’s street number and name. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CreditMemoAddressGroupHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- CreditMemoAddressGroupHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
