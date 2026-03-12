---
title: "Recommended Object"
domain: chatterapi
topic: recommended-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.817Z
estimatedTokens: 147
keywords: [Recommended, custom, recommendation]
---

# Recommended Object

> A custom or static recommendation.

# Recommended Object

A custom or static recommendation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| idOrEnum | String | ID of a recommendation definition for a custom recommendation or the enum value Today for static recommendations that don’t have an ID (version 35.0 and later). | Small, 34.0 | 34.0 |
| motif | Motif | Motif of the recommended object. | Small, 34.0 | 34.0 |
| name | String | Name of the recommended object. | Small, 29.0 | 22.0 |
| type | String | RecommendedObject | Small, 29.0 | 22.0 |

## Related Topics

- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
