---
title: "Post a Comment with a Mention"
domain: apex-guide
topic: post-a-comment-with-a-mention
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.350Z
estimatedTokens: 156
keywords: [Post, Comment, Mention, call, ConnectApiHelper, repository]
---

# Post a Comment with a Mention

> Make call or use the ConnectApiHelper repository to post a comment with a
    mention.

# Post a Comment with a Mention

Make call or use the ConnectApiHelper repository to post a comment with a mention.

You can post comments with mentions two ways. Use the [ConnectApiHelper repository on GitHub](https://github.com/forcedotcom/ConnectApiHelper "HTML (New Window)") to write a single line of code, or use this example, which calls [postCommentToFeedElement(communityId, feedElementId, comment, feedElementFileUpload)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postCommentToFeedElement_2).

```

```

## Code Examples

```apex
String communityId = null;
String feedElementId = '0D5D0000000KtW3';

ConnectApi.CommentInput commentInput = new ConnectApi.CommentInput();
ConnectApi.MentionSegmentInput mentionSegmentInput = new ConnectApi.MentionSegmentInput();
ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();

messageBodyInput.messageSegments = new List<ConnectApi.MessageSegmentInput>();

textSegmentInput.text = 'Does anyone in this group have an idea? ';
messageBodyInput.messageSegments.add(textSegmentInput);

mentionSegmentInput.id = '005D00000000oOT';
messageBodyInput.messageSegments.add(mentionSegmentInput);

commentInput.body = messageBodyInput;

ConnectApi.Comment commentRep = ConnectApi.ChatterFeeds.postCommentToFeedElement(communityId, feedElementId, commentInput, null);
```
