---
title: "Time Slots"
domain: rest-api
topic: time-slots
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.045Z
estimatedTokens: 199
keywords: [Time, Slots, result, Appointments]
---

# Time Slots

> Describes the result of Get Appointments Slots request.

# Time Slots

Describes the result of Get Appointments Slots request.

List of time slots available for each territory.

| Name | Type | Description |
| --- | --- | --- |
| endTime | String | The end time of the appointment time slot. |
| engagementChanneltypeIds | String[] | The engagement channel type ID associated with this time slot. This field is available in API version 56.0 and later. |
| remainingAppointments | Integer | The number of appointments available in the time slot.Appointments available in a time slot = Maximum number of appointments defined for the time slot - Number of appointments scheduled so far in the time slot |
| startTime | String | The start time of the appointment time slot. |
| territoryId | String | The service territory associated with this time slot. |
