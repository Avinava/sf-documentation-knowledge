---
title: "Incident"
domain: object-reference
topic: incident
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:11.187Z
estimatedTokens: 1893
keywords: [Incident, any, unplanned, business, interruption, wide-sweeping, impacts, requires, urgent, fix, documenting, history, registration, closure, API]
---

# Incident

> An Incident is any unplanned business interruption that has wide-sweeping
         impacts and requires an urgent fix. This object contains the details of the incident,
         documenting the history of the incident from registration to closure. This object is
      available in API version 53.0 and later.

# Incident

An Incident is any unplanned business interruption that has wide-sweeping impacts and requires an urgent fix. This object contains the details of the incident, documenting the history of the incident from registration to closure. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of incident. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the incident. This field can store up to 32 KB of data, but only the first 255 characters appear in reports. |
| DetectedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time (in UTC) when the incident was first detected. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time (in UTC) when the incident ended. |
| Impact | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe incident's impact.Possible values are:HighLowMediumThe default value is 'High'. |
| IncidentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique, system-generated number for the incident. |
| IsMajorIncident | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the incident is business-critical. If set to true, the incident is widespread and business-critical. The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time (in UTC) when the current user last accessed this record, a list view, or another related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time (in UTC) when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionA polymorphic relationship field that represents the user or group assigned to resolve the incident.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentIncidentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique ID of an incident above one or more related incidents in an incident hierarchy.This is a relationship field.Relationship NameParentIncidentRelationship TypeLookupRefers ToIncident |
| Priority | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe impact and urgency of the incident.Possible values are:CriticalHighLowModerateThe default value is 'Critical'. |
| PriorityOverrideReason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason why a priority should be changed or edited. |
| ReportedMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates how the incident was reported to customer service. |
| ResolutionDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time (in UTC) when the incident was resolved. |
| ResolutionSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of possible steps to resolve the incident. |
| ResolvedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique ID of the user who resolved the incident.This is a relationship field.Relationship NameResolvedByRelationship TypeLookupRefers ToUser |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time (in UTC) when the incident began. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAny custom or granular stages a customer may want to track.Possible values are:CompletedIn ProgressNewOpenProblem CreatedResolvedThe default value is 'New'. |
| StatusCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe incident's status.Possible values are:CompletedInProgressNewOpenProblemCreatedResolvedThe default value is 'New'. |
| SubCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of incident. One level deeper than Category. Administrators set field values. |
| Subject | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA brief description of the incident. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of incident, for example, question or problem. Administrators set field values. |
| Urgency | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionA measure of how long the resolution can be delayed until an incident, problem, or change has a significant business impact.Possible values are:HighLowMediumThe default value is 'High'. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[IncidentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[IncidentFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[IncidentHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[IncidentOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[IncidentShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- IncidentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- IncidentFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- IncidentHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- IncidentOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- IncidentShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
