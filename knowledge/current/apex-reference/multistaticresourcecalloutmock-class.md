---
title: "MultiStaticResourceCalloutMock Class"
domain: apex-reference
topic: multistaticresourcecalloutmock-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.917Z
estimatedTokens: 1135
namespace: System
keywords: [MultiStaticResourceCalloutMock, Utility, used, specify, fake, response, multiple, resources, testing, HTTP, callouts., Usage, setHeader, headerName, headerValue, setStaticResource, endpoint, resourceName, setStatus, httpStatus]
---

# MultiStaticResourceCalloutMock Class

> Utility class used to specify a fake response using multiple
resources for testing HTTP callouts.

**Namespace:** `System`

# MultiStaticResourceCalloutMock Class

Utility class used to specify a fake response using multiple resources for testing HTTP callouts.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the methods in this class to set the response properties for testing HTTP callouts. You can specify a resource for each endpoint.

-   **[MultiStaticResourceCalloutMock Constructors](atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm#apex_System_MultiStaticResourceCalloutMock_constructors)**

-   **[MultiStaticResourceCalloutMock Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm#apex_System_MultiStaticResourceCalloutMock_methods)**


## MultiStaticResourceCalloutMock Constructors

The following are constructors for MultiStaticResourceCalloutMock.

-   **[MultiStaticResourceCalloutMock()](atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm#apex_System_MultiStaticResourceCalloutMock_ctor)**
    Creates a new instance of the System.MultiStaticResourceCalloutMock class.

### MultiStaticResourceCalloutMock()

Creates a new instance of the System.MultiStaticResourceCalloutMock class.

#### Signature

public MultiStaticResourceCalloutMock()

## MultiStaticResourceCalloutMock Methods

The following are methods for MultiStaticResourceCalloutMock. All are instance methods.

-   **[setHeader(headerName, headerValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm#apex_System_MultiStaticResourceCalloutMock_setHeader)**
    Sets the specified header name and value for the fake response.
-   **[setStaticResource(endpoint, resourceName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm#apex_System_MultiStaticResourceCalloutMock_setStaticResource)**
    Sets the specified static resource corresponding to the endpoint. The static resource contains the response body.
-   **[setStatus(httpStatus)](atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm#apex_System_MultiStaticResourceCalloutMock_setStatus)**
    Sets the specified HTTP status for the response.
-   **[setStatusCode(httpStatusCode)](atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm#apex_System_MultiStaticResourceCalloutMock_setStatusCode)**
    Sets the specified HTTP status code for the response.

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

### setStaticResource(endpoint, resourceName)

Sets the specified static resource corresponding to the endpoint. The static resource contains the response body.

#### Signature

public Void setStaticResource(String endpoint, String resourceName)

#### Parameters

endpoint

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

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

Sets the specified HTTP status code for the response.

#### Signature

public Void setStatusCode(Integer httpStatusCode)

#### Parameters

httpStatusCode

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: Void

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- MultiStaticResourceCalloutMock Constructors (atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm)
- MultiStaticResourceCalloutMock Methods (atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm)
- MultiStaticResourceCalloutMock() (atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm)
- setHeader(headerName, headerValue) (atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm)
- setStaticResource(endpoint, resourceName) (atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm)
- setStatus(httpStatus) (atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm)
- setStatusCode(httpStatusCode) (atlas.en-us.apexref.meta/apexref/apex_methods_system_multistaticresourcecalloutmock.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
