---
title: "InteropTopic"
domain: health-cloud-object-reference
topic: interoptopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.565Z
estimatedTokens: 1462
keywords: [InteropTopic, interoperability, topic, notifications, sent, subscribers, API, version, 64.0, later, Calls, Associated, Objects]
---

# InteropTopic

> Represents the interoperability topic for which notifications are sent to
         subscribers. This object is available in API version 64.0 and later.

# InteropTopic

Represents the interoperability topic for which notifications are sent to subscribers. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApprovalDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the interoperability topic was approved. |
| CopyrightInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe copyright information of the interoperability topic. |
| CopyrightLabel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe copyright label of the interoperability topic. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of the interoperability topic. |
| EffectiveEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date when the interoperability topic is effective. |
| EffectiveStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe first date from when the interoperability topic is effective. |
| GlobalUniqueIdentifier | TypetextareaPropertiesCreate, idLookup, UpdateDescriptionThe global unique identifier of the interoperability topic definition. |
| IsExperimental | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the interoperability topic is experimental.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the interoperability topic record was last referenced. |
| LastReviewedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the interoperability topic was last reviewed. |
| LastRevisedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the interoperability topic was last revised. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the interoperability topic was last viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe date when the interoperability topic was last revised. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the interoperability topic record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PublisherId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe publisher of the interoperability topic.This field is a relationship field.Relationship NamePublisherRefers ToAccount |
| Purpose | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe purpose of the interoperability topic. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the interoperability topic.Possible values are:ACTIVE—ActiveDRAFT—DraftRETIRED—RetiredUNKNOWN—Unknown |
| SubscriberIdentifierType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of identifier assigned to the subscriber. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title of the interoperability topic. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the interoperability topic.Possible values are:HEALTHCLOUD—Health Cloud |
| Version | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe version of the interoperability topic. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InteropTopicChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[InteropTopicFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InteropTopicHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InteropTopicShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InteropTopicChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InteropTopicFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InteropTopicHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InteropTopicShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
