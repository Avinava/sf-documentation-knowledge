---
title: "ExternalServiceTest Class"
domain: apex-reference
topic: externalservicetest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.583Z
estimatedTokens: 511
namespace: System
keywords: [ExternalServiceTest, test, external, service's, asynchronous, callouts, sending, mock, asserts, expected, payload, triggers, mocked, service’s, callback]
---

# ExternalServiceTest Class

> Provides methods to
    test
    an external service's asynchronous callouts, enables sending a mock request, asserts the
    expected request payload, then triggers the mocked external service’s asynchronous callback
    response.

**Namespace:** `System`

# ExternalServiceTest Class

Provides methods to test an external service's asynchronous callouts, enables sending a mock request, asserts the expected request payload, then triggers the mocked external service’s asynchronous callback response.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

See [Create Unit Testing for Asynchronous Callouts](https://help.salesforce.com/s/articleView?id=platform.external_services_aysnc_ops_testing.htm&type=5&language=en_US) in the "Extend Salesforce with Clicks, Not Code" Help Guide.

-   **[ExternalServiceTest Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_ExternalServiceTest.htm#apex_System_ExternalServiceTest_methods)**
    An instance of the ExternalServiceTest method is used when the test class triggers a mocked external service’s callback response. You can access ExternalServiceTest through Test.getExternalService()

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

## Code Examples

```apex
System.ExternalServiceTest, sendCallback, [System.HttpRequest], System.HttpResponse
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- ExternalServiceTest Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_ExternalServiceTest.htm)
- sendCallback(request) (atlas.en-us.apexref.meta/apexref/apex_class_System_ExternalServiceTest.htm)
- System.HttpRequest (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)
- System.HttpResponse (atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm)
