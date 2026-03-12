---
title: "Get the Appointment Invitation Details"
domain: salesforce-scheduler-developer-guide
topic: get-the-appointment-invitation-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.940Z
estimatedTokens: 459
keywords: [Appointment, Invitation, users, booking, appointments, Query, run, Salesforce, Language, SOQL, AppointmentInvitation, retrieve, topic, work, group]
---

# Get the Appointment Invitation Details

> An appointment invitation has information that users can use for
      booking appointments. Use the Query() request to run
    Salesforce Query Language (SOQL) on the AppointmentInvitation object to retrieve the appointment
    invitation details, such as the appointment invitation ID, appointment topic ID (work type group
    ID), appointment topic type, service territory ID, availability start date, and availability end
    date.

# Get the Appointment Invitation Details

An appointment invitation has information that users can use for booking appointments. Use the Query() request to run Salesforce Query Language (SOQL) on the AppointmentInvitation object to retrieve the appointment invitation details, such as the appointment invitation ID, appointment topic ID (work type group ID), appointment topic type, service territory ID, availability start date, and availability end date.

For a complete list of AppointmentInvitation object fields, see [AppointmentInvitation](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_appointmentinvitation.htm "HTML (New Window)").

1.  Make a [Query()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_query.htm "HTML (New Window)") request on the AppointmentInvitation object.

    Sample REST API Request

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    To ensure that the invitation URL is active, set the value of the IsActive query parameter to true.

    ```

    ```

    Sample Response

    ```

    ```

2.  Parse the response to save the values.

    You need these values to fetch the invitation availability time slots.


After you fetch the invitation details, retrieve the service resources associated with the invitation URL.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_invitation_key.htm "Retrieve the Invitation Key")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_appointment_invitee_details.htm "Get the Appointment Invitee Details")

## Code Examples

```
https://yourInstance.salesforce.com//services/data/vXX.X/query/?q=​SELECT+AppointmentTopicId,AppointmentTopicType,BookingEndDate,BookingStartDate,​Id,ServiceTerritoryId+FROM+AppointmentInvitation+​WHERE+InvitationIdentifier+=+'f482d103-4792-40ac-864a-57db0c13161b'+AND+IsActive+=+true
```

```
{
  "totalSize" : 1,
  "done" : true,
  "records" : [ {
    "attributes" : {
      "type" : "AppointmentInvitation",
      "url" : "/services/data/v55.0/sobjects/AppointmentInvitation/1S8x000000000oHCAQ"
    },
    "AppointmentTopicId" : "0VSx00000002Uh4GAE",
    "AppointmentTopicType" : "WorkTypeGroup",
    "BookingEndDate" : "2022-06-30",
    "BookingStartDate" : "2022-06-14",
    "Id" : "1S8x000000000oHCAQ",
    "ServiceTerritoryId" : "0Hhx00000002LzGCAU"
  } ]
}
```

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_invitation_key.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc10_get_appointment_invitee_details.htm)
