---
title: "Get Appointment Time Slots"
domain: salesforce-scheduler-developer-guide
topic: get-appointment-time-slots
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:44.075Z
estimatedTokens: 664
keywords: [Appointment, Time, Slots, slot, period, day, scheduled, getAppointmentSlots, REST, API, fetch, resource, available-territory-slots, Connect, consolidated, availability, service]
---

# Get Appointment Time Slots

> A time slot is a period in a day when an appointment can be scheduled. Use the
        available-territory-slots Connect API to fetch the
      consolidated availability of each service resource within the selected
    territory.

# Get Appointment Time Slots

A time slot is a period in a day when an appointment can be scheduled. Use the available-territory-slots Connect API to fetch the consolidated availability of each service resource within the selected territory.

Create a page in your app where you can show the available time slots based on the work type group and service territory.

Make a POST request on the [available-territory-slots](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_resources_available_territory_slots.htm "Get consolidated availability of each service resource within specified territories.") Connect API by passing the required workType and territoryIds parameters.

Restrict the number of service resources returned by the request by passing a finite, integer value to the resourceLimit​ApptDistribution parameter.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

When appointment distribution is enabled, Salesforce Scheduler fetches and shows a list of appointment time slots based on the resource utilisation calculation frequency: monthly, parameter-based, or weekly. The Salesforce Scheduler uses the service resources’ utilization score for a specific period to suggest time slots for the least occupied resources. For more information, see [How Appointment Distribution Works](https://help.salesforce.com/s/articleView?id=platform.ls_how_appt_distribution_works.htm&type=5&language=en_US "HTML (New Window)").

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=salesforce_scheduler_developer_guide)

#### Tip

In the custom app, you can hard code most of the parameters, including territoryIds and resourceLimit​ApptDistribution. Set the territoryIds parameter to the ID of the new virtual territory that you created in the beginning of this procedure. If the new territory is assigned to multiple work types, you can let your end user select a value for workType.

Resource URI

```

```

For an Existing User (Account)

To consider an existing user’s preferred visiting hours, pass accountId in the input request body.

You can also specify the startTime and endTime parameters with the request.

