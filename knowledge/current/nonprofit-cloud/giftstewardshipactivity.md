---
title: "GiftStewardshipActivity"
domain: nonprofit-cloud
topic: giftstewardshipactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.190Z
estimatedTokens: 1175
keywords: [GiftStewardshipActivity, activity, carried, part, gift, stewardship, API, version, 65.0, later, Calls, Associated, Objects]
---

# GiftStewardshipActivity

> Represents an activity carried out as part of gift stewardship. This
      object is available in API version 65.0 and later.

# GiftStewardshipActivity

Represents an activity carried out as part of gift stewardship. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date of the stewardship activity. |
| ActivityDescription | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA description of the stewardship activity. |
| ActivityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of stewardship activity. |
| AssignedToId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the team member responsible for the stewardship activity.This field is a relationship field.Relationship NameAssignedToRefers ToUser |
| GiftStewardshipId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the gift stewardship associated with the activity.This field is a relationship field.Relationship NameGiftStewardshipRefers ToGiftStewardship |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe ID of the gift stewardship activity record. |
| Notes | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionNotes on the stewardship activity and its outcomes. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object. ID of the creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the stewardship activity. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[GiftStewardshipActivityChangeEvent](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[GiftStewardshipActivityFeed](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[GiftStewardshipActivityHistory](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[GiftStewardshipActivityOwnerSharingRule](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[GiftStewardshipActivityShare](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- GiftStewardshipActivityChangeEvent (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_change_event.htm)
- GiftStewardshipActivityFeed (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_feed.htm)
- GiftStewardshipActivityHistory (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_history.htm)
- GiftStewardshipActivityOwnerSharingRule (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_ownersharingrule.htm)
- GiftStewardshipActivityShare (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/npc_associated_objects_share.htm)
