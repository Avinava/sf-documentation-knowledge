---
title: "Send Emails for Posted Invoices (POST)"
domain: revenue-cloud
topic: send-emails-for-posted-invoices-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.953Z
estimatedTokens: 292
keywords: [Send, Emails, Posted, Invoices, POST, invoice, batch, run, Special, Access, Rules]
---

# Send Emails for Posted Invoices (POST)

> Send emails for the posted invoices of a specified invoice batch run
      ID.

# Send Emails for Posted Invoices (POST)

Send emails for the posted invoices of a specified invoice batch run ID.

Each email includes a custom message template in the email body and an attachment of the Invoice Document PDF. The email template is based on the user preferences defined on the Billing Profile, Legal Entity, or Billing Settings page.

## Special Access Rules

Enable the **Configure Email Delivery Settings** toggle from the Billing Settings page from Setup.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| invoiceBatchRunId | String | ID of the invoice batch run record to send emails for the posted invoices of an invoice batch run. | Required | 65.0 |

Response body for POST

[Send Email Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_send_email_for_invoice_batch_run_output.htm "Output representation of the API request to send emails for posted invoices.")

## Code Examples

```
/commerce/invoicing/invoice-batch-runs/actions/send-email
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/invoice-batch-runs/actions/send-email
```

```
{
  "invoiceBatchRunId": "5IRLT000001SIJB4A4"
}
```

## Related Topics

- Send Email
              Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_send_email_for_invoice_batch_run_output.htm)
