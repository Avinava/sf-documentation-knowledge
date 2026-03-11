---
title: "Incident"
domain: agentforce
topic: incident
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.908Z
keywords: [Incident, Supported, Calls, Fields]
---

# Incident

# Incident

Standard fields extend the Incident object for use in Agentforce IT Service to represent an issue. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignedGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe group or queue to which the incident is assigned.This field is a relationship field.Relationship NameAssignedGroupRefers ToGroup |
| AssignedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary user to whom the incident is assigned.This field is a relationship field.Relationship NameAssignedUserRefers ToUser |
| BusinessHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the business hours related to the entitlement process for an incident.This field is a relationship field.Relationship NameBusinessHoursRefers ToBusinessHours |
| EntitlementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the entitlement related to the incident.This field is a relationship field.Relationship NameEntitlementRefers ToEntitlement |
| IsAutomaticallyCreated | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an incident is created automatically (true) or not (false).The default value is false. |
| IsClosed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether an incident is closed (true) or not (false).The default value is false. |
| IsStopped | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an incident is paused for further processing (true) or not (false).The default value is false. |
| MajorIncidentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the incident if it's a major incident.Possible values are:ApprovedProposedRejected |
| MajorIncidentStatusComments | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe comments related to a major incident for a specific status. |
| MilestoneStatus | TypestringPropertiesGroup, Nillable, SortDescriptionThe milestone status related to the entitlement process for an incident. |
| ReportedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user who reported the incident.This field is a polymorphic relationship field.Relationship NameReportedByRefers ToAccount, User |
| ResolutionStatusCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status code for the incident when it's resolved, such as resolved by the reportee, known error, or workaround provided.Possible values are:Change Request CreatedDuplicateKnown ErrorNo Resolution ProvidedOtherResolved By ReporterResolved Post ChangeSolution ProvidedUser ErrorWorkaround Provided |
| SlaExitDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the entitlement process ends for an incident. |
| SlaStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the entitlement process starts for an incident. |
| StopStartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the incident is paused. |

For other fields on this object, see [*Object Reference for the Salesforce Platform*: Incident](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_incident.htm)