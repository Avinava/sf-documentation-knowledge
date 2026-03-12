---
title: "ConnectApi Input Classes"
domain: revenue-cloud
topic: connectapi-input-classes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.329Z
estimatedTokens: 1821
keywords: [ConnectApi, Input, Classes, Billing, includes, Apex, input, classes., Transaction, Management, class.]
---

# ConnectApi Input Classes

> Billing includes these Apex input classes.

# ConnectApi Input Classes

Billing includes these Apex input classes.

-   **[ConnectApi.ApplicationsRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_apply_application.htm)**
    Connect API representation of an application item input request for credit memo apply api
-   **[ConnectApi.BillingAddressRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_address.htm)**
    Input representation of the details of an address.
-   **[ConnectApi.BillingScheduleRecoveryInputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_billing_schedule_recovery.htm)**
    Input representation of the details of the billing schedules to recover the associated invoice.
-   **[ConnectApi.ConvertNegativeInvoiceLinesInputRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_convert_negative_invoice_lines.htm)**
    Input representation of the request details to convert a negative invoice line into a credit.
-   **[ConnectApi.CreditDetailsApplyInput](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_line_application.htm)**
    Input representation of the request to specify one or more applications to apply a credit memo line for, with each application representing an invoice line.
-   **[ConnectApi.CreditInvoiceInputRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_invoice.htm)**
    Input representation of the details of the request to create a credit memo.
-   **[ConnectApi.CreditInvoiceInvoiceLine](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_invoice_invoice_line.htm)**
    Input representation of the details of the invoice lines to be credited.
-   **[ConnectApi.CreditInvoiceInvoiceLineTax](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_invoice_invoice_line_tax.htm)**
    Input representation of the details of the tax lines to be created manually for the invoice line.
-   **[ConnectApi.CreditMemoAddressesInputRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_addresses.htm)**
    Input representation of the details of the billing and shipping addresses.
-   **[ConnectApi.CreditMemoApplyInputRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_apply.htm)**
    Input representation of the request to apply a credit memo to an invoice.
-   **[ConnectApi.CreditMemoLineApplyInput](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_line_apply.htm)**
    Input representation of the details of the request to apply a credit memo line to an invoice line.
-   **[ConnectApi.CreditMemoLineUnapplyInput](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_line_unapply.htm)**
    Input representation of the details of the request to unapply a credit memo line from an invoice line.
-   **[ConnectApi.CreditMemoUnapplyInputRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_unapply.htm)**
    Input representation of the request to unapply a credit memo from an invoice.
-   **[ConnectApi.InvoiceDraftToPostedInputRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_invoice_draft_to_posted.htm)**
    Input representation of the details of the draft invoice that’s posted.
-   **[ConnectApi.InvoiceInputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_invoice.htm)**
    Input representation of the details of the billing schedule.
-   **[ConnectApi.PaymentLineApplyRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_payment_line_apply.htm)**
    Input representation of the payment line details. This representation covers details on allocation of a payment to a specific invoice line. It also provides additional context through optional fields, such as associated account and effective date.
-   **[ConnectApi.PaymentLineUnapplyRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_payment_line_unapply.htm)**
    Input representation of the payment line details. This representation covers fields that you can specify to revert a payment line application.
-   **[ConnectApi.RefundLineApplyRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_refund_line_apply.htm)**
    Input representation of the details of a transaction refund request. This representation outlines the properties of a refund, including the refund amount and ID of the payment or credit memo record that the refund is applied to.
-   **[ConnectApi.SequenceGapReconciliationInputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_sequence_gap_reconciliation.htm)**
    The details of the input used to identify and reconcile gaps in sequence values based on the sequence policy or target object.
-   **[ConnectApi.SequencesAssignmentInputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_sequences_assignment.htm)**
    The details of the target objects to which the sequence pattern values are assigned.
-   **[ConnectApi.StandaloneCreditMemoChargeInputRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_standalone_credit_memo_charge.htm)**
    Input representation of the details of the charge lines of a credit memo.
-   **[ConnectApi.StandaloneCreditMemoInputRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_standalone_credit_memo.htm)**
    Input representation of the details required to create a standalone credit memo.
-   **[ConnectApi.StandaloneCreditMemoTaxInputRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_standalone_credit_memo_tax.htm)**
    Connect API representation of Tax input request
-   **[ConnectApi.VoidPostedCreditMemoInputRepresentation](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_void_posted_credit_memo.htm)**
    Input representation of the details of a credit memo to be voided.

## Related Topics

- ConnectApi.ApplicationsRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_apply_application.htm)
- ConnectApi.BillingAddressRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_address.htm)
- ConnectApi.BillingScheduleRecoveryInputRepresentation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_billing_schedule_recovery.htm)
- ConnectApi.ConvertNegativeInvoiceLinesInputRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_convert_negative_invoice_lines.htm)
- ConnectApi.CreditDetailsApplyInput (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_line_application.htm)
- ConnectApi.CreditInvoiceInputRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_invoice.htm)
- ConnectApi.CreditInvoiceInvoiceLine (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_invoice_invoice_line.htm)
- ConnectApi.CreditInvoiceInvoiceLineTax (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_invoice_invoice_line_tax.htm)
- ConnectApi.CreditMemoAddressesInputRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_addresses.htm)
- ConnectApi.CreditMemoApplyInputRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_apply.htm)
