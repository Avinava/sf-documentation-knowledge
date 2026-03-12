---
title: "Message Segment: Markup Begin"
domain: chatterapi
topic: message-segment-markup-begin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.673Z
estimatedTokens: 282
keywords: [Message, Segment, Markup, Begin, Beginning, rich, text]
---

# Message Segment: Markup Begin

> Beginning of rich text markup.

# Message Segment: Markup Begin

Beginning of rich text markup.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| altText | String | Alternative text for the segment, if available. | Small, 45.0 | 45.0 |
| htmlTag | String | The HTML tag for this markup. | Small, 35.0 | 35.0 |
| markupType | String | Type of rich text markup.Bold—Bold tag.Code—Code tag.Hyperlink—Hyperlink anchor tag.Italic—Italic tag.ListItem—List item tag.OrderedList—Ordered list tag.Paragraph—Paragraph tag.Strikethrough—Strikethrough tag.Underline—Underline tag.UnorderedList—Unordered list tag.To handle markupType values introduced in later API versions, clients can render the text value as a fallback. | Small, 35.0 | 35.0 |
| text | String | Empty string, "", for segments of this type. | Small, 35.0 | 35.0 |
| type | String | MarkupBegin | Small, 35.0 | 35.0 |
| url | String | URL to the segment, if available. | Small, 45.0 | 45.0 |

#### See Also

-   [Feed Item Body](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm "Chatter feed item body.")

## Related Topics

- Feed Item Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm)
