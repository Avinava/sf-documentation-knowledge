---
title: "Continuation Methods"
domain: apex-reference
topic: continuation-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.346Z
keywords: [Continuation, Methods, Adds, HTTP, request, callout, associated, continuation., addHttpRequest, Signature, Parameters, Return, Value, Usage, Note, getRequests, getResponse, requestLabel]
---

# Continuation Methods

> Adds the HTTP request for the callout that is associated with this
      continuation.

## Continuation Methods

The following are methods for Continuation.

-   **[addHttpRequest(request)](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_addHttpRequest)**  
    Adds the HTTP request for the callout that is associated with this continuation.
-   **[getRequests()](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_getRequests)**  
    Returns all labels and requests that are associated with this continuation as key-value pairs.
-   **[getResponse(requestLabel)](atlas.en-us.apexref.meta/apexref/apex_class_System_Continuation.htm#apex_System_Continuation_getResponse)**  
    Returns the response for the request that corresponds to the specified label.

### addHttpRequest(request)

Adds the HTTP request for the callout that is associated with this continuation.

#### Signature

public String addHttpRequest(System.HttpRequest request)

#### Parameters

request

Type: [HttpRequest](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_classes_restful_http_httprequest "Use the HttpRequest class to programmatically create HTTP requests like GET, POST, PATCH, PUT, and DELETE.")

The HTTP request to be sent to the external service by this continuation.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A unique label that identifies the HTTP request that is associated with this continuation. This label is used in the map that [getRequests()](#apex_System_Continuation_getRequests "Returns all labels and requests that are associated with this continuation as key-value pairs.") returns to identify individual requests in a continuation.

#### Usage

You can add up tothree requests to a continuation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The timeout that is set in each passed-in request is ignored. Only the global timeout maximum of 120 seconds applies for a continuation.

### getRequests()

Returns all labels and requests that are associated with this continuation as key-value pairs.

#### Signature

public Map<String,System.HttpRequest> getRequests()

#### Return Value

Type: Map<String,HttpRequest>

A map of all requests that are associated with this continuation. The map key is the request label, and the map value is the corresponding HTTP request.

### getResponse(requestLabel)

Returns the response for the request that corresponds to the specified label.

#### Signature

public static HttpResponse getResponse(String requestLabel)

#### Parameters

requestLabel

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The request label to get the response for.

#### Return Value

Type: [HttpResponse](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse "Use the HttpResponse class to handle the HTTP response returned by the Http class.")

#### Usage

The status code is returned in the HttpResponse object and can be obtained by calling getStatusCode() on the response. A status code of 200 indicates that the request was successful. Other status code values indicate the type of problem that was encountered.

**Sample of Error Status Codes**

When a problem occurs with the response, some possible status code values are:

-   2000: The timeout was reached, and the server didn’t get a chance to respond.
-   2001: There was a connection failure.
-   2002: Exceptions occurred.
-   2003: The response hasn’t arrived (which also means that the Apex asynchronous callout framework hasn’t resumed).
-   2004: The response size is too large (greater than 1 MB).