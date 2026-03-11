---
title: "setHttpMock(mock)"
domain: apex-reference
topic: sethttpmockmock
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.283Z
keywords: [setHttpMock, mock, Mocks, HTTP, callout, implementation, System.HttpCalloutMock, interface., Signature, Parameters, Return, Value]
---

# setHttpMock(mock)

> Mocks an HTTP callout using an implementation of the System.HttpCalloutMock interface.

### setHttpMock(mock)

Mocks an HTTP callout using an implementation of the System.HttpCalloutMock interface.

#### Signature

public static void setHttpMock(System.HttpCalloutMock mock)

#### Parameters

mock

Type: [System.HttpCalloutMock](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_httpcalloutmock.htm)

A class that implements the [System.HttpCalloutMock](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_httpcalloutmock.htm) interface to return a fake HTTP response for a given request to the OAuth token endpoint or a JWKS endpoint on an external identity provider, depending on your use case.

#### Return Value

Type: void