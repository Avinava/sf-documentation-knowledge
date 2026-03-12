---
title: "Get Service Appointments Assigned to the Dummy Resource"
domain: salesforce-scheduler-developer-guide
topic: get-service-appointments-assigned-to-the-dummy-resource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.991Z
estimatedTokens: 371
keywords: [Service, Appointments, Assigned, Dummy, Resource, Show, users, appointments—appointments, booked, Salesforce, Scheduler—scheduled, against, retrieving, Branch, managers]
---

# Get Service Appointments Assigned to the Dummy Resource

> Show your users the service appointments—appointments booked
      through Salesforce Scheduler—scheduled against the dummy resource by retrieving the
      list of service appointments. Branch managers or administrators can reassign the
    appointments to the actual resources.

# Get Service Appointments Assigned to the Dummy Resource

Show your users the service appointments—appointments booked through Salesforce Scheduler—scheduled against the dummy resource by retrieving the list of service appointments. Branch managers or administrators can reassign the appointments to the actual resources.

For the list of AppointmentInvitation object fields, see [ServiceAppointment](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/sforce_api_objects_serviceappointment.htm "HTML (New Window)").

1.  Create a page to show the service appointments scheduled against the dummy resource.
2.  To retrieve the list of service appointments, make a [Query()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_query.htm "HTML (New Window)") request on the ServiceAppointment object.

    -   To choose additional columns from the ServiceAppointment object, such as lead and parent record IDs, modify the query.
    -   To see upcoming appointments first, sort appointments by start time ascending.
    -   To avoid past appointments, add *where currentTime is greater than start time*.

    Sample REST API Request

    ```

    ```

    Sample Response

    ```

    ```

3.  Parse the JSON response, and show the service appointments on a page that you created. Branch managers or administrators can reassign the appointments to the actual resources.

## Code Examples

```
https://yourInstance.salesforce.com//services/data/v66.0/query/?q=​SELECT+ServiceAppointmentId,ServiceResourceId,ServiceAppointment.SchedEndTime,ServiceAppointment.SchedStartTime,ServiceAppointment.ServiceTerritoryId,ServiceAppointment.Id+​FROM+AssignedResource+WHERE+ServiceResourceId+=+'0HnS70000004EFyKAM'+ORDER+BY+createdDate+DESC+limit+5
```

```
{
  "totalSize": 5,
  "done": true,
  "records": [
    {
      "attributes": {
        "type": "AssignedResource",
        "url": "/services/data/v56.0/sobjects/AssignedResource/03rS70000000401IAA"
      },
      "ServiceAppointmentId": "08pS70000000CxOIAU",
      "ServiceResourceId": "0HnS70000004EFyKAM",
      "ServiceAppointment": {
        "attributes": {
          "type": "ServiceAppointment",
          "url": "/services/data/v56.0/sobjects/ServiceAppointment/08pS70000000CxOIAU"
        },
        "SchedEndTime": "2022-10-03T17:00:00.000+0000",
        "SchedStartTime": "2022-10-03T16:30:00.000+0000",
        "ServiceTerritoryId": "0HhS70000004F9zKAE",
        "Id": "08pS70000000CxOIAU"
      }
    },
    {
      "attributes": {
        "type": "AssignedResource",
        "url": "/services/data/v56.0/sobjects/AssignedResource/03rS700000003zwIAA"
      },
      "ServiceAppointmentId": "08pS70000000CxJIAU",
      "ServiceResourceId": "0HnS70000004EFyKAM",
      "ServiceAppointment": {
        "attributes": {
          "type": "ServiceAppointment",
          "url": "/services/data/v56.0/sobjects/ServiceAppointment/08pS70000000CxJIAU"
        },
        "SchedEndTime": "2022-10-03T17:00:00.000+0000",
        "SchedStartTime": "2022-10-03T16:30:00.000+0000",
        "ServiceTerritoryId": "0HhS70000004F9zKAE",
        "Id": "08pS70000000CxJIAU"
      }
    },
    {
      "attributes": {
        "type": "AssignedResource",
        "url": "/services/data/v56.0/sobjects/AssignedResource/03rS700000003zrIAA"
      },
      "ServiceAppointmentId": "08pS70000000CxEIAU",
      "ServiceResourceId": "0HnS70000004EFyKAM",
      "ServiceAppointment": {
        "attributes": {
          "type": "ServiceAppointment",
          "url": "/services/data/v56.0/sobjects/ServiceAppointment/08pS70000000CxEIAU"
        },
        "SchedEndTime": "2022-10-03T17:00:00.000+0000",
        "SchedStartTime": "2022-10-03T16:30:00.000+0000",
        "ServiceTerritoryId": "0HhS70000004F9zKAE",
        "Id": "08pS70000000CxEIAU"
      }
    },
    {
      "attributes": {
        "type": "AssignedResource",
        "url": "/services/data/v56.0/sobjects/AssignedResource/03rS70000004D3WIAU"
      },
      "ServiceAppointmentId": "08pS70000004F3xIAE",
      "ServiceResourceId": "0HnS70000004EFyKAM",
      "ServiceAppointment": {
        "attributes": {
          "type": "ServiceAppointment",
          "url": "/services/data/v56.0/sobjects/ServiceAppointment/08pS70000004F3xIAE"
        },
        "SchedEndTime": "2022-10-03T17:00:00.000+0000",
        "SchedStartTime": "2022-10-03T16:30:00.000+0000",
        "ServiceTerritoryId": "0HhS70000004F9zKAE",
        "Id": "08pS70000004F3xIAE"
      }
    },
    {
      "attributes": {
        "type": "AssignedResource",
        "url": "/services/data/v56.0/sobjects/AssignedResource/03rS700000003zmIAA"
      },
      "ServiceAppointmentId": "08pS70000000Cx9IAE",
      "ServiceResourceId": "0HnS70000004EFyKAM",
      "ServiceAppointment": {
        "attributes": {
          "type": "ServiceAppointment",
          "url": "/services/data/v56.0/sobjects/ServiceAppointment/08pS70000000Cx9IAE"
        },
        "SchedEndTime": "2022-10-03T17:00:00.000+0000",
        "SchedStartTime": "2022-10-03T16:30:00.000+0000",
        "ServiceTerritoryId": "0HhS70000004F9zKAE",
        "Id": "08pS70000000Cx9IAE"
      }
    }
  ]
}
```
