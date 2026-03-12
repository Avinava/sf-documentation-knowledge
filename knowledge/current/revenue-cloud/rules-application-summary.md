---
title: "Rules Application Summary"
domain: revenue-cloud
topic: rules-application-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.420Z
estimatedTokens: 291
keywords: [Rules, Application, Summary, Output, representation, summary, application, rule., includes, number, payments, credit, memos, account, total, that's, applied, invoices, whether, considered]
---

# Rules Application Summary

> Output representation of the summary of the application rule. This includes the number of
    payments and credit memos for the account, the total number of payments and credit memos that's
    applied to invoices, and whether all invoices for an account are considered (true) or not
    (false).

# Rules Application Summary

Output representation of the summary of the application rule. This includes the number of payments and credit memos for the account, the total number of payments and credit memos that's applied to invoices, and whether all invoices for an account are considered (true) or not (false).

JSON example

This example shows the rules application summary.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fetched​Payments​Count | Integer | Total number of payments related to the account. | Big, 66.0 | 66.0 |
| fetchedCredit​Memos​Count | Integer | Total number of credit memos or credit memo lines related to the account. | Big, 66.0 | 66.0 |
| totalPayment​Applications | Integer | Total number of payments that are applied to the invoices or invoice lines. | Big, 66.0 | 66.0 |
| totalCredit​Memo​Applications | Integer | Total number of credit memos that are applied to the invoice or invoice lines. | Big, 66.0 | 66.0 |
| areAll​Invoices​Considered | Boolean | Indicates whether all invoices are considered (true) or not (false). | Big, 66.0 | 66.0 |

## Code Examples

```
{
  "rulesApplicationSummary": {
    "fetchedPaymentsCount": 5,
    "fetchedCreditMemosCount": 2,
    "totalPaymentApplications": 3,
    "totalCreditMemoApplications": 1,
    "areAllInvoicesConsidered": true
  }
}
```
