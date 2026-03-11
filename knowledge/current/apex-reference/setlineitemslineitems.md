---
title: "setLineItems(lineItems)"
domain: apex-reference
topic: setlineitemslineitems
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.228Z
keywords: [setLineItems, lineItems, Sets, value, LineItems, field, CalculateTaxResponse, object., Signature, Parameters, Return, Value]
---

# setLineItems(lineItems)

> Sets the value of the LineItems field of the CalculateTaxResponse object.

### setLineItems(lineItems)

Sets the value of the LineItems field of the CalculateTaxResponse object.

#### Signature

global void setLineItems(List<commercetax.LineItemResponse> lineItems)

#### Parameters

lineItems

Type: List<[LineItemResponse](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_LineItemResponse.htm#apex_class_commercetax_LineItemResponse "Response class that stores details of a list of one or more line items on which the tax engine has calculated tax.")\>

Response object that the tax adapter populates from the response of the external tax engine.

#### Return Value

Type: void