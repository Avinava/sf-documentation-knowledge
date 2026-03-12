---
title: "Pause Gift Commitment Schedule Action"
domain: nonprofit-cloud
topic: pause-gift-commitment-schedule-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.597Z
estimatedTokens: 317
keywords: [Pause, Gift, Commitment, Schedule, Action, Pauses, period, time, REST, HTTP, Inputs, Outputs]
---

# Pause Gift Commitment Schedule Action

> Pauses a gift commitment schedule for a specified period of
  time.

# Pause Gift Commitment Schedule Action

Pauses a gift commitment schedule for a specified period of time.

This action is available in API version 59.0 and later for users in orgs where the Fundraising Access license is enabled and the Fundraising User system permission is assigned.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/pauseGiftCommitmentSchedule

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| endDate | TypeDateDescriptionThe date to resume the gift commitment schedule. |
| giftCommitmentScheduleId | TypeStringDescriptionRequired.The ID of the gift commitment schedule record to be paused. |
| startDate | TypeDateDescriptionThe date to pause the gift commitment schedule. |
| updateReason | TypeStringDescriptionThe reason the gift commitment schedule is to be paused. |

## Outputs

| Input | Details |
| --- | --- |
| giftCommitmentScheduleIdsList | TypeStringDescriptionA comma-delimited list of gift commitment schedule IDs for schedules that were created or updated. |

## Example

Here’s a request for the Pause Gift Commitment Schedule action.

```

```

Here’s a response for the Pause Gift Commitment Schedule action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "giftCommitmentScheduleId": "6csNA000000YNbOYAW",
      "startDate": "2023-08-25"
    }
  ]
}
```

```
[
  {
    "actionName": "pauseGiftCommitmentSchedule",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "giftCommitmentScheduleIdsList": [
        "6csNA000000YNbOYAW",
        "6csNA000000hbxuYAA"
      ]
    },
    "version": 1
  }
]
```
