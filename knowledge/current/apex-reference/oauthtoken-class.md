---
title: "OauthToken Class"
domain: apex-reference
topic: oauthtoken-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.277Z
estimatedTokens: 714
namespace: Auth
keywords: [OauthToken, revoke, OAuth, access, tokens, refresh, supports, opaque, JSON, Web, Token, JWT, -based, including, guest]
---

# OauthToken Class

> Contains a method to revoke OAuth access tokens and refresh tokens. This method supports
    opaque tokens and JSON Web Token (JWT)-based access tokens, including guest and named user
    JWT-based access tokens.

**Namespace:** `Auth`

# OauthToken Class

Contains a method to revoke OAuth access tokens and refresh tokens. This method supports opaque tokens and JSON Web Token (JWT)-based access tokens, including guest and named user JWT-based access tokens.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

When a client completes an authorization flow and is authorized to access Salesforce data, they’re issued an access token, which the client can use to make authenticated requests for protected Salesforce resources. The client can also use refresh tokens to get more access tokens. If you don’t want the client to access Salesforce data anymore, revoke its Salesforce tokens.

This class is distinct from the [Auth.AuthToken](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_AuthToken.htm) class, which contains a method to revoke tokens issued by a third-party provider instead of Salesforce tokens.

-   **[OauthToken Methods](atlas.en-us.apexref.meta/apexref/apex_class_Auth_OauthToken.htm#apex_Auth_OauthToken_methods)**


## OauthToken Methods

The following are methods for OauthToken.

-   **[revokeToken(type, authToken)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_OauthToken.htm#apex_Auth_OauthToken_revokeToken)**
    Revokes Salesforce-issued OAuth tokens.

### revokeToken(type, authToken)

Revokes Salesforce-issued OAuth tokens.

#### Signature

public static Boolean revokeToken(Auth.OauthTokenType type, String authToken)

#### Parameters

type

Type: Auth.[OauthTokenType](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_OauthToken.htm)

Specifies the type of token to be revoked. To revoke an opaque access token, use the ACCESS\_TOKEN value. To revoke a refresh token and any associated access tokens, use the REFRESH\_TOKEN value. To revoke a refresh token and associated access tokens, use the DELETE\_TOKEN value. To revoke a JSON Web Token (JWT)-based access token, use the ORG\_JWT value.

authToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The access token (opaque or JWT-based), refresh token, or delete token issued by Salesforce.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The method returns true if successful, and false if not. For invalid or expired tokens, the method returns a [NoDataFoundException](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_exception_methods.htm) exception.

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- OauthToken Methods (atlas.en-us.apexref.meta/apexref/apex_class_Auth_OauthToken.htm)
- revokeToken(type, authToken) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_OauthToken.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
