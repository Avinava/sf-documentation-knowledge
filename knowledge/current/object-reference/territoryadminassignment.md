---
title: "TerritoryAdminAssignment"
domain: object-reference
topic: territoryadminassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.171Z
estimatedTokens: 539
keywords: [TerritoryAdminAssignment, designated, team, members, administer, specific, territories, their, descendants, API, version, 63.0, later, Calls, Special]
---

# TerritoryAdminAssignment

> Represents designated team members who can administer specific
         territories and their descendants. This object is available in API version 63.0 and
      later.

# TerritoryAdminAssignment

Represents designated team members who can administer specific territories and their descendants. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

To designate team members, assign them the Administer Territory Operations permission.

## Fields

| Field | Details |
| --- | --- |
| CanManageHierarchy | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionLets the user update and delete the territory and its descendants, and create descendants.The default value is false. |
| CanManageMembers | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionLets the user assign other team members to the territory and its descendants. Also lets the user update the user territory association log.The default value is false. |
| CanManageRecordAssociations | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionLets the user add and remove assignments for records, author rules, and assign and run rules for the territory and its descendants.The default value is false. |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID for the territory you’re letting the user administer. The user can also administer this territory’s descendants.This field is a relationship field.Relationship NameTerritory2Refers ToTerritory2 |
| Territory2ModelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID for the territory model that includes the territory you’re letting the user administer.This field is a relationship field.Relationship NameTerritory2ModelRefers ToTerritory2Model |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID for the user you’re letting administer the territory and its descendants. Requires that the user is assigned the Administer Territory Operations permission set.This field is a polymorphic relationship field.Relationship NameUserOrGroupRefers ToGroup, User |
