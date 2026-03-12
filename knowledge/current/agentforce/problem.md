---
title: "Problem"
domain: agentforce
topic: problem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.462Z
estimatedTokens: 914
keywords: [Problem, Standard, fields, extend, Agentforce, Service, represent, root, cause, issue., API, version, 65.0, later., Supported, Calls, Fields]
---

# Problem

> Standard fields extend the Problem object for use in Agentforce IT Service to
         represent the root cause of an issue. This object is available in API version 65.0 and
      later.

# Problem

Standard fields extend the Problem object for use in Agentforce IT Service to represent the root cause of an issue. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignedGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group or queue to which the problem is assigned.This field is a relationship field.Relationship NameAssignedGroupRefers ToGroup |
| AssignedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary user to whom the problem is assigned.This field is a relationship field.Relationship NameAssignedUserRefers ToUser |
| BusinessHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the business hours related to the entitlement process for a problem.This field is a relationship field.Relationship NameBusinessHoursRefers ToBusinessHours |
| Comments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe comments added to a problem by users across various statuses. |
| EntitlementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the entitlement related to the problem.This field is a relationship field.Relationship NameEntitlementRefers ToEntitlement |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a problem is closed (true) or not (false).The default value is false. |
| IsStopped | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a problem is paused for further processing (true) or not (false).The default value is false. |
| MilestoneStatus | TypestringPropertiesGroup, Nillable, SortDescriptionThe milestone status related to the entitlement process for a problem. |
| PermanentSolution | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe permanent solution to a problem. If the problem can be addressed permanently, use this field. |
| ReportedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user or account who reports a problem.This field is a relationship field.Relationship NameReportedByRefers ToUser |
| ResolutionStatusCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status code for the problem when it's resolved, such as resolved by the reportee, known error, or workaround provided.Possible values are:Change Request CreatedDuplicateKnown ErrorNo Resolution ProvidedOtherResolved By ReporterResolved Post ChangeSolution ProvidedUser ErrorWorkaround ProvidedThe default value is Duplicate. |
| SlaExitDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the entitlement process ends for a problem. |
| SlaStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescription |
| StopStartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the entitlement process starts for a problem. |
| Workaround | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe workaround to a problem. When there's no permanent solution for a problem, use this field. |

For other fields on this object, see [*Object Reference for the Salesforce Platform*: Problem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_problem.htm)
