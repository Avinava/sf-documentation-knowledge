---
title: "TaxPlatform Class"
domain: apex-reference
topic: taxplatform-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.638Z
estimatedTokens: 367
namespace: ConnectApi
keywords: [TaxPlatform, Apply, tax, cancel, calculateTax, API, Version, Requires, Chatter]
---

# TaxPlatform Class

> Apply tax or cancel tax.

**Namespace:** `ConnectApi`

# TaxPlatform Class

Apply or cancel tax.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## TaxPlatform Methods

These methods are for TaxPlatform. All methods are static.

-   **[calculateTax(calculateTax)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_TaxPlatform_static_methods.htm#apex_ConnectAPI_TaxPlatform_calculateTax_1)**
    Apply tax or cancel tax.

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- calculateTax(calculateTax) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_TaxPlatform_static_methods.htm)
- ConnectApi.CalculateTaxRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_calculate_tax.htm)
- ConnectApi.CalculateTaxResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_calculate_tax_output.htm)
