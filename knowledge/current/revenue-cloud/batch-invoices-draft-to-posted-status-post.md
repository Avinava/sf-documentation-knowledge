---
title: "Batch
    Invoices
    Draft to
    Posted Status (POST)"
domain: revenue-cloud
topic: batch-invoices-draft-to-posted-status-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.622Z
estimatedTokens: 244
keywords: [Batch, Invoices, Draft, Posted, Status, POST, Update, batch, invoices, status, credit, memo, application.]
---

# Batch
    Invoices
    Draft to
    Posted Status (POST)

> Update a batch of invoices from Draft to Posted status for a credit memo
      application.

# Batch Invoices Draft to Posted Status (POST)

Update a batch of invoices from Draft to Posted status for a credit memo application.

Special Access Rules

To use this API, you need the Billing Operations User permission set.

Resource

```

```

This API posts the draft invoices and changes the status of the invoices from Draft to Posted.

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
| invoice​Batch​RunId | String | ID of the invoice batch run record that creates the draft invoices. | Required | 62.0 |

Response body for POST

[Invoice Batch Draft To Posted](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_invoice_batch_draft_to_posted_output.htm "Output representation of the batch update details of the invoices from Draft to Posted status.")

## Code Examples

```
/commerce/invoicing/invoice-batch-runs/invoiceBatchRunId/actions/draft-to-posted
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/invoice-batch-runs/5IRNZ0000000cA94AI/actions/draft-to-posted
```

## Related Topics

- Invoice Batch Draft
              To Posted (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_invoice_batch_draft_to_posted_output.htm)
