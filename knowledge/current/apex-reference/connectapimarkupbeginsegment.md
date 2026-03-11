---
title: "ConnectApi.MarkupBeginSegment"
domain: apex-reference
topic: connectapimarkupbeginsegment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.249Z
keywords: [ConnectApi.MarkupBeginSegment]
---

# ConnectApi.MarkupBeginSegment

# ConnectApi.MarkupBeginSegment

The beginning of rich text markup.

Subclass of [ConnectApi.MessageSegment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_seg.htm "Message segment.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| altText | String | Alternative text for the segment, if available. | 45.0 |
| htmlTag | String | The HTML tag for this markup. | 35.0 |
| markupType | ConnectApi.​MarkupType | Type of rich text markup.Bold—Bold tag.Code—Code tag.Hyperlink—Hyperlink anchor tag.Italic—Italic tag.ListItem—List item tag.OrderedList—Ordered list tag.Paragraph—Paragraph tag.Strikethrough—Strikethrough tag.Underline—Underline tag.UnorderedList—Unordered list tag. | 35.0 |
| url | String | URL to the segment, if available. | 45.0 |