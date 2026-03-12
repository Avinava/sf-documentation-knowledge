---
title: "Fleet"
domain: mfg-api-devguide
topic: fleet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.723Z
estimatedTokens: 688
keywords: [Fleet, group, assets, commercial, service, transport, operations, manufacturing, industry, API, version, 59.0, later, Calls]
---

# Fleet

> Represents a group of assets used in commercial, service, or transport
         operations in the manufacturing industry. This object is available in API version 59.0
      and later.

# Fleet

Represents a group of assets used in commercial, service, or transport operations in the manufacturing industry. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActiveAssetCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe total number of assets associated with a fleet record. This field shows a rolled-up value based on the number of Fleet Asset records in Active status associated with a Fleet record.This field is a calculated field. |
| CurrentOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current owner of the fleet.This field is a relationship field.Relationship NameCurrentOwnerRelationship TypeLookupRefers ToAccount |
| EffectiveEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when a fleet is operational. |
| EffectiveStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when a fleet is operational. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the location that the fleet is associated with.This field is a relationship field.Relationship NameLocationRelationship TypeLookupRefers ToLocation |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of a fleet record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user or user group who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentFleetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent fleet that a fleet record is part of in a hierarchy.This field is a relationship field.Relationship NameParentFleetRelationship TypeLookupRefers ToFleet |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies the status of a fleet record.Possible values are:ActiveInactiveThe default value is Active. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of a fleet record.Possible values are:CommercialEmployeeExecutiveMaterial |
