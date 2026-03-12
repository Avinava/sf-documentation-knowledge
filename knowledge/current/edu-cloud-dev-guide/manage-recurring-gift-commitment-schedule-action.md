---
title: "Manage Recurring Gift Commitment Schedule Action"
domain: edu-cloud-dev-guide
topic: manage-recurring-gift-commitment-schedule-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:24.677Z
estimatedTokens: 388
keywords: [Manage, Recurring, Gift, Commitment, Schedule, Action, Creates, updates, record, upcoming, transaction, REST, HTTP, Inputs, Outputs]
---

# Manage Recurring Gift Commitment Schedule Action

> Creates or updates a recurring type of gift commitment schedule record
      and creates the first upcoming gift commitment transaction record.

# Manage Recurring Gift Commitment Schedule Action

Creates or updates a recurring type of gift commitment schedule record and creates the first upcoming gift commitment transaction record.

This action is available in API version 59.0 and later for users in orgs where the Fundraising Access license is enabled and the Fundraising User system permission is assigned.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/manageRcrGiftCmtSchd

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| effectiveFromDate | TypeDateDescriptionThe date from when the updates to the gift commitment schedule are effective. Only applicable in a schedule update scenario. |
| effectiveToDate | TypeDateDescriptionThe date until when the updates to the gift commitment schedule are effective. Only applicable in a schedule update scenario. |
| giftCommitment​Schedule | TypesObjectDescriptionRequired.The gift commitment schedule record to be created or updated. |
| PaymentInstrument | TypesObjectDescriptionRequired.The payment instrument record to be created or updated. |

## Outputs

| Input | Details |
| --- | --- |
| giftCommitment​ScheduleIdsList | TypeDateDescriptionA comma-delimited list of gift commitment schedule IDs for schedules that were created or updated. |

## Example

Here’s a request for the Manage Recurring Gift Commitment Schedule action.

```

```

Here’s a response for the Manage Recurring Gift Commitment Schedule action.

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
      ],
      "paymentInstrument": {
        "Last4": "1234",
        "Type": "Credit Card",
        "ExpiryMonth": "May",
        "ExpiryYear": "29"
      }
    }
  ]
}
```

```
[
  {
    "actionName": "manageRcrGiftCmtSchd",
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
