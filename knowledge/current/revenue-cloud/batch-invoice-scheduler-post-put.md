---
title: "Batch Invoice Scheduler (POST, PUT)"
domain: revenue-cloud
topic: batch-invoice-scheduler-post-put
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.522Z
estimatedTokens: 1013
keywords: [Batch, Invoice, Scheduler, POST, PUT, automatically, generate, invoices, criteria, filters, run, schedules, requirements]
---

# Batch Invoice Scheduler (POST, PUT)

> Create or update an invoice scheduler to automatically generate
      invoices. Use the criteria and filters of the invoice scheduler to set up the invoice run
      schedules based on your requirements.

# Batch Invoice Scheduler (POST, PUT)

Create or update an invoice scheduler to automatically generate invoices. Use the criteria and filters of the invoice scheduler to set up the invoice run schedules based on your requirements.

Special Access Rules

You need the Billing Operations User and Data Pipelines Base User permission sets to use this API. See [Data Pipelines](https://help.salesforce.com/s/articleView?id=sf.reference_data_processing_engine_requirements.htm&language=en_US "HTML (New Window)").

Resource

```

```

```

```

Resource example

```

```

```

```

Available version

62.0

HTTP methods

POST, PUT

PUT is supported in version 63.0 and later for invoice schedulers with Draft or Inactive status.

Request body for POST

JSON example

This example shows a sample request to create an invoice scheduler that generates invoices once.

```

```

This example shows a sample request to create an invoice scheduler that generates invoices daily.

```

```

This example shows a sample request to create an invoice scheduler that generates invoices weekly.

```

```

This example shows a sample request to create an invoice scheduler that generates invoices monthly on a specific date.

```

```

This example shows a sample request to create an invoice scheduler that runs immediately.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| endDate | String | End date of the invoice scheduler. | Optional | 63.0 |
| filter​Criteria | Batch Invoice Filter Criteria Input[] | List of line items of the filter criteria. | Optional | 62.0 |
| frequency​Cadence | String | Frequency to run the invoice scheduler. Valid values are:OnceDailyWeeklyMonthly | Required | 62.0 |
| frequency​Cadence​Options | Frequency Cadence Options | Frequency cadence options for the invoice scheduler. | Required | 62.0 |
| invoice​Date | String | Date shown on the invoice. This date is also used for tax calculations. | Required if the frequency​Cadence property is set to Once. | 62.0 |
| invoiceDate​Offset | Integer | Offset applied to the target date, which is the number of days added to or subtracted from the invoice date, to calculate the updated invoice date. | Required if the frequency​Cadence property is set to Daily, Weekly, or Monthly. | 62.0 |
| invoice​Status | String | Status of the invoice that specifies the expected invoice status from an invoice batch run. Valid values are:DraftPosted | Required | 62.0 |
| isInvoice​DateFrom​RunDate | Boolean | Indicates whether the invoice date is applicable from the date when the invoice scheduler is run (true) or not (false). | Optional | 63.0 |
| preferred​Time | String | Preferred time for the invoice batch run. | Required | 62.0 |
| scheduler​Name | String | Name of the invoice scheduler, which must be unique in your org. | Required | 62.0 |
| startDate | String | Start date of the invoice scheduler. | Required | 62.0 |
| status | String | Status of the invoice scheduler. Valid values are:DraftActiveInactive | Required | 62.0 |
| target​Date | String | Target date of the invoice batch run. Billing schedules having the next billing date before this date are picked up for invoicing.The target date must be less than or equal to the maximum allowed target date for the org. | Required if the frequency​Cadence property is set to Once. | 62.0 |
| target​DateOffset | Integer | Target date offset applied to the next invoice run date to calculate the target date. The offset is the number of days added to or subtracted from the next billing date. | Required if the frequency​Cadence property is set to Daily, Weekly, or Monthly. | 62.0 |
| timezone | String | Time zone that’s applicable for the invoice scheduler. | Optional | 62.0 |

Response body for POST

[Batch Invoice Scheduler](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_batch_invoice_scheduler_output.htm "Output representation of the details of an invoice scheduler.")

## Code Examples

```
/commerce/invoicing/invoice-schedulers
```

```
/commerce/invoicing/invoice-schedulers/billingBatchSchedulerId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/invoice-schedulers
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/invoice-schedulers/5BSxx0000004TwGGAU
```

```
{
  "schedulerName": "InvoiceScheduler",
  "startDate": "2024-05-06",
  "invoiceStatus": "POSTED",
  "preferredTime": "00:45",
  "targetDate": "2024-05-22",
  "invoiceDate": "2024-05-22",
  "frequencyCadence": "Once",
  "frequencyCadenceOptions": {},
  "timezone": "Asia/Kolkata",
  "status": "Active",
  "filterCriteria": [
    {
      "operation": "InList",
      "value": "Batch 2,Batch 3,Batch 4",
      "criteriaSequence": 1,
      "objectName": "BillingSchedule",
      "fieldName": "InvoiceRunMatchingValue"
    },
    {
      "operation": "Equals",
      "value": "001xx000003GZG5AAO",
      "criteriaSequence": 2,
      "objectName": "BillingSchedule",
      "fieldName": "BillingAccount"
    },
    {
      "operation": "Equals",
      "value": "0fwxx0000000001AAA",
      "criteriaSequence": 3,
      "objectName": "BillingScheduleGroup",
      "fieldName": "LegalEntity"
    },
    {
      "operation": "InList",
      "value": "OneTime,Recurring",
      "criteriaSequence": 4,
      "objectName": "BillingSchedule",
      "fieldName": "BillingTermUnit"
    },
    {
      "operation": "Equals",
      "value": "USD",
      "criteriaSequence": 5,
      "objectName": "BillingSchedule",
      "fieldName": "Currency_Iso_code"
    }
  ]
}
```

## Related Topics

- Batch Invoice Filter Criteria Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_batch_invoice_filter_criteria_input.htm)
- Frequency Cadence
                                            Options (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_frequency_cadence_options.htm)
- Batch Invoice Scheduler (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_batch_invoice_scheduler_output.htm)
