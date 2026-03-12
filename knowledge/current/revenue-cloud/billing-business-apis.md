---
title: "Billing Business APIs"
domain: revenue-cloud
topic: billing-business-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:07.379Z
estimatedTokens: 2287
keywords: [Billing, Business, APIs, manage, credit, application, handle, scenarios, Credits, Schedules, Invoices, Invoice, Scheduler, Sequencing, Account]
---

# Billing Business APIs

> Use the Billing Business APIs to manage credit application and to handle billing
    scenarios.

# Billing Business APIs

Use the Billing Business APIs to manage credit application and to handle billing scenarios.

These sections list the available resources.

## Credits

| Resource | Description |
| --- | --- |
| /commerce/invoicing/credit-memos/creditMemoId/actions/apply (POST) | Adjust or correct already issued invoices by applying an existing credit memo to an invoice. |
| /commerce/invoicing/credit-memo-inv-applications/creditMemoInvApplicationId/actions/unapply (POST) | Unapply a credit memo from an invoice and return the invoice and the credit memo to their pre-application states. |
| /commerce/invoicing/credit-memo-lines/creditMemoLineId/actions/apply (POST) | Adjust or correct already issued invoices by applying an existing credit memo line to an invoice line. |
| /commerce/invoicing/credit-memo-line-invoice-line/creditMemoLineInvoiceLineId/actions/unapply (POST) | Unapply a credit memo line from an invoice line and return the invoice line and the credit memo line to their pre-application states. |
| /commerce/invoicing/credit-memos/actions/generate (POST) | Create a credit memo without applying it to an invoice. You can credit the invoice at a later date. |
| /commerce/invoicing/invoices/invoiceId/actions/void (POST) | Void a posted invoice to rebill the customer, if necessary. |
| /commerce/invoicing/invoices/invoiceId/actions/convert-to-credit (POST) | Convert a list of invoice lines with a negative amount into a posted credit memo. This conversion is applicable for a single invoice at a time. |
| /commerce/invoicing/invoices/invoiceId/actions/credit (POST) | Create a credit memo and apply it to an invoice. The credit memo can fully or partially credit the invoice. |
| /commerce/invoicing/credit/collection/actions/post (POST) | Post a draft credit memo to a credit memo record for review and approval. |
| /commerce/billing/credit-memos/creditMemoId/actions/void (POST) | Void a credit memo in posted state. |

## Billing Schedules

| Resource | Description |
| --- | --- |
| /commerce/invoicing/billing-schedules/actions/create (POST) | Generate billing schedules for orders by using context service. |
| /commerce/invoicing/standalone/billing-schedules/actions/create (POST) | Generate billing schedules from any internal or external transaction by using context service. |
| /commerce/invoicing/billing-schedules/collection/actions/recover (POST) | Recover the latest generated invoice associated with the billing schedules in the Error or Processing status. |
| /commerce/invoicing/actions/suspend-billing (POST) | Suspend billing for billing schedule groups or an account for a predefined period. |
| /commerce/invoicing/actions/resume-billing (POST) | Resume billing for billing schedule groups or an account that’s currently on hold. |

## Invoices

| Resource | Description |
| --- | --- |
| /commerce/invoicing/invoices/collection/actions/post (POST) | Update the status of the invoice from Draft to Posted. |
| /commerce/invoicing/invoice-batch-runs/invoiceBatchRunId/actions/draft-to-posted (POST) | Update a batch of invoices from Draft to Posted status for a credit memo application. |
| /commerce/invoicing/invoices/collection/actions/preview (POST) | Generate preview invoices, which includes the estimated tax amounts, for a billing transaction for the next two billing periods. |
| /commerce/invoicing/invoices/collection/actions/ingest (POST) | Ingest or generate an invoice from an internal or external billing transaction data. |
| /commerce/billing/invoices/invoice-batch-docgen/invoiceBatchRunId/actions/actionName (POST) | Asynchronously generate PDF documents for the invoices that are in the Draft or Posted status and are associated with an invoice batch run record. |
| /commerce/billing/invoices/invoice-batch-docgen/invoiceBatchRunId/actions/actionName (POST) | Asynchronously regenerate PDF documents for the invoices that are in the Draft or Posted status and failed in an earlier invoice batch run. |
| /commerce/invoicing/invoices/actions/write-off (POST) | Create credit memos with the total charge amount on the invoice as the write-off amount and close the invoice. |
| /commerce/invoicing/invoice-batch-runs/actions/send-email (POST) | Send emails for the posted invoices of a specified invoice batch run ID. |
| /commerce/invoicing/invoices/collection/actions/generate (POST) | Create an invoice for an account, order, or a list of billing schedules. |
| /revenue/billing/transactions/actions/apply (POST) | Apply payments and credits to an account's invoices based on specified rules defined on the Billing Settings page. |
| /revenue/billing/document/actions/generate (POST) | Generate an invoice document for a record, and update any junction object record. |

