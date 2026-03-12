---
title: "Manage Custom Gift Commitment Schedules Action"
domain: edu-cloud-dev-guide
topic: manage-custom-gift-commitment-schedules-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.665Z
estimatedTokens: 272
keywords: [Manage, Custom, Gift, Commitment, Schedules, Action, Creates, updates, schedule, records, their, associated, transaction, REST, HTTP]
---

# Manage Custom Gift Commitment Schedules Action

> Creates or updates up to 15 custom gift commitment schedule records and
   their associated gift transaction records.

# Manage Custom Gift Commitment Schedules Action

Creates or updates up to 15 custom gift commitment schedule records and their associated gift transaction records.

This action is available in API version 59.0 and later for users in orgs where the Fundraising Access license is enabled and the Fundraising User system permission is assigned.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/manageCustomGiftCmtSchds

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| giftCommitmentSchedules | TypesObjectDescriptionRequired.A collection of gift commitment schedule records to be created or updated. |

## Outputs

| Input | Details |
| --- | --- |
| giftCommitmentScheduleList | TypeStringDescriptionA comma-delimited list of gift commitment schedule IDs records that the action created or updated. |

## Example

Here’s a request for the Manage Custom Gift Commitment Schedules action.

```

```

Here’s a response for the Manage Custom Gift Commitment Schedules action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "giftCommitmentSchedules": [
        {
          "StartDate": "2023-08-26",
          "PaymentMethod": "Check",
          "Id": "6csNA000000hbx8YAA",
          "EndDate": "2023-08-28"
        },
        {
          "StartDate": "2023-08-29",
          "PaymentMethod": "Check",
          "Id": "6csNA000000hby4YAA",
          "EndDate": "2023-08-30"
        }
      ]
    }
  ]
}
```

```
[
  {
    "actionName": "manageCustomGiftCmtSchds",
    "errors": null,
    "isSuccess": true,
    "outputValues": {
      "giftCommitmentScheduleIdsList": [
        "6csNA000000hbx8YAA",
        "6csNA000000hby4YAA"
      ]
    },
    "version": 1
  }
]
```
