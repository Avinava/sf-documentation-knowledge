---
title: "UnitOfMeasure"
domain: object-reference
topic: unitofmeasure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.520Z
estimatedTokens: 708
keywords: [UnitOfMeasure, units, systems, express, account, quantities, API, version, 61.0, later, Calls]
---

# UnitOfMeasure

> Defines the units and systems of units used to express and account for
         quantities.  This object is available in API version 61.0 and later.

# UnitOfMeasure

Defines the units and systems of units used to express and account for quantities. This object is available in API version 61.0 and later.

Examples of units of measure include Litre (for volume), Kilogram (for weight), and single units (such as Can, sachet, and packet).

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ConversionFactor | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe factor or rate that's used to convert this unit of measurement to the base unit. For example, for the Weight unit of measure class, the default unit of measure is pounds (lbs). Then, all units of measure records with the Weight unit of measure class are converted to equate 1 unit to 1 pound. If the unit of measure is kilogram, the conversion factor is 2.2 as 1 pound consists ‌of 2.2 kilograms. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of this unit of measure. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the unit of measure. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user or group that owns the job.,This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe type of the unit of measure. For example, weight, distance, period. |
| Sequence | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe sequence number assigned to the unit of measure. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the unit of measure.Possible values are:ActiveDraftInactive |
| UnitCode | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionCode for the unit of measure. |
| UnitOfMeasureClassId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe class associated with the unit of measurement.This field is a relationship field.Relationship NameUnitOfMeasureClassRefers ToUnitOfMeasureClass |
