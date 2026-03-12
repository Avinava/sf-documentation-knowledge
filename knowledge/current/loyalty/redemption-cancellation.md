---
title: "Redemption Cancellation"
domain: loyalty
topic: redemption-cancellation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.928Z
estimatedTokens: 250
keywords: [Redemption, Cancellation, Revert, specific, transactions, REST, HTTP, Inputs, Outputs]
---

# Redemption Cancellation

> Revert a specific set of redemption transactions.

# Redemption Cancellation

Revert a specific set of redemption transactions.

This action is available in API version 51.0 and later for users with Loyalty Management license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/cancelRedemption

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| CancellationReason | TypestringDescriptionRequired. The reason for cancellation of redemption transaction. |
| ExpiryDate | TypedateDescriptionThe date of expiration. |
| ReversalCategory | TypestringDescriptionThe category of reversal. |
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
      "TransactionJournalId":"0lvxx00004000001AAA",
      "CancellationReason":"Order Returned by Member",
      "ExpiryDate":"2020-04-15"
   }]
}
```

```
{
   "errors":null,
   "isSuccess":true,
   "outputValues":{ 
        "CancellationTransactionJournalId":"0lvxx00004000001AAB"}
   }
}
```
