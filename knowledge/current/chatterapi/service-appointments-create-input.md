---
title: "Service Appointments Create Input"
domain: chatterapi
topic: service-appointments-create-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.828Z
estimatedTokens: 391
keywords: [Service, Appointments, Input, representation, creating, appointment, assign, resources, generate, leads, either, parentRecordId, lead]
---

# Service Appointments Create Input

> Input representation for creating a service appointment. You can
      create service appointments, assign resources, and generate leads with either parentRecordId or lead but
      not both.

# Service Appointments Create Input

Input representation for creating a service appointment. You can create service appointments, assign resources, and generate leads with either parentRecordId or lead but not both.

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

## Code Examples

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

## Related Topics

- Assigned Resource Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_assigned_resource_input.htm)
- Lead Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_lead_input.htm)
- Service Appointment Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_service_appointment_input.htm)
