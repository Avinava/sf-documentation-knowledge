---
title: "Post a Rich-Text Feed Element with a Code Block"
domain: apex-guide
topic: post-a-rich-text-feed-element-with-a-code-block
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.429Z
estimatedTokens: 234
keywords: [Post, Rich-Text, Feed, Element, Code, Block, Call, post, feed, element, code, block.]
---

# Post a Rich-Text Feed Element with a Code Block

> Call a method to post a feed element with a code block.

# Post a Rich-Text Feed Element with a Code Block

Call a method to post a feed element with a code block.

Call [postFeedElement(communityId, feedElement)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_3) to post a feed item with a code block.

```

```

#### See Also

-   [*Apex Reference Guide*: ConnectApi.MarkupBeginSegmentInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_markup_begin_segment.htm "Apex Reference Guide:
    ConnectApi.MarkupBeginSegmentInput - HTML (New Window)")

-   [*Apex Reference Guide*: ConnectApi.MarkupEndSegmentInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_markup_end_segment.htm "Apex Reference Guide:
    ConnectApi.MarkupEndSegmentInput - HTML (New Window)")

## Code Examples

```apex
String communityId = null;
String targetUserOrGroupOrRecordId  = 'me';
String codeSnippet = '<html>
\t<body>
\t\tHello, world!
\t</body>
</html>';
ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();
input.subjectId = targetUserOrGroupOrRecordId;
input.feedElementType = ConnectApi.FeedElementType.FeedItem;

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

ConnectApi.ChatterFeeds.postFeedElement(communityId, input);
```
