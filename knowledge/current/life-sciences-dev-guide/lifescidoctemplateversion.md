---
title: "LifeSciDocTemplateVersion"
domain: life-sciences-dev-guide
topic: lifescidoctemplateversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:00.564Z
estimatedTokens: 511
keywords: [LifeSciDocTemplateVersion, Stores, version-specific, template]
---

> Stores version-specific template information.

# LifeSciDocTemplateVersion

Stores version-specific template information.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| FileIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Key of the file that's stored in Amazon s3. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether a template version is active.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| LifeScienceDocumentTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The Life Science document template for which this version record is created.This field is a relationship field.Relationship NameLifeScienceDocumentTemplateRelationship TypeMaster-detailRefers ToLifeScienceDocumentTemplate (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Life Science document template version. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAn external ID from the source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the source system for data integrations. |
| VersionNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Indicates which order template versions were loaded. |
