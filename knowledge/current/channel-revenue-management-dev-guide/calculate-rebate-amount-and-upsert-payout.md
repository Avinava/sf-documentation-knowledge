---
title: "Calculate Rebate Amount and Upsert Payout"
domain: channel-revenue-management-dev-guide
topic: calculate-rebate-amount-and-upsert-payout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.065Z
estimatedTokens: 272
keywords: [Calculate, Rebate, Amount, Upsert, Payout, aggregate, record, REST, HTTP, Inputs, Outputs, Usage]
---

# Calculate Rebate Amount and Upsert Payout

> Calculate the rebate amount and upsert the rebate payout for the
         specified aggregate record.

# Calculate Rebate Amount and Upsert Payout

Calculate the rebate amount and upsert the rebate payout for the specified aggregate record.

This object is available in API version 51.0 and later for users with Rebate Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/calculateRebateAmountAndUpsertPayout

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| aggregateId | TypeIDDescriptionRequired. The ID of the aggregate record for which you want to calculate the rebate amount and upsert the rebate payout. |
| payoutMemberFieldName | TypeStringDescriptionThe name of the field that contains the rebate program member ID for which to perform the payout calculations. |

## Outputs

| Output | Details |
| --- | --- |
| programRebateTypePayoutSourceId | TypeIDDescriptionThe ID of the program rebate type payout source record, which is generated if the request is successful. |

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
      {"aggregateId":"a00xx000000cCtxAAE"},
      {"aggregateId":"a00xx000000cCvZAAU"},
      {"aggregateId":"a00xx000000cCxBAAU"}
   ]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "outputValues":{ 
      "programRebateTypePayoutSourceId":"0ntxx00004000002AAA"
   }
}
```
