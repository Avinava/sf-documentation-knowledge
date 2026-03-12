---
title: "feedSignal"
domain: object-reference
topic: feedsignal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.116Z
estimatedTokens: 283
keywords: [feedSignal, Attach, feed, signals, UpDownVote, UserVerified, Verified, post, comment, API, version, 41.0, later, Calls]
---

# feedSignal

> Attach feed signals, like UpDownVote,
        UserVerified, and Verified, to a feed post or
      comment. This object is available in API version 41.0 and later.

# feedSignal

Attach feed signals, like UpDownVote, UserVerified, and Verified, to a feed post or comment. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeSObjects()

## Fields

| Field | Details |
| --- | --- |
| FeedEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the Feed entity. |
| FeedItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the feed post or comment.Possible values are:FeedItemFeedComment |
| InsertedById | TypereferencePropertiesFilter, Group, SortDescriptionID of user who inserted the signal.This is a relationship field.Relationship NameInsertedByRelationship TypeLookupRefers ToUser |
| SignalType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of signal.Possible values are:UpDownVoteUserVerifiedVerified |
| SignalValue | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe value of the signal. For example, for UpDownVote, the value specifies whether the signal is an upvote or a downvote. |
