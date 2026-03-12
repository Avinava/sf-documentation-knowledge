---
title: "Quotas and Allocations"
domain: health-cloud-object-reference
topic: quotas-and-allocations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.325Z
estimatedTokens: 405
keywords: [Quotas, Allocations, slots, manage, therapies, Work, Procedures, various, stages, across, multiple, treatment, centers]
---

# Quotas and Allocations

> Find available slots and manage quotas for therapies (Work Procedures) at various
    stages (Work Types) across multiple treatment centers.

# Quotas and Allocations

Find available slots and manage quotas for therapies (Work Procedures) at various stages (Work Types) across multiple treatment centers.

See [Advanced Therapy Management](https://help.salesforce.com/s/articleView?id=ind.admin_advanced_therapy_management_overview.htm&type=5&language=en_US) in

*Salesforce Help*

for details on quotas, allocations and slot management.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP method

POST

Request body for POST

Root XML tag

<quotasAndAllocations>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the program enrollee, a case or an opportunity used for slot searching. | Optional | 60.0 |
| endDate | String | End date and time of slot searching. | Optional | 60.0 |
| leadTimeMap | String | Lead time map of work type to lead time. | Optional | 60.0 |
| siteId | String | Work procedure organization used for slot searching. | Optional | 60.0 |
| startDate | String | Start date and time of slot searching. | Optional | 60.0 |
| workProcedureId | String | ID of the work procedure used for searching. | Optional | 60.0 |
| workTypeId | Map<String, Integer> | ID of the work type used for slot searching. | Optional | 60.0 |

Response Body for POST

[Quotas and Allocations](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_quota_availability.htm "Output representation of a list of available quotas, and their start and end dates for a work type.")

## Code Examples

```
/connect/health/advanced-therapy-management/quotas-and-allocations
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/health/advanced-therapy-management/quotas-and-allocations
```

```
{
          "contextId": "0Wwxx000000003FCAQ",
          "endDate": "2023-12-01T02:29:59.000Z",
          "leadTimeMap": {
            "08qxx0000004CSRAA2": 2,
            "08qxx0000004CSQAA2": 30,
            "08qxx0000004CSOAA2": 3,
            "08qxx0000004CSPAA2": 2
          },
          "siteId": "0Hhxx0000004CQmCAM",
          "startDate": "2023-11-15T02:30:00.000Z",
          "workProcedureId": "0uVxx00000000G9EAI",
          "workTypeId": "08qxx0000004CSPAA2"
   }
```

## Related Topics

- Quotas and Allocations (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_quota_availability.htm)
