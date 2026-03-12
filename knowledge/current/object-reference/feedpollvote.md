---
title: "FeedPollVote"
domain: object-reference
topic: feedpollvote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.091Z
estimatedTokens: 160
keywords: [FeedPollVote, how, users, voted, poll, posted, feed, API, version, 29.0, later, Calls, Usage]
---

# FeedPollVote

> Shows how users voted on a poll posted in the
                feed. This object is available in API version 29.0 and later.

# FeedPollVote

Shows how users voted on a poll posted in the feed. This object is available in API version 29.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| ChoiceId | TypereferencePropertiesFilter, GroupDescriptionIndicates which choice a user selected on a poll posted in a feed.This is a relationship field.Relationship NameChoiceRelationship TypeLookupRefers ToFeedPollChoice |
| FeedItemId | TypereferencePropertiesFilter, Group, SortDescriptionID of the feed item for the poll. |

## Usage

Use this object to query how users voted on a particular poll.
