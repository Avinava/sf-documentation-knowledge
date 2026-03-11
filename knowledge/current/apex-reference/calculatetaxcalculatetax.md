---
title: "calculateTax(calculateTax)"
domain: apex-reference
topic: calculatetaxcalculatetax
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.809Z
keywords: [calculateTax, Apply, tax, cancel, tax., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# calculateTax(calculateTax)

> Apply tax or cancel tax.

### calculateTax(calculateTax)

Apply tax or cancel tax.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.CalculateTaxResponse calculateTax(ConnectApi.CalculateTaxRequest calculateTax)

#### Parameters

calculateTax

Type: [ConnectApi.CalculateTaxRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_calculate_tax.htm "Request to sent through the tax adapter to the external tax engine. Inputs with a TaxTransactionType of Debit represent a tax calculation request. Inputs with a TaxTransactionType of Credit represent a tax cancellation request.")

Represents a request to calculate tax for one or more line items.

#### Return Value

Type: [ConnectApi.CalculateTaxResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_calculate_tax_output.htm "Shows the results of a tax calculation request.")