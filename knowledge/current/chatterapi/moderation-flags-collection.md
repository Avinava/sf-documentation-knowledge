---
title: "Moderation Flags Collection"
domain: chatterapi
topic: moderation-flags-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.743Z
estimatedTokens: 234
keywords: [Moderation, Flags, Collection, feed, item, comment, file]
---

# Moderation Flags Collection

> Collection of flags on a feed item, comment, or file.

# Moderation Flags Collection

Collection of flags on a feed item, comment, or file.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentPageToken | String | Token identifying the current page. | Small, 40.0 | 40.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | Small, 40.0 | 40.0 |
| flags | Moderation Flag Item[] | List of flag details. | Small, 40.0 | 40.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | Small, 40.0 | 40.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 40.0 | 40.0 |
| pageSize | Integer | Number of items per page. | Small, 40.0 | 40.0 |

#### See Also

-   [Moderation Flags](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flags.htm "Moderation flags.")

## Related Topics

- Moderation Flag Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flag_item.htm)
- Moderation Flags (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flags.htm)
