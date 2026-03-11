---
title: "createSuccessResponse(invocationId, response)"
domain: apex-reference
topic: createsuccessresponseinvocationid-response
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.505Z
keywords: [createSuccessResponse, invocationId, response, Generate, successful, mock, test, Salesforce, Functions., Signature, Parameters, Return, Value]
---

# createSuccessResponse(invocationId, response)

> Generate a response for a successful mock test of Salesforce
      Functions.

### createSuccessResponse(invocationId, response)

Generate a response for a successful mock test of Salesforce Functions.

#### Signature

public static functions.FunctionInvocation createSuccessResponse(String invocationId, String response)

#### Parameters

invocationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID associated with a call to either the synchronous or asynchronous Function.invoke() method.

response

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The message indicating success.

#### Return Value

Type: [FunctionInvocation Interface](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_interface_functions_FunctionInvocation "Use FunctionInvocation to get the status and results of a synchronous or asynchronous Function invocation.")