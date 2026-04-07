---
title: "IssueCreditMemo Namespace"
domain: revenue-cloud
topic: issuecreditmemo-namespace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:41.843Z
estimatedTokens: 399
namespace: IssueCreditMemo
keywords: [IssueCreditMemo, Issue, credit, memos, disputed, invoices, apply, against, invoice, lines, dispute, adjustments]
---

> Issue credit memos from disputed invoices. Use this namespace to create and apply credit
    memos against invoices or invoice lines based on dispute adjustments.

**Namespace:** `IssueCreditMemo`

# IssueCreditMemo Namespace

Issue credit memos from disputed invoices. Use this namespace to create and apply credit memos against invoices or invoice lines based on dispute adjustments.

You can access this namespace if Dispute Management is enabled in Billing.

The IssueCreditMemo namespace includes these classes.

-   **[CreditLineRequestInputRepresentations Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm#apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations)**
    Represents a single line-level credit request. Specifies the invoice line to credit, the amount to apply, and an optional description.
-   **[CreditRequestInputRepresentations Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm#apex_class_IssueCreditMemo_CreditRequestInputRepresentations)**
    Represents a credit request for an invoice. Contains invoice and dispute identifiers, total credit amount, category, and line-level credit details for issuing a credit memo.
-   **[CreditResponseOutputRepresentations Class](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditResponseOutputRepresentations.htm#apex_class_IssueCreditMemo_CreditResponseOutputRepresentations)**
    Represents the result of a credit memo operation. Indicates success or failure and any additional information or message.

## Related Topics

- CreditLineRequestInputRepresentations Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditLineRequestInputRepresentations.htm)
- CreditRequestInputRepresentations Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditRequestInputRepresentations.htm)
- CreditResponseOutputRepresentations Class (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_IssueCreditMemo_CreditResponseOutputRepresentations.htm)
