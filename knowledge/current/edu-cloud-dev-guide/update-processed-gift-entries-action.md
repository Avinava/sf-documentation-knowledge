---
title: "Update Processed Gift Entries Action"
domain: edu-cloud-dev-guide
topic: update-processed-gift-entries-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.704Z
estimatedTokens: 373
keywords: [Processed, Gift, Entries, Action, Updates, status, entry, record, already, processing, fails, failure, reason, updated, REST]
---

# Update Processed Gift Entries Action

> Updates the status of a specified gift entry record that is already
   processed. If the processing fails, the failure reason is updated.

# Update Processed Gift Entries Action

Updates the status of a specified gift entry record that is already processed. If the processing fails, the failure reason is updated.

This action is available in API version 59.0 and later for users in orgs where the Fundraising Access license is enabled and the Fundraising User system permission is assigned.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/updateProcessedGiftEntries

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| donorId | TypeIDDescriptionThe ID of the account of the donor that is updated when giftProcessingStatus is Success. |
| giftEntryId | TypeIDDescriptionRequired.The ID of the gift entry record to be updated. |
| giftProcessingErrorDetails | TypeStringDescriptionThe error details when giftProcessingStatus is Failure. |
| giftProcessingStatus | TypeStringDescriptionThe processing status of the gift entry.Valid values are:FailureNewSuccess |
| giftTransactionId | TypeIDDescriptionThe ID of the gift transaction record associated with the gift entry that is to be updated when giftProcessingStatus is Success. |

## Outputs

| Field | Details |
| --- | --- |
| giftEntryId | TypeIDDescriptionThe ID of the gift entry record that is updated. |

## Example

Here’s a request for the Update Processed Gift Entries action.

```

```

Here’s a response for the Update Processed Gift Entries action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "donorId": "001RM000005ewDDYAY",
      "giftEntryId": "6geRM00000000GdYAI",
      "giftProcessingErrorDetails": null,
      "giftProcessingStatus": "SUCCESS",
      "giftTransactionId": "6trRM00000003PJ"
    }
  ]
}
```

```
[
  {
    "actionName": "updateProcessedGiftEntries",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "giftEntryId": "6geRM00000000GdYAI"
    },
    "version": 1
  }
]
```
