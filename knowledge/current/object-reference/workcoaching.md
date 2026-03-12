---
title: "WorkCoaching"
domain: object-reference
topic: workcoaching
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.571Z
estimatedTokens: 948
keywords: [WorkCoaching, coaching, relationship, two, users, defined, coach, coachee, feed-enabled, there, feed, Calls, Associated, Objects]
---

# WorkCoaching

> Represents a single coaching relationship between two users. One of
			the users is defined as the coach and the other is defined as a coachee. WorkCoaching is feed-enabled so there is
			a private feed available to the coach and coachee.

# WorkCoaching

Represents a single coaching relationship between two users. One of the users is defined as the coach and the other is defined as a coachee. WorkCoaching is feed-enabled so there is a private feed available to the coach and coachee.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| CoachId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescription[Required] The coach in this 1:1 coaching relationship. |
| CoachedId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescription[Required] The user being coached in this 1:1 coaching relationship. |
| IsInactive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the coaching relationship is Inactive (true) or not (false). |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed a record that is related to this coaching relationship. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe time stamp that indicates when the current user last viewed this coaching relationship. If this value is null, this record might have been only referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescription[Required] The record’s name. Max length is 255 characters. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the contact who owns the WorkCoaching record. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkCoachingFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[WorkCoachingHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[WorkCoachingOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

[WorkCoachingShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- WorkCoachingFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- WorkCoachingHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- WorkCoachingOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- WorkCoachingShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
