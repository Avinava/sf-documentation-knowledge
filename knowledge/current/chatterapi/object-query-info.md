---
title: "Object Query Info"
domain: chatterapi
topic: object-query-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.041Z
estimatedTokens: 299
keywords: [Query, Info, search, execution]
---

# Object Query Info

> Contains search query execution information for the object.

# Object Query Info

Contains search query execution information for the object.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| displayFields | String[] | Fields to display from the response. | Small, 64.0 | 64.0 |
| hasMoreResults | Boolean | Specifies whether there are more records to fetch matching the search query for the object (true) or not (false). | Small, 64.0 | 64.0 |
| nameField | String | Name field identifier of the object. | Small, 64.0 | 64.0 |
| numberOfMatches | Integer | Number of results for the object matching the search query. | Small, 64.0 | 64.0 |
| orderBy | Applied Order By[] | Applied order for object search. | Small, 64.0 | 64.0 |
| source | String | Source name for the object. | Small, 64.0 | 64.0 |
| spellCorrectionInfo | Spell Correction Info | Spell correction information for the object search. | Small, 64.0 | 64.0 |
| status | Status | Status on the object search such as error messages and warnings. | Small, 64.0 | 64.0 |

#### See Also

-   [Query Info](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_query_inf.htm "Contains Search query execution information.")

## Related Topics

- Applied
                  Order By (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_applied_order_b.htm)
- Spell Correction Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_spell_correction_inf.htm)
- Status (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_statu.htm)
- Query Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_query_inf.htm)
