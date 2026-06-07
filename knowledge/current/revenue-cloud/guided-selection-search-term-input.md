---
title: "Guided Selection Search Term Input"
domain: revenue-cloud
topic: guided-selection-search-term-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:37.716Z
estimatedTokens: 105
keywords: [Guided, Selection, Search, Term, terms]
---

> Input representation of the search terms of a guided selection.

# Guided Selection Search Term Input

Input representation of the search terms of a guided selection.

JSON example

```

```

Properties

| Name |  | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- | --- |
| tags |  | String[] | Search term tags for the guided selection. | Optional | 62.0 |
| term |  | String | Search term for the guided selection. | Required | 62.0 |

## Code Examples

```
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
```
