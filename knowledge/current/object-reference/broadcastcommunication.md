---
title: "BroadcastCommunication"
domain: object-reference
topic: broadcastcommunication
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.673Z
estimatedTokens: 1332
keywords: [BroadcastCommunication, broadcast, communication, incident, API, version, 56.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# BroadcastCommunication

> Represents a broadcast communication related to an incident. This object
      is available in API version 56.0 and later.

# BroadcastCommunication

Represents a broadcast communication related to an incident. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()

## Special Access Rules

To access this object with Service Cloud, enable Incident Management in setup and set up Broadcast Communications.

## Fields

| Field | Details |
| --- | --- |
| Body | TypetextareaPropertiesCreate, NillableDescriptionIf BroadcastType is Alert, this field contains the alert message.If BroadcastType is Email, this field contains the email body text.If BroadcastType is ExperienceSiteBanner, this field is empty.If BroadcastType is Slack, this field contains the Slack message. |
| BroadcastCommunicationNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated number for every BroadcastCommunication record. |
| BroadcastType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionMedium used to distribute the message.Possible values are:AlertEmailExperienceSiteBannerSlack |
| CustomNotificationTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the custom notification template used to frame the Slack message. Only applies if BroadcastType is Slack.Available in API version 58.0 and later.This field is a relationship field.Relationship NameCustomNotificationTypeRelationship TypeLookupRefers ToCustomNotificationType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the incident associated with the broadcast communication.This field is a relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToIncident |
| Subject | TypetextareaPropertiesCreate, NillableDescriptionIf BroadcastType is Alert, this field is the alert message in the format “Incident Alert \| <Incident subject> \| <Incident Number>.”If BroadcastType is Email, this field is the subject of the email sent.If BroadcastType is ExperienceSiteBanner, this field is empty.If BroadcastType is Slack, this field is in the format “Incident Alert \| <Incident Subject>." |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BroadcastCommunicationChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[BroadcastCommunicationFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BroadcastCommunicationHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BroadcastCommunicationOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BroadcastCommunicationShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BroadcastCommunicationChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- BroadcastCommunicationFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- BroadcastCommunicationHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- BroadcastCommunicationOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- BroadcastCommunicationShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
