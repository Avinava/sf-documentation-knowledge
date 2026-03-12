---
title: "ConnectApi.MarkupEndSegmentInput"
domain: apex-reference
topic: connectapimarkupendsegmentinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.375Z
estimatedTokens: 283
keywords: [ConnectApi.MarkupEndSegmentInput, end, tag, rich, text, markup]
---

# ConnectApi.MarkupEndSegmentInput

> The end tag for rich text markup.

# ConnectApi.MarkupEndSegmentInput

The end tag for rich text markup.

Subclass of [ConnectApi.MessageSegmentInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_messageSegmentInput.htm "Used to add rich message segments to feed items and comments.")

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| markupType | ConnectApi.​MarkupType | Type of rich text markup.Bold—Bold tag.Code—Code tag.Hyperlink—Hyperlink anchor tag.Italic—Italic tag.ListItem—List item tag.OrderedList—Ordered list tag.Paragraph—Paragraph tag.Strikethrough—Strikethrough tag.Underline—Underline tag.UnorderedList—Unordered list tag. | Required | 35.0 |

#### See Also

-   [Post a Rich-Text Feed Element with Inline Image](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_richtext_inlineimage.htm "Post a Rich-Text Feed Element with Inline Image - HTML (New Window)")

-   [ConnectApi.MessageBodyInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm "Add rich messages to feed items and comments.")

## Related Topics

- ConnectApi.MessageSegmentInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_messageSegmentInput.htm)
- ConnectApi.​MarkupType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.MessageBodyInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm)
