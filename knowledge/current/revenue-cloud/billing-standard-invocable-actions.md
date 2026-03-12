---
title: "Billing Standard Invocable Actions"
domain: revenue-cloud
topic: billing-standard-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.421Z
estimatedTokens: 1303
keywords: [Billing, Standard, Invocable, Actions, standard, invocable, actions, automate, processes, such, credit, application, billing, schedules, creation, invoice, management., Commerce, Payments]
---

# Billing Standard Invocable Actions

> Use standard invocable actions to automate processes such as credit application,
    billing schedules creation, and invoice management.

# Billing Standard Invocable Actions

Use standard invocable actions to automate processes such as credit application, billing schedules creation, and invoice management.

## Commerce Payments Invocable Actions

This table provides a list of the invocable actions of Commerce Payments, which can be used for Billing.

| Resource | Description |
| --- | --- |
| /services/data/v66.0/actions/standard/applyPayment (POST) | Apply a payment record to an invoice header by creating a PaymentLineInvoice record with Applied type. |
| /services/data/v66.0/actions/standard/paymentSale (POST) | Capture a payment without any prior authorization, and create a payment record. |

Billing provides these invocable actions.

-   **[Apply Credit Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_run_apply_credit.htm)**
    Apply a credit memo or credit memo line to an invoice or invoice line, respectively.
-   **[Apply Payments and Credits by Rules Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_apply_rules.htm)**
    Apply payments and credits to posted invoices by adhering to the specified rules.
-   **[Create Billing Schedules From Billing Transaction Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_billing_schedule_from_billing_transaction.htm)**
    Create one or more billing schedules for a specified billing transaction ID.
-   **[Create Standalone Billing Schedules Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_billing_schedules_from_transaction.htm)**
    Creates billing schedules for internal or external transaction records by calling the Create Standalone Billing Schedules API.
-   **[Generate Account Statement](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_generate_statement_of_account.htm)**
    Generates a comprehensive account statement for a specified account with transaction history and balance information.
-   **[Generate Invoice Documents Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_generate_batch_invoice_documents.htm)**
    Asynchronously generate PDF documents for the invoices associated with an invoice batch run record that are in the Draft or Posted status.
-   **[Post Draft Credit Memo Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_post_draft_credit_memo.htm)**
    Post a draft credit memo to a credit memo record for review and approval.
-   **[Post Draft Invoice Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_post_draft_invoice.htm)**
    Update the status of an invoice from Draft to Posted for a credit memo application.
-   **[Post Draft Invoice Batch Run Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_post_draft_invoice_batch_run.htm)**
    Update the status of a batch of invoices from Draft to Posted for a credit memo application.
-   **[Recover Billing Schedules Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_recover_billing_schedule.htm)**
    Recover one or more billing schedules in the Error or Processing status.
-   **[Unapply Credit Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_run_unapply_credit.htm)**
    Unapply a credit memo or credit memo line from an invoice or invoice line, respectively.
-   **[Unapply Payment Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_unapply_payment.htm)**
    Unapplies a payment that's already been applied to an invoice or invoice line by crediting the amount back to the payment and the invoice or invoice line.
-   **[Void Posted Credit Memo Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_void_posted_credit_memo.htm)**
    Invoke the Void Posted Credit Memo API by providing a credit memo ID.
-   **[Write Off Invoices Action](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_write_off_invoices.htm)**
    Write off partially paid or unpaid invoices to manage pending debts and to maintain accurate financial records. This action calls the Posted Invoice List Write-Off (POST) API.

#### See Also

-   [*Actions Developer Guide*: Overview](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_intro_overview.htm "Actions Developer Guide: Overview - HTML (New Window)")

-   [*REST API Developer Guide*: Invocable Actions Standard](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable_standard.htm "REST API Developer Guide: Invocable Actions Standard - HTML (New Window)")

## Related Topics

- Apply Credit Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_run_apply_credit.htm)
- Apply Payments and Credits by Rules Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_apply_rules.htm)
- Create Billing Schedules From Billing Transaction Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_billing_schedule_from_billing_transaction.htm)
- Create Standalone Billing Schedules Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_create_billing_schedules_from_transaction.htm)
- Generate Account Statement (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_generate_statement_of_account.htm)
- Generate Invoice Documents Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_generate_batch_invoice_documents.htm)
- Post Draft Credit Memo Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_post_draft_credit_memo.htm)
- Post Draft Invoice Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_post_draft_invoice.htm)
- Post Draft Invoice Batch Run Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_post_draft_invoice_batch_run.htm)
- Recover Billing Schedules Action (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/actions_obj_recover_billing_schedule.htm)