## Invoice Scheduler

| Resource | Description |
| --- | --- |
| /commerce/invoicing/invoice-schedulers (POST) | Create or update an invoice scheduler to automatically generate invoices. Use the criteria and filters of the invoice scheduler to set up the invoice run schedules based on your requirements. |
| /commerce/invoicing/invoice-batch-runs/invoiceBatchRunId/actions/recover (POST) | Recover records associated with a failed invoice run. Recovery is required only when billing schedules remain in the Processing, Void In Progress, or Error status. |

## Invoice Sequencing

| Resource | Description |
| --- | --- |
| /connect/sequences/policy (POST) | Create a sequence policy to configure a unique, sequential number for posted invoices or credit memos. |
| /connect/sequences/policy/sequencePolicyId (PATCH) | Update the settings of a sequence policy that defines how unique, sequential numbers are generated by using specific patterns, values, and filters. |
| /connect/sequences/actions/assign (POST) | Assign sequence pattern values to objects based on the configured sequence policy. |
| /connect/sequences/gap-reconciliation (POST) | Restore a missing sequence value identified by using this API in gapless-enabled sequences. This sequence value can be used later in the subsequent sequence policy numbering, ensuring there are no gaps. |

## Account Statement

| Resource | Description |
| --- | --- |
| /revenue/billing/accounts/accountId/statement (POST) | Generate comprehensive financial statements with transaction history and balance information. |

## Payments

| Resource | Description |
| --- | --- |
| /commerce/billing/payments/paymentId/actions/apply (POST) | Allocate the balance of a payment to reduce the balance of an invoice. The response includes an ID of the payment line invoice or payment line invoice line that represents the payment balance allocated against the invoice. |
| /commerce/billing/payments/paymentId/paymentlines/paymentLineId/actions/unapply (POST) | Revert the application of a payment line from an invoice, and return the payment and invoices to their preapplication state. Use this API to correct an input during the payment application process. |
| /commerce/billing/refunds/refundId/actions/apply (POST) | Make a refund transaction against a payment. |

## Tax Calculation

| Resource | Description |
| --- | --- |
| /commerce/taxes/actions/calculate (POST) | Calculate tax for a transaction. |
| /commerce/invoicing/invoices/collection/actions/calculate-estimated-tax (POST) | Calculate estimated tax for invoices with invoice lines that have the TaxProcessingStatus as either Pending or Estimated. |

## Salesforce Commerce Payments API

| Resource | Description |
| --- | --- |
| /commerce/payments/payment-methods (POST) | Tokenize a payment method. |
| /commerce/payments/sales (POST) | Make a payment sale. |
| /commerce/payments/payments/paymentId/refunds (POST) | Create a refund for a payment. |
| /commerce/payments/authorizations (POST) | Authorize a payment. |
| /commerce/payments/authorizations/authorizationId/reversals (POST) | Reverse an authorized payment. |
| /commerce/payments/authorizations/authorizationId/captures (POST) | Capture an authorized payment. |

-   **[Billing Business API Limits](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_business_apis_limits.htm)**
    Learn about the default limits on the usage of the Billing business APIs.
-   **[Resources](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_business_apis_resources.htm)**
    Learn more about the available Billing API resources.
-   **[Request Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_business_apis_requests.htm)**
    Learn more about the available request bodies of Billing APIs.
-   **[Response Bodies](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_business_apis_responses.htm)**
    Learn more about the available response bodies of Billing APIs.

#### See Also

-   [*Connect REST API Developer Guide*: Introduction](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm "Connect REST API Developer Guide: Introduction - HTML (New Window)")

## Related Topics

- /commerce/invoicing/credit-memos/creditMemoId/actions/apply (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_credit_memo_apply.htm)
- /commerce/invoicing/credit-memo-inv-applications/creditMemoInvApplicationId/actions/unapply (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_credit_memo_invoice_application_unapply.htm)
- /commerce/invoicing/credit-memo-lines/creditMemoLineId/actions/apply (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_credit_memo_line_level_apply.htm)
- /commerce/invoicing/credit-memo-line-invoice-line/creditMemoLineInvoiceLineId/actions/unapply (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_credit_memo_line_level_unapply.htm)
- /commerce/invoicing/credit-memos/actions/generate (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_a_standalone_credit_memo.htm)
- /commerce/invoicing/invoices/invoiceId/actions/void (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_void_a_posted_invoice.htm)
- /commerce/invoicing/invoices/invoiceId/actions/convert-to-credit (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_convert_negative_invoice_lines_to_credit.htm)
- /commerce/invoicing/invoices/invoiceId/actions/credit (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_and_apply_a_credit_memo.htm)
- /commerce/invoicing/credit/collection/actions/post (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_post_draft_credit_memo.htm)
- /commerce/billing/credit-memos/creditMemoId/actions/void (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_void_posted_credit_memo.htm)
