---
title: "TaxRate"
domain: object-reference
topic: taxrate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.794Z
estimatedTokens: 1084
keywords: [TaxRate, tax, rate, code, country, API, version, 56.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# TaxRate

> Represents a tax rate for a tax code and country. This object is
      available in API version 56.0 and later.

# TaxRate

Represents a tax rate for a tax code and country. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The TaxRate object is available if B2B Commerce or D2C Commerce is enabled.

## Fields

| Field | Details |
| --- | --- |
| GeoCountryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the GeoCountry for which the tax rate applies. You can define only one tax rate per GeoCountry and tax code combination.This field is a relationship field.Relationship NameGeoCountryRelationship TypeLookupRefers ToGeoCountry |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it's possible the user accessed data in this record or list view but didn't viewed it directly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique ID of the tax rate. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe TaxRate record owner. By default, the record owner is the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for future use. |
| Rate | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe tax percentage rate that will be applied to orders. |
| TaxCode | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe code used to calculate the tax rate for the invoice line. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TaxRateChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[TaxRateFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TaxRateHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[TaxRateOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TaxRateShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TaxRateChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- TaxRateFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- TaxRateHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- TaxRateOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- TaxRateShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
