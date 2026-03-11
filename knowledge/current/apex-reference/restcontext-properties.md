---
title: "RestContext Properties"
domain: apex-reference
topic: restcontext-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.540Z
keywords: [RestContext, Properties, Returns, RestRequest, Apex, REST, method., request, Signature, Property, Value, response]
---

# RestContext Properties

> Returns the RestRequest for your Apex REST
  method.

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