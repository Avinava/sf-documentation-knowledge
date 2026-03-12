---
title: "WorkBadge"
domain: object-reference
topic: workbadge
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:19.516Z
estimatedTokens: 926
keywords: [WorkBadge, badge, record, created, recipient, WorkBadgeDefinition, Calls, Additional, Considerations, Objects, Associated]
---

# WorkBadge

> Represents information about who the badge was given to and which badge
   was given. A WorkBadge record is created for each
   recipient of a WorkBadgeDefinition.

# WorkBadge

Represents information about who the badge was given to and which badge was given. A WorkBadge record is created for each recipient of a WorkBadgeDefinition.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Additional Considerations and Related Objects

WorkBadge is a lookup to WorkThanks. Each WorkBadge record must derive a SourceId from WorkThanks. There can be multiple WorkBadge records tied to a single WorkThanks record.

## Fields

| Field Name | Details |
| --- | --- |
| DefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. Salesforce unique ID for the given WorkBadgeDefinition record given.This is a relationship field.Relationship NameDefinitionRelationship TypeLookupRefers ToWorkBadgeDefinition |
| Description | TypetextareaPropertiesNillableDescriptionThe description of the WorkBadgeDefinition. |
| GiverId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the badge giver. Can’t be the same as RecipientId.This is a relationship field.Relationship NameGiverRelationship TypeLookupRefers ToUser |
| ImageUrl | TypeurlPropertiesFilter, Group, Nillable, SortDescriptionThe URL of the badge image. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed a record that is related to this WorkBadge. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed this WorkBadge. If this value is null, this record might have been only referenced (LastReferencedDate) and not viewed. |
| Message | TypetextareaPropertiesNillableDescriptionThe message accompanying the thanks badge. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the community that this WorkBadge is associated with. This field is available only if digital experiences is enabled in your org. |
| RecipientId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. Salesforce unique ID for User who is the Recipient of Badge. Can’t be the same as GiverIdThis is a relationship field.Relationship NameRecipientRelationship TypeLookupRefers ToUser |
| RewardId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSalesforce unique ID for Reward given with badge (if Reward Badge) |
| SourceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionSalesforce unique ID for Thanks record referenced to this badge.This is a relationship field.Relationship NameSourceRelationship TypeLookupRefers ToWorkThanks |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[WorkBadgeChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- community (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_network.htm)
- WorkBadgeChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
