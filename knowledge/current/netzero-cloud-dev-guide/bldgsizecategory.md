---
title: "BldgSizeCategory"
domain: netzero-cloud-dev-guide
topic: bldgsizecategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.577Z
estimatedTokens: 513
keywords: [BldgSizeCategory, building, size, filter, criteria, energy, intensity, records, stored, range, floor, area, sizes, minimum, maximum]
---

# BldgSizeCategory

> Represents the building size filter criteria for the building energy
         intensity records. The building size filter criteria are stored as a range of floor area
         sizes from a minimum size to a maximum size, in units of sqft or m². The records can have
         overlapping minimum-maximum ranges. This object is available in API version 54.0 and
      later.

# BldgSizeCategory

Represents the building size filter criteria for the building energy intensity records. The building size filter criteria are stored as a range of floor area sizes from a minimum size to a maximum size, in units of sqft or m². The records can have overlapping minimum-maximum ranges. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MaximumSize | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe maximum size of the building. |
| MaximumSizeInSqft | TypedoublePropertiesFilter, Nillable, SortDescriptionThe maximum size of the building in square foot. |
| MinimumSize | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe minimum size of the building. |
| MinimumSizeInSqft | TypedoublePropertiesFilter, Nillable, SortDescriptionThe minimum size of the building in square foot. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SizeUnit | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe unit of measure for the size of the building.Possible values are:m2sqftThe default value is 'sqft'. |
