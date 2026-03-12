---
title: "Invoice Creation (POST)"
domain: chatterapi
topic: invoice-creation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.005Z
estimatedTokens: 722
keywords: [Invoice, Creation, POST, account, order, billing, schedules]
---

# Invoice Creation (POST)

> Create an invoice for an account, order, or a list of billing
      schedules.

# Invoice Creation (POST)

Create an invoice for an account, order, or a list of billing schedules.

This API request creates billing period items for the matching billing schedules. The billing period items are created for the period between the next charge date of the billing schedule and the specified target date. Invoice lines are created by processing these billing period items. These invoice lines are then grouped into invoices based on the defined grouping criteria on the billing schedule.

Special Access Rules

You need the Generate Invoices From Billing Schedule API, Billing Operations User, or Billing Customer Service permission set to use this API. Commerce B2B and D2C customers can call this API if Commerce Subscriptions is enabled.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

POST

Request body for POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The billing​TransactionId property takes precedence over the accountId property followed by the billing​ScheduleIds property when values for these properties are specified in the input request.

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
| configuration​Overrides | Invoice API Configuration Override Input | Additional configuration details for generating an invoice. These details specify whether the generation of payment schedules and payment schedule items must be skipped. | Optional | 63.0 |
| correlation​Id | String | Property that’s tagged against the published InvoiceProcessedEvent event, if specified. | Optional | 62.0 |
| invoice​Date | String | Stamping date of the invoice in ISO 8601 format. | Required | 62.0 |
| target​Date | String | Date in ISO 8601 format used to decide the billing periods that are included to create invoices. | Required | 62.0 |

Response body for POST

[Revenue Async Response](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_revenue_async_output.htm "Output representation of the result of the API request with the request identifier.")

## Code Examples

```
/commerce/invoicing/invoices/collection/actions/generate
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/invoices/collection/actions/generate
```

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

## Related Topics

- Invoice API Configuration Override Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_invoice_api_configuration_override_input.htm)
- Revenue Async
              Response (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_revenue_async_output.htm)
