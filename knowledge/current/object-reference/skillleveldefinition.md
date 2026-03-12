---
title: "SkillLevelDefinition"
domain: object-reference
topic: skillleveldefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.255Z
estimatedTokens: 661
keywords: [SkillLevelDefinition, skill, acquired, completing, enablement, site, myTrailhead, modules, API, version, 51.0, later, Calls, Special, Access]
---

# SkillLevelDefinition

> Represents a skill which can be acquired by completing enablement site
         (myTrailhead) modules. This object is available in API version 51.0 and later.

# SkillLevelDefinition

Represents a skill which can be acquired by completing enablement site (myTrailhead) modules. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The org must have a Workforce Engagement license and an Enablement Sites (myTrailhead) license. User must have at least one Workforce Engagement permission set assigned to them: Workforce Engagement Analyst, Workforce Engagement Planner, Workforce Engagement Agent.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescribes the mapping. |
| IsAutoApproved | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether this mapping auto-approves.The default value is 'false'. |
| LearningContent | TypestringPropertiesFilter, NillableDescriptionThe titles of the Trailhead modules associated to this mapping. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the Skill Level Definition.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SkillId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe skill that this mapping is for.This is a relationship field.Relationship NameSkillRelationship TypeLookupRefers ToSkill |
| SkillLevel | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe level to assign for the skill. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SkillLevelDefinitionOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[SkillLevelDefinitionShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SkillLevelDefinitionOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- SkillLevelDefinitionShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
