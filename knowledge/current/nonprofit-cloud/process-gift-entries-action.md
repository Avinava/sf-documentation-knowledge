---
title: "Process Gift Entries Action"
domain: nonprofit-cloud
topic: process-gift-entries-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.607Z
estimatedTokens: 505
keywords: [Process, Gift, Entries, Action, Processes, singly, part, batch, entry, creating, donor, transaction, designation, soft, credit]
---

# Process Gift Entries Action

> Processes, singly or as part of a batch, a specified gift entry ID,
   creating related donor, gift transaction, gift transaction designation, and gift soft credit
   records. You may also test gift entry processing to check for errors before creating related
  records.

# Process Gift Entries Action

Processes, singly or as part of a batch, a specified gift entry ID, creating related donor, gift transaction, gift transaction designation, and gift soft credit records. You may also test gift entry processing to check for errors before creating related records.

This action is available in API version 59.0 and later for users in orgs where the Fundraising Access license is enabled and the Fundraising User system permission is assigned.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/processGiftEntries

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| giftEntryId | TypeIDDescriptionRequired.The ID of the gift entry record to be processed. |
| isDryRun | TypeBooleanDescriptionIndicates whether to run the action without creating or updating records to determine if there are any errors (true) or actual processing (false).The default value is false. |

## Outputs

| Output | Details |
| --- | --- |
| donorId | TypeIDDescriptionThe ID of the person, household, or organization account that’s associated with the gift entry. |
| giftEntryId | TypeIDDescriptionThe ID of the gift entry record that is processed. |
| giftProcessingErrorDetails | TypeStringDescriptionThe error details when the gift processing status is Failure. |
| giftProcessingStatus | TypeStringDescriptionThe processing status of the gift entry.Valid values are:FailureNewSuccess |
| giftTransactionId | TypeIDDescriptionThe ID of the gift transaction that’s associated with the gift entry. |

## Example

Here’s a request for the Process Gift Entries action for processing a gift entry.

```

```

Here’s a response for the Process Gift Entries action for processing a gift entry.

```

```

Here’s a request for the Process Gift Entries action for a dry run of gift entry processing.

```

```

Here’s a response for the Process Gift Entries action for a dry run of gift entry processing.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "giftEntryId": "6geRM00000000GdYAI"
    }
  ]
}
```

```
[
  {
    "actionName": "processGiftEntries",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "giftProcessingStatus": "SUCCESS",
      "giftEntryId": "6geRM00000000GdYAI",
      "giftTransactionId": "6trRM00000003PJ",
      "giftProcessingErrorDetails": null,
      "donorId": "001RM000005ewDDYAY"
    },
    "version": 1
  }
]
```

```
{
  "inputs": [
    {
      "giftEntryId": "6geRM00000000GdYAI",
      "isDryRun": "true",
    }
  ]
}
```

```
[
  {
    "actionName": "processGiftEntries",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "giftProcessingStatus": "New",
      "giftEntryId": "6geRM00000000GdYAI",
      "giftTransactionId": null,
      "giftProcessingErrorDetails": null,
      "donorId": null
    },
    "version": 1
  }
]
```
