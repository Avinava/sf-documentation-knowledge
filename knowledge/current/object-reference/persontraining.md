---
title: "PersonTraining"
domain: object-reference
topic: persontraining
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.849Z
estimatedTokens: 677
keywords: [PersonTraining, assignment, learning, module, Workforce, Engagement, API, version, 54.0, later, Calls, Special, Access, Rules, Usage]
---

# PersonTraining

> Represents an assignment of a learning module in Workforce Engagement.
      This object is available in API version 54.0 and later.

# PersonTraining

Represents an assignment of a learning module in Workforce Engagement. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The org requires a Workforce Engagement license and an Enablement Sites (myTrailhead) license. The user requires at least one Workforce Engagement permission set assigned to them: Workforce Engagement Admin, Workforce Engagement Analyst, Workforce Engagement Planner, or Workforce Engagement Agent.

Workforce Engagement Management uses this object to route training to agents. To assign modules to agents, users with the Learning Manager profile require Read, Create, and View All Records access to this object. To receive routed modules, users with the Learner profile require Read access to this object.

## Fields

| Field | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA valid user ID for the user who’s assigned the training. AssigneeId can’t be empty if the Status field is Assigned. We recommend that you set AssigneeId to the value in OwnerId.This is a relationship field.Relationship NameAssigneeRelationship TypeLookupRefers ToUser |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the learning module. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the person training.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the training.Possible values are:A—Assigned; when the Status is assigned, the AssigneeId field can’t be empty.C—CompletedI—In ProgressN—NewP—PausedThe default value is 'N'. |
| TrainingId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the learning module.This is a relationship field.Relationship NameTrainingRelationship TypeLookupRefers ToLearningContent |
| TrainingType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of training.Possible values are:T—Trailhead |

## Usage

In version 54.0 and later releases, Workforce Engagement uses this object instead of the AgentTraining object to route learning modules to agents. If you set up agent engagement in your org in an earlier release, we rename AgentTraining records as PersonTraining records.
