---
title: "HttpCalloutMock Methods"
domain: apex-reference
topic: httpcalloutmock-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.812Z
keywords: [HttpCalloutMock, Methods, Returns, HTTP, response, given, request., implementation, method, called, Apex, runtime, send, fake, callout, made, after, Test.setMock, called., respond]
---

# HttpCalloutMock Methods

> Returns an HTTP response for the given request. The implementation of this method is
  called by the Apex runtime to send a fake response when an HTTP callout is made after Test.setMock has been called.

## HttpCalloutMock Methods

The following are methods for HttpCalloutMock.

-   **[respond(request)](atlas.en-us.apexref.meta/apexref/apex_interface_httpcalloutmock.htm#apex_System_HttpCalloutMock_respond)**  
    Returns an HTTP response for the given request. The implementation of this method is called by the Apex runtime to send a fake response when an HTTP callout is made after Test.setMock has been called.

### respond(request)

Returns an HTTP response for the given request. The implementation of this method is called by the Apex runtime to send a fake response when an HTTP callout is made after Test.setMock has been called.

#### Signature

public HttpResponse respond(HttpRequest request)

#### Parameters

request

Type: [System.HttpRequest](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_classes_restful_http_httprequest "Use the HttpRequest class to programmatically create HTTP requests like GET, POST, PATCH, PUT, and DELETE.")

#### Return Value

Type: [System.HttpResponse](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse "Use the HttpResponse class to handle the HTTP response returned by the Http class.")