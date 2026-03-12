---
title: "ActivityPlanTerritory"
domain: life-sciences-dev-guide
topic: activityplanterritory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.969Z
estimatedTokens: 363
keywords: [ActivityPlanTerritory, territory, associated, activity, plan, API, version, 65.0, later, Calls]
---

# ActivityPlanTerritory

> Represents the territory details associated with an activity plan. This
      object is available in API version 65.0 and later.

# ActivityPlanTerritory

Represents the territory details associated with an activity plan. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe activity plan associated with activity plan territory.This field is a relationship field.Relationship NameActivityPlanRelationship TypeMaster-detailRefers ToActivityPlan (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the current user last viewed the record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the activity plan territory. |
| TerritoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe territory associated with the activity plan.This field is a relationship field.Relationship NameTerritoryRefers ToTerritory2 |
