---
title: "RestContext Class"
domain: apex-reference
topic: restcontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.923Z
estimatedTokens: 420
namespace: System
keywords: [RestContext, Contains, RestRequest, RestResponse, objects., Usage, Sample, request, response]
---

# RestContext Class

> Contains the RestRequest and RestResponse
            objects.

**Namespace:** `System`

# RestContext Class

Contains the RestRequest and RestResponse objects.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the System.RestContext class to access the RestRequest and RestResponse objects in your Apex REST methods.

## Sample

The following example shows how to use RestContext to access the RestRequest and RestResponse objects in an Apex REST method.

```

```

## RestContext Properties

The following are properties for RestContext.

-   **[request](atlas.en-us.apexref.meta/apexref/apex_methods_system_restcontext.htm#apex_System_RestContext_request)**
    Returns the RestRequest for your Apex REST method.
-   **[response](atlas.en-us.apexref.meta/apexref/apex_methods_system_restcontext.htm#apex_System_RestContext_response)**
    Returns the RestResponse for your Apex REST method.

### request

Returns the RestRequest for your Apex REST method.

#### Signature

public RestRequest request {get; set;}

#### Property Value

Type: [System.RestRequest](atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm#apex_methods_system_restrequest "Use the System.RestRequest class to access and pass request data in a RESTful Apex method.")

### response

Returns the RestResponse for your Apex REST method.

#### Signature

public RestResponse response {get; set;}

#### Property Value

Type: [System.RestResponse](atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_methods_system_restresponse "Represents an object used to pass data from an Apex RESTful Web service method to an HTTP response.")

## Code Examples

```apex
@RestResource(urlMapping='/MyRestContextExample/*')
global with sharing class MyRestContextExample {

    @HttpGet
    global static Account doGet() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account result = [SELECT Id, Name, Phone, Website FROM Account WHERE Id = :accountId];
        return result;
    }
  
}
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- request (atlas.en-us.apexref.meta/apexref/apex_methods_system_restcontext.htm)
- response (atlas.en-us.apexref.meta/apexref/apex_methods_system_restcontext.htm)
- System.RestRequest (atlas.en-us.apexref.meta/apexref/apex_methods_system_restrequest.htm)
- System.RestResponse (atlas.en-us.apexref.meta/apexref/apex_methods_system_restresponse.htm)
