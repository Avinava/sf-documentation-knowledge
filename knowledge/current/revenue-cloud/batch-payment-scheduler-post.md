---
title: "Batch Payment Scheduler (POST)"
domain: revenue-cloud
topic: batch-payment-scheduler-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.553Z
estimatedTokens: 477
keywords: [Batch, Payment, Scheduler, POST, automate, process, runs, recurring, basis]
---

# Batch Payment Scheduler (POST)

> Create a payment scheduler to automate and process payment runs on a
      recurring basis.

# Batch Payment Scheduler (POST)

Create a payment scheduler to automate and process payment runs on a recurring basis.

Special Access Rules

You need the Payment Ops permission set to use this API.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON example

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria​MatchType | String | Match type for the criteria of the payment scheduler. Valid values are:Match AnyMatch None | Required if the frequencyCadence property is set to Monthly. | 64.0 |
| endDate | String | End date of the payment scheduler. | Required if the frequencyCadence property is set to Monthly. | 64.0 |
| frequency​Cadence | String | Frequency cadence of the payment scheduler. Valid values are:OnceDailyWeeklyMonthly | Required | 64.0 |
| filter​Criteria | Payment Run Batch Filter Criteria Input | List of criteria that are used to filter the payment run details. | Required if the frequencyCadence property is set to Monthly. | 64.0 |
| preferredTime | String | Preferred time for the payment scheduler run. | Required | 64.0 |
| recursEvery​MonthOnDay | String | Date when the payment scheduler recurs. | Required if the frequencyCadence property is set to Monthly. | 64.0 |
| scheduler​Name | String | Name of the payment scheduler. | Required | 64.0 |
| startDate | String | Start date of the payment scheduler. | Required | 64.0 |
| status | String | Status of the payment scheduler. Valid values are:ActiveCanceledDraftInactive | Required | 64.0 |

Response body for POST

[Batch Payments Scheduler](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_payment_scheduler_output.htm "Output representation of the details of a payment scheduler.")

## Code Examples

```
/commerce/payments/payment-schedulers/
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/payments/payment-schedulers/
```

```
{
  "schedulerName": "Payment Scheduler",
  "startDate": "2022-01-01",
  "endDate": "2022-12-31",
  "preferredTime": "02:05:00.000",
  "frequencyCadence": "Monthly",
  "recursEveryMonthOnDay": "28",
  "criteriaMatchType": "MatchAny",
  "status": "Active",
  "filterCriteria": [
    {
      "objectName": "PaymentScheduleItem",
      "fieldName": "PaymentRunMatchingValue",
      "operation": "Equals",
      "value": "1",
      "criteriaSequence": 1
    },
    {
      "objectName": "PaymentScheduleItem",
      "fieldName": "PaymentRunMatchingValue",
      "operation": "Equals",
      "value": "2",
      "criteriaSequence": 2
    },
    {
      "objectName": "PaymentScheduleItem",
      "fieldName": "PaymentRunMatchingValue",
      "operation": "Equals",
      "value": "3",
      "criteriaSequence": 3
    }
  ]
}
```

## Related Topics

- Payment Run Batch Filter Criteria Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_payment_run_batch_filter_criteria_input.htm)
- Batch Payments
              Scheduler (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_payment_scheduler_output.htm)
