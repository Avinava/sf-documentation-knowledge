---
title: "Service Appointments"
domain: salesforce-scheduler-developer-guide
topic: service-appointments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.382Z
estimatedTokens: 1445
keywords: [Service, Appointments, appointment, records, assign, resources, generate, leads, including, group, multiple, participants]
---

# Service Appointments

> Create and update service appointment records, assign resources, and
      generate leads, including group appointments with multiple participants.

# Service Appointments

Create and update service appointment records, assign resources, and generate leads, including group appointments with multiple participants.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

When these parameters aren't specified, the API doesn't check for the availability of time slots. To ensure that duplicate service appointments aren't created, specify these parameters.

-   WorkTypeId
-   ServiceTerritoryId
-   SchedStartTime
-   SchedEndTime
-   AssignedResources

Resource

```

```

Example

```

```

Available version

48.0

HTTP methods

POST, PATCH

PATCH is available in version 51.0 and later.

Request body for POST

JSON example

```

```

JSON example for unauthenticated user

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assignedResources | Assigned Resource Input[] | Service resource who is assigned to a service appointment.NoteWhen creating an appointment, you can use extendedFields to add values to any of the fields, including custom fields, in assignedResources as long as you have edit access to those fields. | Optional | 48.0 |
| lead | Lead Input[] | Prospect or lead. | Required if serviceAppointment isn’t providedNoteRequired to create a service appointment with unauthenticated guest users. | 48.0 |
| schedulingPolicyId | String | ID of the AppointmentSchedulingPolicy object. If no scheduling policy is passed in the request body, the default configurations are used. The only scheduling policy configuration that is used in determining time slots is the enforcement of account visiting hours. | Optional | 48.0 |
| serviceAppointment | Service Appointment Input[] | Appointment to complete a service work for a customer.NoteWhen creating an appointment, you can use extendedFields to add values to any of the fields, including custom fields, in serviceAppointment as long as you have edit access to those fields. | Required if lead isn’t provided | 48.0 |

Request body for PATCH

JSON example

```

```

Request example to update the scheduled time

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

The API updates the equivalent Salesforce calendar events and block times when the scheduled time is updated.

```

```

Request example to update the work type

```

```

Request example to update the service territory

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assigned​Resources | Assigned Resource Input[] | Service resource who is assigned to a service appointment.When updating an appointment, pass the complete list of resources needed.If you don’t pass a resource that is assigned to a service appointment, the API deletes that assigned resource. For example, suppose that an existing service appointment has assigned resources: A and B and if you pass assigned resources: B and C. The API checks the resource availability of B and C for existing work type and service territory, and if both are available, the service appointment gets updated with:Resource A—DeletedResource B—UpdatedResource C—CreatedHowever, if you don’t pass any of the assigned resources, the API assumes there is no change.NoteWhen updating an appointment, you can use extendedFields to add values to any of the fields, including custom fields, in assignedResources as long as you have edit access to those fields. | Optional | 51.0 |
| scheduling​PolicyId | String | ID of the AppointmentSchedulingPolicy object. If no scheduling policy is passed in the request body, the default configurations are used. The only scheduling policy configuration that is used in determining time slots is the enforcement of account visiting hours. | Optional | 51.0 |
| service​Appointment | Service Appointment Input[] | Appointment to complete a service work for a customer.When updating an appointment, pass only the fields that need to be updated.NoteWhen updating an appointment, you can use extendedFields to add values to any of the fields, including custom fields, in serviceAppointment as long as you have edit access to those fields. | Required | 51.0 |
| service​AppointmentId | String | ID of the service appointment that you want to update. | Required | 51.0 |

Response body for POST and PATCH

[Service Appointment Output](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_service_appointment_output.htm "Output of the service appointment POST method.")

Considerations for using engagment channel types with the service-appointments resource

