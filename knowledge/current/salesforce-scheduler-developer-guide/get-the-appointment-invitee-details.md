---
title: "Get the Appointment Invitee Details"
domain: salesforce-scheduler-developer-guide
topic: get-the-appointment-invitee-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.943Z
estimatedTokens: 474
keywords: [Appointment, Invitee, participant, resources, creating, invitation, URL, Query, run, Salesforce, Language, SOQL, AppointmentInvitee, retrieve, service]
---

# Get the Appointment Invitee Details

> An appointment invitee has information about the participant and the
      resources required for creating an appointment invitation URL. Use the Query() request to run Salesforce Query Language (SOQL) on the
    AppointmentInvitee object to retrieve the appointment invitee details, such as the service
    territory ID, appointment topic ID, service resource ID, and available booking start and end
    dates, which you need for retrieving the calendar availability for the invitation URL. You can
    also retrieve additional details that you need when creating an appointment, such as whether the
    resources are primary or required.

# Get the Appointment Invitee Details

An appointment invitee has information about the participant and the resources required for creating an appointment invitation URL. Use the Query() request to run Salesforce Query Language (SOQL) on the AppointmentInvitee object to retrieve the appointment invitee details, such as the service territory ID, appointment topic ID, service resource ID, and available booking start and end dates, which you need for retrieving the calendar availability for the invitation URL. You can also retrieve additional details that you need when creating an appointment, such as whether the resources are primary or required.

For a complete list of AppointmentInvitee object fields, see [AppointmentInvitee](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentinvitee.htm "HTML (New Window)").

1.  Make a [Query()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_query.htm "HTML (New Window)") request on the AppointmentInvitee object.

    Sample REST API Request

    ```

    ```

    Sample Response

    ```

    ```

2.  Parse the response to save the values.

    You need these values to fetch the invitation availability time slots.


After you fetch the appointment invitation and appointment invitee details, create a page on your website to show the calendar availability of the service resources associated with the invitation.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_appointment_invitation_details.htm "Get the Appointment Invitation Details")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_show_invitation_calendar_availability.htm "Show Calendar Availability")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/vXX.X/query/?q=​SELECT+AppointmentInvitationId,Id,IsPrimaryResource,IsRequiredResource,​Name,ParticipantServiceResourceId+FROM+AppointmentInvitee+​WHERE+AppointmentInvitationId+=+'1S8x000000000oHCAQ'
```

```
{
  "totalSize" : 1,
  "done" : true,
  "records" : [ {
    "attributes" : {
      "type" : "AppointmentInvitee",
      "url" : "/services/data/v55.0/sobjects/AppointmentInvitee/0y6x000000000pFAAQ"
    },
    "AppointmentInvitationId" : "1S8x000000000oHCAQ",
    "Id" : "0y6x000000000pFAAQ",
    "IsPrimaryResource" : true,
    "IsRequiredResource" : true,
    "Name" : "AITE-0247",
    "ParticipantServiceResourceId" : "0Hnx000000007d7CAA"
  } ]
}
```

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_appointment_invitation_details.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_show_invitation_calendar_availability.htm)
