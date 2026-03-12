---
title: "Search Result"
domain: chatterapi
topic: search-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.081Z
estimatedTokens: 240
keywords: [Search, Result, Record, results, keyword]
---

# Search Result

> Record results from a keyword search.

# Search Result

Record results from a keyword search.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | Object API name. | Small, 64.0 | 64.0 |
| chunks | Chunk[] | Content chunks for the search result. | Small, 63.0 | 63.0 |
| fields | Map<String, Record Field Value> | Field values by API name. | Small, 63.0 | 63.0 |
| id | String | ID of the record. | Small, 63.0 | 63.0 |
| matchInfo | Match Info | Search information related to the search result. | Small, 63.0 | 63.0 |
| sourceUrl | String | Source URL from where the record originated. | Small, 64.0 | 64.0 |

#### See Also

-   [Search Object](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_objec.htm "Record results for the keyword search.")

-   [Search Result Group](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result_grou.htm "Record results from a keyword search.")

## Related Topics

- Chunk (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_chun.htm)
- Record Field Value (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_field_valu.htm)
- Match
                  Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_match_inf.htm)
- Search Object (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_objec.htm)
- Search Result Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result_grou.htm)
