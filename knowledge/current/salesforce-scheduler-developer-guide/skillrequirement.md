---
title: "SkillRequirement"
domain: salesforce-scheduler-developer-guide
topic: skillrequirement
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.850Z
estimatedTokens: 832
keywords: [SkillRequirement, skill, particular, task, Salesforce, Scheduler, requirements, added, work, API, version, 38.0, later, Calls, Special]
---

# SkillRequirement

> Represents a skill that is required to complete a particular task in
			Salesforce Scheduler. Skill requirements can be added to work types Salesforce
			Scheduler. This object is available in API version 38.0 and later.

# SkillRequirement

Represents a skill that is required to complete a particular task in Salesforce Scheduler. Skill requirements can be added to work types Salesforce Scheduler. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record can only have been referenced (LastReferencedDate) and not viewed. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe record that the skill is required for. The related record can be a work type.This is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToPendingServiceRouting, WorkOrder, WorkOrderLineItem, WorkType |
| SkillId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe skill that is required.This is a relationship field.Relationship NameSkillRelationship TypeLookupRefers ToSkill |
| SkillLevel | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe level of the skill required. Skill levels can range from zero to 99.99. Depending on your business needs, you can want the skill level to reflect years of experience, certification levels, or license classes. |
| SkillNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the skill requirement. |

## Usage

Skill requirements help dispatchers assign work to service resources with the proper expertise. You can still assign a service appointment to a service resource that *doesn’t* possess the specified skills, so skill requirements serve more as a suggestion than a rule.

Add skill requirements to work types to save time and keep your processes consistent. When you add a skill requirement to a work type that use that type automatically inherits the skill requirement. For example, if all annual maintenance visits for your Classic Refrigerator product require a Refrigerator Maintenance skill level of at least 50, add that skill requirement to the Annual Maintenance Visit work type. When you create a service appointment for a customer’s annual fridge maintenance, applying that work type adds the skill requirement as well.

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[ServiceRequirementFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[ServiceRequirementHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.
