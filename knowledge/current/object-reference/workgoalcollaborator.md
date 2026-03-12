---
title: "WorkGoalCollaborator"
domain: object-reference
topic: workgoalcollaborator
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.647Z
estimatedTokens: 597
keywords: [WorkGoalCollaborator, collaborators, WorkGoal, doesn’t, include, followers, handled, Chatter, Feed, Follow, functionality, deprecated, API, version, 35.0]
---

# WorkGoalCollaborator

> Represents collaborators on a WorkGoal
			object. This doesn’t include WorkGoal
			followers, which is handled by Chatter Feed Follow functionality. This object
			has been deprecated as of API version 35.0. Use the Goal object to query information
			about WDC goals.

# WorkGoalCollaborator

Represents collaborators on a WorkGoal object. This doesn’t include WorkGoal followers, which is handled by Chatter Feed Follow functionality. This object has been deprecated as of API version 35.0. Use the [Goal](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goal.htm#sforce_api_objects_Goal "The Goal object represents the components of a goal such as its name, description, and status.") object to query information about WDC goals.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| InvitationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that a user was invited to become a collaborator (nill if the user was not invited). |
| State | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates the state of the collaborating user. Whether the user has not responded, joined, or declined collaboration. The possible values are:PendingResponse: a user who was invited to collaborate but hasn’t joined or declinedJoined: a user who is collaborating on a goal (joined/commit)Declined: a user who declined to collaborate on a goal |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe collaborating user. |
| WorkGoalId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe WorkGoal object that this collaborator is a part of. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[WorkGoalCollaboratorHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

The original WDC feature is unavailable as of Spring ’22. This object isn’t available as of API version 54.0. For more information, see [Phased WDC (legacy Work.com) Feature Retirement](https://help.salesforce.com/s/articleView?id=000356306&type=1&language=en_US).

## Related Topics

- Goal (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_goal.htm)
- WorkGoalCollaboratorHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
