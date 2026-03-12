---
title: "Insurance Invoke Underwriting Rule"
domain: insurance-developer-guide
topic: insurance-invoke-underwriting-rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.610Z
estimatedTokens: 312
keywords: [Insurance, Invoke, Underwriting, Rule, Output, representation]
---

# Insurance Invoke Underwriting Rule

> Output representation for invoke underwriting rule response.

# Insurance Invoke Underwriting Rule

Output representation for invoke underwriting rule response.

JSON example

This example shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response | List of errors encountered during the processing of the API request. | Small, 63.0 | 63.0 |
| fromStage | String | The from stage. | Small, 63.0 | 63.0 |
| isSuccess | Boolean | Indicates whether the API request is successful ( true) or not ( false).This parameter is set to true when all individual rule set results are successful. | Small, 63.0 | 63.0 |
| objectId | String | ID of the quote or insurance policy. | Small, 63.0 | 63.0 |
| objectName | String | Name of the object (Quote or Insurance Policy). | Small, 63.0 | 63.0 |
| ruleSetResult | Insurance Underwriting Rule Set Results [] | List of underwriting rule set evaluation results. | Small, 66.0 | 66.0 |
| stageTransition​Name | String | ID of the stage transition. | Small, 63.0 | 63.0 |
| stageTransition​Underwriting​EvaluationId | String | ID of the underwriting rule evaluation. | Small, 63.0 | 63.0 |
| toStage | String | The to stage. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "objectId": "0Q0SM0000001uL70AI",
  "objectName": "Quote",
  "stageTransitionName": "Draft To Submitted",
  "fromStage": "Draft",
  "toStage": "Submitted",
  "ruleSetResults": [
    {
      "productId": "01tSM000005OFyGYAW",
      "evaluationCriteria": "1 OR 2",
      "isSuccess": true,
      "ruleResults": [
        {
          "ruleApiName": "CollisionRule",
          "isSuccess": true
        },
        {
          "ruleApiName": "AutoSilverRule",
          "isSuccess": true
        }
      ]
    },
    {
      "productId": "01tSM000005OFyJYAW",
      "evaluationCriteria": "1",
      "isSuccess": true,
      "ruleResults": [
        {
          "ruleApiName": "MedicalRule1",
          "isSuccess": true
        }
      ]
    }
  ],
  "errors": [],
  "isSuccess": true
}
```

## Related Topics

- Insurance Underwriting Rule Set Results [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_invoke_underwriting_ruleset_result_output.htm)
