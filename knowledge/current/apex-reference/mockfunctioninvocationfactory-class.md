---
title: "MockFunctionInvocationFactory Class"
domain: apex-reference
topic: mockfunctioninvocationfactory-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.996Z
estimatedTokens: 1078
keywords: [MockFunctionInvocationFactory, generate, appropriate, mock, responses, testing, Salesforce, Functions, Usage, createErrorResponse, invocationId, functionsErrorType, errMsg, createSuccessResponse]
---

# MockFunctionInvocationFactory Class

> Use the MockFunctionInvocationFactory methods to generate appropriate mock responses for
      testing Salesforce Functions.

# MockFunctionInvocationFactory Class

Use the MockFunctionInvocationFactory methods to generate appropriate mock responses for testing Salesforce Functions.

## Namespace

[functions](atlas.en-us.apexref.meta/apexref/apex_namespace_functions.htm "The Functions namespace provides classes and methods used to invoke and manage Salesforce Functions.")

## Usage

To mock Salesforce Functions testing, implement an appropriate mock response in the respond(functionName,payload) method of the FunctionInvokeMock interface. During mock testing of a Salesforce Functions, the Apex runtime sends the response specified in the respond() method, rather than invoking the function itself. Appropriate success and error messages can be configured with the createSuccessResponse(invocationId,message) and createErrorResponse(invocationId,functionsErrorType,errorMsg) methods.

See [FunctionInvokeMock Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvokeMock.htm#apex_interface_functions_FunctionInvokeMock_Example).

-   **[MockFunctionInvocationFactory Methods](atlas.en-us.apexref.meta/apexref/apex_class_functions_MockFunctionInvocationFactory.htm#apex_functions_MockFunctionInvocationFactory_methods)**


## MockFunctionInvocationFactory Methods

The following are methods for MockFunctionInvocationFactory.

-   **[createErrorResponse(invocationId, functionsErrorType, errMsg)](atlas.en-us.apexref.meta/apexref/apex_class_functions_MockFunctionInvocationFactory.htm#apex_functions_MockFunctionInvocationFactory_createErrorResponse)**
    Generate a response for an error condition during mock testing of Salesforce Functions.
-   **[createSuccessResponse(invocationId, response)](atlas.en-us.apexref.meta/apexref/apex_class_functions_MockFunctionInvocationFactory.htm#apex_functions_MockFunctionInvocationFactory_createSuccessResponse)**
    Generate a response for a successful mock test of Salesforce Functions.

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

## Related Topics

- functions (atlas.en-us.apexref.meta/apexref/apex_namespace_functions.htm)
- FunctionInvokeMock Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvokeMock.htm)
- MockFunctionInvocationFactory Methods (atlas.en-us.apexref.meta/apexref/apex_class_functions_MockFunctionInvocationFactory.htm)
- createErrorResponse(invocationId, functionsErrorType, errMsg) (atlas.en-us.apexref.meta/apexref/apex_class_functions_MockFunctionInvocationFactory.htm)
- createSuccessResponse(invocationId, response) (atlas.en-us.apexref.meta/apexref/apex_class_functions_MockFunctionInvocationFactory.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- FunctionErrorType Enum (atlas.en-us.apexref.meta/apexref/apex_enum_functions_FunctionErrorType.htm)
- FunctionInvocation Interface (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm)
