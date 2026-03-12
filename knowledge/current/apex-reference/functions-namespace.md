---
title: "Functions Namespace"
domain: apex-reference
topic: functions-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.690Z
estimatedTokens: 663
namespace: The
keywords: [Functions, provides, classes, used, invoke, manage, Salesforce, Functions.]
---

# Functions Namespace

> The Functions namespace provides classes and methods used to invoke and manage Salesforce
    Functions.

**Namespace:** `The`

# Functions Namespace

The Functions namespace provides classes and methods used to invoke and manage Salesforce Functions.

Salesforce Functions is your code, run on demand, in the Salesforce Functions trusted elastic compute cloud. Upload your complex business logic code, written using your preferred languages and frameworks, and Salesforce Functions takes care of everything else necessary to invoke your code in a secure, multi-tenant aware, and self-scaling environment. For more details on Salesforce Functions, see [Salesforce Functions](https://developer.salesforce.com/docs/platform/functions/guide).

The following are the classes in the functions namespace.

-   **[Function Class](atlas.en-us.apexref.meta/apexref/apex_class_functions_Function.htm#apex_class_functions_Function)**
    Use the Function class to access deployed Salesforce Functions, and invoke them synchronously or asynchronously.
-   **[FunctionCallback Interface](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm#apex_interface_functions_FunctionCallback)**
    Represents the callback Salesforce calls when an asynchronous, queued Function invocation has completed.
-   **[FunctionErrorType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_functions_FunctionErrorType.htm)**
    Represents the error type of FunctionInvocationError.
-   **[FunctionInvocation Interface](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_interface_functions_FunctionInvocation)**
    Use FunctionInvocation to get the status and results of a synchronous or asynchronous Function invocation.
-   **[FunctionInvocationError Interface](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocationError.htm#apex_interface_functions_FunctionInvocationError)**
    Use FunctionInvocationError to get detailed error information about a failed Function invocation.
-   **[FunctionInvocationStatus Enum](atlas.en-us.apexref.meta/apexref/apex_enum_functions_FunctionInvocationStatus.htm)**
    Represents the status of a Function invocation.
-   **[FunctionInvokeMock Interface](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvokeMock.htm#apex_interface_functions_FunctionInvokeMock)**
    Use the FunctionInvokeMock interface to mock Salesforce Functions responses during testing.
-   **[MockFunctionInvocationFactory Class](atlas.en-us.apexref.meta/apexref/apex_class_functions_MockFunctionInvocationFactory.htm#apex_class_functions_MockFunctionInvocationFactory)**
    Use the MockFunctionInvocationFactory methods to generate appropriate mock responses for testing Salesforce Functions.

## Related Topics

- Function Class (atlas.en-us.apexref.meta/apexref/apex_class_functions_Function.htm)
- FunctionCallback Interface (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm)
- FunctionErrorType Enum (atlas.en-us.apexref.meta/apexref/apex_enum_functions_FunctionErrorType.htm)
- FunctionInvocation Interface (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm)
- FunctionInvocationError Interface (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocationError.htm)
- FunctionInvocationStatus Enum (atlas.en-us.apexref.meta/apexref/apex_enum_functions_FunctionInvocationStatus.htm)
- FunctionInvokeMock Interface (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvokeMock.htm)
- MockFunctionInvocationFactory Class (atlas.en-us.apexref.meta/apexref/apex_class_functions_MockFunctionInvocationFactory.htm)
