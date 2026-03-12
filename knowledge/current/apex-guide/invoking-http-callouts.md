---
title: "Invoking HTTP Callouts"
domain: apex-guide
topic: invoking-http-callouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.359Z
estimatedTokens: 302
keywords: [Invoking, HTTP, Callouts, Apex, several, built-in, classes, work, services, requests, POST, PUT]
---

# Invoking HTTP Callouts

> Apex provides several built-in classes to work with HTTP services and create HTTP requests like
   GET, POST, PUT, and DELETE.

# Invoking HTTP Callouts

Apex provides several built-in classes to work with HTTP services and create HTTP requests like GET, POST, PUT, and DELETE.

You can use these HTTP classes to integrate to REST-based services. They also allow you to integrate to SOAP-based web services as an alternate option to generating Apex code from a WSDL. By using the HTTP classes, instead of starting with a WSDL, you take on more responsibility for handling the construction of the SOAP message for the request and response.

1.  [HTTP Classes](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http.htm)

2.  [Testing HTTP Callouts](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing.htm)
    To deploy or package Apex, 75% of your code must have test coverage. By default, test methods don’t support HTTP callouts, so tests that perform callouts fail. Enable HTTP callout testing by instructing Apex to generate mock responses in tests, using Test.setMock.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm "SOAP Services: Defining a Class from a WSDL Document")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs.htm "Using Certificates")

## Related Topics

- HTTP Classes (atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http.htm)
- Testing HTTP Callouts (atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs.htm)
