---
title: "Program Rebate Type Validation Results Response"
domain: channel-revenue-management-dev-guide
topic: program-rebate-type-validation-results-response
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.910Z
estimatedTokens: 155
keywords: [Program, Rebate, Validation, Results, setup]
---

# Program Rebate Type Validation Results Response

> Represents the results details for program rebate type setup validation.

# Program Rebate Type Validation Results Response

Represents the results details for program rebate type setup validation.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| setupWarningDescription | String | A description of the identified setup issue. | Big, 65.0 | 65.0 |
| setupWarningResults | String[] | The records or configurations impacted by the setup issue. | Big, 65.0 | 65.0 |
| setupWarningType | String | The type of configuration or data-related issue identified in the setup. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "results": [
    {
      "setupWarningDescription": "The payout period isn’t entirely within the effective dates of the Program Rebate Type Benefit. Update the effective dates and try again.",
      "setupWarningResults": [
        "Tier 1: April FY 2025"
      ],
      "setupWarningType": "BENEFIT_PAYOUT_PERIOD_MISMATCH"
    }
  ]
}
```
