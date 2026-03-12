---
title: "Billing Apex Reference"
domain: revenue-cloud
topic: billing-apex-reference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:07.366Z
estimatedTokens: 879
namespace: ConnectApi
keywords: [Billing, Apex, ConnectApi, Connect, classes, accessing, capabilities, Business, APIs, Additionally, built-in, interfaces, grouped]
---

# Billing Apex Reference

> Billing provides the ConnectApi
      namespace (also called Connect in Apex) that contains classes for accessing the same
      capabilities that are available in the Billing Business APIs. Additionally, you can use other
      built-in Apex classes and interfaces grouped by namespace.

**Namespace:** `ConnectApi`

# Billing Apex Reference

Billing provides the ConnectApi namespace (also called Connect in Apex) that contains classes for accessing the same capabilities that are available in the Billing Business APIs. Additionally, you can use other built-in Apex classes and interfaces grouped by namespace.

This table lists the available Billing Apex methods with the associated Connect REST API.

| Apex Method | Connect REST API |
| --- | --- |
| convertNegativeInvoiceLines(ConvertNegativeInvoiceLinesInput, invoiceId) | Negative Invoice Lines to Credit Conversion (POST) |
| generateInvoices(inputRequest) | Invoices By Using Billing Schedules (POST) |
| recoverBillingSchedules(inputRequest) | Billing Schedule Recovery List (POST) |
| creditInvoice(CreditInvoiceInput, invoiceId) | Credit Memo Create and Apply (POST) |
| applyCreditMemos(CreditMemoApplyInput, creditMemoId) | Credit Memo Apply List(POST) |
| unapplyCreditMemos(CreditMemoUnapplyInput, creditMemoInvApplicationId) | Credit Memo Unapply (POST) |
| applyCreditMemoLines(CreditMemoLineApplyInput, creditMemoLineId) | Credit Memo Line Apply (POST) |
| unapplyCreditMemoLines(CreditMemoLineUnapplyInput, creditMemoLineInvoiceLineId) | Credit Memo Line Unapply (POST) |
| triggerInvoiceBatchDraftToPosted(invoiceBatchRunId) | Invoices Batch Draft to Posted Status (POST) |
| postDraftInvoices(inputRequest) | Invoice Draft to Posted Status (POST) |
| createCreditMemos(CreditMemoInputRequest) | Credit Memo Create and Apply (POST) |
| voidPostedInvoice(invoiceId) | Posted Invoice Voidance (POST) |
| calculateTax(calculateTax) | Tax Calculation (POST) |
| applyPaymentLine(PaymentLineApplyInput, paymentId) | Payment Line Apply (POST) |
| unapplyPaymentLine(PaymentLineUnapplyInput, paymentId, paymentLineId) | Payment Line Unapply (POST) |
| applyRefundLine(RefundLineApplyInput, refundId) | Refund Line Apply (POST) |
| reconcileSequences(sequenceGapReconciliationInputRepresentation) | Sequence Gap Reconciliation (POST) |
| sequenceAssignment(sequencesAssignmentInputRepresentation) | Sequence Assignment (POST) |
| voidPostedCreditMemo(VoidPostedCreditMemoInput, creditMemoId) | Void Posted Credit Memo (POST) |

For more information about Apex classes that are available for Commerce Payments, see [CommercePayments Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_commercepayments.htm "HTML (New Window)").

-   **[ConnectApi Namespace](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_connect_api_namespace.htm)**
    The ConnectApi namespace (also called Connect in Apex) provides classes to manage credit applications and billing scenarios.
-   **[InvoiceWriteOff Namespace](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm)**
    Create credit memos with the total charge amount on the invoice as the write-off amount and close the invoice.
-   **[RulesAppln Namespace](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RulesAppln.htm)**
    Apply payments and credits to posted invoices by adhering to the specified rules.
-   **[TaxEngineAdapter Interface](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_tax_engine_adapter_interface_for_standard_tax.htm)**
    Retrieves and evaluates the details from a tax engine to define tax details.

## Related Topics

- ConnectApi Namespace (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_connect_api_namespace.htm)
- InvoiceWriteOff Namespace (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_InvoiceWriteOff.htm)
- RulesAppln Namespace (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RulesAppln.htm)
- TaxEngineAdapter Interface (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/billing_tax_engine_adapter_interface_for_standard_tax.htm)
