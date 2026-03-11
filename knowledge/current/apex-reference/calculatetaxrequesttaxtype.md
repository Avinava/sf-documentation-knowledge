---
title: "CalculateTaxRequest(taxType)"
domain: apex-reference
topic: calculatetaxrequesttaxtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.213Z
keywords: [CalculateTaxRequest, taxType, constructor, intended, test, usage, only, throws, exception, used, outside, Apex, context., Signature, Parameters]
---

# CalculateTaxRequest(taxType)

> This constructor is intended for test usage only and throws an
      exception if used outside of the Apex test context.

### CalculateTaxRequest(taxType)

This constructor is intended for test usage only and throws an exception if used outside of the Apex test context.

#### Signature

global CalculateTaxRequest(commercetax.CalculateTaxType taxType)

#### Parameters

taxType

Type: [CalculateTaxType](atlas.en-us.apexref.meta/apexref/apex_enum_commercetax_CalculateTaxType.htm "Shows whether a tax calculation request is for estimated or actual tax.")

Indicates whether the tax calculation is for estimated tax or actual tax.