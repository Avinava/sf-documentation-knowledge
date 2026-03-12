---
title: "Invoice Recovery"
domain: revenue-cloud
topic: invoice-recovery
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.856Z
estimatedTokens: 194
keywords: [Invoice, Recovery, Output, representation, details, recovered, invoice, billing, schedules.]
---

# Invoice Recovery

> Output representation of the details of the recovered invoice and billing
    schedules.

# Invoice Recovery

Output representation of the details of the recovered invoice and billing schedules.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| billing​Schedules | Billing Schedule Recovery[] | Billing schedules associated with this invoice. | Big, 62.0 | 62.0 |
| invoice​Errors | Error Response | List of errors encountered during the invoice recovery. | Big, 62.0 | 62.0 |
| invoice​Id | String | ID of the recovered invoice. | Big, 62.0 | 62.0 |
| invoice​Status | String | Flag that indicates the invoice status. | Big, 62.0 | 62.0 |
| success | Boolean | Indicates whether the overall transaction was successful or not (true) or not (false). | Big, 62.0 | 62.0 |

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

- Billing Schedule Recovery (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_billing_schedule_recovery_output.htm)
