---
title: "setTaxTransactionType(taxTransactionType)"
domain: apex-reference
topic: settaxtransactiontypetaxtransactiontype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.228Z
keywords: [setTaxTransactionType, taxTransactionType, Sets, value, TaxTransactionType, field, CalculateTaxResponse, object., Signature, Parameters, Return, Value]
---

# setTaxTransactionType(taxTransactionType)

> Sets the value of the TaxTransactionType field of the CalculateTaxResponse object.

### setTaxTransactionType(taxTransactionType)

Sets the value of the TaxTransactionType field of the CalculateTaxResponse object.

#### Signature

global void setTaxTransactionType(commercetax.TaxTransactionType taxTransactionType)

#### Parameters

taxTransactionType

Type: [TaxTransactionType](atlas.en-us.apexref.meta/apexref/apex_enum_commercetax_TaxTransactionType.htm "Shows whether the tax transaction is for a credit or debit transaction.")

Whether the tax transaction was for a credit, debit, or voided transaction.

#### Return Value

Type: void