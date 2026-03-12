---
title: "Recommendation Decisions"
domain: retail-api
topic: recommendation-decisions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.940Z
estimatedTokens: 262
keywords: [Recommendation, Decisions, Save, visit, task]
---

# Recommendation Decisions

> Save visit or task recommendation decisions.

# Recommendation Decisions

Save visit or task recommendation decisions.

Resource

```

```

Available version

51.0

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
| recommendation​Decision | String | The unique identifier of a recommendation decision that is taken for recommendations. | Required | 51.0 |
| recommendation​DecisionParams | Map<String, String> | The unique identifier of the other parameters that are relevant to process the decision taken. | Optional | 51.0 |
| recommendationIds | String[] | The unique identifier of the recommendations for which the recommendation decision is taken. | Required | 51.0 |

Response body for POST

[Recommendation Decisions Output](atlas.en-us.retail_api.meta/retail_api/connect_responses_recommendation_decisions_output.htm "Details of recommendation decision processed for the input recommendations.")

Sample Response Body

```

```

## Code Examples

```
services/data/vXX.X/connect/visit/recommendations/recommendation-decisions
```

```
{  "recommendationDecision": "Accept",
  "recommendationIds": ["9Tuxx0000004Eu0CAE"],
}
```

```
{
  "recommendationDecisionDetails" : [ {
    "message" : "Visit cannot be created in the past date",
    "isSuccess" : false,
    "recommendationId" : "9Tuxx0000004Eu0CAE"
  },
  {
    "message" : "",
    "isSuccess" : true,
    "recommendationId" : "9Tuxx0000004Eu0CAE"
  }
  ],
  "status" : {
    "code" : "200",
    "message" : "70 out of 80 visits are scheduled."
    “totalRecommendations” : 80
    “successCount: : 70
  }
}
```

## Related Topics

- Recommendation Decisions Output (atlas.en-us.retail_api.meta/retail_api/connect_responses_recommendation_decisions_output.htm)
