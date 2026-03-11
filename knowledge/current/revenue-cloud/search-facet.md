---
title: "Search Facet"
domain: revenue-cloud
topic: search-facet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.506Z
keywords: [Search, Facet]
---

# Search Facet

# Search Facet

Output representation of the details of the faceted search.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attribute​Type | String | Search attribute type of the facet. | Small, 63.0 | 63.0 |
| display​Name | String | Display name of the facet. | Small, 63.0 | 63.0 |
| display​Rank | Integer | Display rank of the facet. | Small, 63.0 | 63.0 |
| display​Type | String | Display type of the face. | Small, 63.0 | 63.0 |
| nameOr​Id | String | Facet name or ID. Reserved for internal use. | Small, 63.0 | 63.0 |
| values | Facet Value[] | Values of the facet found in the search result. Sorted by display name in alphabetical order. | Small, 63.0 | 63.0 |