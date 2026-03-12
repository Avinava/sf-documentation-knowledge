---
title: "TaxTransactionType Enum"
domain: apex-reference
topic: taxtransactiontype-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.683Z
estimatedTokens: 273
keywords: [TaxTransactionType, whether, tax, transaction, credit, debit, Usage]
---

# TaxTransactionType Enum

> Shows whether the tax transaction is for a credit or debit
      transaction.

# TaxTransactionType Enum

Shows whether the tax transaction is for a credit or debit transaction.

## Usage

Used by the [CalculateTaxResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_CalculateTaxResponse.htm#apex_class_commercetax_CalculateTaxResponse "Sets the values of the tax transaction following a response from the external tax engine. Extends the AbstractTransactionResponse class and is the top-level response class.") and [CalculateTaxRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_CalculateTaxRequest.htm#apex_class_commercetax_CalculateTaxRequest "Represents a request to an external tax engine to calculate tax. Extends the TaxTransactionRequest class and is the top-level request class.") class methods.

## Enum Values

The commercetax.TaxTransactionType enum includes these values.

| Value | Description |
| --- | --- |
| Credit | Represents a credit transaction. |
| Debit | Represents a debit transaction. |
| Void | Specifies that the tax engine has voided the document that's mentioned in the referenceDocumentCode property value. |

## Related Topics

- CalculateTaxResponse (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_CalculateTaxResponse.htm)
- CalculateTaxRequest (atlas.en-us.apexref.meta/apexref/apex_class_commercetax_CalculateTaxRequest.htm)
