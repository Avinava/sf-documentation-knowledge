---
title: "AssessmentEnvelopeItem"
domain: health-cloud-object-reference
topic: assessmentenvelopeitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:36.039Z
estimatedTokens: 937
keywords: [AssessmentEnvelopeItem, item, envelope, assessments, user, assessment, depression, anxiety, API, version, 58.0, later, Calls, Associated, Objects]
---

# AssessmentEnvelopeItem

> Represents information about an item in an envelope that contains the
         assessments related to a user. For example, you can create an item that contains an
         assessment for depression or anxiety. This object is available in API version 58.0 and
      later.

# AssessmentEnvelopeItem

Represents information about an item in an envelope that contains the assessments related to a user. For example, you can create an item that contains an assessment for depression or anxiety. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentEnvelopeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe assessment envelope that is associated with the item.This field is a relationship field.Relationship NameAssessmentEnvelopeRelationship TypeLookupRefers ToAssessmentEnvelope |
| AssessmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier for the assessment envelope item.This field is a relationship field.Relationship NameAssessmentRelationship TypeLookupRefers ToAssessment |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionTne name of the assessment envelope item. |
| OmniProcessId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresent the related OmniProcess.This field is a relationship field.Relationship NameOmniProcessRelationship TypeLookupRefers ToOmniProcess |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the status of the assessment envelope item.Possible values are:CompletedInProgressNotStarted |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssessmentEnvelopeItemChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

[AssessmentEnvelopeItemFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AssessmentEnvelopeItemHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AssessmentEnvelopeItemChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- AssessmentEnvelopeItemFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- AssessmentEnvelopeItemHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
