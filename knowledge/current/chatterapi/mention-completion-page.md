---
title: "Mention Completion Page"
domain: chatterapi
topic: mention-completion-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.700Z
estimatedTokens: 172
keywords: [Mention, Completion, Paginated, bodies]
---

# Mention Completion Page

> Paginated list of Mention Completion response bodies.

# Mention Completion Page

Paginated list of Mention Completion response bodies.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageUrl | String | URL of the current page | Medium, 29.0 | 29.0 |
| mention​Completions | Mention Completion[] | Collection of Mention Completion response bodies to use in a mention. | Small, 29.0 | 29.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 29.0 | 29.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | Medium, 29.0 | 29.0 |

## Related Topics

- Mention Completion (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mention_completion.htm)
