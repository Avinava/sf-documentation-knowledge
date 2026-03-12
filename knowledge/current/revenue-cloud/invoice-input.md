---
title: "Invoice Input"
domain: revenue-cloud
topic: invoice-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.171Z
estimatedTokens: 329
keywords: [Invoice, Input, representation, details, billing, schedule.]
---

# Invoice Input

> Input representation of the details of the billing
    schedule.

# Invoice Input

Input representation of the details of the billing schedule.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account record to create the invoices for. | Required if the billing​ScheduleIds or billing​TransactionId property isn’t specified. | 63.0 |
| action | String | Type of invoice to be created. Valid values are:DraftPosted | Required | 62.0 |
| billing​ScheduleIds | String[] | List of billing schedule IDs that’s used to create the invoices. You can specify a maximum of 200 billing schedules. | Required if the accountId or billing​TransactionId property isn’t specified. | 62.0 |
| billing​TransactionId | String | ID of the billing transaction record, which is the order ID, to create the invoices for. | Required if the accountId or billing​ScheduleIds property isn’t specified. | 63.0 |
| correlation​Id | String | Property that’s tagged against the published InvoiceProcessedEvent event, if specified. | Optional | 62.0 |
| invoice​Date | String | Stamping date of the invoice in ISO 8601 format. | Required | 62.0 |
| target​Date | String | Date in ISO 8601 format used to decide the billing periods that are included to create invoices. | Required | 62.0 |

## Code Examples

```
{
  "accountId": "001SG00000mYtRWYA0",
  "action": "Posted",
  "billingScheduleIds": [
    "44bSG000000CVeMYAW"
  ],
  "billingTransactionId": "801SG00000mYtaXYAS",
  "correlationId": null,
  "invoiceDate": "2024-01-12",
  "targetDate": "2024-01-12"
}
```
