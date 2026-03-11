---
title: "StaticResourceCalloutMock Methods"
domain: apex-reference
topic: staticresourcecalloutmock-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.716Z
keywords: [StaticResourceCalloutMock, Methods, Sets, specified, header, name, value, fake, response., setHeader, headerName, headerValue, Signature, Parameters, Return, Value, setStaticResource, resourceName, setStatus, httpStatus]
---

# StaticResourceCalloutMock Methods

> Sets the specified header name and value for the fake response.

## StaticResourceCalloutMock Methods

The following are methods for StaticResourceCalloutMock. All are instance methods.

-   **[setHeader(headerName, headerValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm#apex_System_StaticResourceCalloutMock_setHeader)**  
    Sets the specified header name and value for the fake response.
-   **[setStaticResource(resourceName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm#apex_System_StaticResourceCalloutMock_setStaticResource)**  
    Sets the specified static resource, which contains the response body.
-   **[setStatus(httpStatus)](atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm#apex_System_StaticResourceCalloutMock_setStatus)**  
    Sets the specified HTTP status for the response.
-   **[setStatusCode(httpStatusCode)](atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm#apex_System_StaticResourceCalloutMock_setStatusCode)**  
    Sets the specified HTTP status for the response.

### setHeader(headerName, headerValue)

Sets the specified header name and value for the fake response.

#### Signature

public Void setHeader(String headerName, String headerValue)

#### Parameters

headerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

headerValue

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setStaticResource(resourceName)

Sets the specified static resource, which contains the response body.

#### Signature

public Void setStaticResource(String resourceName)

#### Parameters

resourceName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setStatus(httpStatus)

Sets the specified HTTP status for the response.

#### Signature

public Void setStatus(String httpStatus)

#### Parameters

httpStatus

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setStatusCode(httpStatusCode)

Sets the specified HTTP status for the response.

#### Signature

public Void setStatusCode(Integer httpStatusCode)

#### Parameters

httpStatusCode

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Void