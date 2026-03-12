---
title: "GeoState"
domain: object-reference
topic: geostate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.955Z
estimatedTokens: 446
keywords: [GeoState, state, API, version, 57.0, later, Calls, Special, Access, Rules]
---

# GeoState

> Represents a state. This object is available in API version 57.0 and
      later.

# GeoState

Represents a state. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The GeoState object is available if B2B Commerce or D2C Commerce is enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA brief description of this record. |
| GeoCountryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the GeoCountry associated with this GeoState.This field is a relationship field.Relationship NameGeoCountryRelationship TypeLookupRefers ToGeoCountry |
| IsoCode | TypestringPropertiesCreate, Filter, Group, SortDescriptionTwo-letter ISO code of the state as defined in the org’s State-Country picklist. This field is unique within your organization |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed data in this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it's possible the user accessed data in this record or list view but didn't view it directly. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the state that corresponds with the ISO code. |

#### See Also

-   [GeoCountry](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_geocountry.htm "Represents a country. This object is available in API version 56.0 and later.")

## Related Topics

- GeoCountry (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_geocountry.htm)
