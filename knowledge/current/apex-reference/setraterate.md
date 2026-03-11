---
title: "setRate(rate)"
domain: apex-reference
topic: setraterate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.326Z
keywords: [setRate, rate, Sets, Rate, field, TaxDetailsResponse, class., Signature, Parameters, Return, Value]
---

# setRate(rate)

> Sets the Rate field of the TaxDetailsResponse class.

### setRate(rate)

Sets the Rate field of the TaxDetailsResponse class.

#### Signature

global void setRate(Double rate)

#### Parameters

rate

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

Tax used during tax calculation. This value is often a decimal amount, such as 0.1 or 0.06, based on the applied tax percentage.

#### Return Value

Type: void