---
title: "Expected Revenue (PATCH)"
domain: insurance-developer-guide
topic: expected-revenue-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.115Z
estimatedTokens: 487
keywords: [Expected, Revenue, PATCH, Calculate, derived, Insurance, Rate, Plan, Commission, flat, fee, percentage, premium, equivalent, amount]
---

# Expected Revenue (PATCH)

> Calculate the expected revenue, derived both from an Insurance Rate Plan Commission
    object, such as a flat fee and percentage premium, and the premium, fee, or premium equivalent
    amount on Insurance Rate Plan. The expected revenue amount is rolled up from Insurance Rate Plan
    to Insurance Coverage and Insurance Policy expected revenue amount.

# Expected Revenue (PATCH)

Calculate the expected revenue, derived both from an Insurance Rate Plan Commission object, such as a flat fee and percentage premium, and the premium, fee, or premium equivalent amount on Insurance Rate Plan. The expected revenue amount is rolled up from Insurance Rate Plan to Insurance Coverage and Insurance Policy expected revenue amount.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

PATCH

Path parameter for PATCH

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| policyId | String | ID of parent policy for which the expected revenue is calculated. | Required | 63.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessSObjectType | String | Name of the business sObject to calculate expected revenue. Possible values are:InsurancePolicyInsurancePolicyCoverageInsuranceRatePlan | Optional | 63.0 |
| recordId | String | ID of the business sObject for which expected revenue must be calculated. | Optional | 63.0 |

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expressionSetName | String | Name of expression set to be used for expected revenue calculation. If unspecified, a value from the InsPolicyManagementConfig setup object is taken. | Optional | 63.0 |
| ratePlanCommissions | List | List of rate plan commissions to be used for expected revenue calculation. This is a valid input only when businessSObjectType is InsuranceRatePlan. | Optional | 63.0 |

Response body for PATCH

[Expected Revenue](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_expected_revenue_output.htm "Output representation of the details of the expected revenue.")

## Code Examples

```
/connect/insurance/brokerage/policies/policyId/expected-revenue
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/brokerage/policies/0YTSG0000000o9h4AA/expected-revenue?businessSObjectType=InsuranceRatePlan&recordId=1CcSG00000000fx0AA
```

```
{
  "expressionSetName": "expressionSetName",
  "ratePlanCommissions": [
    {
      "Name": "RPC-1",
      "Type": "GradedPercent",
      "amountStartRange": 0,
      "amountEndRange": 1000
    },
    {
      "Name": "RPC-1",
      "Type": "GradedPercent",
      "amountStartRange": 1001,
      "amountEndRange": 100000
    }
  ]
}
```

## Related Topics

- Expected Revenue (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_expected_revenue_output.htm)
