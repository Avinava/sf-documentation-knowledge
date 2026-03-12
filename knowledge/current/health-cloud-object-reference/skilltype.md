---
title: "SkillType"
domain: health-cloud-object-reference
topic: skilltype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.124Z
estimatedTokens: 330
keywords: [SkillType, broader, category, skill, belongs, API, version, 58.0, later, Calls, Usage]
---

# SkillType

> Represents the broader type or category that a skill belongs to. This
      object is available in API version 58.0 and later.

# SkillType

Represents the broader type or category that a skill belongs to. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the define skill type.Possible values are: |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the skill type. |

## Usage

Skills are grouped into types and categories by first defining a SkillType and then referencing that SkillType when you create a skill.
