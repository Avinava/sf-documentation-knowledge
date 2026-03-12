---
title: "Update Service Appointments"
domain: salesforce-scheduler-developer-guide
topic: update-service-appointments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.002Z
estimatedTokens: 577
keywords: [Service, Appointments, Show, appointments—appointments, booked, Salesforce, Scheduler—on, app, business, managers, administrators, review, users, appointment—an, appointment, modified, Scheduler—so, via, Scheduler, run]
---

# Update Service Appointments

> Show the details of service appointments—appointments booked
      through Salesforce Scheduler—on a page of your app so that business managers or
      administrators can review and update appointments.

# Update Service Appointments

Show the details of service appointments—appointments booked through Salesforce Scheduler—on a page of your app so that business managers or administrators can review and update appointments.

To modify appointments, the branch manager or administrator who’s reassigning service appointments need these user permissions.

-   Read, Create, and Edit on service appointments
-   Read on accounts, contacts, operating hours, service resources, service territories, work types, and work type groups

1.  Create a page to review the appointment details and update the service appointment.
2.  To modify a service appointment, link the Next button to a PATCH request on the [service-appointments](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_resources_service_appointments.htm "Create and update service appointment records, assign resources, and generate leads, including group appointments with multiple participants.") Connect API.

    Resource URI

    ```

    ```

    Sample Request

    Pass the appointment ID as serviceAppointmentId and the resource ID of the actual resource as serviceResourceId in the request. To indicate that the appointment is scheduled, set status to Scheduled.

    ```

    ```

    Sample Response

    The API returns the service appointment ID and the assigned service resources.

    ```

    ```

3.  For each service appointment ID that you want to modify, run the PATCH request.

    Assign active resources to all customers by modifying the appointments booked against the dummy resource. Usually, Business Location Manager or the person who assigns actual resources performs the modification.

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=salesforce_scheduler_developer_guide)

    #### Important

    Ensure that the total number of dummy appointments doesn't exceed the total number of available resources for a time slot. Otherwise, when modifying appointments, one requires to update the time slots based on availability. To avoid these scenarios, configure the Concurrent Scheduling Max appointment slots to around 60–80% of total resource capacity.


The request modifies the service appointment with a new service resource.

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/scheduling/service-appointments
```

```
{
  "schedulingPolicyId": "0VrS70000004CEhKAM",
  "serviceAppointmentId": "08pS70000000CxOIAU",
  "serviceAppointment": {
    "serviceTerritoryId": "0HhS70000004F9zKAE",
    "extendedFields": [
      {
        "name": "status",
        "value": "Scheduled"
      }
    ]
  },
  "assignedResources": [
    {
      "serviceResourceId": "0HnS700000007xwKAA",
      "isRequiredResource": "true"
    }
  ]
}
```

```
{
  "result": {
    "assignedResourceIds": [
      "03rS70000000406IAA"
    ],
    "serviceAppointmentId": "08pS70000000CxOIAU"
  }
}
```

```
{
  "serviceAppointmentId": "08pS7000000019BIAQ",
  "schedulingPolicyId": "2F0VrRM0000004CUV",
  "serviceAppointment": {
    "schedStartTime": "2023-03-24T18:00:00.000+0000",
    "schedEndTime": "2023-03-24T19:00:00.000+0000",
    "serviceTerritoryId": "0HhS700000001DYKAY",
    "engagementChannelTypeId": "0eFS70000004CGFMA2",
    "workTypeId": "08qS70000004DQsIAM"
  },
  "assignedResources": [
    {
      "serviceResourceId": "0HnS700000002jAKAQ",
      "isRequiredResource": true,
      "extendedFields": []
    }
  ]
}
```

```
{
   "serviceAppointmentId": "08pS7000000019BIAQ",
   "serviceAppointment": {
      "schedStartTime": "2023-03-24T18:00:00.000+0000",
      "schedEndTime": "2023-03-24T19:00:00.000+0000",
   }
}
```

## Related Topics

- service-appointments (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_resources_service_appointments.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_change_appointment_details.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_available_resources.htm)
