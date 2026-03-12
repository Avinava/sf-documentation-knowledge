---
title: "SvcApptSchdEvent"
domain: salesforce-scheduler-developer-guide
topic: svcapptschdevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.861Z
estimatedTokens: 847
keywords: [SvcApptSchdEvent, service, appointment, event, included, streamed, notification, received, channels, parent, platform, events, can’t, subscribe, channel]
---

# SvcApptSchdEvent

> Represents the service appointment event. This object is included in a streamed
      notification received on the channels for the parent platform events. You can’t subscribe to
      the SvcApptSchdEvent channel directly. This object is available in API version 50.0 and
    later.

# SvcApptSchdEvent

Represents the service appointment event. This object is included in a streamed notification received on the channels for the parent platform events. You can’t subscribe to the SvcApptSchdEvent channel directly. This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects()

## Parent Platform Events

-   AppointmentSchedulingEvent
-   ServiceAppointmentEvent

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypestringPropertiesNillableDescriptionAdditional information about the service appointment. |
| Address | TypestringPropertiesNillableDescriptionThe address of the service appointment. |
| AppointmentType | TypestringPropertiesNillableDescriptionThe service appointment type. |
| ChangedFields | TypecomplexvaluePropertiesNillableDescriptionList of fields that changed. |
| Comments | TypestringPropertiesNillableDescriptionComments about the service appointment. |
| ContactId | TypestringPropertiesNillableDescriptionID of the contact associated with the service appointment. |
| DurationInMinutes | TypedoublePropertiesNillableDescriptionThe duration of the service appointment in minutes. |
| Email | TypestringPropertiesNillableDescriptionThe email associated with the service appointment. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| ParentRecordId | TypestringPropertiesNillableDescriptionID of the parent record associated with the service appointment. |
| Phone | TypestringPropertiesNillableDescriptionThe phone number associated with the service appointment. |
| ScheduledEndTime | TypedateTimePropertiesNillableDescriptionThe scheduled end time of the service appointment. |
| ScheduledStartTime | TypedateTimePropertiesNillableDescriptionThe scheduled start time of the service appointment. |
| ServiceAppointmentId | TypestringPropertiesNillableDescriptionID of the service appointment. |
| ServiceTerritoryId | TypestringPropertiesNillableDescriptionID of the service territories associated with the service appointment. |
| Status | TypestringPropertiesNillableDescriptionThe status of the service appointment. |
| StatusCategory | TypestringPropertiesNillableDescriptionThe status category of the service appointment. |
| Subject | TypestringPropertiesNillableDescriptionThe subject of the service appointment. |
| WorkTypeBlockTimeAfterAppointment | TypeintPropertiesNillableDescriptionThe period of time occurring after the appointment that is typically blocked for this work type. |
| WorkTypeBlockTimeAfterUnit | TypestringPropertiesNillableDescriptionThe unit of the period specified for WorkTypeBlockTimeAfterAppointment. Values include hour and minute. |
| WorkTypeBlockTimeBeforeAppointment | TypeintPropertiesNillableDescriptionThe period of time occurring before the appointment that is typically blocked for this work type. |
| WorkTypeBlockTimeBeforeUnit | TypestringPropertiesNillableDescriptionThe unit of the period specified for WorkTypeBlockTimeBeforeAppointment. Values include hour and minute. |
| WorkTypeId | TypestringPropertiesNillableDescriptionID of the work type associated with the service appointment. |

## Example

This example shows the service appointment fields associated with the event.

```

```

## Code Examples

```
{
  "ParentRecordId": "001RM000003rwkfYAA",
  "ContactId": "003RM000006EpajYAC",
  "Status": "None",
  "AdditionalInformation": "Sample additional information",
  "ServiceTerritoryId": "0Hhxx0000004mu4",
  "Comments": "Sample comment",
  "Email": "abc@example.com",
  "Address": "1 Market Street San Francisco CA 94105 United States",
  "WorkTypeId": "08qxx0000004C92",
  "WorkTypeBlockTimeBeforeAppointment": 30,
  "WorkTypeBlockTimeAfterAppointment": 1,
  "WorkTypeBlockTimeBeforeUnit": "minutes",
  "WorkTypeBlockTimeAfterUnit": "hours",
  "ServiceAppointmentId": "08pxx0000005Ip6",
  "ScheduledEndTime": "2020-02-28T00:45:00.000Z",
  "Subject": "Apply for Chase Sapphire Preferred Card",
  "AppointmentType": "null",
  "StatusCategory": "None",
  "DurationInMinutes": 60,
  "Phone": "4157286216",
  "ScheduledStartTime": "2020-02-27T23:45:00.000Z"
}
```
