---
title: "InteropTopicTriggerCriteria"
domain: health-cloud-object-reference
topic: interoptopictriggercriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.627Z
estimatedTokens: 1258
keywords: [InteropTopicTriggerCriteria, criteria, trigger, notification, interoperability, topic, API, version, 64.0, later, Calls, Associated, Objects]
---

# InteropTopicTriggerCriteria

> Represents the criteria that trigger a notification for an interoperability
         topic. This object is available in API version 64.0 and later.

# InteropTopicTriggerCriteria

Represents the criteria that trigger a notification for an interoperability topic. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AreBothRsrcStsRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if both the previous and current resource statuses are required to trigger a notification.The default value is false. |
| CreateOperationResultType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the result type when the operation type is Create.Possible values are:Test FailsTest Passes |
| CriteriaExpression | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe trigger critera expressed in a machine-readable format. |
| CurrentResourceStatus | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the resource after the triggering update is made. |
| DeleteOperationResultType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the result when the operation type is Delete.Possible values are:Test FailsTest Passes |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the interoperability topic trigger criteria. |
| EventCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the event that triggers the notification.This field is a polymorphic relationship field.Relationship NameEventCodeRefers ToCodeSet, CodeSetBundle |
| InteropTopicId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe interoperability topic for which the trigger criteria is defined.This field is a relationship field.Relationship NameInteropTopicRelationship TypeMaster-detailRefers ToInteropTopic (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the interoperability topic trigger criteria record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the interoperability topic trigger criteria record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the interoperability topic trigger criteria. |
| OperationType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the type of operation that triggers the subscription notification. |
| PreviousResourceStatus | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the resource before the triggering update is made. |
| Resource | TypetextareaPropertiesCreate, UpdateDescriptionThe resource for which the notification is sent. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of trigger that activates the interoperability topic.Possible values are:EventTrigger—Event TriggerResourceTrigger—Resource Trigger |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InteropTopicTriggerCriteriaChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[InteropTopicTriggerCriteriaFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InteropTopicTriggerCriteriaHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InteropTopicTriggerCriteriaChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InteropTopicTriggerCriteriaFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InteropTopicTriggerCriteriaHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
