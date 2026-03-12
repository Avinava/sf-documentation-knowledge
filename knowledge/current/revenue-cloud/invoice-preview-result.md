---
title: "Invoice Preview Result"
domain: revenue-cloud
topic: invoice-preview-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.848Z
estimatedTokens: 102
keywords: [Invoice, Preview, Result, Output, representation, list, preview, invoices, generated, billing, transaction.]
---

# Invoice Preview Result

> Output representation of the list of preview invoices that are generated for the billing transaction.

# Invoice Preview Result

Output representation of the list of preview invoices that are generated for the billing transaction.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| invoice​Detail​List | Invoice Preview[] | Details of the invoices that are generated for the billing transaction. | Big, 63.0 | 63.0 |

## Code Examples

```
{
  "invoiceDetailList": [
    {
      "accountId": "001Z6000005aQj8",
      "currencyIsoCode": "USD",
      "dueDate": "2025-01-03",
      "invoiceDate": "2024-12-04",
      "invoiceLineDetailList": [
        {
          "billingFrequency": "OneTime",
          "chargeAmount": "1990.00",
          "endDate": "2024-07-18",
          "lineAmount": "2189.00",
          "productName": "Laptop",
          "quantity": "10.0",
          "startDate": "2024-07-18",
          "taxAmount": "199.0",
          "unitPrice": "199.0"
        }
      ],
      "totalAmount": "1990.00",
      "totalAmountWithTax": "2189.00",
      "totalTaxAmount": "199.0"
    }
  ]
}
```

## Related Topics

- Invoice
                  Preview (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_prev_inv_output.htm)
