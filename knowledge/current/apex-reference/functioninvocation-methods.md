---
title: "FunctionInvocation Methods"
domain: apex-reference
topic: functioninvocation-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.799Z
keywords: [FunctionInvocation, Methods, Returns, error, information, Function, invocation., getError, Signature, Return, Value, getInvocationId, getResponse, getStatus]
---

# FunctionInvocation Methods

> Returns error information for a Function invocation.

## FunctionInvocation Methods

The following are methods for FunctionInvocation.

-   **[getError()](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_functions_FunctionInvocation_getError)**  
    Returns error information for a Function invocation.
-   **[getInvocationId()](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_functions_FunctionInvocation_getInvocationId)**  
    Returns the invocation ID of the Function invocation.
-   **[getResponse()](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_functions_FunctionInvocation_getResponse)**  
    Returns the response string of the Function invocation.
-   **[getStatus()](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_functions_FunctionInvocation_getStatus)**  
    Returns the status of the Function invocation.

### getError()

Returns error information for a Function invocation.

#### Signature

public functions.FunctionInvocationError getError()

#### Return Value

Type: [functions.FunctionInvocationError](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocationError.htm#apex_interface_functions_FunctionInvocationError "Use FunctionInvocationError to get detailed error information about a failed Function invocation.")

Contains a FunctionInvocationError instance that you can use to get information about any invocation errors. If the Function was invoked successfully, the returned instance is null.

### getInvocationId()

Returns the invocation ID of the Function invocation.

#### Signature

public String getInvocationId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

This ID is available after a call to either the synchronous or asynchronous Function.invoke() methods. For asynchronous invocations, this ID can be used to check the status of the queued invocation.

### getResponse()

Returns the response string of the Function invocation.

#### Signature

public String getResponse()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The response string is the raw request JSON response, which can be parsed using the [JSONParser Class](atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm#apex_class_System_JsonParser "Represents a parser for JSON-encoded content.").

### getStatus()

Returns the status of the Function invocation.

#### Signature

public functions.FunctionInvocationStatus getStatus()

#### Return Value

Type: [functions.FunctionInvocationStatus](atlas.en-us.apexref.meta/apexref/apex_enum_functions_FunctionInvocationStatus.htm "Represents the status of a Function invocation.")

The result of the invocation, such as FunctionInvocationStatus.SUCCESS or FunctionInvocationStatus.ERROR.