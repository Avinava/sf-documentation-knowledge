---
title: "Create Service Appointments"
domain: salesforce-scheduler-developer-guide
topic: create-service-appointments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.974Z
estimatedTokens: 613
keywords: [Service, Appointments, Show, users, appointment—an, appointment, booked, Salesforce, Scheduler—so, review, Scheduler, POST, service-appointments, Connect, API, step, concurrent, scheduling, application, show]
---

# Create Service Appointments

> A service appointment represents an appointment booked through Salesforce
      Scheduler. Make a POST request on the service-appointments Connect API to create the appointment.

# Create Service Appointments

A service appointment represents an appointment booked through Salesforce Scheduler. Make a POST request on the service-appointments Connect API to create the appointment.

1.  Create a page where the user can review the appointment details and create the appointment. Here’s how a Review Service Appointment page can look.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    To keep the service resource private, hide the resource’s name on the review appointment page.

    ![A representation of the Review Service Appointment screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fscreen_review_anonymous_appointment.png&folder=salesforce_scheduler_developer_guide)

2.  Link the Next button to a POST request on the [service-appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_resources_service_appointments.htm "Create and update service appointment records, assign resources, and generate leads, including group appointments with multiple participants.") Connect API to create the service appointment.

    Resource URI

    ```

    ```

    For an Existing User (Account)

    Sample Request

    Pass the account ID as parentRecordId in the input request body.

    Set IsAnonymousBooking to true to indicate that the appointment is anonymous.

    ```

    ```

    Sample Response

    The API returns the service appointment ID and the assigned service resources.

    ```

    ```

    For a Guest User (Lead)

    Sample Request

    Pass the required lead details in the input request body.

    Set IsAnonymousBooking to true to indicate that the appointment is anonymous.

    ```

    ```

    Sample Response

    The API returns the service appointment ID and the assigned service resources.

    ```

    ```


Create a page to show confirmation when the service appointment is created successfully.

Here’s how a sample confirmation page can look.

![A representation of the confirmation screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fscreen_appointment_creation.png&folder=salesforce_scheduler_developer_guide)

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_available_territory_slot.htm "Get Available Territory Slots")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/scheduling/service-appointments
```

```
{
  "schedulingPolicyId": "0VrS7000000004XKAQ",
  "serviceAppointment": {
    "serviceTerritoryId": "0HhS70000004F9zKAE",
    "parentRecordId": "001S7000002br8YIAQ",
    "schedStartTime": "2022-10-03T16:30:00.000+0000",
    "schedEndTime": "2022-10-03T17:00:00.000+0000",
    "additionalInformation": "Schedule concurrent appointment with a dummy resource",
    "appointmentType": "Use case purpose."
  },
  "assignedResources": [
    {
      "serviceResourceId": "0HnS70000004EFyKAM",
      "isRequiredResource": "true"
    }
  ]
}
```

```
{
  "result": {
    "assignedResourceIds": [
      "03rS700000003zrIAA"
    ],
    "serviceAppointmentId": "08pS70000000CxEIAU"
  }
}
```

```
{
  "schedulingPolicyId": "0VrS7000000004XKAQ",
  "serviceAppointment": {
    "serviceTerritoryId": "0HhS70000004F9zKAE",
    "schedStartTime": "2022-10-03T16:30:00.000+0000",
    "schedEndTime": "2022-10-03T17:00:00.000+0000",
    "additionalInformation": "Schedule concurrent appointment with a dummy resource",
    "appointmentType": "Use case purpose."
  },
  "assignedResources": [
    {
      "serviceResourceId": "0HnS70000004EFyKAM",
      "isRequiredResource": "true"
    }
  ],
  "lead": {
    "firstName": "Patient1",
    "lastName": "Test",
    "email": "test1@company.com",
    "company": "Test Club"
  }
}
```

```
{
  "result": {
    "assignedResourceIds": [
      "03rS700000003zrIAA"
    ],
    "parentRecordId": "00QRM000004seHz2AI",
    "serviceAppointmentId": "08pRM0000004vdvYAA"
  }
}
```

## Related Topics

- service-appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_resources_service_appointments.htm)
- Configure Scheduling Policy to Enforce Operating Hours (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_scheduling_policy_to_dummy_resource.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_appointment_candidates.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_available_territory_slot.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_appointment_slots.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_get_appointment_slot.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_get_appointment_candidates.htm)
