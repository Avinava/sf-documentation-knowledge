---
title: "TopicUserEvent"
domain: object-reference
topic: topicuserevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.264Z
estimatedTokens: 300
keywords: [TopicUserEvent, action, comment, post, share, made, user, topic, API, version, 42.0, later, Calls, Special, Access]
---

# TopicUserEvent

> Represents an action (such as comment, post, like, or share) made by a
   user on a topic. This object is available in API version 42.0 and later.

# TopicUserEvent

Represents an action (such as comment, post, like, or share) made by a user on a topic. This object is available in API version 42.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

Only users with the Modify All Data permission can view and delete these data.

## Fields

| Field | Details |
| --- | --- |
| ActionEnum | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe action taken by a user on a topic. The possible values are:LIKECOMMENTPOSTASSIGNSHAREFAVORITEUNFAVORITEAT_MENTIONBANG_MENTIONCOMMENT_LIKEUSER_ENDORSEMENTSKILL_PEER_ENDORSEMENTSKILL_SELF_ENDORSEMENTBEST_ANSWER |
| NetworkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the Experience Cloud site where the action was performed. |
| TopicId | TypereferencePropertiesFilter, Group, SortDescriptionIdentifier of the topic. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionUnique Salesforce user ID. |

## Usage

Use the TopicUserEvent object to delete topic-related activities by Experience Cloud site users who would like all their topic-related activities to be removed from a site.
