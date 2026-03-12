---
title: "SkillLevelProgress"
domain: object-reference
topic: skilllevelprogress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.262Z
estimatedTokens: 800
keywords: [SkillLevelProgress, training, progress, user, API, version, 51.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# SkillLevelProgress

> Represents training progress for a given user. This object is available
      in API version 51.0 and later.

# SkillLevelProgress

Represents training progress for a given user. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The org must have a Workforce Engagement license and an Enablement Sites (myTrailhead) license. User must have at least one Workforce Engagement permission set assigned to them: Workforce Engagement Analyst, Workforce Engagement Planner, Workforce Engagement Agent.

## Fields

| Field | Details |
| --- | --- |
| CompletedCount | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionNumber of modules that have been completed towards this Skill Mapping. |
| CompletedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when this progress was completed. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of skill level progress.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Service Resource that will be granted a service resource skill when the progress is complete.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| SkillLevelDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe corresponding skill mapping for this progress.This is a relationship field.Relationship NameSkillLevelDefinitionRelationship TypeLookupRefers ToSkillLevelDefinition |
| SkillMasterLabel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe master label of the Skill associated with the associated SkillLevelDefinition. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the status of the progress.Possible values are:A—ApprovedR—ReviewS—StartedThe default value is 'S'. |
| TotalCount | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe total number of modules that need to be completed. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SkillLevelProgressOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[SkillLevelProgressShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SkillLevelProgressOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- SkillLevelProgressShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
