---
title: "Message Segment: Field Change Value"
domain: chatterapi
topic: message-segment-field-change-value
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.761Z
estimatedTokens: 251
keywords: [Message, Segment, Change, inline, Making, separate, possible, add, special, coding, wrap, anchor, tags]
---

# Message Segment: Field Change Value

> Represents an inline value of a field change. Making this a separate segment makes it
  possible to add special coding, for example, to wrap values in anchor tags.

# Message Segment: Field Change Value

Represents an inline value of a field change. Making this a separate segment makes it possible to add special coding, for example, to wrap values in anchor tags.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| valueType | String | The value type. One of these values:NewValue—The new value of the field change.OldValue—The old value of the field change. | Big, 29.0 | 29.0 |
| text | String | Formatted text of the change. Possible values include:the words a blank valueNoteThis text is also localized.the old value of the fieldthe new value of the field | Small, 29.0 | 23.0 |
| type | String | Value is FieldChangeValue | Small, 29.0 | 23.0 |
| url | String | URL value if the field change is to a URL field (such as a web address) | Small, 29.0 | 23.0 |

#### See Also

-   [Feed Item Body](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm "Chatter feed item body.")

## Related Topics

- Feed Item Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm)
