---
title: "Integration Procedure Cache Details"
domain: omnistudio
topic: integration-procedure-cache-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.551Z
keywords: [Integration, Procedure, Cache, Details]
---

# Integration Procedure Cache Details

# Integration Procedure Cache Details

Output representation of the cache that are cleared for the specified integration procedures.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | String | Error message if the operation fails. | Small, 64.0 | 64.0 |
| responseList | Integration Procedure Cache Response[] | List of responses that are generated during the cache clearing process where each response corresponds to a specific cache key. | Small, 64.0 | 64.0 |
| status | Boolean | Indicates whether the cache is cleared successfully (true) or not (false) | Small, 64.0 | 64.0 |