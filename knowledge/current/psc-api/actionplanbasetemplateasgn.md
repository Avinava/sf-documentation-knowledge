---
title: "ActionPlanBaseTemplateAsgn"
domain: psc-api
topic: actionplanbasetemplateasgn
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.785Z
estimatedTokens: 782
keywords: [ActionPlanBaseTemplateAsgn, junction, action, plan, template, record, assigned, job, position, recruitment, requisition, API, version, 62.0, Calls]
---

# ActionPlanBaseTemplateAsgn

> Represents a junction between an action plan template and a related
         record. An action plan template can be assigned to a job position, position, or a
         recruitment requisition. This object is available in API version 62.0
      only.

# ActionPlanBaseTemplateAsgn

Represents a junction between an action plan template and a related record. An action plan template can be assigned to a job position, position, or a recruitment requisition. This object is available in API version 62.0 only.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the action plan template that's associated with the reference record.This field is a relationship field.Relationship NameActionPlanTemplateRelationship TypeMaster-detailRefers ToActionPlanTemplate (the master object) |
| IsApplicable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the action plan base template assignment applies to the reference record (true) or not (false).The default value is false. |
| IsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the action plan base template assignment is required (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the action plan base template assignment. |
| ReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the record that's associated with the action plan template.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToJobPosition, Position, RecruitmentRequisition |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the assignment.Possible values are:ActiveInactiveThe default value is Active. |
| TemplateDisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe display order of the action plan template within the context of the reference record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ActionPlanBaseTemplateAsgnHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ActionPlanBaseTemplateAsgnHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
