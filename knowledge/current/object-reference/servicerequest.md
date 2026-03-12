---
title: "ServiceRequest"
domain: object-reference
topic: servicerequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.878Z
estimatedTokens: 1510
keywords: [ServiceRequest, formal, user, something, provided, access, hardware, software, manages, lifecycle, tasks, typically, low-risk, fulfilled, defined]
---

# ServiceRequest

> Represents a formal request from a user for something to be provided, such as
         access, information, hardware, or software. This object manages the lifecycle of these
         tasks, which are typically low-risk, and can be fulfilled through a defined, repeatable
         process. For example, a Service Request can be created for an employee requesting a new
         laptop or a student needing a transcript. This object is available in API version 66.0
      and later.

# ServiceRequest

Represents a formal request from a user for something to be provided, such as access, information, hardware, or software. This object manages the lifecycle of these tasks, which are typically low-risk, and can be fulfilled through a defined, repeatable process. For example, a Service Request can be created for an employee requesting a new laptop or a student needing a transcript. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssignedGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the user group assigned to the service request.This field is a relationship field.Relationship NameAssignedGroupRefers ToGroup |
| AssignedUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the user assigned to the service request.This field is a relationship field.Relationship NameAssignedUserRefers ToUser |
| BusinessHoursId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID for the business hours used to determine the SLA calculation.This field is a relationship field.Relationship NameBusinessHoursRefers ToBusinessHours |
| ClosedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the service request was closed. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA detailed description of the service request. |
| IsClosed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the service request is closed (true) or not (false). The default value is false.The default value is false. |
| IsPaused | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the SLA timer is paused (true) or not (false). The default value is false.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record |
| MilestoneStatus | TypestringPropertiesGroup, Nillable, SortDescriptionInformation about the milestone the service request reached. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the service request record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentServiceRequestId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the parent request that this service request belongs to.This field is a relationship field.Relationship NameParentServiceRequestRefers ToServiceRequest |
| Priority | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionPriority of a service request.Valid values are:HighMediumLowThe default value is Low. |
| ReportedById | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the person who reported the service request.This field is a polymorphic relationship field.Relationship NameReportedByRefers ToAccount, User |
| ResolutionDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the service request was resolved. |
| ResolutionSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionResolution summary for the service request. |
| SlaEndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the SLA timer ended. |
| SlaPauseDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the SLA timer was paused. |
| SlaStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the SLA timer started. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of a service request. |
| StatusCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe code that displays the status of the service request lifecycle.Valid values are:ClosedCanceledInProgressNewOnHoldResolvedThe default value is New. |
| Subject | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA short description of the service request. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ServiceRequestFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ServiceRequestHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ServiceRequestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ServiceRequestFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ServiceRequestHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ServiceRequestShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
