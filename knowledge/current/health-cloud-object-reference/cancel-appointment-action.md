---
title: "Cancel Appointment Action"
domain: health-cloud-object-reference
topic: cancel-appointment-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:32.063Z
estimatedTokens: 327
keywords: [Cancel, Appointment, Action, REST, HTTP, Inputs, Outputs, Usage]
---

# Cancel Appointment Action

> Cancel an existing appointment.

# Cancel Appointment Action

Cancel an existing appointment.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/66.0/connect/health/appointment-management/appointment/{id}

Formats

JSON, XML

HTTP Methods

PATCH

Authentication

Authorization: Bearer Token

## Inputs

| Input | Details |
| --- | --- |
| cancellationReason | TypeStringDescriptionReason for the cancellation. |
| comment | TypeStringDescriptionAdditional notes or comments for the cancellation. |
| id | TypeStringDescriptionRequiredUnique identifier of the appointment to update. This is part of the request URL. |
| status | TypeStringDescriptionRequiredNew status for the appointment. Must be a valid cancellation status such as Cancelled. |

## Outputs

| Output | Details |
| --- | --- |
| errorMessages | TypeArrayDescriptionA list of errors, if any occurred. |
| id | TypeStringDescriptionThe id of the Appointment. |
| isSuccess | TypeBooleanDescriptionIndicates whether the appointment was cancelled successfully or not. |
| status | TypeStringDescriptionThe status of the Appointment, like Scheduled, Rejected. |

## Usage

PATCH

This sample request is for the Cancel Appointment action.

```

```

This sample response is for the Cancel Appointment action.

```

```

## Code Examples

```
{
    "id": "08xxG000000Axx6YAC",
    "status": "Cancelled",
    "cancellationReason": "Patient requested cancellation.",
    "comment": "Patient will call back to reschedule."
}
```

```
{
    "id": "08pxx000000Axx6YAC",
    "isSuccess": true,
    "status": "Cancelled",
    "errorMessages": []
}
```
