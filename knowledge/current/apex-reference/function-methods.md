---
title: "Function Methods"
domain: apex-reference
topic: function-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.501Z
keywords: [Function, Methods, Returns, instance, named, Project., must, properly, deployed, appropriate, permissions, work, org, running, Apex, code., get, functionName, Signature, Parameters]
---

# Function Methods

> Returns the Function instance for the named Function and Project. The
      Function must be properly deployed and have appropriate permissions to work with the org
      running your Apex code.

## Function Methods

The following are methods for Function.

-   **[get(functionName)](atlas.en-us.apexref.meta/apexref/apex_class_functions_Function.htm#apex_functions_Function_get)**  
    Returns the Function instance for the named Function and Project. The Function must be properly deployed and have appropriate permissions to work with the org running your Apex code.
-   **[get(namespace, functionName)](atlas.en-us.apexref.meta/apexref/apex_class_functions_Function.htm#apex_functions_Function_get_2)**  
    Returns the Function instance for the named Function, Project, and Namespace. The Function must be properly deployed and have appropriate permissions to work with the org running your Apex code.
-   **[invoke(payload, callback)](atlas.en-us.apexref.meta/apexref/apex_class_functions_Function.htm#apex_functions_Function_invoke)**  
    Invokes the Function asynchronously.
-   **[invoke(payload)](atlas.en-us.apexref.meta/apexref/apex_class_functions_Function.htm#apex_functions_Function_invoke_2)**  
    Invokes the Function synchronously.

### get(functionName)

Returns the Function instance for the named Function and Project. The Function must be properly deployed and have appropriate permissions to work with the org running your Apex code.

#### Signature

public static functions.Function get(String functionName)

#### Parameters

functionName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the Salesforce Function and the Functions Project that the Function is part of. The format of the parameter string is “project name.function name”. For example, to retrieve the generatepdf Function in the Onboarding Function Project, use Onboarding.generatepdf. The Function and Project must be deployed to a compute environment connected to the org.

#### Return Value

Type: [functions.Function](#apex_class_functions_Function "Use the Function class to access deployed Salesforce Functions, and invoke them synchronously or asynchronously.")

Returns a Function instance that you can invoke.

#### Usage

The Function.get() method can throw the following exceptions:

-   InvalidParameterValueException — The functionName parameter doesn’t have the correct project name.function name format.
-   NoDataFoundException — The project or Function name provided in the functionName parameter couldn’t be found. Make sure the project and Function name are spelled correctly and that the project and Function have been properly deployed.

### get(namespace, functionName)

Returns the Function instance for the named Function, Project, and Namespace. The Function must be properly deployed and have appropriate permissions to work with the org running your Apex code.

#### Signature

public static functions.Function get(String namespace, String functionName)

#### Parameters

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the Namespace that both the Salesforce Function and the Functions Project are part of. The org the Function is in must be global to access across namespaces. Default value is the same org where the method is being called.

functionName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the Salesforce Function and the Functions Project that the Function is part of. The format of the parameter string is “project name.function name”. For example, to retrieve the generatepdf Function in the Onboarding Function Project, use Onboarding.generatepdf. The Function and Project must be deployed to a compute environment connected to the org.

#### Return Value

Type: [functions.Function](#apex_class_functions_Function "Use the Function class to access deployed Salesforce Functions, and invoke them synchronously or asynchronously.")

Returns a Function instance that you can invoke.

#### Usage

The Function.get() method can throw the following exceptions:

-   InvalidParameterValueException — The functionName parameter doesn’t have the correct project name.function name format.
-   NoDataFoundException — The project or Function name provided in the functionName parameter couldn’t be found. Make sure the project and Function name are spelled correctly and that the project and Function have been properly deployed.
-   RuntimeException — The function is public yet references a function across namespaces. Make sure to retrieve references across namespaces only in a global org.

### invoke(payload, callback)

Invokes the Function asynchronously.

#### Signature

public functions.FunctionInvocation invoke(String payload, functions.FunctionCallback callback)

#### Parameters

payload

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The payload data that gets passed to the Function. Specify your payload data in a JSON-format string.

callback

Type: [functions.FunctionCallback](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionCallback.htm#apex_interface_functions_FunctionCallback "Represents the callback Salesforce calls when an asynchronous, queued Function invocation has completed.")

A FunctionCallback implementation that gets called when your Function is invoked asynchronously.

#### Return Value

Type: [functions.FunctionInvocation](atlas.en-us.apexref.meta/apexref/apex_interface_functions_FunctionInvocation.htm#apex_interface_functions_FunctionInvocation "Use FunctionInvocation to get the status and results of a synchronous or asynchronous Function invocation.")

Returns a FunctionInvocation that contains information about the results of the invocation, such as the Function response, or error results.

#### Usage

The Function.invoke(payload, callback) method can throw the following exceptions:

-   CalloutException — One of the following conditions causes this exception to be thrown:
    -   Salesforce Functions isn’t enabled on the current org. For more details on enabling Functions, see [Configure Orgs for Functions](https://developer.salesforce.com/docs/platform/functions/guide/config-org#enable-functions-on-dev-hub-orgs) in the Functions Developer Guide.
    -   The Function is being invoked in an Apex test. Functions can’t be invoked in tests.
    -   The “Functions” permission set is missing or has incorrect permissions for FunctionInvocationRequest. For more details on the correct permissions for FunctionInvocationRequest see [Function Permissions](https://developer.salesforce.com/docs/platform/functions/guide/permissions) in the Functions Developer Guide.
    -   The provided payload isn’t valid JSON.
    -   The Function hasn’t completed deployment to a compute environment or invocation request returns a 404 HTTP error.
-   InvalidParameterValueException — The callback parameter is null or references a class that doesn’t implement functions.FunctionCallback.
-   NoDataFoundException — A reference for the Function couldn’t be found in the current org. Make sure the project and Function have been properly deployed.

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