---
title: "Up Down Vote Capability"
domain: chatterapi
topic: up-down-vote-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.409Z
estimatedTokens: 214
keywords: [Down, Vote, Capability, feed, post, comment, users, upvote, downvote]
---

# Up Down Vote Capability

> If a feed post or comment has this capability, users can upvote or downvote
    it.

# Up Down Vote Capability

If a feed post or comment has this capability, users can upvote or downvote it.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| downVoteCount | Long | Number of downvotes. | Small, 41.0 | 41.0 |
| myVote | String | Specifies the context user’s vote. Values are:DownNoneUp | Small, 41.0 | 41.0 |
| upVoteCount | Long | Number of upvotes. | Small, 41.0 | 41.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

-   [Comment Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_capabilities.htm "A container for all capabilities that can be included with a comment.")

## Related Topics

- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
- Comment Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_capabilities.htm)
