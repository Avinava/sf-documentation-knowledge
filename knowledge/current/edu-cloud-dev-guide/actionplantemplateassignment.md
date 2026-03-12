---
title: "ActionPlanTemplateAssignment"
domain: edu-cloud-dev-guide
topic: actionplantemplateassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.828Z
estimatedTokens: 462
keywords: [ActionPlanTemplateAssignment, junction, action, plant, template's, version, target, Care, Plan, Template, Benefit, Goal, Definition, associated, API]
---

# ActionPlanTemplateAssignment

> Represents a junction between an action plant template's version and the
         target object (Care Plan Template, Benefit, and Goal Definition) associated with them.
      This object is available in API version 60.0 and later.

# ActionPlanTemplateAssignment

Represents a junction between an action plant template's version and the target object (Care Plan Template, Benefit, and Goal Definition) associated with them. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignmentQueueName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the queue with ownership of the action plan records generated from the action plan template assignment. |
| AssignmentSize | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of records to create for the assignment. |
| AssignmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of workflow to use for the assignment. |
| AssociatedObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. Represents the relation between an object associated with the action plan template version record.This field is a polymorphic relationship field.Relationship NameAssociatedObjectRelationship TypeLookupRefers ToBenefit, CarePlanTemplate, GoalDefinition |
| AssociatedRecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record type associated with the action plan template assignment.This field is a relationship field.Relationship NameAssociatedRecordTypeRelationship TypeLookupRefers ToRecordType |

For more information, see [ActionPlanTemplateAssignment in Public Sector Solutions](https://developer.salesforce.com/docs/atlas.en-us.260.0.psc_api.meta/psc_api/sforce_api_objects_actionplantemplateassignment.htm).
