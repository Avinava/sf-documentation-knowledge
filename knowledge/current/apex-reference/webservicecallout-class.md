---
title: "WebServiceCallout Class"
domain: apex-reference
topic: webservicecallout-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.407Z
estimatedTokens: 986
namespace: System
keywords: [WebServiceCallout, Enables, making, callouts, SOAP, operations, external, Web, service., used, Apex, stub, auto-generated, WSDL., invoke, request, response, infoArray]
---

# WebServiceCallout Class

> Enables making callouts to SOAP operations on an external Web service. This class is
        used in the Apex stub class that is auto-generated from a WSDL.

**Namespace:** `System`

# WebServiceCallout Class

Enables making callouts to SOAP operations on an external Web service. This class is used in the Apex stub class that is auto-generated from a WSDL.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

-   **[WebServiceCallout Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_WebServiceCallout.htm#apex_System_WebServiceCallout_methods)**


#### See Also

-   [*Apex Developer Guide*: SOAP Services: Defining a Class from a WSDL Document](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_wsdl2apex.htm "Apex Developer Guide: SOAP Services: Defining a Class from a WSDL Document - HTML (New Window)")


## WebServiceCallout Methods

The following is the static method for WebServiceCallout.

-   **[invoke(stub, request, response, infoArray)](atlas.en-us.apexref.meta/apexref/apex_class_System_WebServiceCallout.htm#apex_System_WebServiceCallout_toString)**
    Invokes an external SOAP web service operation based on an Apex class that is auto-generated from a WSDL.

### invoke(stub, request, response, infoArray)

Invokes an external SOAP web service operation based on an Apex class that is auto-generated from a WSDL.

#### Signature

public static void invoke(Object stub, Object request, Map<String,Object\> response, List<String\> infoArray)

#### Parameters

stub

Type: Object

An instance of the Apex class that is auto-generated from a WSDL (the stub class).

request

Type: Object

The request to the external service. The request is an instance of a type that is created as part of the auto-generated stub class.

response

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

A map of key-value pairs that represent the response that the external service sends after receiving the request. In each pair, the key is a response identifier. The value is the response object, which is an instance of a type that is created as part of the auto-generated stub class.

infoArray

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\[\]

An array of strings that contains information about the callout—web service endpoint, SOAP action, request, and response. The order of the elements in the array matters.

-   Element at index 0 (\[0\]): One of the following options for identifying the URL of the external web service.
    -   Endpoint URL. For example: 'http://YourServer/YourService'
    -   Named credential URL, which contains the scheme callout, the name of the named credential, and optionally, an appended path. For example: 'callout:MyNamedCredential/some/path'
-   Element at index 1 (\[1\]): The SOAP action. For example: 'urn:dotnet.callouttest.soap.sforce.com/EchoString'
-   Element at index 2 (\[2\]): The request namespace. For example: 'http://doc.sample.com/docSample'
-   Element at index 3 (\[3\]): The request name. For example: 'EchoString'
-   Element at index 4 (\[4\]): The response namespace. For example: 'http://doc.sample.com/docSample'
-   Element at index 5 (\[5\]): The response name. For example: 'EchoStringResponse'
-   Element at index 6 (\[6\]): The response type. For example: 'docSample.EchoStringResponse\_element'

#### Return Value

Type: Void

#### See Also

-   [*Apex Developer Guide*: Named Credentials as Callout Endpoints](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm "Apex Developer Guide: Named Credentials as Callout Endpoints - HTML (New Window)")

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- WebServiceCallout Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_WebServiceCallout.htm)
- invoke(stub, request, response, infoArray) (atlas.en-us.apexref.meta/apexref/apex_class_System_WebServiceCallout.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
