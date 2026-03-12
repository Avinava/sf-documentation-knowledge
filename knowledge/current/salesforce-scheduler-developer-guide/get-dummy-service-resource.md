---
title: "Get Dummy Service Resource"
domain: salesforce-scheduler-developer-guide
topic: get-dummy-service-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.988Z
estimatedTokens: 488
keywords: [Dummy, Service, Resource, Show, users, availability, selected, work, group, territory]
---

# Get Dummy Service Resource

> Show your users the dummy resource and its availability  based on the
      selected work type group and service territory.

# Get Dummy Service Resource

Show your users the dummy resource and its availability based on the selected work type group and service territory.

1.  Create a page to show your users dummy service resources.
2.  Make a POST request on the [getAppointmentCandidates](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/requests_ls_getappointmentcandidates.htm "HTML (New Window)") REST API by passing the required workTypeGroupId and territoryIds parameters. Set allowConcurrentScheduling to true to get concurrent time slots for the dummy resource.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    Specify the operating hour scheduling policy ID to show only the dummy resource who’s defined with operating hours for concurrent scheduling. See [Configure Scheduling Policy to Enforce Operating Hours](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_scheduling_policy_to_dummy_resource.htm "Use a scheduling policy to enforce one or more rules to find the best service resources for appointments. Apply a scheduling policy to your scheduling process to ensure that an appointment meets the criteria that the policy rules define. Create a scheduling policy for the dummy resource who has set up operating hours. Ensure that the resource is present only when creating an appointment.").

    Resource URI

    ```

    ```

    Sample Request

    ```

    ```

    Sample Response

    The API returns the service resources and available time slots.

    ```

    ```

3.  Parse the JSON response, and show the dummy resource on a page that you created. Your users can select the dummy resource for the appointment.

On the next page, you can show the appointment details for the user to review and create the appointment.

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/scheduling/getAppointmentCandidates
```

```
{
  "startTime": "2022-10-01T00:00:00.000Z",
  "endTime": "2022-10-08T20:00:00.000Z",
  "allowConcurrentScheduling": true,
  "schedulingPolicyId": "0VrS7000000004XKAQ",
  "filterByResources": [
    "0HnS70000004EFyKAM"
  ],
  "workTypeGroupId": "0VSS70000004DvWOAU",
  "territoryIds": [
    "0HhS70000004F9zKAE"
  ]
}
```

```
{
  "candidates": [
    {
      "endTime": "2022-10-03T16:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T16:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T17:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T16:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T17:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T17:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T18:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T17:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T18:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T18:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T19:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T18:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T19:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T19:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T20:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T19:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T20:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T20:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T21:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T20:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T21:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T21:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T22:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T21:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T22:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T22:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T23:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T22:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-03T23:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T23:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T00:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-03T23:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T00:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T00:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T01:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T00:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T01:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T01:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T02:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T01:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T02:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T02:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T03:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T02:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T03:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T03:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T04:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T03:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T16:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T16:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T17:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T16:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T17:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T17:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T18:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T17:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T18:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T18:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T19:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T18:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T19:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T19:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T20:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T19:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T20:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T20:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T21:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T20:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T21:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T21:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T22:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T21:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T22:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T22:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T23:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T22:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-04T23:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T23:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-05T00:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-04T23:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-05T00:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-05T00:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-05T01:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-05T00:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-05T01:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-05T01:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-05T02:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-05T01:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-05T02:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-05T02:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-05T03:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-05T02:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-05T03:30:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-05T03:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-05T04:00:00.000+0000",
      "resources": [
        "0HnS70000004EFyKAM"
      ],
      "startTime": "2022-10-05T03:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    }
  ]
}
```

## Related Topics

- Configure Scheduling Policy to Enforce Operating Hours (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_scheduling_policy_to_dummy_resource.htm)
