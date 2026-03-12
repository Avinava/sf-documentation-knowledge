---
title: "ConnectApi.RecommendedObject"
domain: apex-reference
topic: connectapirecommendedobject
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.848Z
estimatedTokens: 139
keywords: [ConnectApi.RecommendedObject, recommended, custom, recommendation]
---

# ConnectApi.RecommendedObject

> A recommended object, such as a custom or static
    recommendation.

# ConnectApi.RecommendedObject

A recommended object, such as a custom or static recommendation.

Subclass of [ConnectApi.Actor](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actor.htm "Actor.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| idOrEnum | String | ID of a recommendation definition for a custom recommendation or the enum value Today for static recommendations that don’t have an ID (version 35.0 and later). | 34.0 |
| motif | ConnectApi.Motif | Motif of the recommended object. | 34.0 |

## Related Topics

- ConnectApi.Actor (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actor.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.Motif (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_motif.htm)