The preference is enforced when the [Enforce Account's Visiting Hours policy rule](https://help.salesforce.com/articleView?id=platform.ls_scheduling_policies.htm&type=5&language=en_US "HTML (New Window)") is enabled.

Sample Request

```

```

Sample Response

The API returns the available time slots and service resources based on resource utilization. The response returns only 10 least consumed resources, as specified by the resourceLimit​ApptDistribution parameter.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

Setting a maximum number of resources you want to show for scheduling makes it possible to optimise performance for large territories, such as virtual or tele scenarios.

```

```

For a Guest User (Lead)

Sample Request

```

```

Sample Response

The API returns the available time slots and service resources based on resource utilization. The response returns only 10 least consumed resources, as specified by the resourceLimit​ApptDistribution parameter.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

Setting a maximum number of resources you want to show for scheduling makes it possible to optimise performance for large territories, such as virtual or tele scenarios.

```

```

Parse the JSON response, and show only the available time slots on the page so that users can select a time slot for their appointment. To ensure privacy, don’t show the service resources.

Here’s how a page showing the available time slots can look.![A representation of the Select Service Appointment Time screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fsalesforce_scheduler%2Fimages%2Fscreen_service_appointment_time.png&folder=salesforce_scheduler_developer_guide)

Write custom code to select the least utilized resource or to randomly select a service resource for the appointment based on the time slot that the user selects.

This sample code automatically selects the least utilized resource from the list available for the selected time slot.

```

```

This sample code automatically selects a service resource and stores it in serviceResourceId. Pass the list of service resources available for the selected time slot in resources.

```

```

On the next page, you can show the appointment details for the user to review and create the appointment.

-   [← Previous](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_scheduler_api_auth.htm "Authenticate API Calls with Salesforce Scheduler APIs")
-   [Next →](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_create_anonymous_appointment.htm "Create Service Appointments")

## Code Examples

```
https://yourInstance.salesforce.com/services/data/vXX.X/scheduling/getAppointmentSlots
```

```
{
   "startTime" : "2023-11-30T09:00:00.000+0000",
   "endTime" : "2023-12-01T23:30:00.000+0000",
   "accountId" : "001S7000001pFlJIAU",
   "workTypeGroupId" : "0VSS700000000sVOAQ",
   "territoryIds" : ["0HhS700000001DYKAY"],
   "engagementChannelTypeIds": [
    "0eFS70000004CG5MAM"
   ],
   "primaryResourceId" : "0HnS700000002jAKAQ",
   "requiredResourceIds" : ["0HnS700000002jKKAQ"]
}
```

```
{
  "timeSlots": [
    {
      "endTime": "2023-11-30T18:00:00.000+0000",
      "engagementChannelTypeIds": [
        "0eFS70000004CG5MAM"
      ],
      "remainingAppointments": 1,
      "startTime": "2023-11-30T17:00:00.000+0000",
      "territoryId": "0HhS700000001DYKAY"
    },
    {
      "endTime": "2023-11-30T19:00:00.000+0000",
      "engagementChannelTypeIds": [
        "0eFS70000004CG5MAM"
      ],
      "remainingAppointments": 1,
      "startTime": "2023-11-30T18:00:00.000+0000",
      "territoryId": "0HhS700000001DYKAY"
    },
    {
      "endTime": "2023-11-30T20:00:00.000+0000",
      "engagementChannelTypeIds": [
        "0eFS70000004CG5MAM"
      ],
      "remainingAppointments": 1,
      "startTime": "2023-11-30T19:00:00.000+0000",
      "territoryId": "0HhS700000001DYKAY"
    },
    {
      "endTime": "2023-11-30T21:00:00.000+0000",
      "engagementChannelTypeIds": [
        "0eFS70000004CG5MAM"
      ],
      "remainingAppointments": 1,
      "startTime": "2023-11-30T20:00:00.000+0000",
      "territoryId": "0HhS700000001DYKAY"
    },
    {
      "endTime": "2023-11-30T22:00:00.000+0000",
      "engagementChannelTypeIds": [
        "0eFS70000004CG5MAM"
      ],
      "remainingAppointments": 1,
      "startTime": "2023-11-30T21:00:00.000+0000",
      "territoryId": "0HhS700000001DYKAY"
    },
    {
      "endTime": "2023-11-30T23:00:00.000+0000",
      "engagementChannelTypeIds": [
        "0eFS70000004CG5MAM"
      ],
      "remainingAppointments": 1,
      "startTime": "2023-11-30T22:00:00.000+0000",
      "territoryId": "0HhS700000001DYKAY"
    },
    {
      "endTime": "2023-12-01T00:00:00.000+0000",
      "engagementChannelTypeIds": [
        "0eFS70000004CG5MAM"
      ],
      "remainingAppointments": 1,
      "startTime": "2023-11-30T23:00:00.000+0000",
      "territoryId": "0HhS700000001DYKAY"
    },
    {
      "endTime": "2023-12-01T01:00:00.000+0000",
      "engagementChannelTypeIds": [
        "0eFS70000004CG5MAM"
      ],
      "remainingAppointments": 1,
      "startTime": "2023-12-01T00:00:00.000+0000",
      "territoryId": "0HhS700000001DYKAY"
    },
    {
      "endTime": "2023-12-01T02:00:00.000+0000",
      "engagementChannelTypeIds": [
        "0eFS70000004CG5MAM"
      ],
      "remainingAppointments": 1,
      "startTime": "2023-12-01T01:00:00.000+0000",
      "territoryId": "0HhS700000001DYKAY"
    }
  ]
}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect/scheduling/available-territory-slots
```

```
{
    "accountId" : "001B000001McLhMIAV",
    "workType" :  {
        "id": "0VS2x000000PVu5GAG"
      },
    "resourceLimit​ApptDistribution" : 10,
    "territoryIds" : [
       "0Hh2w000000XmoXCAS"
    ]
 }
```

## Related Topics

- getAppointmentSlots (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/requests_ls_getappointmentslots.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_get_appointment_candidates.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc3_create_multi_resource_appointment.htm)
- available-territory-slots (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/connect_resources_available_territory_slots.htm)
- ← Previous (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_scheduler_api_auth.htm)
- Next → (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc8_create_anonymous_appointment.htm)
