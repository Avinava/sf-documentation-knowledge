---
title: "FunctionCallback Interface"
domain: apex-reference
topic: functioncallback-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.792Z
keywords: [FunctionCallback, Interface, Called, asynchronous, Function, invocation, completed., handleResponse, var1, Signature, Parameters, Return, Value]
---

# FunctionCallback Interface

> Called when an asynchronous Function invocation has
    completed.

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