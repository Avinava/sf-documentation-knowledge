---
title: "BroadcastCommAudience"
domain: object-reference
topic: broadcastcommaudience
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:05.663Z
estimatedTokens: 1664
keywords: [BroadcastCommAudience, audience, broadcast, communication, sent, API, version, 56.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# BroadcastCommAudience

> Represents the audience that the broadcast communication is sent to.
      This object is available in API version 56.0 and later.

# BroadcastCommAudience

Represents the audience that the broadcast communication is sent to. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To access this object with Service Cloud, enable Incident Management in Setup and set up Broadcast Communications.

## Fields

| Field | Details |
| --- | --- |
| AudienceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the broadcast communication audience.If BroadcastType is Alert, this value is the ID of the Group record where the message is sent to.If BroadcastType is Email, this value is the ID of the ListEmail record where the email is sent to.If BroadcastType is ExperienceSiteBanner, this value is the ID of the Network record where the banner is displayed at.If BroadcastType is Slack, this value is the ID of the CollaborationRoom record where the message is sent to.This field is a polymorphic relationship field.Relationship NameAudienceRelationship TypeLookupRefers ToCollaborationRoom, Group, ListEmail, Network |
| BroadcastCommAudienceNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-generated number for the BroadcastCommAudience record. |
| BroadcastCommunicationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the broadcast communication record.This field is a relationship field.Relationship NameBroadcastCommunicationRelationship TypeLookupRefers ToBroadcastCommunication |
| BroadcastFailureReason | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe reason the broadcast communication failed to send. |
| BroadcastType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionMedium used to distribute the message.Possible values are:AlertEmailExperienceSiteBannerSlack |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| MessageTimeStamp | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionIf BroacastType is Slack, this value is the timestamp when the broadcast Slack message was sent. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| SiteBannerText | TypetextareaPropertiesCreate, NillableDescriptionIf BroadcastType is ExperienceSiteBanner, this field contains the banner text displayed on the associated site. |
| SiteBannerVisibility | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionIf BroadcastType is ExperienceSiteBanner, this field contains information about who can view the banner.Possible values are:AuthenticatedUsersGuestUsers |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the broadcast communication.Possible values are:Active—The site banner is visible on the site. Only applies if BroadcastType is ExperienceSiteBanner.Deleted—The message is successfully deleted and isn’t visible anymore. Only applies if BroadcastType is Slack.DeleteFailed—The message failed to delete but is still visible. Only applies if BroadcastType is Slack.Failed—The message failed to send. Applies to any BroadcastType.Inactive—The site banner isn’t visible on the site. Only applies if BroadcastType is ExperienceSiteBanner.Sent—The message is sent successfully. Only applies if the BroadcastType is Email or Slack.Updated—The message is successfully edited. Only applies if the BroadcastType is Slack.UpdateFailed—The message failed to edit and the update isn’t visible. Only applies if the BroadcastType is Slack. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BroadcastCommAudienceChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[BroadcastCommAudienceFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BroadcastCommAudienceHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BroadcastCommAudienceOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BroadcastCommAudienceShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BroadcastCommAudienceChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- BroadcastCommAudienceFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- BroadcastCommAudienceHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- BroadcastCommAudienceOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- BroadcastCommAudienceShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
