---
title: "Adjust Points"
domain: loyalty
topic: adjust-points
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.914Z
estimatedTokens: 395
keywords: [Adjust, Points, loyalty, program, member, journal, transaction, REST, HTTP, Inputs, Outputs]
---

# Adjust Points

> Adjust loyalty points for a specified program member or journal
   transaction.

# Adjust Points

Adjust loyalty points for a specified program member or journal transaction.

This action is available in API version 51.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/adjustPointsAction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| AdjustmentCategory | TypeStringDescriptionThe category of adjustment. |
| AdjustmentType | TypestringDescriptionRequired. The type of adjustment required. |
| JournalId | TypeIDDescriptionID of the transaction journal. |
| LoyaltyProgramCurrencyId | TypeIDDescriptionID of the loyalty program currency. |
| LoyaltyProgramMemberId | TypeIDDescriptionRequired. ID of the loyalty program member to whom the points must be adjusted. |
| Points | TypeFloatDescriptionRequired. The points available for the loyalty program member. |
| PointsExpirationDate | TypestringDescriptionThe date on which fixed-model non-qualifying points credited by the action expire. Points expiration date is only applicable when the adjustment is crediting points to the member. This input is available in API version 55.0 and later. |
| ReasonforChange | TypestringDescriptionRequired. The reason for adjustment. |

## Outputs

| Output | Details |
| --- | --- |
| AdjustmentTransactionJournalId | TypestringDescriptionThe ID of the adjustment transaction journal generated after the request is successful. |

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
      "LoyaltyProgramMemberId": "0lmxx00004000001AAB",
      "LoyaltyProgramCurrencyId": "0lpxx00004000001AAB",
      "Points": 500.0,
      "PointsExpirationDate": "2022-08-12",
      "AdjustmentType": "Credit",
      "ReasonForChange": "Compensation"
   }]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "outputValues":{
        "AdjustmentTransactionJournalId":"0lvxx00004000001AAB"}
   }
}
```
