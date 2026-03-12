---
title: "Billing Schedule Recovery Input"
domain: revenue-cloud
topic: billing-schedule-recovery-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.758Z
estimatedTokens: 110
keywords: [Billing, Schedule, Recovery, Input, representation, schedules, recover, associated, invoice]
---

# Billing Schedule Recovery Input

> Input representation of the details of the billing schedules to recover the associated
    invoice.

# Billing Schedule Recovery Input

Input representation of the details of the billing schedules to recover the associated invoice.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billing​Schedule​Ids | String[] | IDs of the billing schedules to recover the invoice for. You can recover one billing schedule per API request. | Required | 62.0 |

## Code Examples

```
{
    "billingScheduleIds": ["44bDU00000000XXYAY"]
  }
```
