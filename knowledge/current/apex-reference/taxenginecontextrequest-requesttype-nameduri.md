---
title: "TaxEngineContext(request, requestType,
    namedUri)"
domain: apex-reference
topic: taxenginecontextrequest-requesttype-nameduri
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.333Z
keywords: [TaxEngineContext, request, requestType, namedUri, Initializes, object., constructor, intended, test, usage, throws, exception, used, outside, Apex, context., Signature, Parameters]
---

# TaxEngineContext(request, requestType,
    namedUri)

> Initializes the TaxEngineContext
      object. This constructor is intended for test usage and throws an exception if used outside of
      the Apex test context.

### TaxEngineContext(request, requestType, namedUri)

Initializes the TaxEngineContext object. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

TaxEngineContext(commercetax.TaxEngineRequest request, commercetax.RequestType requestType, String namedUri)

#### Parameters

request

Type: TaxEngineRequest

Information about the request.

requestType

Type: [RequestType](atlas.en-us.apexref.meta/apexref/apex_enum_commercetax_RequestType.htm "Shows the type of tax request made to the tax engine.")

Whether the tax request is to calculate or estimate tax.

namedUri

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

URI that was called as part of the tax calculation request.