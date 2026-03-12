---
title: "Conversation Summary Collection"
domain: chatterapi
topic: conversation-summary-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.073Z
estimatedTokens: 176
keywords: [Conversation, Summary, Collection]
---

# Conversation Summary Collection

> Conversation summary collection.

# Conversation Summary Collection

Conversation summary collection.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| conversations | Conversation Summary[] | Collection of zero or more conversations. | Small, 29.0 | 23.0 |
| currentPageToken | String | Token identifying the current page. | Medium, 37.0 | 37.0 |
| currentPageUrl | String | URL to the current page of conversations. | Medium, 29.0 | 23.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | Small, 37.0 | 37.0 |
| nextPageUrl | String | URL to the next page of messages, that is, older conversations. | Small, 29.0 | 23.0 |

## Related Topics

- Conversation Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_summary.htm)
