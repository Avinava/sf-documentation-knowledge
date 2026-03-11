---
title: "JWTBearerTokenExchange Methods"
domain: apex-reference
topic: jwtbearertokenexchange-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.314Z
keywords: [JWTBearerTokenExchange, Methods, Makes, duplicate, copy, object., clone, Signature, Return, Value, getAccessToken, Usage, getGrantType, getHttpResponse, getJWS, getTokenEndpoint, setGrantType, grantType, Parameters, setJWS]
---

# JWTBearerTokenExchange Methods

> Makes a duplicate copy of the JWTBearerTokenExchange
    object.

## JWTBearerTokenExchange Methods

The following are methods for JWTBearerTokenExchange. All are instance methods.

-   **[clone()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_clone)**  
    Makes a duplicate copy of the JWTBearerTokenExchange object.
-   **[getAccessToken()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_getAccessToken)**  
    Returns the access\_token in the token response to the JWT bearer token request.
-   **[getGrantType()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_getGrantType)**  
    Returns the grant type specified in the JWT bearer token request. The grant type value defaults to urn:ietf:params:oauth:grant-type:jwt-bearer.
-   **[getHttpResponse()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_getHttpResponse)**  
    Returns the full System.HttpResponse token response to the JWT bearer token request.
-   **[getJWS()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_getJWS)**  
    Returns the JWS specified in the JWT bearer token request.
-   **[getTokenEndpoint()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_getTokenEndpoint)**  
    Returns the token endpoint that the JWT bearer token request is POSTed to.
-   **[setGrantType(grantType)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_setGrantType)**  
    Sets the grant type in the JWT bearer token request. Returned by the getGrantType() method.
-   **[setJWS(jws)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_setJWS)**  
    Sets the JWS in the JWT bearer token request. Returned by the getJWS() method.
-   **[setTokenEndpoint(tokenEndpoint)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_setTokenEndpoint)**  
    Sets the token endpoint that the JWT bearer token request is POSTed to. Returned by the getTokenEndpoint() method.

### clone()

Makes a duplicate copy of the JWTBearerTokenExchange object.

#### Signature

public Object clone()

#### Return Value

Type: [JWTBearerTokenExchange](#apex_class_Auth_JWTBearerTokenExchange "Contains methods that POST the signed JWT bearer token to a token endpoint to request an access token, in the OAuth 2.0 JWT bearer token flow.")

### getAccessToken()

Returns the access\_token in the token response to the JWT bearer token request.

#### Signature

public String getAccessToken()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

This method extracts the access\_token from the token response. If the token response issues the access token in a different parameter, the request fails.

If you want the full HTTP token response returned, use getHttpResponse instead.

### getGrantType()

Returns the grant type specified in the JWT bearer token request. The grant type value defaults to urn:ietf:params:oauth:grant-type:jwt-bearer.

#### Signature

public String getGrantType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getHttpResponse()

Returns the full System.HttpResponse token response to the JWT bearer token request.

#### Signature

public System.HttpResponse getHttpResponse()

#### Return Value

Type: [System.HttpResponse](atlas.en-us.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse "Use the HttpResponse class to handle the HTTP response returned by the Http class.")

#### Usage

You can get the access token from the full System.HttpResponse. If you want only the access\_token from the token response, you can use getAccessToken instead.

### getJWS()

Returns the JWS specified in the JWT bearer token request.

#### Signature

public Auth.JWS getJWS()

#### Return Value

Type: [Auth.JWS](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWS.htm#apex_class_Auth_JWS "Contains methods that apply a digital signature to a JSON Web Token (JWT), using a JSON Web Signature (JWS) data structure. This class creates the signed JWT bearer token, which can be used to request an OAuth access token in the OAuth 2.0 JWT bearer token flow.")

### getTokenEndpoint()

Returns the token endpoint that the JWT bearer token request is POSTed to.

#### Signature

public String getTokenEndpoint()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setGrantType(grantType)

Sets the grant type in the JWT bearer token request. Returned by the getGrantType() method.

#### Signature

public void setGrantType(String grantType)

#### Parameters

grantType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setJWS(jws)

Sets the JWS in the JWT bearer token request. Returned by the getJWS() method.

#### Signature

public void setJWS(Auth.JWS jws)

#### Parameters

jws

Type: [Auth.JWS](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWS.htm#apex_class_Auth_JWS "Contains methods that apply a digital signature to a JSON Web Token (JWT), using a JSON Web Signature (JWS) data structure. This class creates the signed JWT bearer token, which can be used to request an OAuth access token in the OAuth 2.0 JWT bearer token flow.")

#### Return Value

Type: void

### setTokenEndpoint(tokenEndpoint)

Sets the token endpoint that the JWT bearer token request is POSTed to. Returned by the getTokenEndpoint() method.

#### Signature

public void setTokenEndpoint(String tokenEndpoint)

#### Parameters

tokenEndpoint

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void