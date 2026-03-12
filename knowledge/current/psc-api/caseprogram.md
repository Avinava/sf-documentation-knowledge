---
title: "CaseProgram"
domain: psc-api
topic: caseprogram
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.466Z
estimatedTokens: 385
keywords: [CaseProgram, junction, Case, Program, objects, API, version, 57.0, later, Calls]
---

# CaseProgram

> Represents the junction between Case and Program objects. This
      object is available in API version 57.0 and later.

# CaseProgram

Represents the junction between Case and Program objects. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=psc_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CaseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifer of the case that’s associated with the program.This field is a relationship field.Relationship NameCaseRelationship TypeMaster-DetailRefers ToCase |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the case program. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe identifier of the program that’s associated with the case.This field is a relationship field.Relationship NameProgramRelationship TypeLookupRefers ToProgram |
