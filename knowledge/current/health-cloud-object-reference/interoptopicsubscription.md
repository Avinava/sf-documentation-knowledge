---
title: "InteropTopicSubscription"
domain: health-cloud-object-reference
topic: interoptopicsubscription
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.611Z
estimatedTokens: 1538
keywords: [InteropTopicSubscription, subscription, interoperability, topic, API, version, 64.0, later, Calls, Associated, Objects]
---

# InteropTopicSubscription

> Represents a subscription to an interoperability topic. This object is
      available in API version 64.0 and later.

# InteropTopicSubscription

Represents a subscription to an interoperability topic. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ChannelIdentifier | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe identifier of the channel to which notifications are sent, such as an URL or email. |
| ChannelTypeCodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe code representing the type of channel used to send notifications for the interoperability topic subscription.This field is a relationship field.Relationship NameChannelTypeCodeRefers ToCodeSet |
| CheckInInterval | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum interval, in seconds, before a check-in notification is sent to keep the subscription active when no new events occur. |
| EffectiveEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last date when the interoperability topic subscription is effective. |
| EffectiveStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe first date when the interoperability topic subscription is effective. |
| InteropTopicId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe interoperability topic that's being subscribed to.This field is a relationship field.Relationship NameInteropTopicRefers ToInteropTopic |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the interoperability topic subscription record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the interoperability topic subscription record was last viewed. |
| MaximumEventCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of events that can be bundled in a notification. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the interoperability topic subscription. |
| NotificationTimeout | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum amount of time, in seconds, to deliver a notifcation for the subscription. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns the interoperability topic subscription record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PayloadContentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of content included in the notification payload.Possible values are:EMPTY—EmptyFULL_RESOURCE—Full ResourceID_ONLY—ID Only |
| PayloadFormatType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the format in which the notification payload for the subscription is sent. |
| Reason | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reason for the interoperability topic subscription. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the interoperability topic subscription.Possible values are:ACTIVE—ActiveENTERED_IN_ERROR—Entered in ErrorERROR—ErrorOFF—OffREQUESTED—Requested |
| SubscribedById | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe subscriber to the interoperability topic.This field is a polymorphic relationship field.Relationship NameSubscribedByRefers ToAccount, HealthcareProvider |
| SubscriberIdentifier | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe unique identifier of the subscriber. |
| SubscriberSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier of the subscriber system. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InteropTopicSubscriptionChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[InteropTopicSubscriptionFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[InteropTopicSubscriptionHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[InteropTopicSubscriptionShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- InteropTopicSubscriptionChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- InteropTopicSubscriptionFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- InteropTopicSubscriptionHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- InteropTopicSubscriptionShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
