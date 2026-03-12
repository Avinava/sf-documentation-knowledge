---
title: "CodeSet"
domain: mfg-api-devguide
topic: codeset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.674Z
estimatedTokens: 810
keywords: [CodeSet, various, industry, defined, codes, context, their, systems, versions, Manufacturing, Cloud, API, version, 58.0, later]
---

# CodeSet

> Represents various industry defined codes in the context of their
         systems and versions of those systems. This object is available in Manufacturing Cloud
      in API version 58.0 and later.

# CodeSet

Represents various industry defined codes in the context of their systems and versions of those systems. This object is available in Manufacturing Cloud in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe system-defined code that’s represented by this code set. |
| CodeDescription | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information associated with the code set. |
| CodeSetKey | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique key that identifies the concept represented by code sets across different systems and versions. This key is not case sensitive. |
| CodeSetType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the code set. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the code set’s effective period. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the code set is an active code set (true) or not (false).The default value is false. |
| IsCustomCode | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the code set is defined by a specific organization, as opposed to recognized across the industry.The default value is false. |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the code set is the primary code set for the concept (true) or not (false). That is, it was selected manually by a user instead of being selected by an automated process.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe textual representation of the meaning of the code. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionA reference to the person who owns the code set record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system that sets the context for the code and defines its meaning. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the code set’s effective period. |
| SystemVersion | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version of the source system the code belongs to. |
