---
title: "ConnectApi.InlineImageSegmentInput"
domain: apex-reference
topic: connectapiinlineimagesegmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.252Z
estimatedTokens: 254
keywords: [ConnectApi.InlineImageSegmentInput, inline, image, segment]
---

# ConnectApi.InlineImageSegmentInput

> An inline image segment.

# ConnectApi.InlineImageSegmentInput

An inline image segment.

Subclass of [ConnectApi.MessageSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_messageSegmentInput.htm "Used to add rich message segments to feed items and comments.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| altText | String | Alt text for the inline image. | OptionalIf not specified, the title of the inline image file is used as the alt text. | 35.0 |
| fileId | String | ID of the inline image file. | Required | 35.0 |

#### See Also

-   [Post a Rich-Text Feed Element with Inline Image](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_richtext_inlineimage.htm "Post a Rich-Text Feed Element with Inline Image - HTML (New Window)")

-   [ConnectApi.MessageBodyInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm "Add rich messages to feed items and comments.")

## Related Topics

- ConnectApi.MessageSegmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_messageSegmentInput.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.MessageBodyInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm)
