---
title: "Generate Invoice Documents Action"
domain: revenue-cloud
topic: generate-invoice-documents-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.919Z
estimatedTokens: 478
keywords: [Generate, Invoice, Documents, Action, Asynchronously, PDF, invoices, associated, batch, run, record, Draft, Posted, status, Special]
---

# Generate Invoice Documents Action

> Asynchronously generate PDF documents for the invoices associated with
			an invoice batch run record that are in the Draft
			or Posted status.

# Generate Invoice Documents Action

Asynchronously generate PDF documents for the invoices associated with an invoice batch run record that are in the Draft or Posted status.

This action uses the ID of the invoice batch run record to find the draft or posted invoices from the batch and to generate the PDF documents for its invoices that are in the Draft or Posted status. This action creates a DocGenerationBatchProcess record that contains the Document Generation Process and Invoice Document records for each of the invoices. This action is available in API version 63.0 and later with Revenue Cloud Billing.

## Special Access Rules

The Generate Invoice Documents action is available in Enterprise, Unlimited, and Developer Editions where Revenue Cloud Billing is enabled. The org must have Billing Docgen enabled and an active Invoice Document Template to generate PDF documents. To use this action, you need either the Billing Operations User or the Billing Admin permission set, along with the Docgen Designer and Docgen Designer Standard User permission sets.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/generateInvoiceDocuments

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| invoiceBatchRunId | TypestringDescriptionRequired.ID of the invoice batch run record that created the draft or posted invoices. |

## Outputs

| Output | Details |
| --- | --- |
| requestId | TypestringDescriptionAn alphanumeric string to track the status of the document generation request. |
| requestStatus | TypebooleanDescriptionIndicates whether the operation is successful (true) or not (false). |

## Example

POST

This example shows a sample request for the Generate Invoice Documents action.

```

```

This example shows a sample response for the Generate Invoice Documents action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "invoiceBatchRunId": "5IRSG000001Az014AC"
    }
  ]
}
```

```
{
  "actionName": "generateInvoiceDocuments",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "requestId": "4sFDU00000000652AA",
    "requestStatus": true
  }
}
```
