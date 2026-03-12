---
title: "Request Class"
domain: apex-reference
topic: request-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.752Z
estimatedTokens: 714
namespace: System
keywords: [obtain, Quiddity, current, Salesforce, Usage, getCurrent, getQuiddity, getRequestId]
---

# Request Class

> Contains methods to obtain the request ID and Quiddity value of the
      current Salesforce request.

**Namespace:** `System`

# Request Class

Contains methods to obtain the request ID and Quiddity value of the current Salesforce request.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the Request class to detect the current Apex context at runtime. The methods in the Request class obtain a unique request ID and the Quiddity value that represent the current Apex execution type. These values can also be used to correlate with debug and event logs.

-   The request ID represents an individual transaction, but may not be universally unique. The request ID is present in the debug logs that are triggered by the request.
-   The request ID and Quiddity values are the same as in the event log files of the Apex Execution event type used in Event Monitoring.

## Example

This example code shows how to obtain current Apex code context by retrieving the request ID and Quiddity value of the current request.

```

```

-   **[Request Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_Request.htm#apex_System_Request_methods)**


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

## Code Examples

```apex
//Get info about the current request
Request reqInfo = Request.getCurrent();

//Get the identifier for this request, which is universally unique
//Same as REQUEST_ID in event monitoring
String currentRequestId = reqInfo.getRequestId();

//Enum representing how Apex is running. e.g. BULK_API vs LIGHTNING
Quiddity currentType = reqInfo.getQuiddity();
//Use this with a switch statement,
//instead of checking System.isFuture() || System.isQueueable() || ...
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Request Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_Request.htm)
- getCurrent() (atlas.en-us.apexref.meta/apexref/apex_class_System_Request.htm)
- getQuiddity() (atlas.en-us.apexref.meta/apexref/apex_class_System_Request.htm)
- getRequestId() (atlas.en-us.apexref.meta/apexref/apex_class_System_Request.htm)
- System.Quiddity (atlas.en-us.apexref.meta/apexref/apex_enum_System_Quiddity.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
