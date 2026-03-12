---
title: "StaticResourceCalloutMock Class"
domain: apex-reference
topic: staticresourcecalloutmock-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.165Z
estimatedTokens: 1004
namespace: System
keywords: [StaticResourceCalloutMock, Utility, specify, fake, testing, HTTP, callouts, Usage, setHeader, headerName, headerValue, setStaticResource, resourceName, setStatus, httpStatus]
---

# StaticResourceCalloutMock Class

> Utility class used to specify a fake response for testing
HTTP callouts.

**Namespace:** `System`

# StaticResourceCalloutMock Class

Utility class used to specify a fake response for testing HTTP callouts.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the methods in this class to set the response properties for testing HTTP callouts.

-   **[StaticResourceCalloutMock Constructors](atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm#apex_System_StaticResourceCalloutMock_constructors)**

-   **[StaticResourceCalloutMock Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm#apex_System_StaticResourceCalloutMock_methods)**


## StaticResourceCalloutMock Constructors

The following are constructors for StaticResourceCalloutMock.

-   **[StaticResourceCalloutMock()](atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm#apex_System_StaticResourceCalloutMock_ctor)**
    Creates a new instance of the StaticResourceCalloutMock class.

### StaticResourceCalloutMock()

Creates a new instance of the StaticResourceCalloutMock class.

#### Signature

public StaticResourceCalloutMock()

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

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- StaticResourceCalloutMock Constructors (atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm)
- StaticResourceCalloutMock Methods (atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm)
- StaticResourceCalloutMock() (atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm)
- setHeader(headerName, headerValue) (atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm)
- setStaticResource(resourceName) (atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm)
- setStatus(httpStatus) (atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm)
- setStatusCode(httpStatusCode) (atlas.en-us.apexref.meta/apexref/apex_methods_system_staticresourcecalloutmock.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
