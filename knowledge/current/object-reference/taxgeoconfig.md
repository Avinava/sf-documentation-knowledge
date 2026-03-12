---
title: "TaxGeoConfig"
domain: object-reference
topic: taxgeoconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.781Z
estimatedTokens: 659
keywords: [TaxGeoConfig, tax, configuration, associated, GeoCountry, API, version, 57.0, later, Calls, Special, Access, Rules, Objects]
---

# TaxGeoConfig

> Represents a tax configuration associated with a GeoCountry. This object
      is available in API version 57.0 and later.

# TaxGeoConfig

Represents a tax configuration associated with a GeoCountry. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The TaxGeoConfig object is available if B2B Commerce or D2C Commerce is enabled.

## Fields

| Field | Details |
| --- | --- |
| GeoCountryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe GeoCountry associated with the TaxGeoConfig.This field is a relationship field.Relationship NameGeoCountryRelationship TypeLookupRefers ToGeoCountry |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed data in this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it's possible the user accessed data in this record or list view but didn't view it directly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the TaxGeoConfig. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the TaxGeoConfig record. By default, the asset owner is the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RoundingStrategyType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the tax rounding strategy associated with the TaxGeoConfig.Possible values are:Rounding DownRounding OffRounding UpThe default value is Rounding Off. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TaxGeoConfigShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [GeoCountry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_geocountry.htm "Represents a country. This object is available in API version 56.0 and later.")

## Related Topics

- TaxGeoConfigShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- GeoCountry (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_geocountry.htm)
