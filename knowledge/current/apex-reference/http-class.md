---
title: "Http Class"
domain: apex-reference
topic: http-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:24.160Z
estimatedTokens: 412
namespace: System
keywords: [Http, initiate, send, toString]
---

# Http Class

> Use the Http class
to initiate an HTTP request and response.

**Namespace:** `System`

# Http Class

Use the Http class to initiate an HTTP request and response.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Http Methods

The following are methods for Http. All are instance methods.

-   **[send(request)](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_http.htm#apex_System_Http_send)**
    Sends an HttpRequest and returns the response.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_http.htm#apex_System_Http_toString)**
    Returns a string that displays and identifies the object's properties.

### send(request)

Sends an HttpRequest and returns the response.

#### Signature

public HttpResponse send(HttpRequest request)

#### Parameters

request

Type: [System.HttpRequest](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_classes_restful_http_httprequest "Use the HttpRequest class to programmatically create HTTP requests like GET, POST, PATCH, PUT, and DELETE.")

#### Return Value

Type: [System.HttpResponse](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse "Use the HttpResponse class to handle the HTTP response returned by the Http class.")

### toString()

Returns a string that displays and identifies the object's properties.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- send(request) (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_http.htm)
- toString() (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_http.htm)
- System.HttpRequest (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- System.HttpResponse (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
