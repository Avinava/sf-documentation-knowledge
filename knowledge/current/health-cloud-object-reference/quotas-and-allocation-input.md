---
title: "Quotas and Allocation Input"
domain: health-cloud-object-reference
topic: quotas-and-allocation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.145Z
estimatedTokens: 234
keywords: [Quotas, Allocation, Input, representation, slots]
---

# Quotas and Allocation Input

> Input representation of available slots for quotas and allocation.

# Quotas and Allocation Input

Input representation of available slots for quotas and allocation.

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

## Code Examples

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
