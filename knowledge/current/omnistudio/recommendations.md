---
title: "Recommendations"
domain: omnistudio
topic: recommendations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.850Z
keywords: [Recommendations]
---

# Recommendations

# Recommendations

Get recommendations with Einstein Next Best Action. You can now work on actionable next steps with a unified, synchronized view of real-time score predictions and recommendations.

Resource

```

```

Example

```

```

Available version

56.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| canPersist​Recommendations | Boolean | Indicates whether the recommendations are persisted (true) or not (false). The default value is false. | Optional | 56.0 |
| isAsync | Boolean | Indicates whether the execution mode is async (true) or not (false). The default value is false. | Optional | 56.0 |
| max​Recommendations​Count | Integer | The maximum recommendations to request. You can specify a maximum of four recommendations. | Optional | 56.0 |
| rcmdRecordId​Persistence​Column | String | The name of the column from the PrimaryResponse object that persists the recommendation record ID when the canPersist​Recommendations property is set to true. | Optional | 56.0 |
| rcmdStrategy​Parameters | Map<String,Object>[] | The list of parameters to pass to the flow action for the specified strategy to generate recommendations. | Required | 56.0 |
| recommendation​FieldMapping | Map<String, String> | The field mapping that’s used to store the recommendations when the canPersist​Recommendations property is set to true. | Optional | 56.0 |
| strategyName | String | The name of the strategy. | Required | 56.0 |
| usecase​Definition​Name | String | The API name of the use case definition. | Required | 56.0 |

Response body for POST

[Recommendation](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_recommendation_output.htm "Output representation of the recommendation request with Einstein Next Best Action.")