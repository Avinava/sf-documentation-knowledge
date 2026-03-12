---
title: "Invoice Estimated Tax Calculation (POST)"
domain: revenue-cloud
topic: invoice-estimated-tax-calculation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.453Z
estimatedTokens: 288
keywords: [Invoice, Estimated, Tax, Calculation, POST, Calculate, invoices, lines, TaxProcessingStatus, either, Pending]
---

# Invoice Estimated Tax Calculation (POST)

> Calculate estimated tax for invoices with invoice lines that have the
        TaxProcessingStatus as either Pending or Estimated.

# Invoice Estimated Tax Calculation (POST)

Calculate estimated tax for invoices with invoice lines that have the TaxProcessingStatus as either Pending or Estimated.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Splunk correlation ID to track the messages that are related to the request and are logged in Splunk by the different services involved in the request. If the ID isn’t specified, the service creates a random Universally Unique Identifier (UUID). | Optional | 63.0 |
| invoiceIds | String[] | IDs of the invoices for which the estimated tax must be calculated. You can specify one invoice per API request. | Required | 63.0 |

Response body for POST

[Revenue Async Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_revenue_async_output.htm "Output representation of the result of the API request with the request identifier.")

## Code Examples

```
/commerce/invoicing/invoices/collection/actions/calculate-estimated-tax
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/invoices/collection/actions/calculate-estimated-tax
```

```
{
  "invoiceIds": ["3ttxx0000004CIjAAM"]
}
```

## Related Topics

- Revenue Async Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_revenue_async_output.htm)
