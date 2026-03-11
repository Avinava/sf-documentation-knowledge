---
title: "setTaxCode(taxCode)"
domain: apex-reference
topic: settaxcodetaxcode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.267Z
keywords: [setTaxCode, taxCode, Sets, TaxCode, field, LineItemResponse., Signature, Parameters, Return, Value]
---

# setTaxCode(taxCode)

> Sets the TaxCode field on the LineItemResponse.

### setTaxCode(taxCode)

Sets the TaxCode field on the LineItemResponse.

#### Signature

global void setTaxCode(String taxCode)

#### Parameters

taxCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Federal code that an individual or business uses to pay their taxes to a federal or state government. The tax engine uses this code during the tax calculation process.

#### Return Value

Type: void