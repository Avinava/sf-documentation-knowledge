---
title: "CreditMemoLineApply Class"
domain: revenue-cloud
topic: creditmemolineapply-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.253Z
estimatedTokens: 947
namespace: ConnectApi
keywords: [CreditMemoLineApply, Manage, credit, memo, line, applications, applyCreditMemoLines, CreditMemoLineApplyInput, creditMemoLineId, API, Version, Requires, Chatter, Usage, unapplyCreditMemoLines]
---

# CreditMemoLineApply Class

> Manage credit memo line applications by using the CreditMemoLineApply class.

**Namespace:** `ConnectApi`

# CreditMemoLineApply Class

Manage credit memo line applications by using the CreditMemoLineApply class.

## Namespace

ConnectApi

## CreditMemoLineApply Methods

These methods are for CreditMemoLineApply. All methods are static.

-   **[applyCreditMemoLines(CreditMemoLineApplyInput, creditMemoLineId)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_ConnectAPI_CreditMemoLineApply_static_methods.htm#apex_ConnectAPI_CreditMemoLineApply_applyCreditMemoLines_1)**
    Adjust or correct already issued invoices by applying an existing credit memo line to an invoice line.
-   **[unapplyCreditMemoLines(CreditMemoLineUnapplyInput, creditMemoLineInvoiceLineId)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_ConnectAPI_CreditMemoLineApply_static_methods.htm#apex_ConnectAPI_CreditMemoLineApply_unapplyCreditMemoLines_1)**
    Unapply a credit memo line from an invoice line and return the invoice line and the credit memo line to their pre-application states.

### applyCreditMemoLines(CreditMemoLineApplyInput, creditMemoLineId)

Adjust or correct already issued invoices by applying an existing credit memo line to an invoice line.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CreditMemoLineAppliedResponse applyCreditMemoLines(ConnectApi.CreditMemoLineApplyInput CreditMemoLineApplyInput, String creditMemoLineId)

#### Parameters

CreditMemoLineApplyInput

Type: [ConnectApi.CreditMemoLineApplyInput](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_line_apply.htm "Input representation of the details of the request to apply a credit memo line to an invoice line.")

Input representation of the details of the request to apply a credit memo line to an invoice line.

creditMemoLineId

Type: String

ID of the credit memo line record.

#### Return Value

Type: [ConnectApi.CreditMemoLineAppliedResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_credit_memo_line_applied.htm "Output representation of the list of applied credit memo line results.")

#### Usage

You need the Credit Memo Operations User permission set to use this method.

### unapplyCreditMemoLines(CreditMemoLineUnapplyInput, creditMemoLineInvoiceLineId)

Unapply a credit memo line from an invoice line and return the invoice line and the credit memo line to their pre-application states.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CreditMemoLineUnappliedResponse unapplyCreditMemoLines(ConnectApi.CreditMemoLineUnapplyInput CreditMemoLineUnapplyInput, String creditMemoLineInvoiceLineId)

#### Parameters

CreditMemoLineUnapplyInput

Type: [ConnectApi.CreditMemoLineUnapplyInput](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_line_unapply.htm "Input representation of the details of the request to unapply a credit memo line from an invoice line.")

Input representation of the details of the request to unapply a credit memo line from an invoice line.

creditMemoLineInvoiceLineId

Type: String

ID of the credit memo line invoice line record.

#### Return Value

Type: [ConnectApi.CreditMemoLineUnappliedResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_credit_memo_line_unapplied.htm "Output representation of the details of the credit memo line invoice line record with the status of the request.")

#### Usage

You need the Credit Memo Operations User permission set to use this method.

## Related Topics

- applyCreditMemoLines(CreditMemoLineApplyInput, creditMemoLineId) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_ConnectAPI_CreditMemoLineApply_static_methods.htm)
- unapplyCreditMemoLines(CreditMemoLineUnapplyInput, creditMemoLineInvoiceLineId) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_ConnectAPI_CreditMemoLineApply_static_methods.htm)
- ConnectApi.CreditMemoLineApplyInput (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_line_apply.htm)
- ConnectApi.CreditMemoLineAppliedResponse (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_credit_memo_line_applied.htm)
- ConnectApi.CreditMemoLineUnapplyInput (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_line_unapply.htm)
- ConnectApi.CreditMemoLineUnappliedResponse (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_credit_memo_line_unapplied.htm)
