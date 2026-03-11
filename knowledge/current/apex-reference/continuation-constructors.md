---
title: "Continuation Constructors"
domain: apex-reference
topic: continuation-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.346Z
keywords: [Continuation, Constructors, Creates, instance, class, specified, timeout, seconds., maximum, 120, Signature, Parameters]
---

# Continuation Constructors

> Creates an instance of the Continuation class by using the specified timeout in seconds. The timeout maximum
      is 120 seconds.

## Continuation Constructors

The following are constructors for Continuation.

-   **[Continuation(timeout)](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_ctor)**  
    Creates an instance of the Continuation class by using the specified timeout in seconds. The timeout maximum is 120 seconds.

### Continuation(timeout)

Creates an instance of the Continuation class by using the specified timeout in seconds. The timeout maximum is 120 seconds.

#### Signature

public Continuation(Integer timeout)

#### Parameters

timeout

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The timeout for this continuation in seconds.