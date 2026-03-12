---
title: "Comment Capabilities"
domain: chatterapi
topic: comment-capabilities
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.746Z
estimatedTokens: 376
keywords: [Comment, Capabilities, container, included]
---

# Comment Capabilities

> A container for all capabilities that can be included with a
   comment.

# Comment Capabilities

A container for all capabilities that can be included with a comment.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| comments | Comments Capability | If a comment has this capability, it has threaded comments. | Small, 44.0 | 44.0 |
| content | Content Capability | Content, such as a file attachment, associated with this comment.Most Content Capability properties are null if the content has been deleted from the feed element or if the access has changed to private. | Small, 32.0 | 32.0 |
| edit | Edit Capability | If a comment has this capability, users who have permission can edit it. | Small, 34.0 | 34.0 |
| feedEntityShare | Feed Entity Share Capability | If a comment has this capability, a feed entity is shared with it. | Small, 42.0 | 42.0 |
| record | Record Capability | If a comment has this capability, it has a record attachment. | Small, 42.0 | 42.0 |
| status | Status Capability | If a comment has this capability, it has a status that determines its visibility. | Small, 38.0 | 38.0 |
| upDownVote | Up Down Vote Capability | If a comment has this capability, users can upvote or downvote it. | Small, 41.0 | 41.0 |
| verified | Verified Capability | If a comment has this capability, users with permission can mark it as verified or unverified. | Small, 41.0 | 41.0 |

#### See Also

-   [Comment](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm "A comment.")

## Related Topics

- Comments Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comments_capability.htm)
- Content Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_capability.htm)
- Edit Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_edit_capability.htm)
- Feed Entity Share Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_entity_share_capability.htm)
- Record Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_capability.htm)
- Status Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_status_capability.htm)
- Up Down Vote Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_up_down_vote_capability.htm)
- Verified Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_verified_capability.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
