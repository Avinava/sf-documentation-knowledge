---
title: "Upsert Custom Rebate Payout"
domain: channel-revenue-management-dev-guide
topic: upsert-custom-rebate-payout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.095Z
estimatedTokens: 389
keywords: [Upsert, Custom, Rebate, Payout, calculated, aggregate, record, REST, HTTP, Inputs, Outputs, Usage]
---

# Upsert Custom Rebate Payout

> Upsert the custom calculated rebate payout for a specified aggregate
         record.

# Upsert Custom Rebate Payout

Upsert the custom calculated rebate payout for a specified aggregate record.

This object is available in API version 51.0 and later for users with Rebate Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/upsertCustomRebatePayout

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| accuralRate | TypeDoubleDescriptionThe accrual rate used to calculate the accrued amount for the generated program rebate type payout source record. |
| accruedAmount | TypeDoubleDescriptionThe accrued amount calculated for the generated program rebate type payout source record. |
| aggregateId | TypeIDDescriptionRequired. The ID of the aggregate record for which you want to upsert the rebate payout. |
| benefitId | TypeIDDescriptionThe ID of the qualified program rebate type benefit record for which you want to upsert the rebate payout. |
| payoutMemberFieldName | TypeStringDescriptionThe name of the field that contains the rebate program member ID for which to perform the payout calculations. |
| rebateAmount | TypedoubleDescriptionRequired. The rebate amount for which you want to upsert the rebate payout. |

## Outputs

| Output | Details |
| --- | --- |
| programRebateTypePayoutSourceId | TypeIDDescriptionThe ID of the program rebate type payout source record, which is generated after the request is successful. |

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
   "inputs":[{
      "AggregateId":"0lcxx00004000002AAA",
      "BenefitId":"0htxx00004000002AAA",
      "RebateAmount":"2000"
   }]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "outputValues":{ 
      "programRebateTypePayoutSourceId":"0ntxx00004000002AAA",
   }
}
```
