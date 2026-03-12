---
title: "Favorite"
domain: chatterapi
topic: favorite
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.621Z
estimatedTokens: 378
keywords: [Favorite, Chatter]
---

# Favorite

> Chatter favorite.

# Favorite

Chatter favorite.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| community | Reference | Information about the Experience Cloud site. Returns null if the favorite exists in the default community or digital experiences isn’t enabled. | Medium, 29.0 | 26.0 |
| createdBy | User Summary | Information about the original creator of the favorite. | Medium, 29.0 | 24.0 |
| feedUrl | String | URL to the feed item for the favorite. | Small, 29.0 | 24.0 |
| id | String | 18-character ID of the favorite. | Small, 29.0 | 24.0 |
| lastViewDate | String | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z | Medium, 29.0 | 24.0 |
| name | String | Name of the favorite. | Small, 29.0 | 24.0 |
| searchText | String | If the favorite is from a search, contains the search text, if not, contains null. | Medium, 29.0 | 24.0 |
| target | Reference | A reference to the topic if applicable, null otherwise. | Small, 29.0 | 28.0 |
| type | String | One of the following values:ListViewSearchTopic | Small, 29.0 | 24.0 |
| url | String | URL to the favorite. | Small, 29.0 | 24.0 |
| user | User Summary | Information about the user who saved the favorite. | Medium, 29.0 | 24.0 |

#### See Also

-   [Favorites Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_favorites_page.htm "Page of Chatter favorites.")

-   [Feed Directory](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_dir.htm "Feed directory.")

## Related Topics

- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Favorites Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_favorites_page.htm)
- Feed Directory (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_dir.htm)
