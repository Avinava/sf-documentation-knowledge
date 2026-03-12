---
title: "ActionPlanTemplateAssignment"
domain: psc-api
topic: actionplantemplateassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.815Z
estimatedTokens: 940
keywords: [ActionPlanTemplateAssignment, junction, action, plant, template's, version, target, associated, API, 56.0, later, Calls, Objects]
---

# ActionPlanTemplateAssignment

> Represents a junction between an action plant template's version and
         the target object associated with them. This object is available in API version 56.0
      and later.

# ActionPlanTemplateAssignment

Represents a junction between an action plant template's version and the target object associated with them. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanTemplateVersionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ActionPlanTemplateVersion associated with the TargetObject.This field is a relationship field.Relationship NameActionPlanTemplateVersionRelationship TypeLookupRefers ToActionPlanTemplateVersion |
| AssociatedObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Represents the relation between an object associated with the action plan template version record.This field is a polymorphic relationship field.Relationship NameAssociatedObjectRelationship TypeLookupRefers ToBenefit, CarePlanTemplate, GoalDefinition, JobPosition, Position, Program, RecruitmentRequisition, RegulatoryCode |
| IsApplicable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the action plan template assignment applies to the reference record (true) or not (false).The default value is false.Available in API version 63.0 and later. Talent Recruitment Management must be enabled. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the action plan template assignment is required (true) or not (false).The default value is false.Available in API version 63.0 and later. Talent Recruitment Management must be enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique ID of the Action Plan Template Assignment. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the action plan template assignment.Possible values are:ActiveInactiveThe default value is Active.Available in API version 63.0 and later. Talent Recruitment Management must be enabled. |
| TemplateDisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display order of the action plan template within the context of the reference record.Available in API version 63.0 and later. Talent Recruitment Management must be enabled. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionPlanTemplateAssignmentFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ActionPlanTemplateAssignmentHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ActionPlanTemplateAssignmentFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- ActionPlanTemplateAssignmentHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
