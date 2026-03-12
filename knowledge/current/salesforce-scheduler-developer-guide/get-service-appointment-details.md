---
title: "Get Service Appointment Details"
domain: salesforce-scheduler-developer-guide
topic: get-service-appointment-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.096Z
estimatedTokens: 270
keywords: [Service, Appointment, booked, Salesforce, Scheduler, that’s, via, fetch, record]
---

# Get Service Appointment Details

> A service appointment represents an appointment booked through Salesforce
      Scheduler.

# Get Service Appointment Details

A service appointment represents an appointment booked through Salesforce Scheduler.

1.  Create a page to show the details of a service appointment record that the user selects.
2.  Make a GET request on the ServiceAppointment object.

    Sample Request

    Here’s a sample GET request to retrieve the service appointment details.

    ```

    ```

    Sample Response

    The method returns the service appointment details.

    ```

    ```

3.  Parse the JSON response, and show the service appointments details on the page that you created.

On the next page, you can let users to modify an engagement channel type, a service resource, or a time slot depending on what the user chooses to change.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_get_service_appointments.htm "Get Service Appointments")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_change_appointment_details.htm "Change Appointment Details")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/sobjects/ServiceAppointment/08pS7000000019BIAQ
```

```
{
  "attributes": {
    "type": "ServiceAppointment",
    "url": "/services/data/v57.0/sobjects/ServiceAppointment/08pS7000000019BIAQ"
  },
  "Id": "08pS7000000019BIAQ",
  "OwnerId": "005S7000000Ipe4IAC",
  "IsDeleted": false,
  "AppointmentNumber": "SA-0004",
  "CreatedDate": "2023-03-13T17:31:23.000+0000",
  "CreatedById": "005S7000000Ipe4IAC",
  "LastModifiedDate": "2023-03-13T17:31:23.000+0000",
  "LastModifiedById": "005S7000000Ipe4IAC",
  "SystemModstamp": "2023-03-13T17:31:28.000+0000",
  "LastViewedDate": "2023-03-13T17:31:23.000+0000",
  "LastReferencedDate": "2023-03-13T17:31:23.000+0000",
  "ParentRecordId": "001S7000001pFlJIAU",
  "ParentRecordType": "Account",
  "AccountId": "001S7000001pFlJIAU",
  "WorkTypeId": "08qS70000004DQsIAM",
  "ContactId": null,
  "Street": "121 Spear Street",
  "City": "Charlotte",
  "State": "VT",
  "PostalCode": "05445",
  "Country": "United States",
  "Latitude": 44.356843,
  "Longitude": -73.194897,
  "GeocodeAccuracy": "Block",
  "Address": {
    "city": "Charlotte",
    "country": "United States",
    "geocodeAccuracy": "Block",
    "latitude": 44.356843,
    "longitude": -73.194897,
    "postalCode": "05445",
    "state": "VT",
    "street": "121 Spear Street"
  },
  "Description": null,
  "EarliestStartTime": "2023-03-13T17:31:23.000+0000",
  "DueDate": "2023-03-20T17:31:23.000+0000",
  "Duration": null,
  "ArrivalWindowStartTime": "2023-03-15T18:00:00.000+0000",
  "ArrivalWindowEndTime": "2023-03-15T19:00:00.000+0000",
  "Status": "Scheduled",
  "SchedStartTime": "2023-03-15T18:00:00.000+0000",
  "SchedEndTime": "2023-03-15T19:00:00.000+0000",
  "ActualStartTime": null,
  "ActualEndTime": null,
  "ActualDuration": null,
  "DurationType": "Hours",
  "DurationInMinutes": null,
  "ServiceTerritoryId": "0HhS700000001DYKAY",
  "Subject": null,
  "ParentRecordStatusCategory": null,
  "StatusCategory": "Scheduled",
  "ServiceNote": null,
  "AppointmentType": null,
  "Email": null,
  "Phone": null,
  "CancellationReason": null,
  "AdditionalInformation": null,
  "Comments": null,
  "IsAnonymousBooking": false,
  "IsOffsiteAppointment": false,
  "ApptBookingInfoUrl": null,
  "AppointmentInvitationId": null,
  "EngagementChannelTypeId": "0eFS70000004CG5MAM"
}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/query/?q=SELECT+Id,SchedEndTime,SchedStartTime,ServiceTerritoryId,WorkTypeId+FROM+ServiceAppointment+WHERE+id+=+'08pB0000000aKf2IAE'
```

```
{
  "totalSize": 1,
  "done": true,
  "records": [
    {
      "attributes": {
        "type": "ServiceAppointment",
        "url": "/services/data/v53.0/sobjects/ServiceAppointment/08pB0000000aKf2IAE"
      },
      "Id": "08pB0000000aKf2IAE",
      "SchedEndTime": "2021-10-25T18:30:00.000+0000",
      "SchedStartTime": "2021-10-25T17:30:00.000+0000",
      "ServiceTerritoryId": "0HhB0000000TaHOKA0",
      "WorkTypeId": "08qB0000000UF63IAG"
    }
  ]
}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/query/?q=SELECT+Id,SchedEndTime,SchedStartTime,ServiceTerritoryId,WorkTypeId+FROM+ServiceAppointment+WHERE+id+=+'08pB0000000aJKhIAM'
```

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_get_service_appointments.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_change_appointment_details.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_service_appointments.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_available_resources.htm)
