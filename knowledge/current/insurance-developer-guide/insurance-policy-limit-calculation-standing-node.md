---
title: "Insurance Policy Limit Calculation Standing Node"
domain: insurance-developer-guide
topic: insurance-policy-limit-calculation-standing-node
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.508Z
estimatedTokens: 752
keywords: [Insurance, Policy, Limit, Calculation, Standing, Node, Output, representation]
---

# Insurance Policy Limit Calculation Standing Node

> Output representation for an insurance policy limit standing calculation node.

# Insurance Policy Limit Calculation Standing Node

Output representation for an insurance policy limit standing calculation node.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| applicable​Actions | String[] | List of actions that initiate attribute processing. | Big, 65.0 | 65.0 |
| category | String | Category of the limit. | Big, 65.0 | 65.0 |
| claimCoverage​Id | String | ID of the related claim coverage. | Big, 65.0 | 65.0 |
| claimId | String | ID of the related claim. | Big, 65.0 | 65.0 |
| durationType | String | Duration type over which attribute consumption is monitored. | Big, 65.0 | 65.0 |
| initialAmount | Double | Configured amount. | Big, 65.0 | 65.0 |
| initialValue | Integer | Configured value of the limit. | Big, 65.0 | 65.0 |
| itemType | String | Type of the item. | Big, 65.0 | 65.0 |
| parentMapped​ScopeId | String | ID of the parent product or coverage that this attribute applies to. | Big, 65.0 | 65.0 |
| pendingAmount | Double | Total pending amount for open claims or unfinalized transactions, even if the amount exceeds the initial limit. | Big, 65.0 | 65.0 |
| pendingValue | Integer | Value that's pending. | Big, 65.0 | 65.0 |
| policyAssetId | String | ID of the related policy asset. | Big, 65.0 | 65.0 |
| policy​CoverageId | String | ID of the related policy coverage. | Big, 65.0 | 65.0 |
| policy​LimitId | String | ID of the insurance policy limit record. | Big, 65.0 | 65.0 |
| policyLimit​StandingKey | String | Unique identifier for the insurance policy limit standing. | Big, 65.0 | 65.0 |
| policy​ParticipantId | String | ID of the related policy participant. | Big, 65.0 | 65.0 |
| predictedRemainingAmount | Double | Remaining amount after calculating the pending value. | Big, 65.0 | 65.0 |
| predicted​RemainingValue | Integer | Remaining value after calculating the pending value. | Big, 65.0 | 65.0 |
| prodtAttr​MappedScopeId | String | ID of the product or coverage that this attribute applies to. | Big, 65.0 | 65.0 |
| remaining​Amount | Double | Remaining amount to carry forward. | Big, 65.0 | 65.0 |
| remaining​Value | Integer | Remaining value to carry forward. | Big, 65.0 | 65.0 |
| scope | String | Scope where the limit is applied, such as policy, claim, policy coverage. | Big, 65.0 | 65.0 |
| subCoverageName | String | Name of the sub-coverage. | Big, 65.0 | 65.0 |
| totalUsed​Amount | Double | Total amount that's used against this limit to date.It shows the actual total amount that's used, even if that amount exceeds the defined maximum limit. | Big, 65.0 | 65.0 |
| totalUsed​Value | Integer | Total value that's used against this limit to date. | Big, 65.0 | 65.0 |
| trackingEndDate | Date | End date of the duration period that’s used to calculate the current standing. | Big, 66.0 | 66.0 |
| trackingStartDate | Date | Start date of the duration period that’s used to calculate the current standing. | Big, 66.0 | 66.0 |

## Code Examples

```
{
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
