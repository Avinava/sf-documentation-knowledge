---
title: "Post a Rich-Text Feed Comment with a Code Block"
domain: apex-guide
topic: post-a-rich-text-feed-comment-with-a-code-block
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.360Z
estimatedTokens: 110
keywords: [Post, Rich-Text, Feed, Comment, Code, Block, Call]
---

# Post a Rich-Text Feed Comment with a Code Block

> Call a method to post a comment with a code block.

# Post a Rich-Text Feed Comment with a Code Block

Call a method to post a comment with a code block.

This example calls [postCommentToFeedElement(communityId, feedElementId, comment, feedElementFileUpload)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postCommentToFeedElement_2) to post a comment with a code block.

```

```

## Code Examples

```apex
String communityId = null;
String feedElementId = '0D5R0000000SBEr';
String codeSnippet = '<html>
\t<body>
\t\tHello, world!
\t</body>
</html>';

ConnectApi.CommentInput input = new ConnectApi.CommentInput();
ConnectApi.MessageBodyInput messageInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegment;
ConnectApi.MarkupBeginSegmentInput markupBeginSegment;
ConnectApi.MarkupEndSegmentInput markupEndSegment;

messageInput.messageSegments = new List<ConnectApi.MessageSegmentInput>();

markupBeginSegment = new ConnectApi.MarkupBeginSegmentInput();
markupBeginSegment.markupType = ConnectApi.MarkupType.Code;
messageInput.messageSegments.add(markupBeginSegment);

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = codeSnippet;
messageInput.messageSegments.add(textSegment);

markupEndSegment = new ConnectApi.MarkupEndSegmentInput();
markupEndSegment.markupType = ConnectApi.MarkupType.Code;
messageInput.messageSegments.add(markupEndSegment);

input.body = messageInput;

ConnectApi.ChatterFeeds.postCommentToFeedElement(communityId, feedElementId, input, null);
```
