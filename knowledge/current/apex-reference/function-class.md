---
title: "Function Class"
domain: apex-reference
topic: function-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.501Z
keywords: [Function, Class, Invokes, synchronously., invoke, payload, Signature, Parameters, Return, Value, Usage]
---

# Function Class

> Invokes the Function synchronously.

### invoke(payload)

Invokes the Function synchronously.

#### Signature

public functions.FunctionInvocation invoke(String payload)

#### Parameters

payload

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The payload data that gets passed to the Function. Specify your payload data in a JSON-format string.

#### Return Value

Type: [functions.FunctionInvocation](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_interface_functions_FunctionInvocation "Use FunctionInvocation to get the status and results of a synchronous or asynchronous Function invocation.")

Returns a FunctionInvocation that contains information about the results of the invocation, such as the Function response, or error results.

#### Usage

The Function.invoke(payload) method can throw the following exceptions:

-   CalloutException — One of the following conditions causes this exception to be thrown:
    -   Salesforce Functions isn’t enabled on the current org. For more details on enabling Functions, see [Configure Orgs for Functions](https://developer.salesforce.com/docs/platform/functions/guide/config-org#enable-functions-on-dev-hub-orgs) in the Functions Developer Guide.
    -   The Function is being invoked in an Apex test. Functions can’t be invoked in tests.
    -   The provided payload isn’t valid JSON.
    -   There are pending DML operations.
    -   The Function is being synchronously invoked from an Apex trigger.
    -   The Function hasn’t completed deployment to a compute environment or invocation request returns a 404 HTTP error.
    -   The Function request returns a 5xx HTTP error.
    -   The Function invocation has exceeded the time limit for synchronous invocations. For details on the time limit and work-arounds, see [Limits](https://developer.salesforce.com/docs/platform/functions/guide/limits#apex-limits-and-functions) in the Functions Developer Guide.
-   NoDataFoundException — A reference for the Function couldn’t be found in the current org. Make sure the project and Function have been properly deployed.