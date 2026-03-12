---
title: "ServiceResourceSkill"
domain: salesforce-scheduler-developer-guide
topic: serviceresourceskill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.783Z
estimatedTokens: 777
keywords: [ServiceResourceSkill, skill, service, resource, possesses, Salesforce, Scheduler, API, version, 38.0, later, Calls, Special, Access, Rules]
---

# ServiceResourceSkill

> Represents a skill that a service resource possesses in Salesforce
			Scheduler. This object is available in API version 38.0 and later.

# ServiceResourceSkill

Represents a skill that a service resource possesses in Salesforce Scheduler. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Salesforce Scheduler must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| EffectiveEndDate | TypedatetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the skill expires. For example, if a service resource must be recertified after six months, the end date would be the date their certification expires. |
| EffectiveStartDate | TypedatetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when the service resource gains the skill. For example, if the skill represents a certification, the start date would be the date of certification. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resource skill was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resource skill was last viewed. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe service resource who possesses the skill.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| SkillId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe skill the service resource possesses.This is a relationship field.Relationship NameSkillRelationship TypeLookupRefers ToSkill |
| SkillLevel | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe service resource’s skill level. Skill level can range from zero to 99.99. |
| SkillNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the resource skill assignment. |

## Usage

You can assign skills to all service resources in your org to indicate their certifications and areas of expertise, and specify each resource’s skill level from 0 to 99.99. For example, you can assign Maria the “Welding” skill, level 50.

If you intend to use the skills feature, determine which skills you want to track and how skill level must be determined. For example, you can want the skill level to reflect years of experience, certification levels, or license classes.

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[ServiceResourceSkillFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[ServiceResourceSkillHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.
