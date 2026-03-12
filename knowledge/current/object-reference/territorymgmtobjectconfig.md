---
title: "TerritoryMgmtObjectConfig"
domain: object-reference
topic: territorymgmtobjectconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.176Z
estimatedTokens: 325
keywords: [TerritoryMgmtObjectConfig, territory, management, settings, defaults, particular, API, version, 56.0, later, Calls, Special, Access, Rules]
---

# TerritoryMgmtObjectConfig

> Represents territory management settings and defaults for a particular
         object. This object is available in API version 56.0 and later.

# TerritoryMgmtObjectConfig

Represents territory management settings and defaults for a particular object. This object is available in API version 56.0 and later.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Only standard and partner users can access this object.

## Fields

| Field | Details |
| --- | --- |
| DefaultAccessLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe default access level of the defined object for all territories. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language used in the org where the territory model was created. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe readable label for this entity. |
| Object | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe name of the Enterprise Territory Management object.Possible values are:Lead |
| State | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe state of the supported object. |
