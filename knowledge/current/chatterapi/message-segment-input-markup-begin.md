---
title: "Message Segment Input: Markup Begin"
domain: chatterapi
topic: message-segment-input-markup-begin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.095Z
estimatedTokens: 252
keywords: [Message, Segment, Input, Markup, Begin, beginning, tag, rich, text]
---

# Message Segment Input: Markup Begin

> The beginning tag for rich text markup.

# Message Segment Input: Markup Begin

The beginning tag for rich text markup.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| altText | String | Alternative text for the Hyperlink segment. | Optional | 45.0 |
| markupType | String | Type of rich text markup.Bold—Bold tag.Code—Code tag.Hyperlink—Hyperlink anchor tag.Italic—Italic tag.ListItem—List item tag.OrderedList—Ordered list tag.Paragraph—Paragraph tag.Strikethrough—Strikethrough tag.Underline—Underline tag.UnorderedList—Unordered list tag.Markup segments with a markupType of Code can include only text segments. | Required | 35.0 |
| type | String | Value is MarkupBegin. | Required | 35.0 |
| url | String | URL for the Hyperlink segment. Supported hyperlink URLs start with http:// or https://. | Required for Hyperlink | 45.0 |

#### See Also

-   [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.")

## Related Topics

- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
