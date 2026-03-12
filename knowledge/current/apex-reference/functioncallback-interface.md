---
title: "FunctionCallback Interface"
domain: apex-reference
topic: functioncallback-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.098Z
estimatedTokens: 483
keywords: [FunctionCallback, Represents, callback, Salesforce, calls, asynchronous, queued, Function, invocation, completed., Usage, handleResponse, var1, Example, Implementation]
---

# FunctionCallback Interface

> Represents the callback Salesforce calls when an asynchronous, queued
      Function invocation has completed.

# FunctionCallback Interface

Represents the callback Salesforce calls when an asynchronous, queued Function invocation has completed.

## Namespace

[functions](atlas.en-us.apexref.meta/apexref/apex_namespace_functions.htm "The Functions namespace provides classes and methods used to invoke and manage Salesforce Functions.")

## Usage

When invoking Functions asynchronously via Function.invoke(payload, callback), you provide your own class that implements FunctionCallback.

-   **[FunctionCallback Methods](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm#apex_functions_FunctionCallback_methods)**

-   **[FunctionCallback Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm#apex_interface_functions_FunctionCallback_Example)**


## FunctionCallback Methods

The following are methods for FunctionCallback.

-   **[handleResponse(var1)](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm#apex_functions_FunctionCallback_handleResponse)**
    Called when an asynchronous Function invocation has completed.

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

## FunctionCallback Example Implementation

This is an example implementation of the functions.FunctionCallback interface.

```

```

The following example uses this implementation when invoking a Function asynchronously:

```

```

## Code Examples

```apex
public class MyCallback
  implements functions.FunctionCallback {
    public void handleResponse(functions.FunctionInvocation result) {
      // Handle result of function invocation
      String jsonResponse = result.getResponse();
      System.debug('Got response ' + jsonResponse);
      JSONParser parser = JSON.createParser(jsonResponse);
      // Process JSON using your own data class...
    }
}
```

```
myFunction.invoke('{ "accountName" : "Acct", "contactName" : "MyContact", "opportunityName" : "Oppty" }', new MyCallback());
```

## Related Topics

- functions (atlas.en-us.apexref.meta/apexref/apex_namespace_functions.htm)
- FunctionCallback Methods (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm)
- FunctionCallback Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm)
- handleResponse(var1) (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm)
- functions.FunctionInvocation (atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm)
