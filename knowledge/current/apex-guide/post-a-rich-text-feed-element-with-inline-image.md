---
title: "Post a Rich-Text Feed Element with Inline Image"
domain: apex-guide
topic: post-a-rich-text-feed-element-with-inline-image
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.389Z
estimatedTokens: 414
keywords: [Post, Rich-Text, Feed, Element, Inline, Image, Call, ConnectApiHelper, repository, already, uploaded]
---

# Post a Rich-Text Feed Element with Inline Image

> Call a method or use the ConnectApiHelper repository to post a feed element with an
    already uploaded, inline image.

# Post a Rich-Text Feed Element with Inline Image

Call a method or use the ConnectApiHelper repository to post a feed element with an already uploaded, inline image.

You can post rich-text feed elements with inline images and mentions two ways. Use the [ConnectApiHelper repository on GitHub](https://github.com/forcedotcom/ConnectApiHelper "HTML (New Window)") to write a single line of code, or use this example, which calls [postFeedElement(communityId, feedElement)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ChatterFeeds_static_methods.htm#apex_ConnectAPI_ChatterFeeds_postFeedElement_3). In this example, the image file is existing content that has already been uploaded to Salesforce as a content document (069). The post also includes text and a mention.

```

```

#### See Also

-   [*Apex Reference Guide*: ConnectApi.MarkupBeginSegmentInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_markup_begin_segment.htm "Apex Reference Guide:
    ConnectApi.MarkupBeginSegmentInput - HTML (New Window)")

-   [*Apex Reference Guide*: ConnectApi.MarkupEndSegmentInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_markup_end_segment.htm "Apex Reference Guide:
    ConnectApi.MarkupEndSegmentInput - HTML (New Window)")

-   [*Apex Reference Guide*: ConnectApi.InlineImageSegmentInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_inline_image_segment.htm "Apex Reference Guide:
    ConnectApi.InlineImageSegmentInput - HTML (New Window)")

## Code Examples

```apex
String communityId = null;
String imageId = '069D00000001INA'; 
String mentionedUserId = '005D0000001QNpr'; 
String targetUserOrGroupOrRecordId  = '005D0000001Gif0';
ConnectApi.FeedItemInput input = new ConnectApi.FeedItemInput();
input.subjectId = targetUserOrGroupOrRecordId;
input.feedElementType = ConnectApi.FeedElementType.FeedItem;

ConnectApi.MessageBodyInput messageInput = new ConnectApi.MessageBodyInput();
ConnectApi.TextSegmentInput textSegment;
ConnectApi.MentionSegmentInput mentionSegment;
ConnectApi.MarkupBeginSegmentInput markupBeginSegment;
ConnectApi.MarkupEndSegmentInput markupEndSegment;
ConnectApi.InlineImageSegmentInput inlineImageSegment;

messageInput.messageSegments = new List<ConnectApi.MessageSegmentInput>();

markupBeginSegment = new ConnectApi.MarkupBeginSegmentInput();
markupBeginSegment.markupType = ConnectApi.MarkupType.Bold;
messageInput.messageSegments.add(markupBeginSegment);

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = 'Hello ';
messageInput.messageSegments.add(textSegment);

mentionSegment = new ConnectApi.MentionSegmentInput();
mentionSegment.id = mentionedUserId;
messageInput.messageSegments.add(mentionSegment);

textSegment = new ConnectApi.TextSegmentInput();
textSegment.text = '!';
messageInput.messageSegments.add(textSegment);

markupEndSegment = new ConnectApi.MarkupEndSegmentInput();
markupEndSegment.markupType = ConnectApi.MarkupType.Bold;
messageInput.messageSegments.add(markupEndSegment);

inlineImageSegment = new ConnectApi.InlineImageSegmentInput();
inlineImageSegment.altText = 'image one';
inlineImageSegment.fileId = imageId;
messageInput.messageSegments.add(inlineImageSegment);

input.body = messageInput;

ConnectApi.ChatterFeeds.postFeedElement(communityId, input);
```
