---
title: "AppointmentSchedulingEvent"
domain: salesforce-scheduler-developer-guide
topic: appointmentschedulingevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.655Z
estimatedTokens: 695
keywords: [AppointmentSchedulingEvent, Notifies, subscribers, appointment, schedule, added, updated, deleted, API, version, 50.0, later, Calls, Special, Access]
---

# AppointmentSchedulingEvent

> Notifies subscribers when an appointment schedule is added, updated, or
      deleted. This object is available in API version 50.0 and later.

# AppointmentSchedulingEvent

Notifies subscribers when an appointment schedule is added, updated, or deleted. This object is available in API version 50.0 and later.

## Supported Calls

describeSObjects()

## Special Access Rules

AppointmentSchedulingEvent is available as part of Salesforce Scheduler.

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/AppointmentSchedulingEvent

## Event Delivery Allocation Enforced

Yes

## Fields

| Field | Details |
| --- | --- |
| AssignedResourceFields | TypeAsgnRsrcApptSchdEvent[]PropertiesNillableDescriptionThe assigned resources associated with the appointment. |
| ChangeType | TypestringPropertiesNillableDescriptionThe operation that caused the change. For example: CREATE, UPDATE, DELETE. |
| CorrelationId | TypestringPropertiesNillableDescriptionThe universally unique identifier (UUID) that correlates the appointment with the platform event. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. This field is available in API version 52.0 and later. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| ServiceAppointmentFields | TypeSvcApptSchdEvent[]PropertiesNillableDescriptionThe service appointments associated with the appointment. |

## Example

This example event message is for a new appointment with two assigned resources.

```

```

-   **[AsgnRsrcApptSchdEvent](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_asgnrsrcapptschdevent.htm)**
    Represents the assigned resources that are part of various platform events. This object is included in a streamed notification received on the channels for the parent platform events. You can’t subscribe to the AsgnRsrcApptSchdEvent channel directly. This object is available in API version 50.0 and later.
-   **[SvcApptSchdEvent](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_svcapptschdevent.htm)**
    Represents the service appointment event. This object is included in a streamed notification received on the channels for the parent platform events. You can’t subscribe to the SvcApptSchdEvent channel directly. This object is available in API version 50.0 and later.

## Code Examples

```
{
  "schema": "Zog7FKcPWV9DeEIEVHsoug",
  "payload": {
    "CreatedById": "005xx000001X7dlAAC",
    "ChangeType": "CREATE",
    "ServiceAppointmentFields": {
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
      "Subject": "Apply for Privileged Customer Card",
      "AppointmentType": "null",
      "StatusCategory": "None",
      "DurationInMinutes": 60,
      "Phone": "4155551212",
      "ScheduledStartTime": "2020-02-27T23:45:00.000Z"
    },
    "AssignedResourceFields": [
      {
        "IsPrimaryResource": true,
        "ServiceResourceUserName": "Rachel Adams",
        "ServiceResourceUserId": "005xx000001X7dl",
        "AssignedResourceId": "03rxx0000004gLc",
        "ServiceResourceId": "0Hnxx0000004C92",
        "ServiceResourceUserEmail": "ra@example.com",
        "IsRequiredResource": true
      },
      {
        "IsPrimaryResource": false,
        "ServiceResourceUserName": "Andrew Collins",
        "ServiceResourceUserId": "005xx000001XPNl",
        "AssignedResourceId": "03rxx0000004gNE",
        "ServiceResourceId": "0Hnxx0000006z8q",
        "ServiceResourceUserEmail": "ac@example.com",
        "IsRequiredResource": false
      }
    ],
    "CreatedDate": "2020-02-25T01:57:39.936Z",
    "CorrelationId": "d7c0bbGiUObLF6BD3NaG"
  },
  "event": {
    "replayId": 3
  }
}
```

## Related Topics

- AsgnRsrcApptSchdEvent (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_asgnrsrcapptschdevent.htm)
- SvcApptSchdEvent (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_svcapptschdevent.htm)
