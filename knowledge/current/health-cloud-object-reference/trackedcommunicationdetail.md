---
title: "TrackedCommunicationDetail"
domain: health-cloud-object-reference
topic: trackedcommunicationdetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:38.183Z
estimatedTokens: 1085
keywords: [TrackedCommunicationDetail, Stores, additional, associated, TrackedCommunication, records, API, version, 57.0, later, Calls, Objects]
---

# TrackedCommunicationDetail

> Stores additional information associated with TrackedCommunication
         records. This object is available in API version 57.0 and later.

# TrackedCommunicationDetail

Stores additional information associated with TrackedCommunication records. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DetailCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code set or code set bundle that contains the information to be added to the tracked communication record. Select a detail code when the specified detail type is Category, Medium, Reason Code, or Payload.This field is a polymorphic relationship field.Relationship NameDetailCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| DetailRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record that contains the information to be added to the tracked communication record. Select the record based on the detail type you’ve specified.For the Replaced Item detail type, select a tracked communication record.For the About detail type, select either a case or a case request record.For the Recipient detail type, select either an account or a healthcare provider record.For the Note detail type, select an author note record.For the Payload detail type, select an author note record.This field is a polymorphic relationship field.Relationship NameDetailRecordRelationship TypeLookupRefers ToAccount, AuthorNote, CareRequest, Case, HealthcareProvider, TrackedCommunication |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of information that you’re adding to the tracked communication record.Possible values are:AboutCategoryMediumNotePayloadReason CodeRecipientReplaced Item |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the tracked communication detail. |
| TrackedCommunicationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe parent tracked communication record you're adding information to.This field is a relationship field.Relationship NameTrackedCommunicationRelationship TypeMaster-DetailRefers ToTrackedCommunication |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TrackedCommunicationDetailChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")(API Version 63.0)

Change events are available for the object.

[TrackedCommunicationDetailFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[TrackedCommunicationDetailHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- TrackedCommunicationDetailChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- TrackedCommunicationDetailFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- TrackedCommunicationDetailHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
