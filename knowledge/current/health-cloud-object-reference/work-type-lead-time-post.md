---
title: "Work Type Lead Time (POST)"
domain: health-cloud-object-reference
topic: work-type-lead-time-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.375Z
estimatedTokens: 409
keywords: [Work, Lead, Time, POST, their, associated, times, optimized, across, regions, specific, advanced, therapy]
---

# Work Type Lead Time (POST)

> Get a list of work types and their associated lead times that are optimized across
    regions for a specific advanced therapy.

# Work Type Lead Time (POST)

Get a list of work types and their associated lead times that are optimized across regions for a specific advanced therapy.

An advanced therapy process (work procedure) comprises several stages (work types), steps, and tasks, each of which has its own completion time or lead time. For example, the zunotous disease therapy has multiple stages, such as, Apheresis, Manufacturing, and Infusion, each of which consists of discrete steps. Apheresis has a lead time of two days, following which the manufacturing stage begins. This API helps to automate and streamline the advanced therapy management process by getting the optimized work type lead times across various regions.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of a program enrollee, an account, or opportunity. | Optional | 60.0 |
| priority | Integer | Number between one and ten indicating the priority associated with a country or service territory. This field is useful when you want to override the lead time based on a country or service territory. | Optional | 60.0 |
| workProcedureId | String | Advanced therapy ID. | Required | 60.0 |

Response body for POST

[Work Type Lead Time Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_work_type_lead_time_output.htm "Output representation of a list of work types and their associated lead times.")

## Code Examples

```
/connect/health/advanced-therapy-management/worktype-leadtime
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/health/advanced-therapy-management/worktype-leadtime
```

```
{
   "contextId":"0Wwxx0000000DWjCAM",
   "workProcedureId":"0zjSG00000000PpYAI",
   "priority":5
}
```

## Related Topics

- Work Type Lead Time Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_work_type_lead_time_output.htm)
