---
title: "Post a Comment"
domain: apex-guide
topic: post-a-comment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.348Z
estimatedTokens: 90
keywords: [Post, Comment, Call]
---

# Post a Comment

> Call a method to post a comment.

# Post a Comment

Call a method to post a comment.

Call [postCommentToFeedElement(communityId, feedElementId, text)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postCommentToFeedElement_1) to post a plain text comment to a feed element.

```

```

## Code Examples

```
ConnectApi.Comment comment = ConnectApi.ChatterFeeds.postCommentToFeedElement(null, '0D5D0000000KuGh', 'I agree with the proposal.' );
```
