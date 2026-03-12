---
title: "FeedPollChoice"
domain: object-reference
topic: feedpollchoice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.088Z
estimatedTokens: 303
keywords: [FeedPollChoice, choices, poll, posted, feed, API, version, 29.0, later, Calls, Special, Access, Rules, Usage]
---

# FeedPollChoice

> Shows the choices for a poll posted in the
        feed. This object is available in API version 29.0 and later.

# FeedPollChoice

Shows the choices for a poll posted in the feed. This object is available in API version 29.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

To delete feed items they didn’t create, users must have one of these permissions:

-   Modify All Data
-   Modify All Records on the parent object, for example on Account for a poll on an AccountFeed
-   Moderate Chatter

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

    #### Note

    Users with the Moderate Chatter permission can delete only the feed items and comments they can see.

    Only users with this permission can delete items in unlisted groups.


## Fields

| Field Name | Details |
| --- | --- |
| ChoiceBody | TypetextareaPropertiesGroupDescriptionA choice in the poll. |
| FeedItemId | TypereferencePropertiesFilter, Group, SortDescriptionID of the feed item for the poll. |
| Position | TypeintPropertiesGroup, SortDescriptionShows the position of the poll choice. |

## Usage

Use this object to query all of the choices associated with a particular poll. To view how people voted on the poll, see the FeedPollVote object.
