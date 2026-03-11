---
title: "Post a Rich-Text Feed Element with Inline Image"
domain: apex-guide
topic: post-a-rich-text-feed-element-with-inline-image
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.899Z
keywords: [Post, Rich-Text, Feed, Element, Inline, Image, See]
---

# Post a Rich-Text Feed Element with Inline Image

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