---
title: "Insurance Invoke Underwriting Rule Set Result"
domain: insurance-developer-guide
topic: insurance-invoke-underwriting-rule-set-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.613Z
estimatedTokens: 196
keywords: [Insurance, Invoke, Underwriting, Rule, Result, Output, representation]
---

# Insurance Invoke Underwriting Rule Set Result

> Output representation for invoke underwriting rule set result response.

# Insurance Invoke Underwriting Rule Set Result

Output representation for invoke underwriting rule set result response.

JSON example

This example shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| productId | String | ID of the product that's evaluated by the rule set. | Small, 66.0 | 66.0 |
| evaluationCriteria | String | Evaluation criteria expression that's used during the rule set evaluation. | Small, 66.0 | 66.0 |
| ruleResult | Insurance Underwriting Rule Results[] | List of underwriting rule evaluation results. | Small, 66.0 | 66.0 |
| isSuccess | Boolean | Indicates whether the API request is successful ( true) or not ( false). | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "rulesetResults": [
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
          "isSuccess": false
        }
      ]
    },
    {
      "productId": "01tSM000005OFyJYAW",
      "evaluationCriteria": "1",
      "success": true,
      "ruleResults": [
        {
          "ruleApiName": "MedicalRule1",
          "isSuccess": true
        }
      ]
    }
  ]
}
```

## Related Topics

- Insurance Underwriting Rule Results (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_underwriting_rule_result_output.htm)
