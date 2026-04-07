---
title: "Billing Schedule Recovery List"
domain: revenue-cloud
topic: billing-schedule-recovery-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:45.267Z
estimatedTokens: 98
keywords: [Billing, Schedule, Recovery, recovered, schedules, invoice]
---

> Output representation of the recovered details of the billing schedules and associated
    invoice.

# Billing Schedule Recovery List

Output representation of the recovered details of the billing schedules and associated invoice.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| recovery​Results | Invoice Recovery[] | Details of the recovered invoice and billing schedules. | Big, 62.0 | 62.0 |

## Code Examples

```
{
  "recoveryResults": [
    {
      "billingSchedules": [
        {
          "billingScheduleId": "44bDU00000000XX",
          "billingScheduleStatus": "ReadyForInvoicing"
        }
      ],
      "invoiceErrors": [],
      "invoiceId": null,
      "success": true
    }
  ]
}
```

## Related Topics

- Invoice Recovery (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_invoice_recovery_output.htm)
