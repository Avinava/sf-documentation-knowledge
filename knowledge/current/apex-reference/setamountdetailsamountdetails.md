---
title: "setAmountDetails(amountDetails)"
domain: apex-reference
topic: setamountdetailsamountdetails
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.267Z
keywords: [setAmountDetails, amountDetails, Sets, Amount, Details, field, LineItemResponse, instance, AmountDetails., Signature, Parameters, Return, Value]
---

# setAmountDetails(amountDetails)

> Sets the Amount Details field on the LineItemResponse using an instance of AmountDetails.

### setAmountDetails(amountDetails)

Sets the Amount Details field on the LineItemResponse using an instance of AmountDetails.

#### Signature

global void setAmountDetails(commercetax.AmountDetailsResponse amountDetails)

#### Parameters

amountDetails

Type: [AmountDetailsResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_AmountDetailsResponse.htm#apex_class_commercetax_AmountDetailsResponse "Sets tax amount fields based on a response from the external tax engine.")

Class that contains methods to set the tax amount, total amount with tax, total amount, and exempt amount.

#### Return Value

Type: void