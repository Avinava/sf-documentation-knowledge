---
title: "ConnectApi.CommentCapabilities"
domain: apex-reference
topic: connectapicommentcapabilities
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.337Z
keywords: [ConnectApi.CommentCapabilities, See]
---

# ConnectApi.CommentCapabilities

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