---
title: "ConnectApi.UpDownVoteCapability"
domain: apex-reference
topic: connectapiupdownvotecapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.200Z
estimatedTokens: 252
keywords: [ConnectApi.UpDownVoteCapability, feed, post, comment, capability, users, upvote, downvote, it.]
---

# ConnectApi.UpDownVoteCapability

> If a feed post or comment has this capability, users can upvote or
      downvote it.

# ConnectApi.UpDownVoteCapability

If a feed post or comment has this capability, users can upvote or downvote it.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| downVoteCount | Long | Number of downvotes. | 41.0 |
| myVote | ConnectApi.​UpDownVoteValue | Specifies the context user’s vote. Values are:DownNoneUp | 41.0 |
| upVoteCount | Long | Number of upvotes. | 41.0 |

#### See Also

-   [ConnectApi.CommentCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_capabilities.htm "A set of capabilities on a comment.")

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- Long (atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm)
- ConnectApi.​UpDownVoteValue (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.CommentCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_capabilities.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
