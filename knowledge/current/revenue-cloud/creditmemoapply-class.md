---
title: "CreditMemoApply Class"
domain: revenue-cloud
topic: creditmemoapply-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:04.135Z
estimatedTokens: 1044
namespace: ConnectApi
keywords: [CreditMemoApply, Manage, credit, memo, applications, class., applyCreditMemos, CreditMemoApplyInput, creditMemoId, API, Version, Requires, Chatter, Usage, unapplyCreditMemos, CreditMemoUnapplyInput, creditMemoInvApplicationId]
---

# CreditMemoApply Class

> Manage credit memo applications by using the CreditMemoApply class.

**Namespace:** `ConnectApi`

# CreditMemoApply Class

Manage credit memo applications by using the CreditMemoApply class.

## Namespace

ConnectApi

## CreditMemoApply Methods

These methods are for CreditMemoApply. All methods are static.

-   **[applyCreditMemos(CreditMemoApplyInput, creditMemoId)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_ConnectAPI_CreditMemoApply_static_methods.htm#apex_ConnectAPI_CreditMemoApply_applyCreditMemos_1)**
    Adjust or correct already issued invoices by applying an existing credit memo to an invoice.
-   **[unapplyCreditMemos(CreditMemoUnapplyInput, creditMemoInvApplicationId)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_ConnectAPI_CreditMemoApply_static_methods.htm#apex_ConnectAPI_CreditMemoApply_unapplyCreditMemos_1)**
    Unapply a credit memo from an invoice and return the invoice and the credit memo to their pre-application states.

### applyCreditMemos(CreditMemoApplyInput, creditMemoId)

Adjust or correct already issued invoices by applying an existing credit memo to an invoice.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ApplyCreditResults applyCreditMemos(ConnectApi.CreditMemoApplyInputRequest CreditMemoApplyInput, String creditMemoId)

#### Parameters

CreditMemoApplyInput

Type: [ConnectApi.CreditMemoApplyInputRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_apply.htm "Input representation of the request to apply a credit memo to an invoice.")

Input representation of the request to apply a credit memo to an invoice.

creditMemoId

Type: String

ID of the credit memo record.

#### Return Value

Type: [ConnectApi.ApplyCreditResults](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_credit_memo_apply_list_output.htm "Output representation of the list of applied credit memo results.")

#### Usage

Specify the credit memo ID and the amounts to be applied, with the total of all applied amounts not exceeding the credit memo's balance.

The credit amount for each invoice can’t surpass the original charge or adjustment amount, and the overall credit amount must not exceed the invoice's outstanding balance. The exceptions include any taxes calculated by an external service.

For example, your organization sold 10 tablets at US$500 each, totaling $5000, to a vendor who later reported that 6 tablets were defective. Using this method, your accounts receivable team creates a $3000 credit memo and applies this credit to the original invoice.

### unapplyCreditMemos(CreditMemoUnapplyInput, creditMemoInvApplicationId)

Unapply a credit memo from an invoice and return the invoice and the credit memo to their pre-application states.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.UnapplyCreditResult unapplyCreditMemos(ConnectApi.CreditMemoUnapplyInputRequest CreditMemoUnapplyInput, String creditMemoInvApplicationId)

#### Parameters

CreditMemoUnapplyInput

Type: [ConnectApi.CreditMemoUnapplyInputRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_unapply.htm "Input representation of the request to unapply a credit memo from an invoice.")

Input representation of the request to unapply a credit memo from an invoice.

creditMemoInvApplicationId

Type: String

ID of the credit memo invoice application.

#### Return Value

Type: [ConnectApi.UnapplyCreditResult](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_credit_memo_unapply_output.htm "Output representation of the details of the credit memo invoice application record with the status of the request.")

#### Usage

Use this method if an error occurred when a credit is issued. For example, if an incorrect credit memo is applied to an invoice, or if a credit memo is created for an incorrect amount, use this method to unapply the credit memo.

## Related Topics

- applyCreditMemos(CreditMemoApplyInput, creditMemoId) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_ConnectAPI_CreditMemoApply_static_methods.htm)
- unapplyCreditMemos(CreditMemoUnapplyInput, creditMemoInvApplicationId) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_ConnectAPI_CreditMemoApply_static_methods.htm)
- ConnectApi.CreditMemoApplyInputRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_apply.htm)
- ConnectApi.ApplyCreditResults (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_credit_memo_apply_list_output.htm)
- ConnectApi.CreditMemoUnapplyInputRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_input_credit_memo_unapply.htm)
- ConnectApi.UnapplyCreditResult (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_credit_memo_unapply_output.htm)
