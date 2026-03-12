---
title: "Territory2ObjectExclusion"
domain: object-reference
topic: territory2objectexclusion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.156Z
estimatedTokens: 368
keywords: [Territory2ObjectExclusion, objects, aren’t, included, territory, assignment, rule, runs, they, meet, criteria, API, version, 54.0, later]
---

# Territory2ObjectExclusion

> Represents the objects that aren’t included in territory assignment
         rule runs, even when they meet assignment rule criteria. This object is available in
      API version 54.0 and later.

# Territory2ObjectExclusion

Represents the objects that aren’t included in territory assignment rule runs, even when they meet assignment rule criteria. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Available if Sales Territories has been enabled.

Standard and partner users can access this object. If a territory model is in Active state, any standard or partner user can view that model, including its territories and assignment rules. For territories in an active model, any standard or partner user can view assigned records and assigned users subject to your org’s sharing settings. Users can’t view territory models in other states (such as Planning or Archived).

## Fields

| Field | Details |
| --- | --- |
| Note | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, Update |
| ObjectId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Account object to exclude from the territory assignment rule.This is a polymorphic relationship field.Relationship NameObjectRelationship TypeLookupRefers ToAccount |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the territory to exclude from the territory model assignment rule.This is a relationship field.Relationship NameTerritory2Relationship TypeLookupRefers ToTerritory2 |
