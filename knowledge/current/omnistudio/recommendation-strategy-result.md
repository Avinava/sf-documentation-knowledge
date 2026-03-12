---
title: "Recommendation Strategy Result"
domain: omnistudio
topic: recommendation-strategy-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.281Z
estimatedTokens: 251
keywords: [Recommendation, Strategy, Result, containing, fetched, record]
---

# Recommendation Strategy Result

> Specifies the strategy result containing the fetched recommendation
      details for each record.

# Recommendation Strategy Result

Specifies the strategy result containing the fetched recommendation details for each record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error | Specifies the runtime errors that occur during the recommendation request execution. | Small, 56.0 | 56.0 |
| isSuccess | Boolean | Indicates whether the recommendation request was successful (true) or not (false). | Small, 56.0 | 56.0 |
| onBehalfOfId | String | The ID of the user or object for which the recommendation request is executed. | Small, 56.0 | 56.0 |
| predictionScore | Double | The prediction score, which is an input to the recommendation request. | Small, 56.0 | 56.0 |
| recommendations | Recommendation Details | The list of recommendations returned by a recommendation request. | Small, 56.0 | 56.0 |
| recordId | String | The ID of the record for which the recommendation request is executed. | Small, 56.0 | 56.0 |

## Related Topics

- Error (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_error.htm)
- Recommendation Details (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_recommendation.htm)
