---
title: "HttpCalloutMockUtil Class"
domain: apex-reference
topic: httpcalloutmockutil-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.568Z
estimatedTokens: 550
namespace: Auth
keywords: [HttpCalloutMockUtil, Contains, send, fake, HTTP, callouts, classes, Auth, namespace., Usage, setHttpMock, mock]
---

# HttpCalloutMockUtil Class

> Contains a method to send fake HTTP callouts for classes in the Auth namespace.

**Namespace:** `Auth`

# HttpCalloutMockUtil Class

Contains a method to send fake HTTP callouts for classes in the Auth namespace.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

Use the setHttpMock method in this class to test HTTP callouts when implementing the Auth.JWTBearerTokenExchange and Auth.JWTUtil classes.

For the Auth.JWTBearerTokenExchange class, mock callouts to the OAuth token endpoint when using the JWTBearerTokenExchange method.

For the Auth.JWTUtil class, mock callouts to the identity provider’s JSON Web Key Set (JWKS) endpoint when using the validateJWTWithKeysEndpoint method.

For more information on mocking HTTP callouts, see [Testing HTTP Callouts by Implementing the HttpCalloutMock Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_restful_http_testing_httpcalloutmock.htm).

-   **[HttpCalloutMockUtil Methods](atlas.en-us.apexref.meta/apexref/apex_class_Auth_HttpCalloutMockUtil.htm#apex_Auth_HttpCalloutMockUtil_methods)**


## HttpCalloutMockUtil Methods

The following are methods for HttpCalloutMockUtil.

-   **[setHttpMock(mock)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_HttpCalloutMockUtil.htm#apex_Auth_HttpCalloutMockUtil_setHttpMock)**
    Mocks an HTTP callout using an implementation of the System.HttpCalloutMock interface.

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

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- HttpCalloutMockUtil Methods (atlas.en-us.apexref.meta/apexref/apex_class_Auth_HttpCalloutMockUtil.htm)
- setHttpMock(mock) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_HttpCalloutMockUtil.htm)
