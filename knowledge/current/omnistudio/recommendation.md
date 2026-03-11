---
title: "Recommendation"
domain: omnistudio
topic: recommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.769Z
keywords: [Recommendation]
---

# Recommendation

# Recommendation

Output representation of the recommendation request with Einstein Next Best Action.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| executionMode​Warning | String | The warning when the execution mode isn’t suitable. | Small, 56.0 | 56.0 |
| recommendation​Persistence​ErrorMessage | String | The error message when persisting the recommendations fails. | Small, 56.0 | 56.0 |
| recommendation​RecordIds | String[] | The list of IDs of the recommendation records that are part of the recommendation result. | Small, 56.0 | 56.0 |
| recommendation​StrategyResult | Recommendation Strategy Result | The list of recommendations for each record in the request. Displays a maximum of four recommendations as specified in the maxRecommendations​Count property in the request. | Small, 56.0 | 56.0 |
| requestId | String | The ID of the recommendation request that’s used in the async mode of execution to listen to the platform event. | Small, 56.0 | 56.0 |
| status | String | The status of the recommendation request. | Small, 56.0 | 56.0 |
| strategyName | String | The name of the strategy. | Small, 56.0 | 56.0 |
| usecaseName | String | The usecaseName property value on the AIUsecaseDefinition object. | Small, 56.0 | 56.0 |