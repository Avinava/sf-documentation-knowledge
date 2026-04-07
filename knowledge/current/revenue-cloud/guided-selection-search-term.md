---
title: "Guided Selection Search Term"
domain: revenue-cloud
topic: guided-selection-search-term
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:45.864Z
estimatedTokens: 105
keywords: [Guided, Selection, Search, Term]
---

> Output representation of the search term details for a guided selection.

# Guided Selection Search Term

Output representation of the search term details for a guided selection.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| tags | String[] | Search term tags for the guided selection. | Small, 62.0 | 62.0 |
| term | String | Search term value for the guided selection. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "searchTerms": [
    {
      "term": "IPhone",
      "tags": [
        "deviceType",
        "mobile"
      ]
    },
    {
      "term": "4GB",
      "tags": [
        "RAM"
      ]
    },
    {
      "term": "64GB",
      "tags": [
        "Storage"
      ]
    }
  ]
}
```
