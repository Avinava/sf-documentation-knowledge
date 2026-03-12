---
title: "Invoice Run Recovery (POST)"
domain: revenue-cloud
topic: invoice-run-recovery-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:07.154Z
estimatedTokens: 196
keywords: [Invoice, Run, Recovery, POST, Recover, records, associated, failed, invoice, run., required, only, billing, schedules, remain, Processing, Progress, Error, status.]
---

# Invoice Run Recovery (POST)

> Recover records associated with a failed invoice run. Recovery is
      required only when billing schedules remain in the Processing, Void In Progress, or Error status.

# Invoice Run Recovery (POST)

Recover records associated with a failed invoice run. Recovery is required only when billing schedules remain in the Processing, Void In Progress, or Error status.

Special Access Rules

To use this API, you need the Invoice Scheduler API permission set.

Resource

```

```

The invoiceBatchRunId parameter is the ID of the failed invoice batch run record whose details you want to retrieve.

Resource example

```

```

Available version

62.0

HTTP methods

POST

Response body for POST

[Invoice Batch Run Recovery](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_invoice_batch_run_recovery_output.htm "Output representation of the details of the invoice batch run recovery record.")

## Code Examples

```
/commerce/invoicing/invoice-batch-runs/invoiceBatchRunId/actions/recover
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/invoice-batch-runs/5IRxx0000004TwGGAU/actions/recover
```

## Related Topics

- Invoice Batch Run Recovery (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_invoice_batch_run_recovery_output.htm)
