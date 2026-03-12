---
title: "LaborUnion"
domain: eu-developer-guide
topic: laborunion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.261Z
estimatedTokens: 279
keywords: [LaborUnion, labor, union, organization, technician, associated, association, decides, wage, classification, pay, overtime, code, supplemental, compensation]
---

# LaborUnion

> Represents the labor union organization that field technician is associated
         with. This association decides the wage classification, pay type, overtime code,
         supplemental compensation and wage calculation rules. This object is available in API
      version 62.0 and later.

# LaborUnion

Represents the labor union organization that field technician is associated with. This association decides the wage classification, pay type, overtime code, supplemental compensation and wage calculation rules. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the labor union in the external system. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the labor union is active (true) or not (false)The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the labor union in the external system. |
| Trade | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe trade associated with the labor union. |
