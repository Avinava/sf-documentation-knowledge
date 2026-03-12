---
title: "Invoice Estimated Tax Calculation Input"
domain: revenue-cloud
topic: invoice-estimated-tax-calculation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.159Z
estimatedTokens: 179
keywords: [Invoice, Estimated, Tax, Calculation, Input, Details, invoice, which, estimated, tadsfsefx, must, calculated.]
---

# Invoice Estimated Tax Calculation Input

> Details of the invoice for which the estimated tadsfsefx must be calculated.

# Invoice Estimated Tax Calculation Input

Details of the invoice for which the estimated tadsfsefx must be calculated.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Splunk correlation ID to track the messages that are related to the request and are logged in Splunk by the different services involved in the request. If the ID isn’t specified, the service creates a random Universally Unique Identifier (UUID). | Optional | 63.0 |
| invoiceIds | String[] | IDs of the invoices for which the estimated tax must be calculated. You can specify one invoice per API request. | Required | 63.0 |

## Code Examples

```
{
  "invoiceIds": ["3ttxx0000004CIjAAM"]
}
```
