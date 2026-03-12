---
title: "Convert Negative Invoice Lines Input"
domain: revenue-cloud
topic: convert-negative-invoice-lines-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.966Z
estimatedTokens: 197
keywords: [Convert, Negative, Invoice, Lines, Input, representation, details, request, convert, list, negative, invoice, lines, credit.]
---

# Convert Negative Invoice Lines Input

> Input representation of the details of the request to convert a list of negative invoice
    lines into a credit.

# Convert Negative Invoice Lines Input

Input representation of the details of the request to convert a list of negative invoice lines into a credit.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description stamped on the credit memo that’s created after the negative invoice line conversion. | Optional | 62.0 |
| effectiveDate | String | Date stamped on the credit memo that’s created after the negative invoice line conversion. | Required | 62.0 |
| invoiceLines | String[] | Complete list of the negative invoice lines along with the associated invoice line taxes. The specified negative invoice lines are converted into a posted credit memo. | Optional | 62.0 |

## Code Examples

```
{
  "invoiceLines": ["5TVxx0000004C92GAE", "5TVxx0000004C93GAE"],
  "description": "Convert negative invoice lines into credit",
  "effectiveDate":"2022-05-18"
  }
```
