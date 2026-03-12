---
title: "TaxTransactionStatus Enum"
domain: revenue-cloud
topic: taxtransactionstatus-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:05.234Z
estimatedTokens: 192
keywords: [TaxTransactionStatus, Shows, whether, tax, transaction, committed, uncommitted., Usage, Values]
---

# TaxTransactionStatus Enum

> Shows whether the tax transaction has been committed or
      uncommitted.

# TaxTransactionStatus Enum

Shows whether the tax transaction has been committed or uncommitted.

## Usage

Used by the [CalculateTaxResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxResponse.htm#apex_class_commercetax_CalculateTaxResponse "Sets the values of the tax transaction following a response from the external tax engine. Extends the AbstractTransactionResponse class and is the top-level response class.") class method.

## Enum Values

The commercetax.TaxTransactionStatus enum includes these values.

| Value | Description |
| --- | --- |
| Committed | Tax has been calculated and committed. |
| Uncommitted | Tax has been calculated but hasn't been committed. |

## Related Topics

- CalculateTaxResponse (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxResponse.htm)
