---
title: "Http Methods"
domain: apex-reference
topic: http-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.454Z
keywords: [Http, Methods, Sends, HttpRequest, returns, response., send, request, Signature, Parameters, Return, Value, toString]
---

# Http Methods

> Sends an HttpRequest and returns the response.

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