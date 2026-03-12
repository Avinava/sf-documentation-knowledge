---
title: "Insurance Policy Limit Current Standings Response"
domain: insurance-developer-guide
topic: insurance-policy-limit-current-standings-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.500Z
estimatedTokens: 160
keywords: [Insurance, Policy, Limit, Current, Standings, Output, representation, limits]
---

# Insurance Policy Limit Current Standings Response

> Output representation for the current standings of the insurance policy limits.

# Insurance Policy Limit Current Standings Response

Output representation for the current standings of the insurance policy limits.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Detail[] | List of errors for calculate standings. | Big, 65.0 | 65.0 |
| insPolicyLmt​CalcStanding​Nodes | Insurance Policy Limit Calculation Standing Node[] | List of policy limit current standing nodes. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the API operation is successful (true) or not (false). | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "isSuccess": true,
  "errors": [],
  "insPolicyLmtCalcStandingNode": [
    {
      "applicableAction": [
        "PaymentAttempted"
      ],
      "category": "LimitCurrency",
      "claimCoverageId": "0cYSG000000UYlp2AG",
      "claimId": "500SG0000009HjJ2AU",
      "durationType": "PolicyTerm",
      "initialAmount": 1000,
      "initialValue": 0,
      "parentMappedScopeId": "0YTxx0000000253GAA",
      "pendingAmount": 500,
      "pendingValue": 0,
      "policyAssetId": "",
      "policyCoverageId": "0cYSG000000UYlq2AG",
      "policyLimitId": "1TDSG0000007HU84AM",
      "policyLimitStandingKey": "PolicyCoverage LimitCurrency",
      "policyParticipantId": "003SG0000005pIkJAI",
      "predictedRemainingAmount": 500,
      "predictedRemainingValue": 0,
      "scope": "PolicyCoverage",
      "remainingAmount": 1000,
      "remainingValue": 0,
      "totalUsedAmount": 0,
      "totalUsedValue": 0,
      "trackingStartDate": "2025-10-09",
      "trackingEndDate": "2025-12-19"
    }
  ]
}
```

## Related Topics

- Error
                  Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
- Insurance Policy Limit Calculation Standing
                Node (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_ins_policy_lmt_calc_standing_node.htm)
