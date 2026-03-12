---
title: "Save Recommendation Decisions"
domain: retail-api
topic: save-recommendation-decisions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.610Z
estimatedTokens: 292
keywords: [Save, Recommendation, Decisions, visit, task, REST, HTTP, Inputs, Outputs]
---

# Save Recommendation Decisions

> Save visit and task recommendation decisions.

# Save Recommendation Decisions

Save visit and task recommendation decisions.

This object is available in API version 51.0 and later for users with a Consumer Goods Cloud license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/saveRecommendationDecision

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| actionParams | TypestringDescriptionRequired parameters based on the action type that are relevant to process a decision. |
| actionType | TypestringDescriptionRequired. Decision made for a recommendation.The possible values are:AcceptReject |
| recommendationId | TypestringDescriptionUnique identifier of the recommendation. |

## Outputs

| Input | Details |
| --- | --- |
| actionMessage | TypestringDescriptionDetails about why a recommendation is accepted or rejected. |
| actionStatus | TypestringDescriptionIndicates whether a recommendation decision succeeded or failed. |

## Example

**Sample Request**

JSON Request Body

```

```

**Sample Response**

JSON Response Body

```

```

**Sample Error**

JSON Error Body

```

```

## Code Examples

```
{
   "inputs": [{
      "recommendationId":"9TuB0000000TN6iKAG",
      "actionType":"Accept",
      "actionParams":{
         "TaskGenerationType":"AIVisitTaskTemplate" //For Consumer Goods Cloud
      }
   }]
}
```

```
{
   "actionName": "saveRecommendationDecision",
   "errors": null,
   "isSuccess": true,
   "outputValues": {
      "actionStatus": "success",
      "actionMessage": "The visit was scheduled.",
   }
}
```

```
[{
   "actionName": "saveRecommendationDecision",
   "errors": null,
   "isSuccess": true,
   "outputValues": {
      "actionStatus": "error",
      "actionMessage": "We can’t schedule the recommendation because the recommendation status isn’t Recommended.",
   }
}]
```
