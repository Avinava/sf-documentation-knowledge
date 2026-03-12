---
title: "Post Draft Invoice Batch Run Action"
domain: revenue-cloud
topic: post-draft-invoice-batch-run-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.074Z
estimatedTokens: 347
keywords: [Post, Draft, Invoice, Batch, Run, Action, status, invoices, Posted, credit, memo, application, Special, Access, Rules]
---

# Post Draft Invoice Batch Run Action

> Update the status of a batch of invoices from Draft to Posted
			for a credit memo application.

# Post Draft Invoice Batch Run Action

Update the status of a batch of invoices from Draft to Posted for a credit memo application.

This action uses the ID of the invoice batch run record to find draft invoices from the batch and to post the draft invoices to an invoice record. This action is available in API version 62.0 and later.

## Special Access Rules

The Post Draft Invoice Batch Run action is available in Enterprise, Unlimited, and Developer Editions where Billing is enabled. To use this action, you need the Billing Operations User permission set.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/postDraftInvoiceBatchRun

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| invoiceBatchRunId | TypestringDescriptionRequired.ID of the invoice batch run record that created the draft invoices. |

## Outputs

| Output | Details |
| --- | --- |
| invBatchDraftToPostedRunId | TypestringDescriptionID of the record that’s created to track the batch process of posting draft invoices. These draft invoices are associated with the parent invoice batch run record. |

## Example

POST

This example shows a sample request for the Post Draft Invoice Batch Run action.

```

```

This example shows a sample response for the Post Draft Invoice Batch Run action.

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
  "actionName": "postDraftInvoiceBatchRun",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "invBatchDraftToPostedRunId": "4sFDU00000000652AA"
  }
}
```
