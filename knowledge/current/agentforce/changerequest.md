---
title: "ChangeRequest"
domain: agentforce
topic: changerequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.344Z
estimatedTokens: 1200
keywords: [ChangeRequest, Standard, fields, extend, Agentforce, Service, represent, fix, implemented, issue., API, version, 65.0, later., Supported, Calls, Fields]
---

# ChangeRequest

> Standard fields extend the ChangeRequest object for use in Agentforce IT
         Service to represent the fix implemented for an issue. This object is available in API
      version 65.0 and later.

# ChangeRequest

Standard fields extend the ChangeRequest object for use in Agentforce IT Service to represent the fix implemented for an issue. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time on which a change request is actually started. |
| AssignedGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group or queue to which the change request is assigned.This field is a relationship field.Relationship NameAssignedGroupRefers ToGroup |
| AssignedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary user to whom the change request is assigned.This field is a relationship field.Relationship NameAssignedUserRefers ToUser |
| BusinessHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the business hours related to the entitlement process for a change request.This field is a relationship field.Relationship NameBusinessHoursRefers ToBusinessHours |
| CalculatedRiskScore | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe score calculated by automated processes to determine how likely is the proposed change to cause risk. |
| ClosedStatusCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status code for the change request when it's closed, such as Successful, Partially Successful, or Failed.Possible values are:FailedPartiallySuccessful—Partially SuccessfulSuccessful |
| ClosedStatusComments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe comments related to the change request when the status is Closed. |
| CompletionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time on which a change request is closed. |
| EntitlementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the entitlement related to the change request.This field is a relationship field.Relationship NameEntitlementRefers ToEntitlement |
| ImplementationPlan | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe implementation plan related to a change request. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a change request is closed (true) or not (false).The default value is false. |
| IsStopped | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a change request is paused for further processing (true) or not (false).The default value is false. |
| MilestoneStatus | TypestringPropertiesGroup, Nillable, SortDescriptionThe milestone status related to the entitlement process for a change request. |
| RequestedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who requests the change request.This field is a relationship field.Relationship NameRequestedByRefers ToUser |
| SlaExitDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the entitlement process ends for a change request. |
| SlaStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the entitlement process starts for a change request. |
| StopStartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the change request is paused. |
| SubCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the subcategory of a change request. |
| TestPlan | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe test plan related to a change request. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of a change request, such as standard, normal, or emergency. The Type and Change Type fields are mutually exclusive and only one should be used at a time.Possible values are:EmergencyNormalStandardThe default value is Standard. |
| Urgency | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the urgency of the change request.Possible values are:HighLowMediumThe default value is High. |

For other fields on this object, see [*Object Reference for the Salesforce Platform*: ChangeRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_changerequest.htm)
