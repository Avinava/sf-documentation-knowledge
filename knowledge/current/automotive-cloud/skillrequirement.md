---
title: "SkillRequirement"
domain: automotive-cloud
topic: skillrequirement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.548Z
estimatedTokens: 630
keywords: [SkillRequirement, skill, particular, work, API, version, 58.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# SkillRequirement

> Represents a skill that is required to complete a particular work type.
      This object is available in API version 58.0 and later.

# SkillRequirement

Represents a skill that is required to complete a particular work type. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Automotive and Automotive Scheduler must be enabled.

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe record that the skill is required for. The related record is a work type in Automotive Cloud.This field is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToWorkOrder, WorkOrderLineItem, WorkType |
| SkillId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe skill that is required.This field is a relationship field.Relationship NameSkillRelationship TypeLookupRefers ToSkill |
| SkillLevel | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionhe level of the skill required. Skill levels can range from zero to 99.99. |
| SkillNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the skill requirement. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SkillRequirementChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[SkillRequirementFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[SkillRequirementHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.
