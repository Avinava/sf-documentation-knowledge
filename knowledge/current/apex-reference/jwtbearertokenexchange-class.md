---
title: "JWTBearerTokenExchange Class"
domain: apex-reference
topic: jwtbearertokenexchange-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.243Z
estimatedTokens: 2340
namespace: Auth
keywords: [JWTBearerTokenExchange, POST, signed, JWT, bearer, token, endpoint, access, OAuth, 2.0, flow, Usage, tokenEndpoint, jws, clone]
---

# JWTBearerTokenExchange Class

> Contains methods that POST the signed JWT bearer token to a token
      endpoint to request an access token, in the OAuth 2.0 JWT bearer token flow.

**Namespace:** `Auth`

# JWTBearerTokenExchange Class

Contains methods that POST the signed JWT bearer token to a token endpoint to request an access token, in the OAuth 2.0 JWT bearer token flow.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

Use the methods in this class to post a signed JWT bearer token to the OAuth token endpoint, in exchange for an access token.

To test HTTP callouts to the token endpoint, use the Auth.HttpCalloutMockUtil class.

## Example

In the following example application, the Apex controller:

1.  Creates the JSON Claims Set.
2.  Specifies the scope of the request with additional claims.
3.  Creates the signed JWT.
4.  Specifies the token endpoint and POSTs to it.
5.  Gets the access token from the HTTP response.

```

```

-   **[JWTBearerTokenExchange Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_constructors)**

-   **[JWTBearerTokenExchange Methods](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_methods)**


## JWTBearerTokenExchange Constructors

The following are constructors for JWTBearerTokenExchange.

-   **[JWTBearerTokenExchange(tokenEndpoint, jws)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_ctor)**
    Creates an instance of the JWTBearerTokenExchange class using the specified token endpoint and the signed JWT bearer token.
-   **[JWTBearerTokenExchange()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm#apex_Auth_JWTBearerTokenExchange_ctor_2)**
    Creates an instance of the Auth.JWTBearerTokenExchange class.

### JWTBearerTokenExchange(tokenEndpoint, jws)

Creates an instance of the JWTBearerTokenExchange class using the specified token endpoint and the signed JWT bearer token.

#### Signature

public JWTBearerTokenExchange(String tokenEndpoint, Auth.JWS jws)

#### Parameters

tokenEndpoint

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The token endpoint that the signed JWT bearer token is POSTed to.

jws

Type: [Auth.JWS](atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWS.htm#apex_class_Auth_JWS "Contains methods that apply a digital signature to a JSON Web Token (JWT), using a JSON Web Signature (JWS) data structure. This class creates the signed JWT bearer token, which can be used to request an OAuth access token in the OAuth 2.0 JWT bearer token flow.")

The signed JWT bearer token.

### JWTBearerTokenExchange()

Creates an instance of the Auth.JWTBearerTokenExchange class.

#### Signature

public JWTBearerTokenExchange()

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

## Code Examples

```apex
public class MyController{
 
    
     public MyController() {      
        Auth.JWT jwt = new Auth.JWT();
        jwt.setSub('user@salesforce.com'); 
        jwt.setAud('https://login.salesforce.com'); 
        jwt.setIss('3MVG99OxTyEMCQ3gNp2PjkqeZKxnmAiG1xV4oHh9AKL_rSK.BoSVPGZHQ​ukXnVjzRgSuQqGn75NL7yfkQcyy7');
        
        //Additional claims to set scope
        Map<String, Object> claims = new Map<String, Object>();
        claims.put('scope', 'scope name');
            
        jwt.setAdditionalClaims(claims);

        //Create the object that signs the JWT bearer token
        Auth.JWS jws = new Auth.JWS(jwt, 'CertFromCertKeyManagement');
        
        //Get the resulting JWS in case debugging is required
        String token = jws.getCompactSerialization();
        
        //Set the token endpoint that the JWT bearer token is posted to
        String tokenEndpoint = 'https://login.salesforce.com/services/oauth2/token';
        
        //POST the JWT bearer token
        Auth.JWTBearerTokenExchange bearer = new Auth.JWTBearerTokenExchange(tokenEndpoint, jws);
        
        //Get the access token
        String accessToken = bearer.getAccessToken();

    }
}
```

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- JWTBearerTokenExchange Constructors (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm)
- JWTBearerTokenExchange Methods (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm)
- JWTBearerTokenExchange(tokenEndpoint, jws) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm)
- JWTBearerTokenExchange() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Auth.JWS (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWS.htm)
- clone() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm)
- getAccessToken() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm)
- getGrantType() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_JWTBearerTokenExchange.htm)
