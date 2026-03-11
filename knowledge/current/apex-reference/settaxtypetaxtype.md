---
title: "setTaxType(taxType)"
domain: apex-reference
topic: settaxtypetaxtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.228Z
keywords: [setTaxType, taxType, Sets, value, TaxType, field, CalculateTaxResponse, object., Signature, Parameters, Return, Value]
---

# setTaxType(taxType)

> Sets the value of the TaxType field of the CalculateTaxResponse object.

### setTaxType(taxType)

Sets the value of the TaxType field of the CalculateTaxResponse object.

#### Signature

global void setTaxType(commercetax.CalculateTaxType taxType)

#### Parameters

taxType

Type: [CalculateTaxType](atlas.en-us.apexref.meta/apexref/apex_enum_commercetax_CalculateTaxType.htm "Shows whether a tax calculation request is for estimated or actual tax.")

Indicates whether a tax calculation request is for estimated or actual tax.

#### Return Value

Type: void