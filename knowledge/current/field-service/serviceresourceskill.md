---
title: "ServiceResourceSkill"
domain: field-service
topic: serviceresourceskill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.611Z
estimatedTokens: 740
keywords: [ServiceResourceSkill, Represents, skill, service, resource, possesses, Field, Service, Lightning, Scheduler., API, version, 38.0, later., Supported, Calls, Special, Access, Rules, Fields]
---

# ServiceResourceSkill

> Represents a skill that a service resource possesses in Field Service
			and Lightning Scheduler. This object is available in API version 38.0 and
		later.

# ServiceResourceSkill

Represents a skill that a service resource possesses in Field Service and Lightning Scheduler. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| EffectiveEndDate | TypedatetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the skill expires. For example, if a service resource needs to be re-certified after six months, the end date would be the date their certification expires. |
| EffectiveStartDate | TypedatetimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when the service resource gains the skill. For example, if the skill represents a certification, the start date would be the date of certification. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resource skill was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the resource skill was last viewed. |
| ServiceResourceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe service resource who possesses the skill.This is a relationship field.Relationship NameServiceResourceRelationship TypeLookupRefers ToServiceResource |
| SkillId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe skill the service resource possesses.This is a relationship field.Relationship NameSkillRelationship TypeLookupRefers ToSkill |
| SkillLevel | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe service resource’s skill level. Skill level can range from zero to 99.99. |
| SkillNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the resource skill assignment. |

## Usage

You can assign skills to all service resources in your org to indicate their certifications and areas of expertise, and specify each resource’s skill level from 0 to 99.99. For example, you can assign Maria the “Welding” skill, level 50.

If you intend to use the skills feature, determine which skills you want to track and how skill level should be determined. For example, you may want the skill level to reflect years of experience, certification levels, or license classes.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

ServiceResourceSkillChangeEvent (API version 54.0)

Change events are available for the object.

ServiceResourceSkillFeed

Feed tracking is available for the object.

ServiceResourceSkillHistory

History is available for tracked fields of the object.
