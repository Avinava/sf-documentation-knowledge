---
title: "TokenValidationResult(isValid, data, userData, token, tokenType, customErrorMsg)"
domain: apex-reference
topic: tokenvalidationresultisvalid-data-userdata-token-tokentype-customerrormsg
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.384Z
keywords: [TokenValidationResult, isValid, data, userData, token, tokenType, customErrorMsg, Creates, instance, Auth.TokenValidationResult, class, describe, result, validation, performed, during, OAuth, 2.0, exchange, flow.]
---

# TokenValidationResult(isValid, data, userData, token, tokenType, customErrorMsg)

> Creates an instance of the Auth.TokenValidationResult
    class to describe the result of token validation performed during the OAuth 2.0 token exchange
    flow.

### TokenValidationResult(isValid, data, userData, token, tokenType, customErrorMsg)

Creates an instance of the Auth.TokenValidationResult class to describe the result of token validation performed during the OAuth 2.0 token exchange flow.

#### Signature

public TokenValidationResult(Boolean isValid, Object data, Auth.UserData userData, String token, Auth.OAuth2TokenExchangeType tokenType, String customErrorMsg)

#### Parameters

isValid

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If true, the token is valid.

data

Type: Object

Stores custom data that isn’t stored in userData.

userData

Type: [Auth.UserData](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_UserData.htm)

Stores information about a Salesforce user.

token

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The token from the external identity provider.

tokenType

Type: Auth.[OAuth2TokenExchangeType](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Auth_OAuth2TokenExchangeType.htm)

The type of token from the external identity provider.

customErrorMsg

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A custom error message that’s returned if the token validation fails.