---
title: "Message Collection"
domain: chatterapi
topic: message-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.709Z
estimatedTokens: 207
keywords: [Message, Collection, messages]
---

# Message Collection

> Collection of messages.

# Message Collection

Collection of messages.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageToken | String | Token identifying the current page. | Medium, 37.0 | 37.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | Medium, 29.0 | 23.0 |
| messages | Message[] | Collection of one or more messages. | Small, 29.0 | 23.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | Small, 37.0 | 37.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 29.0 | 23.0 |

#### See Also

-   [Conversation Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_detail.htm "Conversation detail.")

## Related Topics

- Message (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message.htm)
- Conversation Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_detail.htm)
