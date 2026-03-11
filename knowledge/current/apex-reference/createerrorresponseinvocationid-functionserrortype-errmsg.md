---
title: "createErrorResponse(invocationId, functionsErrorType, errMsg)"
domain: apex-reference
topic: createerrorresponseinvocationid-functionserrortype-errmsg
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.505Z
keywords: [createErrorResponse, invocationId, functionsErrorType, errMsg, Generate, response, error, condition, during, mock, testing, Salesforce, Functions., Signature, Parameters, Return, Value]
---

# createErrorResponse(invocationId, functionsErrorType, errMsg)

> Generate a response for an error condition during mock testing of
      Salesforce Functions.

### createErrorResponse(invocationId, functionsErrorType, errMsg)

Generate a response for an error condition during mock testing of Salesforce Functions.

#### Signature

public static functions.FunctionInvocation createErrorResponse(String invocationId, functions.FunctionErrorType functionsErrorType, String errMsg)

#### Parameters

invocationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID associated with a call to either the synchronous or asynchronous Function.invoke() method.

functionsErrorType

Type: [FunctionErrorType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_functions_FunctionErrorType.htm "Represents the error type of FunctionInvocationError.")

The error type of FunctionInvocationError.

errMsg

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The error message.

#### Return Value

Type: [FunctionInvocation Interface](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_interface_functions_FunctionInvocation "Use FunctionInvocation to get the status and results of a synchronous or asynchronous Function invocation.")