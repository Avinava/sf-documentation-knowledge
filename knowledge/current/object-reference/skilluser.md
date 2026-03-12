---
title: "SkillUser"
domain: object-reference
topic: skilluser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.277Z
estimatedTokens: 131
keywords: [SkillUser, join, Skill, User, API, version, 24.0, later, Calls, Usage]
---

# SkillUser

> Represents a join between Skill and User. This object is available
    in API version 24.0 and later.

# SkillUser

Represents a join between Skill and User. This object is available in API version 24.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), update(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| SkillId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the skill. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the user. |

## Usage

Use this object to assign specific skills to specific users.
