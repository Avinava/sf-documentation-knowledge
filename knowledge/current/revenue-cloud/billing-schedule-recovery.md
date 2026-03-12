---
title: "Billing Schedule Recovery"
domain: revenue-cloud
topic: billing-schedule-recovery
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.124Z
estimatedTokens: 109
keywords: [Billing, Schedule, Recovery, Output, representation, recovered, schedules]
---

# Billing Schedule Recovery

> Output representation of the details of the recovered billing schedules.

# Billing Schedule Recovery

Output representation of the details of the recovered billing schedules.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| billing​Schedule​Id | String | ID of the billing schedule. | Big, 62.0 | 62.0 |
| billing​Schedule​Status | String | Flag that indicates the billing schedule status. | Big, 62.0 | 62.0 |

## Code Examples

```
"billingSchedules": [
        {
          "billingScheduleId": "44bDU00000000XX",
          "billingScheduleStatus": "ReadyForInvoicing"
        }
    ]
```
