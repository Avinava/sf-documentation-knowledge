---
title: "FunctionInvocationStatus Enum"
domain: apex-reference
topic: functioninvocationstatus-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:29.665Z
estimatedTokens: 169
keywords: [FunctionInvocationStatus, Represents, status, Function, invocation., Values]
---

# FunctionInvocationStatus Enum

> Represents the status of a Function invocation.

# FunctionInvocationStatus Enum

Represents the status of a Function invocation.

## Enum Values

The following are the values of the functions.FunctionInvocationStatus enum.

| Value | Description |
| --- | --- |
| ERROR | The invocation failed. Check the FunctionInvocation and FunctionInvocationError returned by the invoke call to debug the issue. |
| PENDING | The invocation is pending. If the Function is being invoked asynchronously, the invocation is still in the asynch queue. |
| SUCCESS | The invocation succeeded. Use FunctionInvocation.getResponse() with the FunctionInvocation instance returned by the invoke call to get any response returned by the Function. |
