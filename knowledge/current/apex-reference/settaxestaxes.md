---
title: "setTaxes(taxes)"
domain: apex-reference
topic: settaxestaxes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.267Z
keywords: [setTaxes, taxes, Sets, Taxes, field, LineItemResponse., Signature, Parameters, Return, Value]
---

# setTaxes(taxes)

> Sets the Taxes field on a LineItemResponse.

### setTaxes(taxes)

Sets the Taxes field on a LineItemResponse.

#### Signature

global void setTaxes(List<commercetax.TaxDetailsResponse> taxes)

#### Parameters

taxes

Type: List<[TaxDetailsResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_TaxDetailsResponse.htm#apex_class_commercetax_TaxDetailsResponse "Stores details of the tax values that an external tax engine calculates in response to a tax calculation request.")\>

Tax values applied to a line item in the LineItemResponse list. This information is stored in a list of TaxDetailsResponses, which contains values such as tax, taxable amount, and tax rate.

#### Return Value

Type: void