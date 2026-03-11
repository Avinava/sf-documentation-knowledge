---
title: "Request Methods"
domain: apex-reference
topic: request-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.513Z
keywords: [Request, Methods, Returns, current, object, contains, request, Quiddity, value., getCurrent, Signature, Return, Value, getQuiddity, getRequestId]
---

# Request Methods

> Returns the current Request object that contains the request ID and
      Quiddity value.

## Request Methods

The following are methods for Request.

-   **[getCurrent()](atlas.en-us.apexref.meta/apexref/apex_class_System_Request.htm#apex_System_Request_getCurrent)**  
    Returns the current Request object that contains the request ID and Quiddity value.
-   **[getQuiddity()](atlas.en-us.apexref.meta/apexref/apex_class_System_Request.htm#apex_System_Request_getQuiddity)**  
    Returns the Quiddity value of the current Request object.
-   **[getRequestId()](atlas.en-us.apexref.meta/apexref/apex_class_System_Request.htm#apex_System_Request_getRequestId)**  
    Returns the request ID of the current Request object.

### getCurrent()

Returns the current Request object that contains the request ID and Quiddity value.

#### Signature

public static System.Request getCurrent()

#### Return Value

Type: [System.Request](#apex_class_System_Request "Contains methods to obtain the request ID and Quiddity value of the current Salesforce request.")

### getQuiddity()

Returns the Quiddity value of the current Request object.

#### Signature

public System.Quiddity getQuiddity()

#### Return Value

Type: [System.Quiddity](atlas.en-us.apexref.meta/apexref/apex_enum_System_Quiddity.htm "Specifies a Quiddity value used by the methods in the System.Request class")

Uses the values from the Quiddity enum. This value identifies the type of execution event associated with the current request.

### getRequestId()

Returns the request ID of the current Request object.

#### Signature

public String getRequestId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")