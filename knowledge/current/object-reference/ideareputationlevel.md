---
title: "IdeaReputationLevel"
domain: object-reference
topic: ideareputationlevel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.140Z
estimatedTokens: 275
keywords: [IdeaReputationLevel, reputation, level, Ideas, zone, internal, organization, system, calculate, levels, per, API, version, 28.0, later]
---

# IdeaReputationLevel

> Represents a reputation level within an Ideas zone or internal
   organization and is used by the system to calculate reputation. You can create up to 25 levels
   per zone or internal organization. This object is available in API version 28.0 and
  later.

# IdeaReputationLevel

Represents a reputation level within an Ideas zone or internal organization and is used by the system to calculate reputation. You can create up to 25 levels per zone or internal organization. This object is available in API version 28.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ContextId | TypereferencePropertiesCreate, Filter, Group, Namepointing, Sort, UpdateDescriptionThe ID of the zone or internal organization. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the reputation level. The name must be unique within the zone or internal organization. Maximum size is 50 characters. |
| Threshold | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionMinimum number of points for this level. The threshold must be unique within the zone or internal organization and must be greater than or equal to zero. |

## Usage

Use to create or edit reputation levels for an Ideas zone or internal organization.
