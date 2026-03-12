---
title: "Business Rules Results"
domain: omnistudio
topic: business-rules-results
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.444Z
estimatedTokens: 117
keywords: [Business, Rules, Results, Output, representation, executing, expression]
---

# Business Rules Results

> Output representation of executing an expression set.

# Business Rules Results

Output representation of executing an expression set.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aggregationResults | Business Rule Aggregation Results Output | The result of the aggregation step in an expression set. | Small, 55.0 | 55.0 |
| outputs | Rule Result[] | List of outputs returned by an expression set. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "outputs": [
    {
      "result": {
        "Premium": "1200",
        "Tax": "100"
      },
      "variables": {
        "age": "25",
        "state": "CA"
      },
      "error": {
        "stepId": "<stepId>",
        "errorMessage": "The rule is missing inputs: ['var1', 'var2'] and 3 more steps have 5 error"
      }
    },
    {
      "result": {
        "Premium": "2400",
        "Tax": "300"
      }
    },
    {
      "result": {
        "Premium": "500",
        "Tax": "25"
      }
    }
  ],
  "aggregationResults": {
    "result": {
      "TotalPremium": "4100",
      "TotalTax": "425"
    },
    "error": {
      "stepId": "<stepId>",
      "errorMessage": "The rule is missing inputs: ['var1', 'var2'] and 3 more steps have 5 error"
    }
  }
}
```

## Related Topics

- Business Rule Aggregation Results Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_business_rule_aggregation_results_output.htm)
- Rule Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_rule_result.htm)
