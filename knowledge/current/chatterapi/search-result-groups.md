---
title: "Search Result Groups"
domain: chatterapi
topic: search-result-groups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.084Z
estimatedTokens: 263
keywords: [Search, Result, Groups, Results, searching, objects, keywords]
---

# Search Result Groups

> Results of searching objects using keywords.

# Search Result Groups

Results of searching objects using keywords.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| metadata | Map<String, Object Metadata> | All related metadata associated with the objects found in the results. | Small, 63.0Medium, 64.0 | 63.0 |
| parameters | Parameters | Search query parameters. Some search results may not return all query parameters. | Small, 63.0Medium, 64.0 | 63.0 |
| queryInfo | Query Info | Search query execution information. | Small, 64.0 | 64.0 |
| resultGroups | Search Result Group[] | Record results from a keyword search grouped by object. | Small, 64.0 | 64.0 |
| searchObjects | Search Object[] | Record results for the keyword search grouped by object.In version 64.0 and later, use resultGroups for record results. | Small, 63.0 | 63.0 only |

#### See Also

-   [Search Objects Results](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_objects.htm "Search objects using keywords and return result groups.")

## Related Topics

- Object Metadata (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_object_metadat.htm)
- Parameters (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_parameter.htm)
- Query
                  Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_query_inf.htm)
- Search Result Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result_grou.htm)
- Search
                  Object (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_objec.htm)
- Search Objects Results (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_objects.htm)
