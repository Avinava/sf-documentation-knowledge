---
title: "FunctionCallback Methods"
domain: apex-reference
topic: functioncallback-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.792Z
keywords: [FunctionCallback, Methods, Called, asynchronous, Function, invocation, completed., handleResponse, var1, Signature, Parameters, Return, Value]
---

# FunctionCallback Methods

> Called when an asynchronous Function invocation has
    completed.

## FunctionCallback Methods

The following are methods for FunctionCallback.

-   **[handleResponse(var1)](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm#apex_functions_FunctionCallback_handleResponse)**  
    Called when an asynchronous Function invocation has completed.

### handleResponse(var1)

Called when an asynchronous Function invocation has completed.

#### Signature

public void handleResponse(functions.FunctionInvocation var1)

#### Parameters

var1

Type: [functions.FunctionInvocation](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_interface_functions_FunctionInvocation "Use FunctionInvocation to get the status and results of a synchronous or asynchronous Function invocation.")

The result parameter contains JSON response information and error information.

#### Return Value

Type: void