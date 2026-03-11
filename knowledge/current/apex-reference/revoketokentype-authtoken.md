---
title: "revokeToken(type, authToken)"
domain: apex-reference
topic: revoketokentype-authtoken
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.345Z
keywords: [revokeToken, type, authToken, Revokes, Salesforce-issued, OAuth, tokens., Signature, Parameters, Return, Value]
---

# revokeToken(type, authToken)

> Revokes Salesforce-issued OAuth tokens.

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