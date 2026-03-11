---
title: "ConnectApi.UpDownVoteCapability"
domain: apex-reference
topic: connectapiupdownvotecapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.148Z
keywords: [ConnectApi.UpDownVoteCapability, See]
---

# ConnectApi.UpDownVoteCapability

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