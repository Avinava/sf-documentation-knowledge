---
title: "TaxSellerDetailsRequest(code)"
domain: apex-reference
topic: taxsellerdetailsrequestcode
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.354Z
keywords: [TaxSellerDetailsRequest, code, Initializes, request, tax, seller, details., constructor, intended, test, usage, throws, exception, used, outside, Apex, context, Signature, Parameters]
---

# TaxSellerDetailsRequest(code)

> Initializes the request for the tax seller details. This constructor
      is intended for test usage and throws an exception if used outside of the Apex test
      context

### TaxSellerDetailsRequest(code)

Initializes the request for the tax seller details. This constructor is intended for test usage and throws an exception if used outside of the Apex test context

#### Signature

global TaxSellerDetailsRequest(String code)

#### Parameters

code

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Tax code used for tax calculation.