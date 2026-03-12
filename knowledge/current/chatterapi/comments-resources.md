---
title: "Comments Resources"
domain: chatterapi
topic: comments-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:13.866Z
estimatedTokens: 373
keywords: [Comments, Resources, edit, upvote, verify, comment, Determine, whether, context, user]
---

# Comments Resources

> Get information about, edit, like, upvote, verify, or delete a
                        comment. Determine whether the context user can edit a
                comment.

# Comments Resources

Get information about, edit, like, upvote, verify, or delete a comment. Determine whether the context user can edit a comment.

Available resources:

| Resource | Description |
| --- | --- |
| /chatter/comments/commentId | Get information about, edit, or delete a comment. |
| /chatter/comments/batch/commentIds | Get information about a comma-separated list of up to 100 comments. |
| /chatter/comments/commentId/capabilities​/comments | Access the comments capability for a comment. |
| /chatter/comments/commentId/capabilities​/comments/items | Get threaded comments for a comment. |
| /chatter/comments/commentId/capabilities​/edit/is-editable-by-me | Determines whether the context user can edit a comment. |
| /chatter/comments/commentId/capabilities​/status | Access the status capability of a comment or set the status of a comment. |
| /chatter/comments/commentId/capabilities​/up-down-vote | Get the upvotes and downvotes for a comment. Upvote or downvote a comment. |
| /chatter/comments/commentId/capabilities​/up-down-vote/items | Get a list of users who upvoted or downvoted a comment. |
| /chatter/comments/commentId/capabilities​/verified | Get the verified status of a comment. Mark a comment as verified or unverified. |
| /chatter/comments/commentId/likes | Get information about the likes for a comment. Like or unlike a comment. |
| /chatter/comments/commentId/thread-context | Get a threaded comment in context of its parent comments and post. |

## Related Topics

- /chatter/comments/commentId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_specific.htm)
- /chatter/comments/batch/commentIds (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_batch.htm)
- /chatter/comments/commentId/capabilities​/comments (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_capability_comments.htm)
- /chatter/comments/commentId/capabilities​/comments/items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_capability_comments_items.htm)
- /chatter/comments/commentId/capabilities​/edit/is-editable-by-me (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_capability_editability.htm)
- /chatter/comments/commentId/capabilities​/status (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_capability_status.htm)
- /chatter/comments/commentId/capabilities​/up-down-vote (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_capability_up_down_vote.htm)
- /chatter/comments/commentId/capabilities​/up-down-vote/items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_capability_up_down_vote_items.htm)
- /chatter/comments/commentId/capabilities​/verified (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_capability_verified.htm)
- /chatter/comments/commentId/likes (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments_likes.htm)
