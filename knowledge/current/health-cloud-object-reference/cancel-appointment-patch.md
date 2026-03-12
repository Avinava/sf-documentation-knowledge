---
title: "Cancel Appointment (PATCH)"
domain: health-cloud-object-reference
topic: cancel-appointment-patch
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.225Z
estimatedTokens: 194
keywords: [Cancel, Appointment, PATCH, health]
---

# Cancel Appointment (PATCH)

> Cancel a health appointment.

# Cancel Appointment (PATCH)

Cancel a health appointment.

Resource

```

```

Resource Example

```

```

HTTP methods

PATCH

Request body for PATCH

{ "id": "08pxx0000004KhxxAE", "status": "canceled" }

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available version |
| --- | --- | --- | --- | --- |
| id | String | ID of the appointment to cancel. | Required | 65.0 |
| status | String | Status to set the appointment to, ​as configured in Salesforce appointment statuses. | Required | 65.0 |

Response body for PATCH

[Cancel Appointment Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_appointment_management.htm "Output representation for appointment management.")

## Code Examples

```
/connect/health/appointment-management/​appointment/​{appointmentId}
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/health/appointment-management/​appointment/​08pxx0000004KxxAAE
```

## Related Topics

- Cancel Appointment Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_appointment_management.htm)
