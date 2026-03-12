---
title: "ChangeRequest"
domain: object-reference
topic: changerequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.418Z
estimatedTokens: 1865
keywords: [ChangeRequest, decision, implement, formal, change, RFC, API, version, 53.0, later, Calls, Associated, Objects]
---

# ChangeRequest

> Represents a decision to implement a formal request for a change (RFC).
      This object is available in API version 53.0 and later.

# ChangeRequest

Represents a decision to implement a formal request for a change (RFC). This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessJustification | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the business reason to implement the change. This field can store up to 32 KB of data, but only the first 255 characters display in reports. |
| BusinessReason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe core reason for creating the change request.Possible values are:t2 |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of change request. Administrators set field values. |
| ChangeRequestNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique, system-generated change request number. |
| ChangeType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of change request. Administrators set field values.Possible values are:EmergencyMajorNormalStandard |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the change request. This field can store up to 32 KB of data, but only the first 255 characters display in reports. |
| EstimatedEndTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time (in UTC) when the change request is estimated to be implemented. |
| EstimatedStartTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated date and time (in UTC) when the change request is implemented. |
| FinalReviewDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time (in UTC) when the change request was reviewed. |
| FinalReviewNotes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes left by the change request reviewer. This field can store up to 32 KB of data, but only the first 255 characters display in reports. |
| Impact | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionShows the impact of a requested change.Possible values are:HighLowMediumThe default value is 'High'. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionA polymorphic relationship field that represents the user or group assigned as the change reviewer.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Priority | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe impact and urgency of a requested change.Possible values are:CriticalHighLowModerateThe default value is 'Critical'. |
| RemediationPlan | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the steps required to resolve the incident. This field can store up to 32 KB of data, but only the first 255 characters display in reports. |
| ReviewerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the user who reviewed the change request.This is a relationship field.Relationship NameReviewerRelationship TypeLookupRefers ToUser |
| RiskImpactAnalysis | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAn assessment of the risk involved with the implementation of the change request. Administrators set field values, and each value can have up to 20 characters. |
| RiskLevel | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe risk level associated with adopting the requested change.Possible values are:HighLowMediumThe default value is 'High'. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRepresents any custom or granular stages a customer may want to track. This will be a dependent picklist.Possible values are:ApprovedCanceledClosedImplementingNewOpenPlanningRejectedReviewedScheduledThe default value is 'New'. |
| StatusCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe status of the change.Possible values are:ApprovedCanceledClosedImplementingNewOpenPlanningRejectedReviewedScheduledThe default value is 'New'. |
| Subject | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA brief description of the requested change. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ChangeRequestChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 59.0)

Change events are available for the object.

[ChangeRequestFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ChangeRequestHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ChangeRequestOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ChangeRequestShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ChangeRequestChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ChangeRequestFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ChangeRequestHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ChangeRequestOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ChangeRequestShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
