---
title: "FunctionInvocationError Interface"
domain: apex-reference
topic: functioninvocationerror-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.110Z
estimatedTokens: 545
keywords: [FunctionInvocationError, get, detailed, error, information, failed, Function, invocation., Usage, getMessage, getType, Example, Implementation]
---

# FunctionInvocationError Interface

> Use FunctionInvocationError to get detailed error information about a
      failed Function invocation.

# FunctionInvocationError Interface

Use FunctionInvocationError to get detailed error information about a failed Function invocation.

## Namespace

[functions](atlas.en-us.apexref.meta/apexref/apex_namespace_functions.htm "The Functions namespace provides classes and methods used to invoke and manage Salesforce Functions.")

## Usage

FunctionInvocationError contains various error information such as the error message at the time of the error.

-   **[FunctionInvocationError Methods](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocationError.htm#apex_functions_FunctionInvocationError_methods)**

-   **[FunctionInvocationError Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocationError.htm#apex_interface_functions_FunctionInvocationError_Example)**


## FunctionInvocationError Methods

The following are methods for FunctionInvocationError.

-   **[getMessage()](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocationError.htm#apex_functions_FunctionInvocationError_getMessage)**
    Returns the error message from a Function invocation error.
-   **[getType()](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocationError.htm#apex_functions_FunctionInvocationError_getType)**
    Returns the error type for FunctionInvocationError.

### getMessage()

Returns the error message from a Function invocation error.

#### Signature

public String getMessage()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getType()

Returns the error type for FunctionInvocationError.

#### Signature

public functions.FunctionErrorType getType()

#### Return Value

Type: [functions.FunctionErrorType](atlas.en-us.apexref.meta/apexref/apex_enum_functions_FunctionErrorType.htm "Represents the error type of FunctionInvocationError.")

## FunctionInvocationError Example Implementation

This is an example implementation of the functions.FunctionInvocationError interface.

```

```

This example tests the implementation.

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
```

```apex
functions.FunctionInvocationError testError = new MyFunctionInvocationError();
System.debug('Error: ' + testError.getMessage() + ' Type: ' + testError.getType());
```

## Related Topics

- functions (atlas.en-us.apexref.meta/apexref/apex_namespace_functions.htm)
- FunctionInvocationError Methods (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocationError.htm)
- FunctionInvocationError Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocationError.htm)
- getMessage() (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocationError.htm)
- getType() (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocationError.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- functions.FunctionErrorType (atlas.en-us.apexref.meta/apexref/apex_enum_functions_FunctionErrorType.htm)
