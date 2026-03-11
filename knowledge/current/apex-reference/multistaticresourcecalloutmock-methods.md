---
title: "MultiStaticResourceCalloutMock Methods"
domain: apex-reference
topic: multistaticresourcecalloutmock-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.536Z
keywords: [MultiStaticResourceCalloutMock, Methods, Sets, specified, header, name, value, fake, response., setHeader, headerName, headerValue, Signature, Parameters, Return, Value, setStaticResource, endpoint, resourceName, setStatus]
---

# MultiStaticResourceCalloutMock Methods

> Sets the specified header name and
value for the fake response.

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