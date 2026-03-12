---
title: "Resume Gift Commitment Schedule Action"
domain: edu-cloud-dev-guide
topic: resume-gift-commitment-schedule-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.698Z
estimatedTokens: 298
keywords: [Resume, Gift, Commitment, Schedule, Action, Resumes, paused, date, REST, HTTP, Inputs, Outputs]
---

# Resume Gift Commitment Schedule Action

> Resumes a paused gift commitment schedule on a specified
  date.

# Resume Gift Commitment Schedule Action

Resumes a paused gift commitment schedule on a specified date.

This action is available in API version 59.0 and later for users in orgs where the Fundraising Access license is enabled and the Fundraising User system permission is assigned.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/resumeGiftCommitmentSchedule

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| giftCommitmentScheduleId | TypeStringDescriptionRequired.The ID of the gift commitment schedule record to be resumed. |
| resumeDate | TypeDateDescriptionThe date to resume the gift commitment schedule. |
| updateReason | TypeStringDescriptionThe reason the gift commitment schedule is to be resumed. |

## Outputs

| Input | Details |
| --- | --- |
| giftCommitmentScheduleIdsList | TypeStringDescriptionA comma-delimited list of gift commitment schedule IDs for schedules that were created or updated. |

## Example

Here’s a request for the Resume Gift Commitment Schedule action.

```

```

Here’s a response for the Resume Gift Commitment Schedule action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "giftCommitmentScheduleId": "6csNA000000hbxpYAA",
      "resumeDate": "2023-08-27"
      "updateReason": "Test"
    }
  ]
}
```

```
[
  {
    "actionName": "resumeGiftCommitmentSchedule",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "giftCommitmentScheduleIdsList": [
        "6csNA000000hbxpYAA"
      ]
    },
    "version": 1
  }
]
```
