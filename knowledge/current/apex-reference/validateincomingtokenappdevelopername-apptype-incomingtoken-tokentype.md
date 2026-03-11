---
title: "validateIncomingToken(appDeveloperName, appType, incomingToken, tokenType)"
domain: apex-reference
topic: validateincomingtokenappdevelopername-apptype-incomingtoken-tokentype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.342Z
keywords: [validateIncomingToken, appDeveloperName, appType, incomingToken, tokenType, Validates, access, token, refresh, SAML, 2.0, assertion, JWT, passed, external, identity, provider, during, OAuth, exchange]
---

# validateIncomingToken(appDeveloperName, appType, incomingToken, tokenType)

> Validates an access token, refresh token, ID token, SAML 2.0 assertion, or JWT passed
    from an external identity provider during the OAuth 2.0 token exchange flow.

### validateIncomingToken(appDeveloperName, appType, incomingToken, tokenType)

Validates an access token, refresh token, ID token, SAML 2.0 assertion, or JWT passed from an external identity provider during the OAuth 2.0 token exchange flow.

#### Signature

public Auth.TokenValidationResult validateIncomingToken(String appDeveloperName, Auth.IntegratingAppType appType, String incomingToken, Auth.OAuth2TokenExchangeType tokenType)

#### Parameters

appDeveloperName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The developer name of the Salesforce connected app or external client app that’s being used to integrate your app with Salesforce.

appType

Type: [Auth.IntegratingAppType](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Auth_IntegratingAppType.htm)

Specifies whether your app is integrated with Salesforce as a connected app or as an external client app.

incomingToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The token from the external identity provider.

tokenType

Type: [Auth.OAuth2TokenExchangeType](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Auth_OAuth2TokenExchangeType.htm)

The type of token from the external identity provider. It can be an access token, a refresh token, an ID token, a SAML 2.0 assertion, or any token that’s formatted as a JSON Web Token (JWT).

#### Return Value

Type: [Auth.TokenValidationResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm)

Returns information about whether the token is valid, data extracted from the token, the token itself, and the token type. It can also return a custom error message if the validation failed.