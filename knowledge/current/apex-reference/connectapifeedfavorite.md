---
title: "ConnectApi.FeedFavorite"
domain: apex-reference
topic: connectapifeedfavorite
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.685Z
keywords: [ConnectApi.FeedFavorite, See]
---

# ConnectApi.FeedFavorite

# ConnectApi.FeedFavorite

Feed favorite.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| community | ConnectApi.​​Reference | Information about the Experience Cloud site that contains the favorite. | 28.0 |
| createdBy | ConnectApi.​User​Summary | Favorite’s creator. | 28.0 |
| feedUrl | String | Connect REST API URL identifying the feed item for this favorite. | 28.0 |
| id | String | Favorite’s 18–character ID. | 28.0 |
| lastViewDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z. | 28.0 |
| name | String | Favorite’s name. | 28.0 |
| searchText | String | If the favorite is from a search, contains the search text, otherwise, an empty string. | 28.0 |
| target | ConnectApi.​​Reference | A reference to the topic if applicable, null otherwise. | 28.0 |
| type | ConnectApi.​FeedFavorite​Type Enum | An empty string or one of the following values:ListViewSearchTopic | 28.0 |
| url | String | Connect REST API URL to this favorite. | 28.0 |
| user | ConnectApi.​User​Summary | Information about the user who saved this favorite. | 28.0 |

#### See Also

-   [ConnectApi.FeedDirectory](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_directory.htm "Directory of feeds and favorites.")
    
-   [ConnectApi.FeedFavorites](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Feed_Favorites.htm "Feed favorites.")