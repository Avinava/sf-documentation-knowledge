---
title: "Get Benefit and Calculate Rebate Amount"
domain: channel-revenue-management-dev-guide
topic: get-benefit-and-calculate-rebate-amount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.076Z
estimatedTokens: 462
keywords: [Benefit, Calculate, Rebate, Amount, benefits, optionally, aggregate, record, REST, HTTP, Inputs, Outputs, Usage]
---

# Get Benefit and Calculate Rebate Amount

> Get the details benefits and optionally calculate the rebate amount
         for the specified aggregate record.

# Get Benefit and Calculate Rebate Amount

Get the details benefits and optionally calculate the rebate amount for the specified aggregate record.

This object is available in API version 51.0 and later for users with Rebate Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/getBenefitAndCalculateRebateAmount

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| aggregateId | TypeIDDescriptionRequired. The ID of the aggregate record for which you want to calculate the rebate amount. |
| payoutMemberFieldName | TypeIDDescriptionThe name of the field that contains the rebate program member ID for which to perform the payout calculations. |
| skipRebateCalc | TypeBooleanDescriptionIndicates whether to skip calculation of the rebate amount. |

## Outputs

| Output | Details |
| --- | --- |
| accuralRate | TypeDoubleDescriptionThe accrual rate if the request is successful. |
| accruedAmount | TypeDoubleDescriptionThe accrued amount calculated if the request is successful. |
| aggregateId | TypeIDDescriptionThe ID of the aggregate record for which you want to calculate the rebate amount. |
| benefitId | TypeIDDescriptionThe ID of the applied Program Rebate Type Benefit record if the request is successful. |
| payoutMemberFieldName | TypeStringDescriptionThe name of the field that contains the rebate program member ID for which to perform the payout calculations. |
| qualifyingBenefits | TypestringDescriptionThe comma-separated list of IDs of the qualified Program Rebate Type Benefit records if the request is successful. |
| rebateAmount | TypedoubleDescriptionThe rebate amount calculated if the request is successful. |

## Usage

**Sample Request**

```

```

**Sample Response**

```

```

## Code Examples

```
{
   "inputs":[
      {"AggregateId": "a00xx000000cCtxAAE",
      "SkipRebateCalc": false},
      {"AggregateId": "a00xx000000cCvZAAU",
      "SkipRebateCalc": false},
      {"AggregateId": "a00xx000000cCxBAAU",
      "SkipRebateCalc": false}
   ]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "outputValues":{ 
      "AggregateId":"0ntxx00004000002AAA",
      "BenefitId":"0ntxx00004000002AAA",
      "RebateAmount":"2000"
   }
}
```
