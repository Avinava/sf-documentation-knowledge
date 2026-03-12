---
title: "Show Calendar Availability"
domain: salesforce-scheduler-developer-guide
topic: show-calendar-availability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.956Z
estimatedTokens: 590
keywords: [Show, Calendar, Availability, time, slot, period, day, appointment, scheduled, getAppointmentSlots, API, retrieve, service, resources, associated]
---

# Show Calendar Availability

> A time slot is a period in a day when an appointment can be scheduled.
      Use the getAppointmentSlots API to retrieve the calendar
      availability of the service resources associated with the appointment
    invitation.

# Show Calendar Availability

A time slot is a period in a day when an appointment can be scheduled. Use the getAppointmentSlots API to retrieve the calendar availability of the service resources associated with the appointment invitation.

Before making an API request to retrieve the invitation time slots, create a page on your website that shows the calendar availability of the service resources associated with the appointment invitation. The calendar availability is determined by the service territory ID, the work type group ID, and the service resource IDs that you obtained previously.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

Ensure that the calendar shows only the available time slots for the selected resource between the shared invitation start and end dates.

1.  To fetch the calendar availability for an appointment invitation, make a POST request on the [getAppointmentSlots](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/requests_ls_getappointmentslots.htm "HTML (New Window)") REST API.

    Resource URI

    ```

    ```

    Sample Request

    This sample calls the getAppointmentSlots API by passing the work type group ID, territory IDs, resource IDs, and invitation booking start and end dates.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    The workTypeGroupId field is required.

    ```

    ```

    Sample Response

    The request returns the calendar availability for the service resources associated with the invitation.

    ```

    ```

2.  Parse the response and show the time slots on your relevant website page so that users can choose an appointment time.

Create another page on your website to show the appointment details for users to review and book a selected appointment.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_appointment_invitee_details.htm "Get the Appointment Invitee Details")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_review_and_book_invitation_appointment.htm "Book Service Appointments")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/vXX.X/scheduling/getAppointmentSlots
```

```
{
  "startTime": "2022-06-14T00:00:00.000Z",
  "endTime": "2022-06-30T00:00:00.000Z",
  "workTypeGroupId": "0VSx00000002Uh4GAE",
  "territoryIds": [
    "0Hhx00000002LzGCAU"
  ],
  "requiredResourceIds": [
    "0Hnx000000007d7CAA"
  ]
}
```

```
{
  "timeSlots": [
    {
      "endTime": "2022-06-14T02:15:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-14T01:15:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-14T02:30:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-14T01:30:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-14T12:30:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-14T11:30:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-14T12:45:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-14T11:45:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-15T02:15:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-15T01:15:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-15T02:30:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-15T01:30:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-15T12:30:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-15T11:30:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-15T12:45:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-15T11:45:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-16T01:45:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-16T00:45:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-16T02:00:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-16T01:00:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-17T12:30:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-17T11:30:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-17T12:45:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-17T11:45:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-18T01:45:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-18T00:45:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-18T02:00:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-18T01:00:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-20T02:15:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-20T01:15:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-21T03:15:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-21T02:15:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-21T03:30:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-21T02:30:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-25T07:45:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-25T06:45:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-27T12:30:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-27T11:30:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-27T12:45:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-27T11:45:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-28T02:15:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-28T01:15:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-28T02:30:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-28T01:30:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-28T02:45:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-28T01:45:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-29T12:15:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-29T11:15:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-29T12:30:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-29T11:30:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    },
    {
      "endTime": "2022-06-29T12:45:00.000+0000",
      "remainingAppointments": 1,
      "startTime": "2022-06-29T11:45:00.000+0000",
      "territoryId": "0Hhx00000002LzGCAU"
    }
  ]
}
```

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_appointment_invitee_details.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_review_and_book_invitation_appointment.htm)
