---
title: "Generate Rebate Payout Periods"
domain: channel-revenue-management-dev-guide
topic: generate-rebate-payout-periods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.070Z
estimatedTokens: 215
keywords: [Generate, Rebate, Payout, Periods, program, frequency, REST, HTTP, Inputs, Outputs, Usage]
---

# Generate Rebate Payout Periods

> Generate payout periods for a rebate program based on the frequency
         specified in the program.

# Generate Rebate Payout Periods

Generate payout periods for a rebate program based on the frequency specified in the program.

This object is available in API version 51.0 and later for users with Rebate Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/generateRebatePayoutPeriods

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| rebateProgramId | TypeIDDescriptionRequired. The ID of the rebate program record for which you want to generate payout periods. |

## Outputs

| Output | Details |
| --- | --- |
| rebateProgramPayoutPeriods | TypestringDescriptionThe list of rebate program payout period IDs upserted if the request is successful. |

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
   "inputs":[{"rebateProgramId":"0lcxx00004000002AAA"},
      {"rebateProgramId":"0lcxx00004000002AAA"}
   ]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "RebateProgramPayoutPeriodIds":["0ntxx00004000002AAA","0ntxx00004000002AAB"]
},{ 
   "errors":null,
   "isSuccess":true,
   "RebateProgramPayoutPeriodIds":["0ntxx00004000002AAA","0ntxx00004000002AAB"]
}
```
