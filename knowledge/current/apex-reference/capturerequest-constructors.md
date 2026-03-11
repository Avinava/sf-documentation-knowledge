---
title: "CaptureRequest Constructors"
domain: apex-reference
topic: capturerequest-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.974Z
keywords: [CaptureRequest, Constructors, constructor, intended, test, usage, throws, exception, used, outside, Apex, context., amount, authorizationId, Parameters]
---

# CaptureRequest Constructors

> This constructor is intended for test usage and throws an exception if
      used outside of the Apex test context.

## CaptureRequest Constructors

The following are constructors for CaptureRequest.

-   **[CaptureRequest(amount, authorizationId)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm#apex_commerce_payments_CaptureRequest_ctor)**  
    This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### CaptureRequest(amount, authorizationId)

This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount to be debited or captured.

authorizationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Represents a payment authorization record.