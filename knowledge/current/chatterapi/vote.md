---
title: "Vote"
domain: chatterapi
topic: vote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.530Z
estimatedTokens: 165
keywords: [Vote, upvote, downvote, feed, element, comment]
---

# Vote

> An upvote or downvote on a feed element or comment.

# Vote

An upvote or downvote on a feed element or comment.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| type | String | Type of vote for a feed element or comment.DownUp | Small, 42.0 | 42.0 |
| user | User Summary | User who voted on the feed element or comment. | Small, 42.0 | 42.0 |
| votedItem | Reference | Reference to the feed element or comment that was voted on. | Medium, 42.0 | 42.0 |

#### See Also

-   [Vote Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_vote_collection.htm "A collection of upvotes or downvotes for a feed element or comment.")

## Related Topics

- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Vote Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_vote_collection.htm)
