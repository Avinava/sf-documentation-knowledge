---
title: "ObjectUserTerritory2View"
domain: object-reference
topic: objectuserterritory2view
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.384Z
estimatedTokens: 292
keywords: [ObjectUserTerritory2View, user, account, lead, assigned, territory, API, version, 58.0, later, Calls, Special, Access, Rules]
---

# ObjectUserTerritory2View

> Represents a user and object, such as an account or lead, assigned to a
         territory. This object is available in API version 58.0 and later.

# ObjectUserTerritory2View

Represents a user and object, such as an account or lead, assigned to a territory. This object is available in API version 58.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

To see this object, enable Sales Territories.

## Fields

| Field | Details |
| --- | --- |
| ObjectId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRequired field for querying ObjectUserTerritory2View.ID of the object that the territory user is assigned to.This field is a polymorphic relationship field.Relationship NameObjectRefers ToAccount, Lead |
| RoleInTerritory2 | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionRole of the user assigned to the territory. |
| Territory2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the territory to which the object and user are assigned.This field is a relationship field.Relationship NameTerritory2Refers ToTerritory2 |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the user assigned to the territory.This field is a relationship field.Relationship NameUserRefers ToUser |
