---
title: "Debit Points"
domain: loyalty
topic: debit-points
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.958Z
estimatedTokens: 538
keywords: [Debit, Points, loyalty, program, member’s, balance, redeem, service, upgrade, member, higher, tier, REST, HTTP, Inputs]
---

# Debit Points

> Debit loyalty points from a specified loyalty program member’s balance.
   You can debit loyalty points to redeem for a service or upgrade the member to a higher
  tier.

# Debit Points

Debit loyalty points from a specified loyalty program member’s balance. You can debit loyalty points to redeem for a service or upgrade the member to a higher tier.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

This action updates the point balance in the LoyaltyProgramMemberCurrency table in your Salesforce org.

This action is available in API version 51.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/debitPoints

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
| FlowId | TypeIDDescriptionID of the flow associated with the debit points action. |
| JournalId | TypeIDDescriptionRequired. ID of the transaction journal. |
| LoyaltyProgramMemberId | TypeIDDescriptionRequired. ID of the loyalty program member to whom the points must be deducted. |
| Points | TypeFloatDescriptionRequired. The points available for the loyalty program member. |
| ProgramCurrencyName | TypestringDescriptionRequired. The name of the loyalty program currency. |
| ProgramName | TypestringDescriptionRequired. The name of the loyalty program. |
| LoyaltyProgramCurrencySubtypeName | TypestringDescriptionRequired. The name of the loyalty program currency subtype that is used to debit points from the member. |

## Outputs

| Output | Details |
| --- | --- |
| JournalId | TypeIDDescriptionID of the transaction journal. |
| LoyaltyProgramMemberId | TypestringDescriptionID of the loyalty program member. |
| PointsBalance | TypeIntegerDescriptionThe total points available for the loyalty program member. |
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
      "CorrelationId": "0lcxx00004000002AAA",
      "JournalId": "0lcxx00204000001AAA",
      "AdditionalNotes": "Any additional Information"
   }]
}
```

```
[ {
  "actionName" : "debitPoints",
  "errors" : null,
  "isSuccess" : true,
  "outputValues" : {
    "JournalId" : "0lcxx00204000001AAA",
    "PointsBalance" : 130.0,
    "ProgramCurrencyName" : "exclusive points",
    "LoyaltyProgramMemberId" : "0lMxx0000A000001EAA",
    "ProgramName" : "sample program"
  }
} ]
```
