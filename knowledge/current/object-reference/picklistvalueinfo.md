---
title: "PicklistValueInfo"
domain: object-reference
topic: picklistvalueinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.854Z
estimatedTokens: 325
keywords: [PicklistValueInfo, active, picklist, API, version, 40.0, later, Calls]
---

# PicklistValueInfo

> Represents the active picklist values for a given picklist field. This
      object is available in API version 40.0 and later.

# PicklistValueInfo

Represents the active picklist values for a given picklist field. This object is available in API version 40.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. |
| EntityParticleId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRepresents the picklist field to which this value is related.Relationship NameEntityParticleRelationship TypeLookupRefers ToEntityParticle |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the picklist value is active or not. |
| IsDefaultValue | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this value is the default for the picklist field. Only one value can be the default value. |
| Label | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe label for the picklist value. |
| ValidFor | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA set of bits where each bit indicates a controlling value for which this picklist value is valid. |
| Value | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the picklist value. |
