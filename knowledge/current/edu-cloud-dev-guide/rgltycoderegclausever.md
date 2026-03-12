---
title: "RgltyCodeRegClauseVer"
domain: edu-cloud-dev-guide
topic: rgltycoderegclausever
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.798Z
estimatedTokens: 463
keywords: [RgltyCodeRegClauseVer, junction, Regulatory, Code, Regulation, Clause, Version, objects, API, 63.0, later, Calls]
---

# RgltyCodeRegClauseVer

> Represents a junction between Regulatory Code and Regulation Clause Version
         objects. This object is available in API version 63.0 and later.

# RgltyCodeRegClauseVer

Represents a junction between Regulatory Code and Regulation Clause Version objects. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency associated with the Regulatory Code Regulation Clause Version.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Regulatory Code Regulation Clause Version. |
| RegulationClauseVersionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Regulation Clause Version associated with the record.This field is a relationship field.Relationship NameRegulationClauseVersionRefers ToRegulationClauseVersion |
| RegulatoryCodeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Regulatory Code associated with the record.This field is a relationship field.Relationship NameRegulatoryCodeRelationship TypeMaster-detailRefers ToRegulatoryCode (the master object) |
