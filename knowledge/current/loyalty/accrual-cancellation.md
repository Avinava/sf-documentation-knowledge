---
title: "Accrual Cancellation"
domain: loyalty
topic: accrual-cancellation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.924Z
estimatedTokens: 232
keywords: [Accrual, Cancellation, Cancel, specific, transactions, REST, HTTP, Inputs, Outputs]
---

# Accrual Cancellation

> Cancel a specific set of accrual transactions.

# Accrual Cancellation

Cancel a specific set of accrual transactions.

This action is available in API version 51.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/cancelAccrual

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| CancellationReason | TypestringDescriptionRequired. The reason for accrual cancellation. |
| ReversalCategory | TypestringDescriptionThe category of accrual cancellation. |
| TransactionJournalId | TypestringDescriptionRequired. ID of the transaction journal. |

## Outputs

| Output | Details |
| --- | --- |
| CancellationTransactionJournalId | TypestringDescriptionThe ID of the cancellation transaction journal generated after the request is successful. |

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
      "TransactionJournalId": "0lvxx00004000001AAA",
      "CancellationReason": "Duplicate Accrual"
   }]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "outputValues":{ 
        "CancellationTransactionJournalId":"0lvxx00004000001AAB"
   }
}
```
