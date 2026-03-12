---
title: "Cost Calculation (PATCH)"
domain: insurance-developer-guide
topic: cost-calculation-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.064Z
estimatedTokens: 505
keywords: [Cost, Calculation, PATCH, Calculate, premium, fee, premium-equivalent, amount, InsuranceRatePlanLineItem, underlying, rate, plan, fees, equivalent, rolled]
---

# Cost Calculation (PATCH)

> Calculate the premium, fee, or premium-equivalent amount at InsuranceRatePlanLineItem
    based on the underlying rate plan. The InsuranceRatePlanLineItem premium, fees, or premium
    equivalent amount is rolled up to the Insurance Rate Plan, Insurance Coverage, and Insurance
    Policy Premium Amount.

# Cost Calculation (PATCH)

Calculate the premium, fee, or premium-equivalent amount at InsuranceRatePlanLineItem based on the underlying rate plan. The InsuranceRatePlanLineItem premium, fees, or premium equivalent amount is rolled up to the Insurance Rate Plan, Insurance Coverage, and Insurance Policy Premium Amount.

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
| policyId | String | ID of parent policy for which the expected cost is calculated. | Required | 63.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| businessSObjectType | String | Name of business SObject to calculate premium. Possible values are:InsurancePolicyInsurancePolicyCoverageInsuranceRatePlanInsuranceRatePlanLineItem | Optional | 63.0 |
| recordId | String | ID of business SObject for which premium calculation is done. | Optional | 63.0 |

Request body for PATCH

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | Course of action for processing RatePlanLineItems. Valid values:rollup: Calculates premium and roll ups it to Insurance Policy level.calculate: Calculates premium and returns it in the output. | Optional | 63.0 |
| expressionSet​Name | String | Name of the expression set for cost calculation. If not specified, the value from the InsPolicyManagementConfig setup object is taken. | Optional | 63.0 |
| ratePlan​LineItems | List<Map<String, Object>> | List of insurance rate plan line items. | Optional | 63.0 |

Response body for PATCH

[Cost Calculation](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_cost_calculation_output.htm "Output representation details of the cost calculation.")

## Code Examples

```
/connect/insurance/brokerage/policies/policyId/expected-rates
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/brokerage/policies/0YTSG0000000o9h4AA/expected-rates?businessSObjectType=InsuranceRatePlan&recordId=1CcSG00000000fx0AA
```

```
{
 "action": "rollup",
 "expressionSetName": "expressionSetName",
 "ratePlanLineItems": [
  {
   "id": "xxxxxx",
   "rate": 100,
   "enrollmentCount": 1000,
   "custom_field_1": "xxxxxx"
  },
  {
   "id": "yyyyy",
   "rate": 50,
   "enrollmentCount": 200,
   "custom_field_1": "xxxxxx"
  }
 ]
}
```

## Related Topics

- Cost
              Calculation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_cost_calculation_output.htm)
