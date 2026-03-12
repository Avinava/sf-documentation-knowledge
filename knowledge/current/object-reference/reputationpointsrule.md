---
title: "ReputationPointsRule"
domain: object-reference
topic: reputationpointsrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.258Z
estimatedTokens: 489
keywords: [ReputationPointsRule, reputation, point, rules, Experience, Cloud, site, rule, action, members, earn, points, associated, actions, particular]
---

# ReputationPointsRule

> Represents the reputation point rules for an Experience Cloud site. Each rule
					specifies an action that members can earn points from and the points associated
					with those actions in a particular site.
			This object is available in API version 32.0 and later.

# ReputationPointsRule

Represents the reputation point rules for an Experience Cloud site. Each rule specifies an action that members can earn points from and the points associated with those actions in a particular site. This object is available in API version 32.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

This object is available only if digital experiences is enabled in your org. Only users with permissions to create or manage an Experience Cloud site can view the ReputationPointsRule records.

## Fields

| Field Name | Details |
| --- | --- |
| ParentId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the parent Experience Cloud site that the point rule applies to. |
| Points | TypeintPropertiesFilter, Group, SortDescriptionThe reputation points associated with the member action this rule is for. The maximum value this field can contain is 999,999. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe member action associated with this rule, limited to one of these actions:Write a post (FeedItemWriteAPost)Write a comment (FeedItemWriteAComment)Receive a comment (FeedItemReceiveAComment)Like something (FeedItemLikeSomething)Receive a like (FeedItemReceiveALike)Share a post (FeedItemShareAPost)Someone shares your post (FeedItemSomeoneSharesYourPost)Mention someone (FeedItemMentionSomeone)Receive a mention (FeedItemReceiveAMention)Ask a question (FeedItemPostQuestion)Answer a question (FeedItemAnswerAQuestion)Receive an answer (FeedItemReceiveAnAnswer)Mark an answer as best (FeedItemMarkAnswerAsBest)Someone marks your answer as best (FeedItemYourAnswerMarkedBest)Endorse someone for knowledge on a topic (EndorseSomeoneForKnowledgeOnATopic)Someone endorses you for knowledge on a topic (EndorsedForKnowledgeOnATopic)Upload a profile picture (ProfilePhotoUpload) This action is available in API version 45.0 and later. |
