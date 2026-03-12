---
title: "Get Available Resources"
domain: salesforce-scheduler-developer-guide
topic: get-available-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.109Z
estimatedTokens: 348
keywords: [Resources, Retrieve, anonymous, appointment]
---

# Get Available Resources

> Retrieve the resources that are available for an anonymous
    appointment.

# Get Available Resources

Retrieve the resources that are available for an anonymous appointment.

A service resource represents an employee from your organization, such as a loan officer, investment adviser, doctor, nurse practitioner, or retail store specialist, who attends appointments with clients. This task explains how to retrieve service resources that match various criteria such as work type group, territory, start time, and end time from the selected service appointment. Use the getAppointmentCandidates REST API to fetch the available service resources based on work type group and service territory.

Make a POST request on the getAppointmentCandidates REST API by passing the required workTypeGroupId, territoryIds, startTime, and endTime parameters.

Use this URI for the request:

```

```

Use this request body with the POST request:

```

```

This code snippet is an example request body:

```

```

The request returns a list of anonymous resources that match the criteria specified in the request body.

```

```

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_service_appointment_details.htm "Get Service Appointment Details")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_update_anonymous_appoint.htm "Update Service Appointments")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/vXX.X/scheduling/getAppointmentCandidates
```

```
{
   "startTime" : startTime,
   "endTime" : endTime,
   "territoryIds" : [territoryIds]
   "workType" : 
       {
           "id": workTypeId
       }
}
```

```
{
    "startTime" : "2021-10-25T17:30:00.000+0000",
    "accountId" : "001B000001McLhMIAV",
    "territoryIds" : ["0HhB0000000TaHOKA0"],
    "workType" : 
        {
            "id": "08qB0000000UF63IAG"
        }
    
 }
```

```
{
  "candidates": [
    {
      "endTime" : "2021-10-25T18:30:00.000+0000",
      "resources" : [ "0HnB0000000TavDKAS" ],
      "startTime" : "2021-10-25T17:30:00.000+0000",
      "territoryId" : "0HhB0000000TaHOKA0"
    }, {
      "endTime" : "2021-10-25T19:00:00.000+0000",
      "resources" : [ "0HnB0000000TavDKAS" ],
      "startTime" : "2021-10-25T18:00:00.000+0000",
      "territoryId" : "0HhB0000000TaHOKA0"
    }, {
      "endTime" : "2021-10-25T19:30:00.000+0000",
      "resources" : [ "0HnB0000000TavDKAS" ],
      "startTime" : "2021-10-25T18:30:00.000+0000",
      "territoryId" : "0HhB0000000TaHOKA0"
    }, {
      "endTime" : "2021-10-25T20:00:00.000+0000",
      "resources" : [ "0HnB0000000TavDKAS" ],
      "startTime" : "2021-10-25T19:00:00.000+0000",
      "territoryId" : "0HhB0000000TaHOKA0"
    }  ]
}
```

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_get_service_appointment_details.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc5_update_anonymous_appoint.htm)
