---
title: "Get Service Resources"
domain: salesforce-scheduler-developer-guide
topic: get-service-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.018Z
estimatedTokens: 453
keywords: [Service, Resources, resource, employee, organization, loan, officer, investment, advisor, doctor, nurse, practitioner, retail, store, specialist, Retrieve, selected, work, group, territory]
---

# Get Service Resources

> Retrieve the available service resources based on the selected work
      type group or work type, and service territory.

# Get Service Resources

Retrieve the available service resources based on the selected work type group or work type, and service territory.

A service resource is an employee from your organization, such as a loan officer, investment advisor, doctor, nurse practitioner, or retail store specialist, who attends appointments with clients.

Create a page in your app where you can show the available service resources based on the work type group or work type, and service territory.

1.  Make a POST request on the [getAppointmentCandidates](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/requests_ls_getappointmentcandidates.htm "Returns a list of service resources (appointment candidates) based on work type group or work type and service territories.") REST API by passing the required workTypeGroupId or workTypeId, and territoryIds parameters.

    Resource URI

    ```

    ```

    For an Existing User (Account)

    To consider an existing user’s preferred visiting hours, pass accountId in the input request body. The preference is enforced when the Include Only Required Service Resources and Ignore Excluded Service Resources policy rules are enabled.

    Sample Request

    Using workTypeGroupId:

    ```

    ```

    Using workTypeId:

    ```

    ```

    Sample Response

    The API returns the service resources and their available time slots.

    ```

    ```

    For a Guest User (Lead)

    Sample Request

    Using workTypeGroupId:

    ```

    ```

    Using workTypeId:

    ```

    ```

    Sample Response

    The API returns the service resources and their available time slots.

    ```

    ```


Parse the JSON response, and display the available service resources on web page so that users can select a service resource for the appointment. Here’s how that page can look.![A representation of the Select Service Resource screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fuc9_select_service_resource.png&folder=salesforce_scheduler_developer_guide)

When users select a resource, show the available time slots for the selected resource. Here’s how a page showing the available time slots can look.![A representation of the Select Service Appointment Time screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fuc9_select_appointment_time.png&folder=salesforce_scheduler_developer_guide)

On the next page in your app, you can show the appointment details for the user to review and create the appointment.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_default_work_type.htm "Get Work Type")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_create_service_appointment.htm "Create Service Appointments")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/scheduling/getAppointmentCandidates
```

```
{
  "startTime": "2023-02-15T09:00:00.000+0000",
  "endTime": "2023-02-15T19:00:00.000+0000",
  "accountId": "001S7000001pFlJIAU",
  "workTypeGroupId": "0VSS700000000sVOAQ",
  "territoryIds": [
    "0HhS700000001DYKAY"
  ],
  "engagementChannelTypeIds": [
    "0eFS70000004CG5MAM"
  ]
}
```

```
{
  "candidates" : [ {
    "endTime" : "2023-02-15T18:00:00.000+0000",
    "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
    "resources" : [ "0HnS700000002jAKAQ" ],
    "startTime" : "2023-02-15T17:00:00.000+0000",
    "territoryId" : "0HhS700000001DYKAY"
  }, {
    "endTime" : "2023-02-15T18:15:00.000+0000",
    "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
    "resources" : [ "0HnS700000002jAKAQ" ],
    "startTime" : "2023-02-15T17:15:00.000+0000",
    "territoryId" : "0HhS700000001DYKAY"
  }, {
    "endTime" : "2023-02-15T18:30:00.000+0000",
    "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
    "resources" : [ "0HnS700000002jAKAQ" ],
    "startTime" : "2023-02-15T17:30:00.000+0000",
    "territoryId" : "0HhS700000001DYKAY"
  }, {
    "endTime" : "2023-02-15T18:45:00.000+0000",
    "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
    "resources" : [ "0HnS700000002jAKAQ" ],
    "startTime" : "2023-02-15T17:45:00.000+0000",
    "territoryId" : "0HhS700000001DYKAY"
  }, {
    "endTime" : "2023-02-15T19:00:00.000+0000",
    "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
    "resources" : [ "0HnS700000002jAKAQ" ],
    "startTime" : "2023-02-15T18:00:00.000+0000",
    "territoryId" : "0HhS700000001DYKAY"
  } ]
}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/scheduling/getAppointmentCandidates
```

```
{
  "accountId": "001x0000005DLxpAAG",
  "startTime": "2022-04-19T10:30:00.000+0000",
  "endTime": "2022-04-19T10:40:00.000+0000",
  "workTypeGroupId": "0VSx000000014DmGAI",
  "territoryIds": [
    "0Hhx000000012oSCAQ"
  ]
}
```

## Related Topics

- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_get_service_territory.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc1_create_single_resource_appointment.htm)
- getAppointmentCandidates (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/requests_ls_getappointmentcandidates.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_default_work_type.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc9_create_service_appointment.htm)
