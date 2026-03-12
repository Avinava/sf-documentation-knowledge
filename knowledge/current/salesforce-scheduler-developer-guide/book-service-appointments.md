---
title: "Book Service Appointments"
domain: salesforce-scheduler-developer-guide
topic: book-service-appointments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.952Z
estimatedTokens: 574
keywords: [Book, Service, Appointments, appointment, booked, Salesforce, Scheduler, service-appointments, API]
---

# Book Service Appointments

> A service appointment is an appointment booked through Salesforce
      Scheduler. Use the service-appointments API to create an
      appointment.

# Book Service Appointments

A service appointment is an appointment booked through Salesforce Scheduler. Use the service-appointments API to create an appointment.

1.  On your website, create a page with a Create button on which you can show the appointment details for the user to review and book the appointment.
2.  Link the Create button to a POST request on the [service-appointments](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_resources_service_appointments.htm "HTML (New Window)") Connect API.

    Resource URI

    ```

    ```

    For an Account User

    Sample Request

    This sample calls the service-appointments API to create the appointment record for an account user.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    The parentRecordId field is required. Pass the account ID as parentRecordId in the input request body.

    ```

    ```

    Sample Response

    The API returns the service appointment ID and the assigned service resources.

    ```

    ```

    For a Guest User

    Sample Request

    This sample calls the service-appointments API to create the appointment record for a guest user.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    The lead field is required. Pass the guest user details, including the first name, last name, email address, and phone number as lead in the input request body.

    ```

    ```

    Sample Response

    The API returns the service appointment ID and the assigned service resources.

    ```

    ```

3.  If the service appointment creation is successful, then show the user a confirmation message.

    Here’s a sample confirmation page.![A representation of the confirmation screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fscreen_appointment_creation.png&folder=salesforce_scheduler_developer_guide)


-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_show_invitation_calendar_availability.htm "Show Calendar Availability")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect/scheduling/service-appointments
```

```
{
  "serviceAppointment": {
    "serviceTerritoryId": "0Hhx00000002LzGCAU",
    "parentRecordId": "001x0000005SEqZAAW",
    "schedStartTime": "2022-06-29T11:30:00.000+0000",
    "schedEndTime": "2022-06-29T12:30:00.000+0000",
    "additionalInformation": "Sharing availability use case using APIs.",
    "appointmentType": "Book Test Appointment1",
    "extendedFields": [
      {
        "name": "status",
        "value": "Scheduled"
      }
    ]
  },
  "assignedResources": [
    {
      "serviceResourceId": "0Hnx000000007d7CAA",
      "isRequiredResource": "true"
    }
  ]
}
```

```
{
  "result": {
    "assignedResourceIds": [
      "03rx0000000252jAAA"
    ],
    "serviceAppointmentId": "08px000000023bdAAA"
  }
}
```

```
{
  "serviceAppointment": {
    "serviceTerritoryId": "0Hhx00000002LzGCAU",
    "schedStartTime": "2022-06-29T11:30:00.000+0000",
    "schedEndTime": "2022-06-29T12:30:00.000+0000",
    "additionalInformation": "Sharing availability use case using APIs.",
    "appointmentType": "Book Test Appointment1",
    "extendedFields": [
      {
        "name": "status",
        "value": "Scheduled"
      }
    ]
  },
  "assignedResources": [
    {
      "serviceResourceId": "0Hnx000000007d7CAA",
      "isRequiredResource": "true"
    }
  ],
  "lead": {
    "email": "Test@company.com",
    "firstName": "FirstName",
    "lastName": "LastName",
    "company": "CompanyName"
  }
}
```

```
{
  "result": {
    "assignedResourceIds": [
      "03rx0000000252oAAA"
    ],
    "parentRecordId": "00Qx0000001cLwwEAE",
    "serviceAppointmentId": "08px000000023biAAA"
  }
}
```

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_show_invitation_calendar_availability.htm)
