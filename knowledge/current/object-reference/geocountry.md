---
title: "GeoCountry"
domain: object-reference
topic: geocountry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.940Z
estimatedTokens: 761
keywords: [GeoCountry, country, API, version, 56.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# GeoCountry

> Represents a country. This object is available in API version 56.0 and
      later.

# GeoCountry

Represents a country. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The GeoCountry object is available if B2B Commerce or D2C Commerce is enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of this record. |
| IsoCode | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionTwo-letter ISO code of the country as defined in the org’s State-Country picklist. This field is unique within your organization |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed data in this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it's possible the user accessed data in this record or list view but didn't view it directly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the country that corresponds with the ISO code. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the GeoCountry record. By default, the asset owner is the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GeoCountryOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[GeoCountryShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [GeoState](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_geostate.htm "Represents a state. This object is available in API version 57.0 and later.")

-   [TaxGeoConfig](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxgeoconfig.htm "Represents a tax configuration associated with a GeoCountry. This object is available in API version 57.0 and later.")

## Related Topics

- GeoCountryOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- GeoCountryShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- GeoState (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_geostate.htm)
- TaxGeoConfig (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxgeoconfig.htm)
