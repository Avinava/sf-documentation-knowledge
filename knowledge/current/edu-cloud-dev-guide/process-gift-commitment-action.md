---
title: "Process Gift Commitment Action"
domain: edu-cloud-dev-guide
topic: process-gift-commitment-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.687Z
estimatedTokens: 258
keywords: [Process, Gift, Commitment, Action, Updates, status, relevant, statuses, associated, transactions, current, schedule, REST, HTTP, Inputs]
---

# Process Gift Commitment Action

> Updates the status and other relevant fields for a gift commitment
      based on the statuses of the associated gift transactions and the current gift commitment
      schedule.

# Process Gift Commitment Action

Updates the status and other relevant fields for a gift commitment based on the statuses of the associated gift transactions and the current gift commitment schedule.

This action is available in API version 59.0 and later for users in orgs where the Fundraising Access license is enabled and the Fundraising User system permission is assigned.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/processGiftCommitment

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| giftCommitmentId | TypeStringDescriptionRequired.The ID of the gift commitment record to be processed. |

## Outputs

| Input | Details |
| --- | --- |
| giftCommitmentProcessingStatus | TypeStringDescriptionThe status of the gift commitment record after it is processed. |

## Example

Here’s a request for the Process Gift Commitment action.

```

```

Here’s a response for the Process Gift Commitment action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "giftCommitmentId": "6gcNA000000PeKhYAK"
    }
  ]
}
```

```
[
  {
    "actionName": "processGiftCommitment",
    "errors": null,
    "isSuccess": true,
    "outputValues": null,
    "version": 1
  }
]
```
