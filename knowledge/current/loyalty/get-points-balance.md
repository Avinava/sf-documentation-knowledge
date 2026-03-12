---
title: "Get Points Balance"
domain: loyalty
topic: get-points-balance
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.984Z
estimatedTokens: 336
keywords: [Points, Balance, Retrieve, loyalty, program, member, REST, HTTP, Inputs, Outputs]
---

# Get Points Balance

> Retrieve the loyalty points balance for a specified loyalty program
   member.

# Get Points Balance

Retrieve the loyalty points balance for a specified loyalty program member.

This action is available in API version 51.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/getPointsBalance

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| LoyaltyProgramMemberId | TypestringDescriptionRequired. ID of the loyalty program member to whom the points balance are to be fetched. |
| ProgramCurrencyName | TypestringDescriptionRequired. The name of the program currency. |
| ProgramName | TypestringDescriptionRequired. The name of the loyalty program. |

## Outputs

| Output | Details |
| --- | --- |
| LoyaltyProgramMemberId | TypeIDDescriptionID of the loyalty program member. |
| PointsBalance | TypeintegerDescriptionThe points available for the loyalty program member. |
| ProgramCurrencyName | TypestringDescriptionThe name of the program currency. |
| ProgramName | TypestringDescriptionThe name of the loyalty program. |
| EscrowPointsBalance | TypedoubleDescriptionThe number points that are placed in escrow for the member. This field is available in API version 53.0 and later. |

## Example

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
      "LoyaltyProgramMemberId":"0lMxx0000A000001EAA",
      "ProgramCurrencyName":"Avios",
      "ProgramName":"baLoyalty"
   }]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "outputValues":{ 
        "LoyaltyprogramMemberId":"0lMxx0000A000001EAA",
        "ProgramCurrencyName":"Avios",
        "ProgramName":"baLoyalty"
        "PointsBalance":500.0
        "EscrowPointsBalance": 25.00
   }
}
```
