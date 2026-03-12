---
title: "CarePlanTemplateGoal"
domain: nonprofit-cloud
topic: careplantemplategoal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:02.251Z
estimatedTokens: 468
keywords: [CarePlanTemplateGoal, junction, care, plan, template, goal, definition, stores, API, version, 55.0, later, Calls]
---

# CarePlanTemplateGoal

> Represents a junction between a care plan template and a goal definition.
         This object stores the goal details of a care plan template. This object is available
      in API version 55.0 and later.

# CarePlanTemplateGoal

Represents a junction between a care plan template and a goal definition. This object stores the goal details of a care plan template. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=nonprofit_cloud)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CarePlanTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe care plan template associated with the care plan template goal.This is a relationship field.Relationship NameCarePlanTemplateRelationship TypeMaster-DetailRefers ToCarePlanTemplate |
| GoalDefinitionId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe goal definition associated with the care plan template goal.This is a relationship field.Relationship NameGoalDefinitionRelationship TypeLookupRefers ToGoalDefinition |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the care plan template goal. |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the priority of the care plan template goal.Possible values are:HighLowMedium |
