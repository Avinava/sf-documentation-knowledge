---
title: "Resources"
domain: revenue-cloud
topic: resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.396Z
estimatedTokens: 3065
keywords: [Resources, Billing, API, resources., Salesforce, Pricing, Product, Catalog, Management, Configurator, Discovery, Quote, Order, Capture, Rate, Usage]
---

# Resources

> Learn more about the available Billing API resources.

# Resources

Learn more about the available Billing API resources.

-   **[Sequence Gap Reconciliation (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_sequences_gap_reconciliation.htm)**
    Restore a missing sequence value identified by using this API in gapless-enabled sequences. This sequence value can be used later in the subsequent sequence policy numbering, ensuring there are no gaps.
-   **[Sequence Assignment (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_sequences_assignment.htm)**
    Assign sequence pattern values to objects based on the configured sequence policy.
-   **[Batch Invoices Document Generation (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_invoice_batch_docgen.htm)**
    Asynchronously generate PDF documents for the invoices that are in the Draft or Posted status and are associated with an invoice batch run record.
-   **[Batch Invoices Document Generation Retry (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_invoice_batch_docgen_retry.htm)**
    Asynchronously regenerate PDF documents for the invoices that are in the Draft or Posted status and failed in an earlier invoice batch run.
-   **[Batch Invoices Draft to Posted Status (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_batch_draft_invoices_to_posted.htm)**
    Update a batch of invoices from Draft to Posted status for a credit memo application.
-   **[Batch Invoice Scheduler (POST, PUT)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_an_invoice_scheduler.htm)**
    Create or update an invoice scheduler to automatically generate invoices. Use the criteria and filters of the invoice scheduler to set up the invoice run schedules based on your requirements.
-   **[Batch Payment Scheduler (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_payment_scheduler.htm)**
    Create a payment scheduler to automate and process payment runs on a recurring basis.
-   **[Billing Arrangement (GET)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_get_billing_arrangement.htm)**
    Retrieve a billing arrangement and its associated billing arrangement lines.
-   **[Billing Schedule Recovery List (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_recover_billing_schedules.htm)**
    Recover the latest generated invoice associated with the billing schedules in the Error or Processing status.
-   **[Create Billing Schedules for Orders (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_billing_schedules.htm)**
    Generate billing schedules for orders by using context service.
-   **[Create Sequence Policy (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_sequence_policy.htm)**
    Create a sequence policy to configure a unique, sequential number for posted invoices or credit memos.
-   **[Create Standalone Billing Schedules (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_billing_schedules_from_any_transaction.htm)**
    Generate billing schedules from any internal or external transaction by using context service.
-   **[Create and Apply Credit Memo (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_and_apply_a_credit_memo.htm)**
    Create a credit memo and apply it to an invoice. The credit memo can fully or partially credit the invoice.
-   **[Apply Credit Memo (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_credit_memo_apply.htm)**
    Adjust or correct already issued invoices by applying an existing credit memo to an invoice.
-   **[Unapply Credit Memo (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_credit_memo_invoice_application_unapply.htm)**
    Unapply a credit memo from an invoice and return the invoice and the credit memo to their pre-application states.
-   **[Apply Credit Memo Line (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_credit_memo_line_level_apply.htm)**
    Adjust or correct already issued invoices by applying an existing credit memo line to an invoice line.
-   **[Unapply Credit Memo Line (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_credit_memo_line_level_unapply.htm)**
    Unapply a credit memo line from an invoice line and return the invoice line and the credit memo line to their pre-application states.
-   **[Generate On-Demand Invoice Document (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_generate_documents.htm)**
    Generate an invoice document for a record, and update any junction object record.
-   **[Generate Account Statement (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_generate_account_statement.htm)**
    Generate comprehensive financial statements with transaction history and balance information.
-   **[Invoice Creation (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_invoices_from_billing_schedules.htm)**
    Create an invoice for an account, order, or a list of billing schedules.
-   **[Invoice Draft to Posted Status (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_draft_to_posted_invoice.htm)**
    Update the status of the invoice from Draft to Posted.
-   **[Invoice Ingestion (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_invoices_ingestion.htm)**
    Ingest or generate an invoice from an internal or external billing transaction data.
-   **[Invoice Estimated Tax Calculation (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_calculate_estimated_tax.htm)**
    Calculate estimated tax for invoices with invoice lines that have the TaxProcessingStatus as either Pending or Estimated.
-   **[Invoice Preview (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_preview_invoices.htm)**
    Generate preview invoices, which includes the estimated tax amounts, for a billing transaction for the next two billing periods.
-   **[Invoice Run Recovery (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_recover_errored_invoices_batch_run.htm)**
    Recover records associated with a failed invoice run. Recovery is required only when billing schedules remain in the Processing, Void In Progress, or Error status.
-   **[Negative Invoice Lines to Credit Conversion (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_convert_negative_invoice_lines_to_credit.htm)**
    Convert a list of invoice lines with a negative amount into a posted credit memo. This conversion is applicable for a single invoice at a time.
-   **[Payment Line Apply (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_payment_line_apply.htm)**
    Allocate the balance of a payment to reduce the balance of an invoice. The response includes an ID of the payment line invoice or payment line invoice line that represents the payment balance allocated against the invoice.
-   **[Payment Line Unapply (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_payment_line_unapply.htm)**
    Revert the application of a payment line from an invoice, and return the payment and invoices to their preapplication state. Use this API to correct an input during the payment application process.
-   **[Payment Scheduler Update (PATCH)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_update_payment_scheduler.htm)**
    Activate or deactivate a payment scheduler. You can set the status of a payment scheduler to Active, Canceled, Draft, or Inactive.
-   **[Post a Draft Memo (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_post_draft_credit_memo.htm)**
    Post a draft credit memo to a credit memo record for review and approval.
-   **[Rules Application (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_rules_application.htm)**
    Apply payments and credits to an account's invoices based on specified rules defined on the Billing Settings page.
-   **[Posted Invoice List Write-Off (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_write_off_invoices.htm)**
    Create credit memos with the total charge amount on the invoice as the write-off amount and close the invoice.
-   **[Void a Posted Invoice (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_void_a_posted_invoice.htm)**
    Void a posted invoice to rebill the customer, if necessary.
-   **[Refund Line Apply (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_apply_refund_to_payment.htm)**
    Make a refund transaction against a payment.
-   **[Send Emails for Posted Invoices (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_send_email_for_invoice_batch_run.htm)**
    Send emails for the posted invoices of a specified invoice batch run ID.
-   **[Resume Billing (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_resume_billing.htm)**
    Resume billing for billing schedule groups or an account that’s currently on hold.
-   **[Suspend Billing (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_suspend_billing.htm)**
    Suspend billing for billing schedule groups or an account for a predefined period.
-   **[Standalone Credit Memo (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_a_standalone_credit_memo.htm)**
    Create a credit memo without applying it to an invoice. You can credit the invoice at a later date.
-   **[Tax Calculation (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_calculate_taxes.htm)**
    Calculate tax for a transaction.
-   **[Update Sequence Policy (PATCH)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_update_sequence_policies.htm)**
    Update the settings of a sequence policy that defines how unique, sequential numbers are generated by using specific patterns, values, and filters.
-   **[Void Posted Credit Memo (POST)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_void_posted_credit_memo.htm)**
    Void a credit memo in posted state.

## Related Topics

- Sequence Gap Reconciliation (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_sequences_gap_reconciliation.htm)
- Sequence Assignment (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_sequences_assignment.htm)
- Batch Invoices Document Generation (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_invoice_batch_docgen.htm)
- Batch Invoices Document Generation Retry (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_invoice_batch_docgen_retry.htm)
- Batch Invoices Draft to Posted Status (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_batch_draft_invoices_to_posted.htm)
- Batch Invoice Scheduler (POST, PUT) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_an_invoice_scheduler.htm)
- Batch Payment Scheduler (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_payment_scheduler.htm)
- Billing Arrangement (GET) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_get_billing_arrangement.htm)
- Billing Schedule Recovery List (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_recover_billing_schedules.htm)
- Create Billing Schedules for Orders (POST) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_billing_schedules.htm)