-   **Schedule Appointments Using Engagement Channels** must be enabled in Salesforce Scheduler Settings in your Salesforce org.
-   When you create or modify appointments, shifts must be defined in the scheduling policy. For more information on setting up shifts in the scheduling policy, see [Define Shift Rules in Scheduling Policy](https://help.salesforce.com/s/articleView?id=platform.ls_use_shifts_to_determine_time_slots.htm&type=5&language=en_US "HTML (New Window)").

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    Engagement channel types are not supported with operating hours rules in the scheduling policy.

-   When you use engagement channels and shifts to create or modify a service appointment, Salesforce Scheduler must consider the default value for the Appointment Type (if not specified). However, Salesforce Scheduler only considers the engagement channel and Appointment Type is ignored.

## Code Examples

```
/connect/scheduling/service-appointments
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect​/scheduling/service-appointments
```

```
{
  "serviceAppointment": {
    "parentRecordId": "0012w000004oZXgAAM",
    "workTypeId": "08q2w000000XmniAAC",
    "serviceTerritoryId": "0Hh2w000000XmoXCAS",
    "engagementChannelTypeId": "0eFRM00000000Bv2AI",
    "schedStartTime": "2020-02-26T15:00:00.000Z",
    "schedEndTime": "2020-02-26T16:00:00.000Z",
    "street": "1 Market Street",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "USA",
    "appointmentType": "In Person",
    "appointmentMode": "Group",
    "attendeeLimit": "20",
    "extendedFields": [
      {
        "name": "Email",
        "value": "rachel.adams@salesforce.com"
      },
      {
        "name": "Phone",
        "value": "111111111"
      },
      {
        "name": "Description",
        "value": "Test Description"
      }
    ]
  },
  "assignedResources": [
    {
      "serviceResourceId": "0Hn2w000000gDWDCA2",
      "isRequiredResource": true,
      "isPrimaryResource": true,
      "extendedFields": []
    },
    {
      "serviceResourceId": "0Hn2w000000gCqnCAE",
      "isRequiredResource": true,
      "isPrimaryResource": false,
      "extendedFields": []
    }
  ]
}
```

```
{
  "serviceAppointment": {
    "workTypeId": "08q2w000000XmniAAC",
    "serviceTerritoryId": "0Hh2w000000XmoXCAS",
    "engagementChannelTypeId": "0eFRM00000000Bv2AI",
    "schedStartTime": "2020-02-26T15:00:00.000Z",
    "schedEndTime": "2020-02-26T16:00:00.000Z",
    "street": "1 Market Street",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "USA",
    "appointmentType": "In Person",
    "appointmentMode": "Group",
    "attendeeLimit": "20",
    "extendedFields": []
  },
  "assignedResources": [
    {
      "serviceResourceId": "0Hn2w000000gDWDCA2",
      "isRequiredResource": true,
      "isPrimaryResource": true,
      "extendedFields": []
    }
  ],
  "lead": {
    "firstName": "Rachel",
    "lastName": "Adams",
    "phone": "012-345-6789",
    "email": "rachel.adams@salesforce.com",
    "company": "Salesforce",
    "extendedFields": []
  }
}
```

```
{
  "serviceAppointmentId": "08pxx0000004C92AAE",
  "serviceAppointment": {
    "workTypeId": "08pxx0000004C92AAE",
    "serviceTerritoryId": "0Hh2xx0000004CAeCAM",
    "engagementChannelTypeId": "0eFRM0000004CC22AM", 
    "schedStartTime": "2020-09-15T16:00:00+0000",
    "schedEndTime": "2020-09-15T17:00:00+0000",
    "street": "1 Market Street",
    "city": "San Francisco",
    "state": "CA",
    "postalCode": "94105",
    "country": "USA",
    "appointmentType": "In Person",
    "appointmentMode": "Group",
    "attendeeLimit": "20",
    "extendedFields": [
      {
        "name": "Email",
        "value": "rachel.adams@salesforce.com"
      },
      {
        "name": "Phone",
        "value": "111111111"
      },
      {
        "name": "Description",
        "value": "Test Description"
      }
    ],
  "assignedResources": [
    {
      "serviceResourceId": "0Hnxx0000004CAeCAM",
      "isRequiredResource": true,
      "isPrimaryResource": false,
      "extendedFields": []
    },
  ]
}
```

## Related Topics

- Assigned Resource Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_assigned_resource_input.htm)
- Lead Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_lead_input.htm)
- Service Appointment Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_service_appointment_input.htm)
- Service Appointment Output (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_responses_service_appointment_output.htm)
