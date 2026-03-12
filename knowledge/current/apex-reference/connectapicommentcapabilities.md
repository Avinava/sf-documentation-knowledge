---
title: "ConnectApi.CommentCapabilities"
domain: apex-reference
topic: connectapicommentcapabilities
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.782Z
estimatedTokens: 356
keywords: [ConnectApi.CommentCapabilities, capabilities, comment]
---

# ConnectApi.CommentCapabilities

> A set of capabilities on a comment.

# ConnectApi.CommentCapabilities

A set of capabilities on a comment.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| comments | ConnectApi.CommentsCapability | If a comment has this capability, it has threaded comments. | 44.0 |
| content | ConnectApi.ContentCapability | If a comment has this capability, it has a file attachment.Most ConnectApi.ContentCapability properties are null if the content has been deleted from the feed element or if the access has changed to private. | 32.0 |
| edit | ConnectApi.EditCapability | If a comment has this capability, users who have permission can edit it. | 34.0 |
| feedEntityShare | ConnectApi.FeedEntityShareCapability | If a comment has this capability, a feed entity is shared with it. | 42.0 |
| record | ConnectApi.RecordCapability | If a comment has this capability, it has a record attachment. | 42.0 |
| status | ConnectApi.StatusCapability | If a comment has this capability, it has a status that determines its visibility. | 38.0 |
| upDownVote | ConnectApi.UpDownVoteCapability | If a comment has this capability, users can upvote or downvote it. | 41.0 |
| verified | ConnectApi.VerifiedCapability | If a comment has this capability, users with permission can mark it as verified or unverified. | 41.0 |

#### See Also

-   [ConnectApi.Comment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm "A comment.")

## Related Topics

- ConnectApi.CommentsCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comments_capability.htm)
- ConnectApi.ContentCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_capability.htm)
- ConnectApi.EditCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_edit_capability.htm)
- ConnectApi.FeedEntityShareCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_entity_share_capability.htm)
- ConnectApi.RecordCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_record_capability.htm)
- ConnectApi.StatusCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_status_capability.htm)
- ConnectApi.UpDownVoteCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_up_down_vote_capability.htm)
- ConnectApi.VerifiedCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_verified_capability.htm)
- ConnectApi.Comment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment.htm)
