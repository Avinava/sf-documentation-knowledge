---
title: "Get Service Appointments"
domain: salesforce-scheduler-developer-guide
topic: get-service-appointments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.099Z
estimatedTokens: 267
keywords: [Service, Appointments, appointment, booked, Salesforce, Scheduler, AssignedResource, resource, assigned, Retrieve, IDs, scheduled, associated, specific, resources, query, ServiceAppointment, retrieve]
---

# Get Service Appointments

> The AssignedResource object represents a
      service resource who is assigned to a service appointment in Salesforce Scheduler. Retrieve
      service appointment IDs of all scheduled appointments associated with specific resources by
      using the query request on the AssignedResource object.

# Get Service Appointments

The AssignedResource object represents a service resource who is assigned to a service appointment in Salesforce Scheduler. Retrieve service appointment IDs of all scheduled appointments associated with specific resources by using the query request on the AssignedResource object.

Sample Request

This sample REST API call uses the query request to retrieve the anonymous service appointments that are associated with unavailable resources.

```

```

For more information, see [Execute a SOQL Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_query.htm "HTML (New Window)"). Ensure that the filter falls within the query limits.

Sample Response

The method retrieves the list of anonymous appointments that are associated with specific resources.

```

```

Use a collection object to capture all appointment IDs that the GET request retrieved. If you call multiple GET requests, include in the collection object the appointment IDs that each request returned.. This task helps you create a list of service appointments that you must update with new resources.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_scheduler_api_auth.htm "Authenticate with a Connected App")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_service_appointment_details.htm "Get Service Appointment Details")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/query/?q=​SELECT+AppointmentNumber,+Status,+SchedStartTime,+SchedEndTime,+ServiceTerritoryId,+WorkTypeId+From+ServiceAppointment+WHERE+AccountId+=+'001S7000001pFlJIAU'
```

```
{
  "totalSize": 3,
  "done": true,
  "records": [
    {
      "attributes": {
        "type": "ServiceAppointment",
        "url": "/services/data/v57.0/sobjects/ServiceAppointment/08pS70000000196IAA"
      },
      "AppointmentNumber": "SA-0003",
      "Status": "Scheduled",
      "SchedStartTime": "2023-03-15T16:00:00.000+0000",
      "SchedEndTime": "2023-03-15T17:00:00.000+0000",
      "ServiceTerritoryId": "0HhS700000001DYKAY",
      "WorkTypeId": null
    },
    {
      "attributes": {
        "type": "ServiceAppointment",
        "url": "/services/data/v57.0/sobjects/ServiceAppointment/08pS7000000018wIAA"
      },
      "AppointmentNumber": "SA-0001",
      "Status": "Scheduled",
      "SchedStartTime": "2023-02-15T17:00:00.000+0000",
      "SchedEndTime": "2023-02-15T18:00:00.000+0000",
      "ServiceTerritoryId": "0HhS700000001DYKAY",
      "WorkTypeId": null
    },
    {
      "attributes": {
        "type": "ServiceAppointment",
        "url": "/services/data/v57.0/sobjects/ServiceAppointment/08pS7000000019BIAQ"
      },
      "AppointmentNumber": "SA-0004",
      "Status": "Scheduled",
      "SchedStartTime": "2023-03-15T18:00:00.000+0000",
      "SchedEndTime": "2023-03-15T19:00:00.000+0000",
      "ServiceTerritoryId": "0HhS700000001DYKAY",
      "WorkTypeId": null
    }
  ]
}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/query/?q=SELECT+ServiceAppointmentId,ServiceResourceId+FROM+AssignedResource+WHERE+ServiceResourceId+=+'ServiceResourceId'+AND+ServiceAppointment.IsAnonymousBooking+=+TRUE
```

```
{
  "totalSize" : 2,
  "done" : true,
  "records" : [ 
    {
      "attributes" : {
        "type" : "AssignedResource",
        "url" : "/services/data/v53.0/sobjects/AssignedResource/03rB0000000cBVOIA2"
      },
      "ServiceAppointmentId" : "08pB0000000aKeYIAU",
      "ServiceResourceId" : "0HnB0000000Tav3KAC"
    }, 
    {
      "attributes" : {
        "type" : "AssignedResource",
        "url" : "/services/data/v53.0/sobjects/AssignedResource/03rB0000000cBVsIAM"
      },
      "ServiceAppointmentId" : "08pB0000000aKf2IAE",
      "ServiceResourceId" : "0HnB0000000Tav3KAC"
    } 
 ]
}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/query/?q=SELECT+AppointmentNumber,
+Id,+Status,+SchedStartTime,+SchedEndTime,+ServiceTerritoryId,+WorkTypeId+From+ServiceAppointment+WHERE+AccountId+=+'001B000001McLhMIAV'
```

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_scheduler_api_auth.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc4_get_service_appointment_details.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_scheduler_api_auth.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_service_appointment_details.htm)
