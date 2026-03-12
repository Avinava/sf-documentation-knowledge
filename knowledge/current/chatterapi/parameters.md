---
title: "Parameters"
domain: chatterapi
topic: parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:20.208Z
estimatedTokens: 384
keywords: [Search, query]
---

# Parameters

> Search query parameters.

# Parameters

Search query parameters.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| q | String | Query terms for search. | Small, 63.0 | 63.0 |
| configurationName | String | The search configuration name. | Small, 63.0 | 63.0 |
| dataCategories | Search Data Category[] | The Data Category values. | Small, 63.0 | 63.0 |
| displayFields | String[] | Display fields for the object. | Small, 63.0 | 63.0 |
| filters | Filter[] | Filters for the search. | Small, 63.0 | 63.0 |
| highlights | Boolean | Specifies whether search generates a text highlight (true) or not (false). The default is false. | Small, 63.0 | 63.0 |
| offset | Integer | Search page offset position. | Small, 63.0 | 63.0 |
| orderBy | Order By[] | Order by list for the results. | Small, 63.0 | 63.0 |
| pageSize | Integer | Number of results per page. | Small, 63.0 | 63.0 |
| spellcheck | Boolean | Specifies whether search applies spellcheck (true) or not (false). The default is true. | Small, 63.0 | 63.0 |

#### See Also

-   [Search Result Groups](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result.htm "Results of searching objects using keywords.")

-   [Scoped Search Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scoped_search_result.htm "Keyword search results for an object.")

-   [Search Answer](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_answe.htm "Results of searching objects using a natural language query.")

## Related Topics

- Search Data
                  Category (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_data_categor.htm)
- Filter (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_filte.htm)
- Order
                By (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_b.htm)
- Search Result Groups (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result.htm)
- Scoped Search Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scoped_search_result.htm)
- Search Answer (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_answe.htm)
