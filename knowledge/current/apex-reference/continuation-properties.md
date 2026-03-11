---
title: "Continuation Properties"
domain: apex-reference
topic: continuation-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.346Z
keywords: [Continuation, Properties, name, callback, method, called, after, callout, response, returns., continuationMethod, Signature, Property, Value, Usage, Note, timeout, state, Example]
---

# Continuation Properties

> The name of the callback method that is called after the callout
      response returns.

## Continuation Properties

The following are properties for Continuation.

-   **[continuationMethod](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_ContinuationMethod)**  
    The name of the callback method that is called after the callout response returns.
-   **[timeout](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_Timeout)**  
    The timeout of the continuation in seconds. Maximum: 120 seconds.
-   **[state](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_state)**  
    Data that is stored in this continuation and that can be retrieved after the callout is finished and the callback method is invoked.

### continuationMethod

The name of the callback method that is called after the callout response returns.

#### Signature

public String continuationMethod {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If the continuationMethod property is not set for a Continuation, the same action method that made the asynchronous callout is called again when the callout response returns.

### timeout

The timeout of the continuation in seconds. Maximum: 120 seconds.

#### Signature

public Integer timeout {get; set;}

#### Property Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### state

Data that is stored in this continuation and that can be retrieved after the callout is finished and the callback method is invoked.

#### Signature

public Object state {get; set;}

#### Property Value

Type: Object

#### Example

This example shows how to save state information for a continuation in a controller.

```

```