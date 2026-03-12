---
title: "Message Segment Input: Text"
domain: chatterapi
topic: message-segment-input-text
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.134Z
estimatedTokens: 263
keywords: [Message, Segment, Input, Text, Plain, inline, looks, link, surrounded, space, converted, prefixed, hash, square, brackets]
---

# Message Segment Input: Text

> Plain inline text input. Text that looks like a link and is surrounded by space is
    converted into a link segment. Text prefixed with a hash and surrounded by square brackets ([])
    is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and
    higher.

# Message Segment Input: Text

Plain inline text input. Text that looks like a link and is surrounded by space is converted into a link segment. Text prefixed with a hash and surrounded by square brackets (\[\]) is converted into a hash tag segment. Multiple word hash tags are available in version 28.0 and higher.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| text | String | Plain text for this segment. | 23.0 |
| type | String | Only value is Text. | 23.0 |

#### See Also

-   [Edit a Comment](atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_comment.htm "Edit a comment in Chatter.")

-   [Edit a Feed Post](atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_feed_post.htm "Edit a feed post in Chatter.")

-   [Edit a Question Title and Post](atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_question_title_and_post.htm "Edit a question title and post.")

-   [Message Body Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm "Message body input.")

## Related Topics

- Edit a Comment (atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_comment.htm)
- Edit a Feed Post (atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_feed_post.htm)
- Edit a Question Title and Post (atlas.en-us.chatterapi.meta/chatterapi/quickreference_edit_question_title_and_post.htm)
- Message Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_message_body_input.htm)
