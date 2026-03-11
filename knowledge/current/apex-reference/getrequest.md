---
title: "getRequest()"
domain: apex-reference
topic: getrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:35.333Z
keywords: [getRequest, Gets, value, TaxEngineContext's, Request, field., Signature, Return, Value]
---

# getRequest()

> Gets the value of the TaxEngineContext's Request field.

### getRequest()

Gets the value of the TaxEngineContext's Request field.

#### Signature

global commercetax.TaxEngineRequest getRequest()

#### Return Value

Type: TaxEngineRequest

An implemented instance of an external tax engine's interface for processing requests. We've provided the TaxEngineRequest interface for you to test within mock adapters with classes that implement it, such as [CalculateTaxRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercetax_CalculateTaxRequest.htm#apex_class_commercetax_CalculateTaxRequest "Represents a request to an external tax engine to calculate tax. Extends the TaxTransactionRequest class and is the top-level request class."). However, don’t use it outside of a testing context.