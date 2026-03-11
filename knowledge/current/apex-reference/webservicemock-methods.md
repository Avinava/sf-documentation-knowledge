---
title: "WebServiceMock Methods"
domain: apex-reference
topic: webservicemock-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.851Z
keywords: [WebServiceMock, Methods, implementation, method, called, Apex, runtime, send, fake, response, Web, service, callout, made, after, Test.setMock, called., doInvoke, stub, soapRequest]
---

# WebServiceMock Methods

> The implementation of this method is called by the Apex runtime to send a fake
            response when a Web service callout is made after Test.setMock has been called.

## WebServiceMock Methods

The following are methods for WebServiceMock.

-   **[doInvoke(stub, soapRequest, responseMap, endpoint, soapAction, requestName, responseNamespace, responseName, responseType)](atlas.en-us.apexref.meta/apexref/apex_interface_webservicemock.htm#apex_System_WebServiceMock_doInvoke)**  
    The implementation of this method is called by the Apex runtime to send a fake response when a Web service callout is made after Test.setMock has been called.

### doInvoke(stub, soapRequest, responseMap, endpoint, soapAction, requestName, responseNamespace, responseName, responseType)

The implementation of this method is called by the Apex runtime to send a fake response when a Web service callout is made after Test.setMock has been called.

#### Signature

public Void doInvoke(Object stub, Object soapRequest, Map<String,Object\> responseMap, String endpoint, String soapAction, String requestName, String responseNamespace, String responseName, String responseType)

#### Parameters

stub

Type: Object

An instance of the auto-generated class.

soapRequest

Type: Object

The SOAP Web service request being invoked.

responseMap

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

A collection of key/value pairs representing the response to send for the request.

When implementing this interface, set the responseMap argument to a key/value pair representing the response desired.

endpoint

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The endpoint URL for the request.

soapAction

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The requested SOAP operation.

requestName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The requested SOAP operation name.

responseNamespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The response namespace.

responseName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the response element as defined in the WSDL.

responseType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The class for the response as defined in the auto-generated class.

#### Return Value

Type: Void

#### Usage