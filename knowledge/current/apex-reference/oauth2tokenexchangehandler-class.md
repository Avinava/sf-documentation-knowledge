---
title: "Oauth2TokenExchangeHandler Class"
domain: apex-reference
topic: oauth2tokenexchangehandler-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.271Z
estimatedTokens: 1552
namespace: Auth
keywords: [Oauth2TokenExchangeHandler, token, exchange, handler, validates, tokens, external, identity, provider, maps, token’s, subject, Salesforce, user, OAuth]
---

# Oauth2TokenExchangeHandler Class

> Use this class to create a token exchange handler that validates tokens from an external
    identity provider and maps the token’s subject to a Salesforce user during the OAuth 2.0 token
    exchange flow. The handler can also be used to create users by setting up a new User object and
    returning it to Salesforce for automatic insertion.

**Namespace:** `Auth`

# Oauth2TokenExchangeHandler Class

Use this class to create a token exchange handler that validates tokens from an external identity provider and maps the token’s subject to a Salesforce user during the OAuth 2.0 token exchange flow. The handler can also be used to create users by setting up a new User object and returning it to Salesforce for automatic insertion.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

See [Token Exchange Handler Validation and Subject Mapping](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/token_exchange_handler.htm).

-   **[Oauth2TokenExchangeHandler Methods](atlas.en-us.apexref.meta/apexref/apex_class_Auth_Oauth2TokenExchangeHandler.htm#apex_Auth_Oauth2TokenExchangeHandler_methods)**


## Oauth2TokenExchangeHandler Methods

The following are methods for Oauth2TokenExchangeHandler.

-   **[getUserForTokenSubject(networkId, result, canCreateUser, appDeveloperName, appType)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_Oauth2TokenExchangeHandler.htm#apex_Auth_Oauth2TokenExchangeHandler_getUserForTokenSubject)**
    Finds the subject defined in the external identity provider’s token so that it can be mapped to a Salesforce subject.
-   **[validateIncomingToken(appDeveloperName, appType, incomingToken, tokenType)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_Oauth2TokenExchangeHandler.htm#apex_Auth_Oauth2TokenExchangeHandler_validateIncomingToken)**
    Validates an access token, refresh token, ID token, SAML 2.0 assertion, or JWT passed from an external identity provider during the OAuth 2.0 token exchange flow.

### getUserForTokenSubject(networkId, result, canCreateUser, appDeveloperName, appType)

Finds the subject defined in the external identity provider’s token so that it can be mapped to a Salesforce subject.

#### Signature

public User getUserForTokenSubject(Id networkId, Auth.TokenValidationResult result, Boolean canCreateUser, String appDeveloperName, Auth.IntegratingAppType appType)

#### Parameters

networkId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The identifier for the Salesforce user, if one exists.

result

Type: [Auth.TokenValidationResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm)

The result of the token validation performed by the validateIncomingToken method in the [Auth.Oauth2TokenExchangeHandler](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_Oauth2TokenExchangeHandler.htm) class.

canCreateUser

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether the handler can set up a User object if no user exists. Salesforce automatically inserts the user into this object.

appDeveloperName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The developer name of the Salesforce connected app or external client app that’s being used to integrate your app with Salesforce.

appType

Type: [Auth.IntegratingAppType](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Auth_IntegratingAppType.htm)

Specifies whether your app is integrated with Salesforce as a connected app or as an external client app.

#### Return Value

Type: [User](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm)

Returns a User object with the user information obtained from the token, from Salesforce, and from callouts to the identity provider, if applicable. The User object can be an existing user record or a new user that hasn’t been inserted in the database. If it’s a new user, Salesforce automatically inserts the user on behalf of the token exchange handler.

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

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- Oauth2TokenExchangeHandler Methods (atlas.en-us.apexref.meta/apexref/apex_class_Auth_Oauth2TokenExchangeHandler.htm)
- getUserForTokenSubject(networkId, result, canCreateUser, appDeveloperName, appType) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_Oauth2TokenExchangeHandler.htm)
- validateIncomingToken(appDeveloperName, appType, incomingToken, tokenType) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_Oauth2TokenExchangeHandler.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
