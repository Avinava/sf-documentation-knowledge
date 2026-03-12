---
title: "Territory2ObjSharingConfig"
domain: object-reference
topic: territory2objsharingconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.160Z
estimatedTokens: 315
keywords: [Territory2ObjSharingConfig, sharing, access, level, objects, assigned, particular, territory, API, version, 56.0, later, Calls, Special, Rules]
---

# Territory2ObjSharingConfig

> Represents the sharing access level of objects assigned to a particular
         territory. This object is available in API version 56.0 and later.

# Territory2ObjSharingConfig

Represents the sharing access level of objects assigned to a particular territory. This object is available in API version 56.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve(), update()

## Special Access Rules

Only standard and partner users can access this object. Any standard or partner user can view object sharing configuration records in an active model. Users without the Manage Territories permission can’t view territory records in the Planning or Archived state.

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionThe access level of the object for the particular territory. |
| Territory2Id | TypereferencePropertiesFilter, Group, SortDescriptionThe territory on which the access level is defined.This field is a relationship field.Relationship NameTerritory2Relationship TypeLookupRefers ToTerritory2 |
| TerritoryMgmtObjectConfigId | TypereferencePropertiesFilter, Group, SortDescriptionThe object configuration record the territory access level is related to.This field is a relationship field.Relationship NameTerritoryMgmtObjectConfigRelationship TypeLookupRefers ToTerritoryMgmtObjectConfig |
