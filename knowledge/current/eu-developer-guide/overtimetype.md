---
title: "OvertimeType"
domain: eu-developer-guide
topic: overtimetype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.286Z
estimatedTokens: 263
keywords: [OvertimeType, overtime, code, categorize, labor, costs, Enterprise, Resource, Planning, system, API, version, 62.0, later, Calls]
---

# OvertimeType

> Represents the overtime type code used to categorize overtime labor costs in the Enterprise Resource Planning system. This object is available in API version 62.0 and later.

# OvertimeType

Represents the overtime type code used to categorize overtime labor costs in the Enterprise Resource Planning system. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the overtime type in the external system. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier assigned to the overtime type by an external data source. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the overtime type is active.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the overtime type in the external system. |
