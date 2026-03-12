---
title: "Search Results Output"
domain: life-sciences-dev-guide
topic: search-results-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.894Z
estimatedTokens: 163
keywords: [Search, Results, Output, representation, provider]
---

# Search Results Output

> Output representation for provider search request.

# Search Results Output

Output representation for provider search request.

JSON example

```

```

Properties

| Name | Type | Description | Filter Group and Version | Available version |
| --- | --- | --- | --- | --- |
| success | Boolean | Indicates whether the API request was successful (true) or not (false.. | Small, 65.0 | 65.0 |
| message | String | Message returned in case of an API failure. | Small, 65.0 | 65.0 |
| code | String | HTTP response code. | Small, 65.0 | 65.0 |
| response | Map<String, Object> | Actual search data, which includes results for simpleSearch​FieldSet​Members and group​Address​Matches. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "success": true,
  "message": "",
  "code": "200",
  "response": {
    "simpleSearchFieldSetMembers": {
      "HCO": {},
      "HCP": {}
    },
    "groupAddressMatches": []
  }
}
```
