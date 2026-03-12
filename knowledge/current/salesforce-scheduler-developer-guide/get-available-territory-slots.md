---
title: "Get Available Territory Slots"
domain: salesforce-scheduler-developer-guide
topic: get-available-territory-slots
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.043Z
estimatedTokens: 666
keywords: [Territory, Slots, time, slot, period, day, appointment, scheduled, available-territory-slots, Connect, API, fetch, consolidated, availability, service]
---

# Get Available Territory Slots

> A time slot represents a period in a day when an appointment can be scheduled. Use
      the available-territory-slots Connect API to fetch the
      consolidated availability of each service resource within the selected
    territory.

# Get Available Territory Slots

A time slot represents a period in a day when an appointment can be scheduled. Use the available-territory-slots Connect API to fetch the consolidated availability of each service resource within the selected territory.

1.  Create a page in your app where you can show the available time slots based on the work type group and service territory.
2.  Make a POST request on the [available-territory-slots](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_resources_available_territory_slots.htm "Get consolidated availability of each service resource within specified territories.") Connect API by passing the required workTypeGroupId and territoryIds parameters.

    Resource URI

    ```

    ```

    For an Existing User (Account)

    To consider an existing user’s preferred visiting hours, pass accountId in the input request body. The preference is enforced when the [Enforce Account's Visiting Hours policy rule](https://help.salesforce.com/articleView?id=platform.ls_scheduling_policies.htm&type=5&language=en_US) is enabled.

    Sample Request

    ```

    ```

    Sample Response

    The API returns the available time slots and service resources.

    ```

    ```

    For a Guest User (Lead)

    Sample Request

    ```

    ```

    Sample Response

    The API returns the available time slots and service resources.

    ```

    ```

3.  Parse the JSON response, and show only the available time slots on the page. Don’t show the service resources to maintain their privacy.

    Here’s how a page showing the available time slots can look.

    ![A representation of the Select Service Appointment Time screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fscreen_service_appointment_time.png&folder=salesforce_scheduler_developer_guide)

4.  Write custom code to randomly select a service resource for the appointment based on the time slot that the user selects. This sample code automatically selects a service resource and stores it in serviceResourceId property.
5.  Pass the list of service resources available for the selected time slot in resources.

On the next page in your app, you can show the appointment details for the user to review and create the appointment.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_service_territory.htm "Get Service Territories")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_create_anonymous_appointment.htm "Create Service Appointments")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect/scheduling/available-territory-slots
```

```
{
   "accountId" : "001S7000001pFlJIAU",
   "workTypeGroupId" : "0VSS700000000sVOAQ",
   "territoryIds" : [
      "0HhS700000001DYKAY"
   ],
 "engagementChannelTypeIds": [
    "0eFS70000004CG5MAM"
  ]
}
```

```
{
  "result" : {
    "territorySlots" : [ {
      "slots" : [{
        "endTime" : "2023-11-29T20:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T19:00:00.000Z"
      }, {
        "endTime" : "2023-11-29T20:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T19:15:00.000Z"
      }, {
        "endTime" : "2023-11-29T20:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T19:30:00.000Z"
      }, {
        "endTime" : "2023-11-29T20:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T19:45:00.000Z"
      }, {
        "endTime" : "2023-11-29T21:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T20:00:00.000Z"
      }, {
        "endTime" : "2023-11-29T21:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T20:15:00.000Z"
      }, {
        "endTime" : "2023-11-29T21:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T20:30:00.000Z"
      }, {
        "endTime" : "2023-11-29T21:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T20:45:00.000Z"
      }, {
        "endTime" : "2023-11-29T22:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T21:00:00.000Z"
      }, {
        "endTime" : "2023-11-29T22:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T21:15:00.000Z"
      }, {
        "endTime" : "2023-11-29T22:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T21:30:00.000Z"
      }, {
        "endTime" : "2023-11-29T22:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T21:45:00.000Z"
      }, {
        "endTime" : "2023-11-29T23:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T22:00:00.000Z"
      }, {
        "endTime" : "2023-11-29T23:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T22:15:00.000Z"
      }, {
        "endTime" : "2023-11-29T23:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T22:30:00.000Z"
      }, {
        "endTime" : "2023-11-29T23:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T22:45:00.000Z"
      }, {
        "endTime" : "2023-11-30T00:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T23:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T00:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T23:15:00.000Z"
      }, {
        "endTime" : "2023-11-30T00:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T23:30:00.000Z"
      }, {
        "endTime" : "2023-11-30T00:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T23:45:00.000Z"
      }, {
        "endTime" : "2023-11-30T01:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T00:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T01:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T00:15:00.000Z"
      }, {
        "endTime" : "2023-11-30T01:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T00:30:00.000Z"
      }, {
        "endTime" : "2023-11-30T01:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T00:45:00.000Z"
      }, {
        "endTime" : "2023-11-30T02:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T01:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T18:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T17:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T18:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T17:15:00.000Z"
      }, {
        "endTime" : "2023-11-30T18:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T17:30:00.000Z"
      }, {
        "endTime" : "2023-11-30T18:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T17:45:00.000Z"
      }, {
        "endTime" : "2023-11-30T19:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T18:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T19:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T18:15:00.000Z"
      }, {
        "endTime" : "2023-11-30T19:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T18:30:00.000Z"
      }, {
        "endTime" : "2023-11-30T19:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T18:45:00.000Z"
      }, {
        "endTime" : "2023-11-30T20:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T19:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T20:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T19:15:00.000Z"
      }, {
        "endTime" : "2023-11-30T20:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T19:30:00.000Z"
      }, {
        "endTime" : "2023-11-30T20:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T19:45:00.000Z"
      }, {
        "endTime" : "2023-11-30T21:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T20:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T21:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T20:15:00.000Z"
      }],
      "territoryId" : "0HhS700000001DYKAY"
    } ]
  }
}
```

```
{
   "workTypeGroupId" : "0VSS700000000sVOAQ",
   "territoryIds" : [
      "0HhS700000001DYKAY"
   ],
 "engagementChannelTypeIds": [
    "0eFS70000004CG5MAM"
  ]
}
```

```
{
  "result" : {
    "territorySlots" : [ {
      "slots" : [{
        "endTime" : "2023-11-29T20:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T19:00:00.000Z"
      }, {
        "endTime" : "2023-11-29T20:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T19:15:00.000Z"
      }, {
        "endTime" : "2023-11-29T20:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T19:30:00.000Z"
      }, {
        "endTime" : "2023-11-29T20:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T19:45:00.000Z"
      }, {
        "endTime" : "2023-11-29T21:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T20:00:00.000Z"
      }, {
        "endTime" : "2023-11-29T21:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T20:15:00.000Z"
      }, {
        "endTime" : "2023-11-29T21:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T20:30:00.000Z"
      }, {
        "endTime" : "2023-11-29T21:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T20:45:00.000Z"
      }, {
        "endTime" : "2023-11-29T22:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T21:00:00.000Z"
      }, {
        "endTime" : "2023-11-29T22:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T21:15:00.000Z"
      }, {
        "endTime" : "2023-11-29T22:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T21:30:00.000Z"
      }, {
        "endTime" : "2023-11-29T22:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T21:45:00.000Z"
      }, {
        "endTime" : "2023-11-29T23:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T22:00:00.000Z"
      }, {
        "endTime" : "2023-11-29T23:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T22:15:00.000Z"
      }, {
        "endTime" : "2023-11-29T23:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T22:30:00.000Z"
      }, {
        "endTime" : "2023-11-29T23:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T22:45:00.000Z"
      }, {
        "endTime" : "2023-11-30T00:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T23:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T00:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T23:15:00.000Z"
      }, {
        "endTime" : "2023-11-30T00:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T23:30:00.000Z"
      }, {
        "endTime" : "2023-11-30T00:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-29T23:45:00.000Z"
      }, {
        "endTime" : "2023-11-30T01:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T00:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T01:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T00:15:00.000Z"
      }, {
        "endTime" : "2023-11-30T01:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T00:30:00.000Z"
      }, {
        "endTime" : "2023-11-30T01:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T00:45:00.000Z"
      }, {
        "endTime" : "2023-11-30T02:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T01:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T18:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T17:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T18:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T17:15:00.000Z"
      }, {
        "endTime" : "2023-11-30T18:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T17:30:00.000Z"
      }, {
        "endTime" : "2023-11-30T18:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T17:45:00.000Z"
      }, {
        "endTime" : "2023-11-30T19:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T18:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T19:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T18:15:00.000Z"
      }, {
        "endTime" : "2023-11-30T19:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T18:30:00.000Z"
      }, {
        "endTime" : "2023-11-30T19:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T18:45:00.000Z"
      }, {
        "endTime" : "2023-11-30T20:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T19:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T20:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T19:15:00.000Z"
      }, {
        "endTime" : "2023-11-30T20:30:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T19:30:00.000Z"
      }, {
        "endTime" : "2023-11-30T20:45:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T19:45:00.000Z"
      }, {
        "endTime" : "2023-11-30T21:00:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T20:00:00.000Z"
      }, {
        "endTime" : "2023-11-30T21:15:00.000Z",
        "engagementChannelTypeIds" : [ "0eFS70000004CG5MAM" ],
        "resources" : [ "0HnS700000002jAKAQ" ],
        "startTime" : "2023-11-30T20:15:00.000Z"
      }],
      "territoryId" : "0HhS700000001DYKAY"
    } ]
  }
}
```

## Related Topics

- available-territory-slots (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_resources_available_territory_slots.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_get_service_territory.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc2_create_anonymous_appointment.htm)
