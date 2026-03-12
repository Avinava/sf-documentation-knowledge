---
title: "Post a Comment with a New File"
domain: apex-guide
topic: post-a-comment-with-a-new-file
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.352Z
estimatedTokens: 132
keywords: [Post, Comment, New, File, Call]
---

# Post a Comment with a New File

> Call a method to post a comment with a new file.

# Post a Comment with a New File

Call a method to post a comment with a new file.

To post a comment and upload and attach a new file to the comment, create a ConnectApi.CommentInput object and a ConnectApi.BinaryInput object to pass to the [postCommentToFeedElement(communityId, feedElementId, comment, feedElementFileUpload)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postCommentToFeedElement_2) method.

```

```

## Code Examples

```apex
String feedElementId = '0D5D0000000KtW3';

ConnectApi.CommentInput commentInput = new ConnectApi.CommentInput();

ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegmentInput = new ConnectApi.TextSegmentInput();

textSegmentInput.text = 'Enjoy this new file.';

messageBodyInput.messageSegments = new List<ConnectApi.MessageSegmentInput>();
messageBodyInput.messageSegments.add(textSegmentInput);
commentInput.body = messageBodyInput;

ConnectApi.CommentCapabilitiesInput commentCapabilitiesInput = new ConnectApi.CommentCapabilitiesInput();
ConnectApi.ContentCapabilityInput contentCapabilityInput = new ConnectApi.ContentCapabilityInput();

commentCapabilitiesInput.content = contentCapabilityInput;
contentCapabilityInput.title = 'Title';

commentInput.capabilities = commentCapabilitiesInput;

String text = 'These are the contents of the new file.';
Blob myBlob = Blob.valueOf(text);
ConnectApi.BinaryInput binInput = new ConnectApi.BinaryInput(myBlob, 'text/plain', 'fileName');

ConnectApi.Comment commentRep = ConnectApi.ChatterFeeds.postCommentToFeedElement(Network.getNetworkId(), feedElementId, commentInput, binInput);
```
