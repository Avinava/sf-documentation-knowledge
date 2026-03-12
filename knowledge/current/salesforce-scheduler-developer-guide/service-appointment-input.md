---
title: "Service Appointment Input"
domain: salesforce-scheduler-developer-guide
topic: service-appointment-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.309Z
estimatedTokens: 808
keywords: [Service, Appointment, Input, representation]
---

# Service Appointment Input

> Input representation of the service appointment
    details.

# Service Appointment Input

Input representation of the service appointment details.

Root XML tag

<serviceAppointment>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | String | Additional information about the service appointment. | Optional | 48.0 |
| appointment​Type | String | Specifies the API name of the appointment type for the service appointment. | Optional | 48.0 |
| appointment​Mode | String | Mode of the service appointment. Valid values are:GroupRegularThe default value is Regular. | Optional | 60.0 |
| attendee​Limit | Integer | Maximum number of customers that’s allowed to attend the service appointment. | Required if the appointment mode is Group. | 60.0 |
| city | String | City where the appointment is completed. | Optional | 48.0 |
| comments | String | Comments about the appointment. | Optional | 48.0 |
| contact​Id | String | Contact associated with the parent record. | Optional | 48.0 |
| country | String | Country where the appointment is completed. | Optional | 48.0 |
| description | String | Description of the appointment. | Optional | 48.0 |
| engagementChannel​​​TypeId | String | ID of the engagement channel type to associate with the appointment.You can use engagement channel type only if:Schedule Appointments Using Engagement Channels is enabled in Salesforce Scheduler Settings in your Salesforce org.Shifts are defined in the scheduling policy. For more information on setting up shifts in the scheduling policy, see Define Shift Rules in Scheduling Policy.NoteEngagement channel types are not supported with operating hours rules in the scheduling policy. | Optional | 56.0 |
| extended​Fields | Extended Fields Input[] | Custom fields. | Optional | 48.0 |
| parent​RecordId | String | Parent record associated with the appointment. | Required | 48.0 |
| postalCode | String | Postal code where the appointment is completed. | Optional | 48.0 |
| sched​EndTime | String | Time at which the appointment is scheduled to end.Ensure the scheduled start time and end time align with the available time slots. | Optional | 48.0 |
| sched​StartTime | String | Time at which the appointment is scheduled to start.Ensure the scheduled start time and end time align with the available time slots. | Optional | 48.0 |
| service​TerritoryId | String | Service territory associated with the appointment. | Optional | 48.0 |
| state | String | State where the service appointment is completed. | Optional | 48.0 |
| street | String | Street number and name where the service appointment is completed. | Optional | 48.0 |
| subject | String | Short phrase describing the appointment. | Optional | 48.0 |
| workType​Id | String | Work type associated with the service appointment. If specified, it is added to the service appointment record. | Optional | 48.0 |

#### See Also

-   [*Salesforce Help*: How Salesforce Scheduler Determines Available Time Slots](https://help.salesforce.com/s/articleView?id=platform.ls_how_are_time_slots_determined.htm&type=5&language=en_US "Salesforce Help: How Salesforce Scheduler Determines Available Time
    Slots - HTML (New Window)")

## Code Examples

```
{
  "serviceAppointment": {
    "parentRecordId": "001RM000004PhDgYAK",
    "workTypeId": "08qRM0000004LyJYAU",
    "serviceTerritoryId": "0HhRM0000004MNd0AM",
    "schedStartTime": "2019-10-30T13:00:00.000Z",
    "schedEndTime": "2019-10-30T14:00:00.000Z",
    "street": "1 Market Street",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "USA",
    "appointmentType": "In Person",
    "appointmentMode": "Group",
    "attendeeLimit": "20",
    "extendedFields": []
  }
}
```

## Related Topics

- Extended Fields Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_extended_fields_input.htm)
