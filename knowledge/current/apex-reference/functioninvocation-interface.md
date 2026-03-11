---
title: "FunctionInvocation Interface"
domain: apex-reference
topic: functioninvocation-interface
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.799Z
keywords: [FunctionInvocation, Interface, Returns, status, Function, invocation., getStatus, Signature, Return, Value]
---

# FunctionInvocation Interface

> Returns the status of the Function invocation.

### getStatus()

Returns the status of the Function invocation.

#### Signature

public functions.FunctionInvocationStatus getStatus()

#### Return Value

Type: [functions.FunctionInvocationStatus](atlas.en-us.apexref.meta/apexref/apex_enum_functions_FunctionInvocationStatus.htm "Represents the status of a Function invocation.")

The result of the invocation, such as FunctionInvocationStatus.SUCCESS or FunctionInvocationStatus.ERROR.