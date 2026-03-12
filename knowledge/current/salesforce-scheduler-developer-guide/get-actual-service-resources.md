---
title: "Get Actual Service Resources"
domain: salesforce-scheduler-developer-guide
topic: get-actual-service-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:43.984Z
estimatedTokens: 507
keywords: [Actual, Service, Resources, Retrieve, resources—an, employee, company, loan, officer, investment, advisor, doctor, nurse, practitioner, retail]
---

# Get Actual Service Resources

> Retrieve the actual service resources—an employee from your
      company, such as a loan officer, investment advisor, doctor, nurse practitioner, or retail
      store specialist who attends appointments with clients—based on the work type group and
      service territory that’s assigned to a service appointment. Business managers or
      administrators can then assign an available service resource to an
    appointment.

# Get Actual Service Resources

Retrieve the actual service resources—an employee from your company, such as a loan officer, investment advisor, doctor, nurse practitioner, or retail store specialist who attends appointments with clients—based on the work type group and service territory that’s assigned to a service appointment. Business managers or administrators can then assign an available service resource to an appointment.

1.  Make a POST request on the [getAppointmentCandidates](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/requests_ls_getappointmentcandidates.htm "HTML (New Window)") REST API by passing the required workTypeGroupId and territoryIds parameters.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

    #### Note

    Specify the shift’s scheduling policy ID to show only the actual resources who have set regular working hours with shifts. For more information, see [Configure Scheduling Policy to Enforce Shifts](atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_scheduling_policy_to_actual_resource.htm "Use a scheduling policy to enforce one or more rules to find the best service resources for appointments. Apply a scheduling policy to your scheduling process to ensure that an appointment meets the criteria that the policy rules define. Create a scheduling policy for the actual resources who have created working hours by using shifts. Ensure that the resources are present only during appointment reassignment.").

    Resource URI

    ```

    ```

    Sample Request

    ```

    ```

    Sample Response

    The API returns the service resources available for the specified time slots.

    ```

    ```

2.  Parse the JSON response, and show the actual service resources on a page. Business managers or administrators can select an actual resource for the appointment.

## Code Examples

```
https://yourInstance.salesforce.com/services/data/v66.0/scheduling/getAppointmentCandidates
```

```
{
  "startTime": "2022-10-01T17:00:00.000+0000",
  "endTime": "2022-10-08T18:00:00.000+0000",
  "workTypeGroupId": "0VSS70000004DvWOAU",
  "schedulingPolicyId": "0VrS70000004CEhKAM",
  "territoryIds": [
    "0HhS70000004F9zKAE"
  ]
}
```

```
{
  "candidates": [
    {
      "endTime": "2022-10-01T17:30:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T17:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-01T18:00:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T17:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-01T18:30:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T18:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-01T19:00:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T18:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-01T19:30:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T19:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-01T20:00:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T19:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-01T20:30:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T20:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-01T21:00:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T20:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-01T21:30:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T21:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-01T22:00:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T21:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-01T22:30:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T22:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-01T23:00:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T22:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-01T23:30:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T23:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-02T00:00:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-01T23:30:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    },
    {
      "endTime": "2022-10-02T00:30:00.000+0000",
      "resources": [
        "0HnS700000007xwKAA"
      ],
      "startTime": "2022-10-02T00:00:00.000+0000",
      "territoryId": "0HhS70000004F9zKAE"
    }
  ]
}
```

## Related Topics

- Configure Scheduling Policy to Enforce Shifts (atlas.en-us.salesforce_scheduler_developer_guide.meta/salesforce_scheduler_developer_guide/uc11_assign_scheduling_policy_to_actual_resource.htm)
