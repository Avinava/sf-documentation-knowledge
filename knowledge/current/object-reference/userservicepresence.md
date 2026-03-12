---
title: "UserServicePresence"
domain: object-reference
topic: userservicepresence
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.008Z
estimatedTokens: 1374
keywords: [UserServicePresence, presence, user’s, real-time, status, API, version, 32.0, later, Calls, Special, Access, Rules, Usage, Associated]
---

# UserServicePresence

> Represents a presence user’s real-time presence status. This
		object is available in API version 32.0 and later.

# UserServicePresence

Represents a presence user’s real-time presence status. This object is available in API version 32.0 and later.

## Supported Calls

delete(), query(), getDeleted(), getUpdated(), retrieve(), undelete()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AtCapacityDuration | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe duration that the user is at full capacity. This field is updated when the agent’s capacity changes, such as when the agent is assigned, declines, or closes a work item. Available in API versions 34.0 and later. |
| AverageCapacity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe user’s average capacity. This field is updated when the agent’s capacity changes, such as when the agent is assigned, declines, or closes a work item. Available in API versions 34.0 and later. |
| ConfiguredCapacity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe user’s total configured primary capacity. |
| ConfiguredInterruptCapacity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe user’s total configured interruptible capacity. Available in version 57.0 and later when the Interruptible Capacity feature is enabled. |
|  |  |
| IdleDuration | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe duration that the user is idle. This field is updated when the agent’s capacity changes, such as when the agent is assigned, declines, or closes a work item. Available in API versions 34.0 and later. |
| IsAway | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the user’s status is Away.The default value is false. |
| IsCurrentState | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether a presence status is the user’s current state. If true, the agent is in that presence status. Available in API versions 34.0 and later.The default value is false. |
| Name | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn automatically generated ID number that identifies the record. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the owner of the UserServicePresence entity. For external routing, allows the entity to be used in the Streaming API to listen to events whenever a UserServicePresence record is created, modified, or deleted. |
| ServicePresenceStatusId | TypereferencePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe ID of the presence status that’s associated with the presence user that’s specified by the UserId. |
| StatusDuration | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe duration of the user service presence status. This field is set only when the current user service presence status ends, such as when the agent changes to another presence status or logs out. Available in API versions 34.0 and later.This field is a calculated field: StatusEndDate - StatusStartDate. |
| StatusEndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe end date of the user service presence status. This field is set only when the current user service presence status ends, such as when the agent changes to another presence status or logs out. Available in API versions 34.0 and later. |
| StatusStartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe start date of the user service presence status. Available in API versions 34.0 and later. |
| UserId | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the Omni-Channel user. |

## Usage

Apex triggers aren’t supported with UserServicePresence.

In API version 41.0 or later, UserServicePresence records can be deleted programmatically. The Customize Application permission is required.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[UserServicePresenceChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[UserServicePresenceOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[UserServicePresenceShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- UserServicePresenceChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- UserServicePresenceOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- UserServicePresenceShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
