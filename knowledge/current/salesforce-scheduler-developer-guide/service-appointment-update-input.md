---
title: "Service Appointment Update Input"
domain: salesforce-scheduler-developer-guide
topic: service-appointment-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.326Z
estimatedTokens: 753
keywords: [Service, Appointment, Input, representation, updating, scheduled, times, assigned, resource, territory, work, appointments, Limitations]
---

# Service Appointment Update Input

> Input representation for updating a service appointment. Use to update
      the scheduled times, assigned resource(s), service territory or even work type for existing
      appointments.

# Service Appointment Update Input

Input representation for updating a service appointment. Use to update the scheduled times, assigned resource(s), service territory or even work type for existing appointments.

## Limitations

You cannot use the resource to modify the following:

-   Parent record ID (parentRecordId) and Service appointment ID (serviceAppointmentId)
-   Canceled appointments.
-   Past date appointments.
-   lead details.
-   When multi-resource scheduling is enabled, you can’t add a new resource and make it as the primary resource in a single request. Add the new resource in one request and then make another request to add the resource as a primary resource.

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

## Code Examples

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

```
{
  "serviceAppointmentId": "08pxx0000004C92AAE",
  "serviceAppointment": {
    "schedStartTime": "2020-09-15T16:00:00+0000",
    "schedEndTime": "2020-09-15T17:00:00+0000",
}
```

```
{
  "serviceAppointmentId": "08pxx0000004C92AAE",
  "serviceAppointment": {
    "workTypeId": "08qxx0000004C92AAE",
}
```

```
{
  "serviceAppointmentId": "08pxx0000004C92AAE",
  "serviceAppointment": {
    "serviceTerritoryId": "0Hhxx0000004CAeCAM"
}
```

## Related Topics

- Assigned Resource Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_assigned_resource_input.htm)
- Service Appointment Input (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_requests_service_appointment_input.htm)
