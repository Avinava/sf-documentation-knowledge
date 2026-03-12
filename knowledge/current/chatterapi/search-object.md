---
title: "Search Object"
domain: chatterapi
topic: search-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.071Z
estimatedTokens: 332
keywords: [Search, Record, results, keyword]
---

# Search Object

> Record results for the keyword search.

# Search Object

Record results for the keyword search.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| displayFields | String[] | Fields to display from the response. | Small, 63.0 | 63.0 |
| objectApiName | String | Object API name. | Small, 63.0 | 63.0 |
| orderBy | Applied Order By[] | Applied order for object search. | Small, 63.0 | 63.0 |
| pageInfo | Page Info | Page position information for the object search. | Small, 63.0 | 63.0–64.0 |
| searchResults | Search Result[] | Search results from the query. | Small, 63.0 | 63.0 |
| spellCorrectionInfo | Spell Correction Info | Spell correction information for the object search. | Small, 63.0 | 63.0 |
| status | Status | Provides status on the object search such as error messages and warnings. | Small, 63.0 | 63.0 |

#### See Also

-   [Search Result Groups](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result.htm "Results of searching objects using keywords.")

-   [Scoped Search Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scoped_search_result.htm "Keyword search results for an object.")

-   [Search Answer](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_answe.htm "Results of searching objects using a natural language query.")

## Related Topics

- Applied Order
                  By (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_applied_order_b.htm)
- Page
                  Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_page_inf.htm)
- Search
                Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_resul.htm)
- Spell Correction
                  Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_spell_correction_inf.htm)
- Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_statu.htm)
- Search Result Groups (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result.htm)
- Scoped Search Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_scoped_search_result.htm)
- Search Answer (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_answe.htm)
