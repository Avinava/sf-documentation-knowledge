---
title: "Credit Points"
domain: loyalty
topic: credit-points
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.950Z
estimatedTokens: 474
keywords: [Credit, Points, loyalty, program, member’s, balance, REST, HTTP, Inputs, Outputs]
---

# Credit Points

> Credit loyalty points to a specified loyalty program member’s
   balance.

# Credit Points

Credit loyalty points to a specified loyalty program member’s balance.

This action is available in API version 51.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/creditPoints

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| AdditionalNotes | TypeStringDescriptionAdditional information about the transactions performed by the loyalty program members. |
| CorrelationId | TypeIDDescriptionID of any Salesforce entity. |
| FlowId | TypeIDDescriptionID of the flow associated with credit points action. |
| JournalId | TypeIDDescriptionRequired. ID of the transaction journal. |
| LoyaltyProgramMemberId | TypeIDDescriptionRequired. ID of the loyalty program member. |
| Points | TypeFloatDescriptionRequired. The points available for the loyalty program member. |
| ProgramCurrencyName | TypestringDescriptionRequired. The name of the program currency. |
| PointsExpirationDate | TypestringDescriptionThe date on which fixed-model non-qualifying points credited by the action expire. This input is available in API version 55.0 and later. |
| ProgramName | TypestringDescriptionRequired. The name of the loyalty program. |
| LoyaltyProgramCurrencySubtypeName | TypestringDescriptionRequired. The name of the loyalty program currency subtype that is used to credit points from the member. |

## Outputs

| Output | Details |
| --- | --- |
| JournalId | TypeIDDescriptionID of the transaction journal. |
| LoyaltyProgramMemberId | TypestringDescriptionID of the loyalty program member. |
| ProgramCurrencyName | TypestringDescriptionThe name of the program currency. |
| ProgramName | TypestringDescriptionThe name of the loyalty program. |

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
      "LoyaltyProgramMemberId": "0lMxx0000A000001EAA",
      "ProgramCurrencyName": "Avios",
      "ProgramName": "baLoyaltyProgram",
      "Points": 500.0,
      "PointsExpirationDate": "12-08-2022",
"CorrelationId": "0lcxx00004000002AAA",
      "JournalId": "0lcxx00204000001AAA",
      "FlowId": "0lcxx00204000001AAA",
      "AdditionalNotes":"Any additional Information"
   }]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "outputValues":{ 
        "LoyaltyProgramMemberId":"0lMxx0000A000001EAA",
        "ProgramCurrencyName":"Avios",
        "ProgramName":"baLoyalty",
        "JournalId":"0lMxx0000A000001EAA"
   }
}
```
