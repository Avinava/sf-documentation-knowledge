---
title: "Close Gift Commitment Action"
domain: edu-cloud-dev-guide
topic: close-gift-commitment-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.660Z
estimatedTokens: 207
keywords: [Close, Gift, Commitment, Action, Updates, status, closed, unpaid, failed, transactions, REST, HTTP, Inputs, Outputs]
---

# Close Gift Commitment Action

> Updates the status of a gift commitment to closed and updates the
   status for each of its unpaid and failed gift transactions.

# Close Gift Commitment Action

Updates the status of a gift commitment to closed and updates the status for each of its unpaid and failed gift transactions.

This action is available in API version 59.0 and later for users in orgs where the Fundraising Access license is enabled and the Fundraising User system permission is assigned.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/closeGiftCommitment

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| giftCommitmentId | TypeStringDescriptionRequired.The ID of the gift commitment record to be closed. |

## Outputs

None.

## Example

Here’s a request for the Close Gift Commitment action.

```

```

Here’s a response for the Close Gift Commitment action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "giftCommitmentId": "6gcNA000000YshCYAS"
    }
  ]
}
```

```
[
  {
    "actionName": "closeGiftCommitment",
    "errors": null,
    "isSuccess": true,
    "outputValues": null,
    "version": 1
  }
]
```
