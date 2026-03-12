---
title: "TerritoryContentTmplAsgnt"
domain: life-sciences-dev-guide
topic: territorycontenttmplasgnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.494Z
estimatedTokens: 489
keywords: [TerritoryContentTmplAsgnt, Stores, link, territory, template, allowing, assignment, relevant, content, specific, territories, API, version, 65.0, later]
---

# TerritoryContentTmplAsgnt

> Stores a link between a territory and a template allowing for the assignment
         of relevant content to specific territories. This object is available in API version
      65.0 and later.

# TerritoryContentTmplAsgnt

Stores a link between a territory and a template allowing for the assignment of relevant content to specific territories. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. Name of the territory content template assignment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| TemplateReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. Reference to the related life science email template or other specified template type, to assign relevant templates to the territory.This field is a polymorphic relationship field.Relationship NameTemplateReferenceRecordRefers ToLifeSciEmailTemplate |
| TerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. Indicates the specific territory associated with this template, to identify the related territory for content distribution.This field is a relationship field.Relationship NameTerritoryRefers ToTerritory2 |
