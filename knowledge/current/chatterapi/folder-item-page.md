---
title: "Folder Item Page"
domain: chatterapi
topic: folder-item-page
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.971Z
estimatedTokens: 161
keywords: [Folder, Item, paged, collection, bodies]
---

# Folder Item Page

> A paged collection of Folder Item response bodies.

# Folder Item Page

A paged collection of Folder Item response bodies.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageUrl | String | Connect REST API URL identifying the current page. | Medium, 30.0 | 30.0 |
| items | Folder Item[] | A collection of folder items. | Small, 30.0 | 30.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 30.0 | 30.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | Medium, 30.0 | 30.0 |

## Related Topics

- Folder Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder_item.htm)
