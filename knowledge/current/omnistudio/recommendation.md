---
title: "Recommendation"
domain: omnistudio
topic: recommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.293Z
estimatedTokens: 338
keywords: [Recommendation, Output, representation, Einstein, Best, Action]
---

# Recommendation

> Output representation of the recommendation request with Einstein
      Next Best Action.

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

## Code Examples

```
{
  "recommendationRecordIds" : [ "0prRM00000001abYAA" ],
  "recommendationStrategyResult" : [ {
    "errors" : [ ],
    "isSuccess" : true,
    "onBehalfOfId" : "a02xx000001nd0RAAQ",
    "recommendations" : [ {
      "acceptanceLabel" : "yes",
      "actionReferenceId" : "301RM0000004tIcYAI",
      "actionReferenceLabel" : "sendingEmailFlow",
      "actionReferenceName" : "sendingEmailFlow",
      "actionStrategyParameters" : [ {
        "name" : "inputRecommendation",
        "type" : "SObject",
        "value" : {
          "attributes" : {
            "type" : "Recommendation",
            "url" : "/services/data/v56.0/sobjects/Recommendation/0prRM00000001abYAA"
          },
          "AcceptanceLabel" : "yes",
          "ActionReference" : "sendingEmailFlow",
          "CreatedById" : "005RM000002WUlIYAW",
          "CreatedDate" : "2022-07-14T20:06:32.000Z",
          "Description" : "Recommendation description",
          "ExternalId" : null,
          "Id" : "0prRM00000001abYAA",
          "ImageId" : null,
          "IsActionActive" : true,
          "IsDeleted" : false,
          "LastModifiedById" : "005RM000002WUlIYAW",
          "LastModifiedDate" : "2022-07-14T20:06:32.000Z",
          "LastReferencedDate" : "2022-07-14T20:06:32.000Z",
          "LastViewedDate" : "2022-07-14T20:06:32.000Z",
          "Name" : "Rcmd2",
          "RecommendationKey" : null,
          "RejectionLabel" : "no",
          "SystemModstamp" : "2022-07-14T20:06:32.000Z"
        }
      }, {
        "name" : "recordId",
        "type" : "String",
        "value" : "a02xx000001nd0RAAQ"
      }, {
        "name" : "contextRecordId",
        "type" : "String",
        "value" : "a02xx000001nd0RAAQ"
      } ],
      "description" : "Recommendation description",
      "id" : "0prRM00000001abYAA",
      "name" : "Recommendation",
      "rejectionLabel" : "no"
    } ],
    "recordId" : "a02xx000001nd0RAAQ"
  } ],
  "status" : {
    "code" : 200,
    "message" : "The request to get recommendations was submitted."
  },
  "strategyName" : "flow_sample",
  "usecaseName" : "ChurnPredictionRealTime"
}
```

## Related Topics

- Recommendation Strategy Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_rcmd_strategy_result.htm)
