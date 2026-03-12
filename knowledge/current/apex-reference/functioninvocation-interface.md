---
title: "FunctionInvocation Interface"
domain: apex-reference
topic: functioninvocation-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.104Z
estimatedTokens: 1092
keywords: [FunctionInvocation, get, status, results, synchronous, asynchronous, Function, invocation., Usage, getError, getInvocationId, getResponse, getStatus, Example, Implementation]
---

# FunctionInvocation Interface

> Use FunctionInvocation to get the status and results of a synchronous
      or asynchronous Function invocation.

# FunctionInvocation Interface

Use FunctionInvocation to get the status and results of a synchronous or asynchronous Function invocation.

## Namespace

[functions](atlas.en-us.apexref.meta/apexref/apex_namespace_functions.htm "The Functions namespace provides classes and methods used to invoke and manage Salesforce Functions.")

## Usage

The results of a Function invocation are passed back via FunctionInvocation. Use this instance to determine if the invocation was successful, and any results from the Function invocation.

You can also implement your own FunctionInvocation interface if you run Apex tests with your Function invocation code. Your test code can create and use your own FunctionInvocation instance in place of using the results from a call to Function.invoke().

-   **[FunctionInvocation Methods](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_functions_FunctionInvocation_methods)**

-   **[FunctionInvocation Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_interface_functions_FunctionInvocation_Example)**


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

## FunctionInvocation Example Implementation

This is an example implementation of the functions.FunctionInvocation interface.

```

```

The following example tests the implementation:

```

```

## Code Examples

```apex
public class MyFunctionInvocationError
  implements functions.FunctionInvocationError {
    public String getMessage() {
      return 'Mock error message for testing';
    }
    public functions.FunctionErrorType getType() {
      return functions.FunctionErrorType.FUNCTION_EXCEPTION;
    }
}

public class MyFunctionInvocation
  implements functions.FunctionInvocation {
    public functions.FunctionInvocationStatus getStatus() {
      return functions.FunctionInvocationStatus.ERROR;
    }
    public String getResponse() {
      return 'Mock response for testing';
    }
    public String getInvocationId() {
      return 'MOCKTESTID';
    }
    public functions.FunctionInvocationError getError() {
      functions.FunctionInvocationError testError = new MyFunctionInvocationError();
      return testError;
    }
}
```

```apex
functions.FunctionInvocation testInvocation = new MyFunctionInvocation();
if (testInvocation.getStatus() == functions.FunctionInvocationStatus.ERROR) {
    System.debug('Error: ' + (testInvocation.getError() != null ? testInvocation.getError().getMessage() : 'UNKNOWN'));
    return;
}
```

## Related Topics

- functions (atlas.en-us.apexref.meta/apexref/apex_namespace_functions.htm)
- FunctionInvocation Methods (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm)
- FunctionInvocation Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm)
- getError() (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm)
- getInvocationId() (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm)
- getResponse() (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm)
- getStatus() (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm)
- functions.FunctionInvocationError (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocationError.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- JSONParser Class (atlas.en-us.apexref.meta/apexref/apex_class_System_JsonParser.htm)
