---
title: "HttpCalloutMock Interface"
domain: apex-reference
topic: httpcalloutmock-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.162Z
estimatedTokens: 434
namespace: System
keywords: [HttpCalloutMock, sending, fake, responses, testing, HTTP, callouts, Usage, respond]
---

# HttpCalloutMock Interface

> Enables sending fake responses when testing
HTTP callouts.

**Namespace:** `System`

# HttpCalloutMock Interface

Enables sending fake responses when testing HTTP callouts.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

For an implementation example, see [Testing HTTP Callouts by Implementing the HttpCalloutMock Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_restful_http_testing_httpcalloutmock.htm).

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

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- respond(request) (atlas.en-us.apexref.meta/apexref/apex_interface_httpcalloutmock.htm)
- System.HttpRequest (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- System.HttpResponse (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
