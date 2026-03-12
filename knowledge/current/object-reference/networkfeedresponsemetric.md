---
title: "NetworkFeedResponseMetric"
domain: object-reference
topic: networkfeedresponsemetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.232Z
estimatedTokens: 491
keywords: [NetworkFeedResponseMetric, stores, date, time, question, posts, captures, creation, answer, marked, best, API, version, 51.0, later]
---

# NetworkFeedResponseMetric

> Represents an object that stores the date and time values of question posts. It
      captures information for question creation, answer creation, and when an answer is marked as
      best answer This object is available in API version 51.0 and later.

# NetworkFeedResponseMetric

Represents an object that stores the date and time values of question posts. It captures information for question creation, answer creation, and when an answer is marked as best answer This object is available in API version 51.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

The NetworkFeedResponseMetric object is available only if both NetworksEnabled and ChatterEnabled org preferences are enabled.

## Fields

| Field | Details |
| --- | --- |
| BestCommentDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents the date and time a user created an answer that was later marked as best answer. |
| BestCommentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRepresents the comment that was marked as the best answer. |
| FeedItemCreatedById | TypereferencePropertiesFilter, Group, SortDescriptionRepresents the user who created the feed item. |
| FeedItemDateTime | TypedateTimePropertiesFilter, SortDescriptionRepresents the date and time when the feed Item was created. |
| FeedItemId | TypereferencePropertiesFilter, Group, SortDescriptionRepresents the unique ID of the question post. |
| FirstCommentDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents the date and time when the first comment was created. |
| FirstCommentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRepresent the first comment on a feed Item. |
| MarkedAsBestCommentDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionRepresents the date and time the user marked the answer as best answer. |
| NetworkId | TypereferencePropertiesFilter, Group, SortDescriptionRepresents where the feed item was created. |
| ParentRecordId | TypereferencePropertiesFilter, Group, SortDescriptionRepresents the parent record. Parent records can include records like user, account, or group. |
