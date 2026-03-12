---
title: "Create Product Schedules"
domain: rest-api
topic: create-product-schedules
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.612Z
estimatedTokens: 582
keywords: [Product, Schedules, Establish, reestablish, schedule, multiple, installments, opportunity, resource, REST, API, version, 43.0, later, 46.0]
---

# Create Product Schedules

> Establish or reestablish a product schedule with multiple installments for an
  opportunity product. This resource is available in REST API version 43.0 and later. In API version
  46.0 and later, established and re-established schedules support custom fields, validation rules,
  and Apex triggers.

# Create Product Schedules

Establish or reestablish a product schedule with multiple installments for an opportunity product. This resource is available in REST API version 43.0 and later. In API version 46.0 and later, established and re-established schedules support custom fields, validation rules, and Apex triggers.

## Syntax

URI

/services/data/vXX.X/sobjects/OpportunityLineItem/OpportunityLineItemId/OpportunityLineItemSchedules

Formats

JSON, XML

HTTP methods

PUT

Authentication

Authorization: Bearer token

Request parameters

| Parameter | Description |
| --- | --- |
| type | The type of the schedule. Required when establishing OpportunityLineItemSchedules. Valid values include Quantity, Revenue, or Both. |
| quantity | The total number of units to be repeated or divided in a quantity schedule. Must be an integer other than 0. |
| quantityScheduleType | The type of the quantity schedule, if the product has one. Valid values are Divide or Repeat. |
| quantityScheduleInstallmentPeriod | If the product has a quantity schedule, the amount of time covered by the schedule. Valid values are Daily, Weekly, Monthly, Quarterly, or Yearly. |
| quantityScheduleInstallmentsNumber | If the product has a quantity schedule, the number of installments. Can be an integer from 1 to 150. |
| quantityScheduleStartDate | The date the quantity schedule starts. Format is YYYY-MM-DD. |
| revenue | The amount of revenue to be repeated or divided. |
| revenueScheduleType | The type of the revenue schedule, if the product has one. Valid values are Divide or Repeat. |
| revenueScheduleInstallmentPeriod | If the product has a revenue schedule, the amount of time covered by the schedule. Valid values are Daily, Weekly, Monthly, Quarterly, or Yearly. |
| revenueScheduleInstallmentsNumber | If the product has a revenue schedule, the number of installments. Can be an integer from 1 to 150. |
| revenueScheduleStartDate | The date the revenue schedule starts. Format is YYYY-MM-DD. |

## Examples

Establish both quantity and revenue schedules for an opportunity product.

```

```

JSON Request body

```

```

Establish a revenue schedule only for an opportunity product.

```

```

JSON Request body

```

```

Establish a quantity schedule only for an opportunity product.

```

```

JSON Request body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/OpportunityLineItem/00kR0000001WJJAIA4/OpportunityLineItemSchedules -H "Authorization: Bearer token"
```

```
{
"type": "Both",
"quantity": 100,
"quantityScheduleType": "Repeat",
"quantityScheduleInstallmentPeriod": "Monthly",
"quantityScheduleInstallmentsNumber": 12,
"quantityScheduleStartDate": "2018-09-15",
"revenue": 100,
"revenueScheduleType": "Repeat",
"revenueScheduleInstallmentPeriod": "Monthly",
"revenueScheduleInstallmentsNumber": 12,
"revenueScheduleStartDate": "2018-09-15"
}
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/OpportunityLineItem/00kR0000001WJJAIA4/OpportunityLineItemSchedules -H "Authorization: Bearer token"
```

```
{
"type": “Revenue”,
"revenue": 100,
"revenueScheduleType": “Divide”,
"revenueScheduleInstallmentPeriod": “Quarterly”,
"revenueScheduleInstallmentsNumber": 10,
"revenueScheduleStartDate": "2018-09-15"
}
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/OpportunityLineItem/00kR0000001WJJAIA4/OpportunityLineItemSchedules -H "Authorization: Bearer token"
```
