---
title: "TaxTransactionStatus Enum"
domain: apex-reference
topic: taxtransactionstatus-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.488Z
keywords: [TaxTransactionStatus, Enum, Usage, Values]
---

# TaxTransactionStatus Enum

# TaxTransactionStatus Enum

Shows whether the tax transaction has been committed or uncommitted.

## Usage

Used by the [CalculateTaxResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_CalculateTaxResponse.htm#apex_class_commercetax_CalculateTaxResponse "Sets the values of the tax transaction following a response from the external tax engine. Extends the AbstractTransactionResponse class and is the top-level response class.") class method.

## Enum Values

The commercetax.TaxTransactionStatus enum includes these values.

| Value | Description |
| --- | --- |
| Committed | Tax has been calculated and committed. |
| Uncommitted | Tax has been calculated but hasn't been committed. |