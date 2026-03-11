---
title: "Continuation Class"
domain: apex-reference
topic: continuation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.346Z
keywords: [Continuation, Class, Returns, response, request, corresponds, specified, label., getResponse, requestLabel, Signature, Parameters, Return, Value, Usage]
---

# Continuation Class

> Returns the response for the request that corresponds to the specified
      label.

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