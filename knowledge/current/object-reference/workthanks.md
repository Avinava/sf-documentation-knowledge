---
title: "WorkThanks"
domain: object-reference
topic: workthanks
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:19.864Z
estimatedTokens: 770
keywords: [WorkThanks, source, message, thanks, post, Calls, Additional, Considerations, Objects, Associated]
---

# WorkThanks

> Represents the source and message of a thanks post.

# WorkThanks

Represents the source and message of a thanks post.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Additional Considerations and Related Objects

WorkBadge is a lookup to WorkThanks. Each WorkBadge record must derive a SourceId from WorkThanks.

## Fields

| Field Name | Details |
| --- | --- |
| FeedItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the FeedItem related to the thanks badge.This is a relationship field.Relationship NameFeedItemRelationship TypeLookupRefers ToFeedItem |
| GiverId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSalesforce user ID for the giver of the Thanks record.This is a relationship field.Relationship NameGiverRelationship TypeLookupRefers ToUser |
| Message | TypetextareaPropertiesCreateDescriptionRequired. Message associated with the Thanks record. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the community that this WorkThanks is associated with. This field is available only if digital experiences is enabled in your org. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSalesforce user ID for the owner of the badge record (typically the same user as the giver of the record).This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkThanksChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[WorkThanksOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[WorkThanksShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkThanksChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- WorkThanksOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkThanksShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
