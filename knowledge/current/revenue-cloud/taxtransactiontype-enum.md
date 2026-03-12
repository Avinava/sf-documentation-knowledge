---
title: "TaxTransactionType Enum"
domain: revenue-cloud
topic: taxtransactiontype-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:07.258Z
estimatedTokens: 304
keywords: [TaxTransactionType, whether, tax, transaction, credit, debit, Usage]
---

# TaxTransactionType Enum

> Shows whether the tax transaction is for a credit or debit
      transaction.

# TaxTransactionType Enum

Shows whether the tax transaction is for a credit or debit transaction.

## Usage

Used by the [CalculateTaxResponse](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxResponse.htm#apex_class_commercetax_CalculateTaxResponse "Sets the values of the tax transaction following a response from the external tax engine. Extends the AbstractTransactionResponse class and is the top-level response class.") and [CalculateTaxRequest](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm#apex_class_commercetax_CalculateTaxRequest "Represents a request to an external tax engine to calculate tax. Extends the TaxTransactionRequest class and is the top-level request class.") class methods.

## Enum Values

The commercetax.TaxTransactionType enum includes these values.

| Value | Description |
| --- | --- |
| Credit | Represents a credit transaction. |
| Debit | Represents a debit transaction. |
| Void | Specifies that the tax engine has voided the document that's mentioned in the referenceDocumentCode property value. |

## Related Topics

- CalculateTaxResponse (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxResponse.htm)
- CalculateTaxRequest (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_commercetax_CalculateTaxRequest.htm)
