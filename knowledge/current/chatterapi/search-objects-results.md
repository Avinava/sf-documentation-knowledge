---
title: "Search Objects Results"
domain: chatterapi
topic: search-objects-results
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.415Z
estimatedTokens: 221
keywords: [Search, Objects, Results, keywords, result, groups]
---

# Search Objects Results

> Search objects using keywords and return result groups.

# Search Objects Results

Search objects using keywords and return result groups.

Resource

```

```

Available version

63.0

HTTP methods

GET

Example

```

```

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| q | String | Query term to search on. The query term must be two or more characters. | Required | 63.0 |
| configurationName | String | Name of the search configuration to apply. Look up search configuration names from Search Manager. | Optional | 63.0 |
| highlights | Boolean | Specifies whether search generates a text highlight (true) or not (false). The default value is false. | Optional | 63.0 |

Response body for GET

[Search Result Groups](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result.htm "Results of searching objects using keywords.")

## Code Examples

```
/connect/search/sobjects/result-groups
```

```
/services/data/v63.0/connect/search/sobjects/result-groups?q=issue
```

## Related Topics

- Search Result Groups (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_result.htm)
