---
title: "Negative Invoice Lines to Credit Conversion (POST)"
domain: revenue-cloud
topic: negative-invoice-lines-to-credit-conversion-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.679Z
estimatedTokens: 498
keywords: [Negative, Invoice, Lines, Credit, Conversion, POST, Convert, list, invoice, lines, negative, amount, posted, credit, memo., conversion, applicable, single, time.]
---

# Negative Invoice Lines to Credit Conversion (POST)

> Convert a list of invoice lines with a negative amount into a posted
      credit memo. This conversion is applicable for a single invoice at a time.

# Negative Invoice Lines to Credit Conversion (POST)

Convert a list of invoice lines with a negative amount into a posted credit memo. This conversion is applicable for a single invoice at a time.

Keep these considerations in mind when you use this API.

-   All invoice lines must be related to the same invoice.
-   The invoice line must have a negative amount.
-   The invoice line must not be a previously converted credit memo.
-   The invoice must have the Posted status.
-   The invoice must not have any active settlements such as credit applications.

Special Access Rules

You need the Credit Memo Operations User permission set to use this API.

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

Path parameter for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoiceId | String | ID of the invoice whose negative invoice lines must be converted into a posted credit memo. | Required | 62.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description stamped on the credit memo that’s created after the negative invoice line conversion. | Optional | 62.0 |
| effectiveDate | String | Date stamped on the credit memo that’s created after the negative invoice line conversion. | Required | 62.0 |
| invoiceLines | String[] | Complete list of the negative invoice lines along with the associated invoice line taxes. The specified negative invoice lines are converted into a posted credit memo. | Optional | 62.0 |

Response body for POST

[Convert Negative Invoice Lines](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_convert_negative_invoice_lines_output.htm "Output representation of the details of the created memo along with the status of the request.")

## Code Examples

```
/commerce/invoicing/invoices/invoiceId/actions/convert-to-credit
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/invoices/3ttxx00000000XtAAI/actions/convert-to-credit
```

```
{
  "invoiceLines": ["5TVxx0000004C92GAE", "5TVxx0000004C93GAE"],
  "description": "Convert negative invoice lines into credit",
  "effectiveDate":"2022-05-18"
  }
```

## Related Topics

- Convert Negative
              Invoice Lines (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_convert_negative_invoice_lines_output.htm)
