---
title: "SkillRequirement"
domain: field-service
topic: skillrequirement
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:56.712Z
estimatedTokens: 1535
keywords: [SkillRequirement, Represents, skill, required, complete, particular, task, Field, Service, Omni-Channel, Salesforce, Scheduler, Workforce, Engagement., Skill, requirements, added, pending, service, routing]
---

# SkillRequirement

> Represents a skill that is required to complete a particular task in
			Field Service, Omni-Channel, Salesforce Scheduler, or Workforce Engagement. Skill
			requirements can be added to pending service routing objects in Omni-Channel. They can
			be added to work types, work orders, and work order line items in Field Service and
			Lightning Scheduler. And they can be added to job profiles in Workforce Engagement.
		This object is available in API version 38.0 and later. You also can add skill requirements
		to work items in Omni-Channel skills-based routing using API version 42.0 and
		later.

# SkillRequirement

Represents a skill that is required to complete a particular task in Field Service, Omni-Channel, Salesforce Scheduler, or Workforce Engagement. Skill requirements can be added to pending service routing objects in Omni-Channel. They can be added to work types, work orders, and work order line items in Field Service and Lightning Scheduler. And they can be added to job profiles in Workforce Engagement. This object is available in API version 38.0 and later. You also can add skill requirements to work items in Omni-Channel skills-based routing using API version 42.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

If you want to use SkillRequirement for Field Service use cases, then Field Service must be enabled.

If you want to use SkillRequirement only for Omni-Channel skills-based routing use cases, then you don't need Field Service to be enabled.

If you want to use SkillRequirement for Workforce Engagement use cases, then Workforce Engagement must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| IsAdditionalSkill | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that a skill is additional. After a designated timeout period, a skill marked as additional is dropped from Omni-Channel routing. The case is then routed to the best-matched agent even if they don’t have all the skills. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe record that the skill is required for. The related record can be a work order, work order line item, work type, or pending service routing record.This is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToWorkOrder, WorkOrderLineItem, WorkType |
| SkillId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe skill that is required.This is a relationship field.Relationship NameSkillRelationship TypeLookupRefers ToSkill |
| SkillLevel | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionThe level of the skill required. Skill levels can range from zero to 99.99. Depending on your business needs, you can have the skill level to reflect years of experience, certification levels, or license classes. |
| SkillNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAn auto-generated number identifying the skill requirement. |
| SkillPriority | TypeintPropertiesAggregatable, Create, Filter, Group, Nillable, Sort, UpdateDescriptionFor additional skills, specify the order in which skills are dropped if after the specified timeout no agent with that skill is available. Higher priority-value skills are dropped first. Lower priority-value skills, for example 0, are dropped last. Skills with the same priority value are dropped as a group. You can set skill priority using skills-based routing rules or Apex code. |

## Usage

Field Service

Skill requirements help dispatchers assign work orders to service resources with the proper expertise. You can still assign a work order, work order line item, or related service appointment to a service resource that does *not* have the specified skills, so skill requirements serve more as a suggestion than a rule.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=field_service_dev)

#### Note

If you’re using the Field Service managed package, use matching rules to ensure that appointments are only assigned to service resources who possess the skills listed on the parent work order.

If many of your work orders require the same skills, add skill requirements to work types to save time and keep your processes consistent. When you add a skill requirement to a work type, work orders and work order line items that use that type automatically inherit the skill requirement. For example, if all annual maintenance visits for your Classic Refrigerator product require a Refrigerator Maintenance skill level of at least 50, add that skill requirement to the Annual Maintenance Visit work type. When you create a work order for a customer’s annual fridge maintenance, applying that work type adds the skill requirement as well.

Omni-Channel

We recommend that you use Omni-Channel flow or skills-based routing rules to create skills-based routing requests. When you do so, work items are routed by creating a PendingServiceRouting object. The PendingServiceRouting object can have multiple SkillRequirements objects associated with it. When a work item requires multiple skills, it’s routed to an agent who has all of the required skills. The PendingServiceRouting object adds attributes to the work item that represent the skill (skill id), priority, skill proficiency, and timestamp.

Workforce Engagement

Workforce Engagement uses skill requirements to assign shifts to agents who have the right skills. You can still assign shifts to service resources if they don’t have those skills.

In a non-Omni workflow, create a scheduling rule that matches agents to shifts based on their skills and the job profile's skill requirements. Shift scheduling tools can then assign agents with the right skills.

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

SkillRequirementChangeEvent (API version 54.0)

Change events are available for the object.

SkillRequirementFeed

Feed tracking is available for the object.

SkillRequirementHistory

History is available for tracked fields of the object.
