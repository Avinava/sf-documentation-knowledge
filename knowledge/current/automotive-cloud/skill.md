---
title: "Skill"
domain: automotive-cloud
topic: skill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.542Z
estimatedTokens: 461
keywords: [Skill, service, resources, technician, their, area, expertise, asset, Test, Drive, API, version, 59.0, later, Calls]
---

# Skill

> Represents a skill that service resources have. For technician type service
         resources, the skill represents their area of expertise. For asset type service resources,
         the skill must be specified as Test Drive. This object is available in API version
      59.0 and later.

# Skill

Represents a skill that service resources have. For technician type service resources, the skill represents their area of expertise. For asset type service resources, the skill must be specified as Test Drive. This object is available in API version 59.0 and later.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Automotive and Automotive Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the skill. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the record was last viewed. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the skill. |
| TypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of skill.This field is a relationship field.Relationship NameTypeRelationship TypeLookupRefers ToSkillType |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SkillChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.
