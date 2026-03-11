---
title: "ExternalServiceTest Methods"
domain: apex-reference
topic: externalservicetest-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.369Z
keywords: [ExternalServiceTest, Methods, instance, method, used, test, class, triggers, mocked, external, service’s, callback, response., access, through, Test.getExternalService, sendCallback, request, Signature, Parameters]
---

# ExternalServiceTest Methods

> An instance of the ExternalServiceTest method is used when the test class triggers a
    mocked external service’s callback response. You can access ExternalServiceTest through Test.getExternalService()

## ExternalServiceTest Methods

An instance of the ExternalServiceTest method is used when the test class triggers a mocked external service’s callback response. You can access ExternalServiceTest through Test.getExternalService()

The following are methods for ExternalServiceTest.

-   **[sendCallback(request)](atlas.en-us.apexref.meta/apexref/apex_class_System_ExternalServiceTest.htm#apex_System_ExternalServiceTest_sendCallback)**  
    Sends the HTTP request back as an external service asynchronous response.

### sendCallback(request)

Sends the HTTP request back as an external service asynchronous response.

#### Signature

public System.HttpResponse sendCallback(System.HttpRequest request)

```

```

#### Parameters

request

Type: [System.HttpRequest](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm#apex_System_HttpRequest_methods)

#### Return Value

Type: [System.HttpResponse](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_System_HttpResponse_methods)