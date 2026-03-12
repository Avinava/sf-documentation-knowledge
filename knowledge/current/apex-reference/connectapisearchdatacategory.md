---
title: "ConnectApi.SearchDataCategory"
domain: apex-reference
topic: connectapisearchdatacategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.012Z
estimatedTokens: 218
keywords: [ConnectApi.SearchDataCategory, Data, category, input, search]
---

# ConnectApi.SearchDataCategory

> Data category input for object search.

# ConnectApi.SearchDataCategory

Data category input for object search.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| categories | List<String> | List of data category names to filter. | Optional | 63.0 |
| groupName | String | Name of the data category group to filter. | Optional | 63.0 |
| operator | ConnectApi.​DataCategory​Operator | Data category operator.Above—Queries the data category and all of its parent categories.AboveOrBelow—Queries the data category, all of its parent categories, and all of its subcategories.At—Queries the data category.Below—Queries the data category and all of its subcategories. | Optional | 63.0 |

#### See Also

-   [ConnectApi.SearchRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_search_reques.htm "Search request input for searching an object.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​DataCategory​Operator (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.SearchRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_search_reques.htm)
