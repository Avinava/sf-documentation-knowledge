---
title: "UserTerritory2Association"
domain: object-reference
topic: userterritory2association
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.042Z
estimatedTokens: 394
keywords: [UserTerritory2Association, association, assignment, territory, user, record, Sales, Territories, enabled, Calls, Special, Access, Rules]
---

# UserTerritory2Association

> Represents an association (by assignment) between a territory and a user
      record. Available only if Sales Territories has been enabled.

# UserTerritory2Association

Represents an association (by assignment) between a territory and a user record. Available only if Sales Territories has been enabled.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

Standard and partner users can access this object. If a territory model is in Active state, any standard or partner user can view that model, including its territories and assignment rules. For territories in an active model, any standard or partner user can view assigned records and assigned users based on your Salesforce sharing settings. Users cannot view territory models in other states (such as Planning or Archived).

## Fields

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

UserTerritory2Association doesn’t support adding custom fields.

| Field Name | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the user is active (true) or inactive (false) in the given territory. |
| RoleInTerritory2 | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe role of the user in a territory. Possible values are: Owner, Administrator, Sales Rep. Label is Role in Territory. |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the territory that the user is assigned to. |
| UserId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user who is assigned to the territory. |
