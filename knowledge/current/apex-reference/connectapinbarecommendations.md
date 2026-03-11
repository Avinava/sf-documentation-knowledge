---
title: "ConnectApi.NBARecommendations"
domain: apex-reference
topic: connectapinbarecommendations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.335Z
keywords: [ConnectApi.NBARecommendations]
---

# ConnectApi.NBARecommendations

# ConnectApi.NBARecommendations

Recommendations returned by a recommendation strategy.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| debug | String | Runtime debug information recorded during recommendation strategy execution. | 45.0 |
| errors | String | Runtime errors that occurred during recommendation strategy execution. | 45.0 |
| executionId | String | ID of the recommendation strategy execution. | 45.0 |
| onBehalfOfId | String | ID of the user or entity for which the recommendation strategy was executed. | 45.0 |
| recommendations | List<ConnectApi.​NBARecommendation> | List of recommendations returned by a recommendation strategy. | 45.0 |
| trace | ConnectApi.​StrategyTrace | Trace information for the recommendation strategy execution, if requested. | 45.0 |