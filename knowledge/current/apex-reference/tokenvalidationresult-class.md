---
title: "TokenValidationResult Class"
domain: apex-reference
topic: tokenvalidationresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.743Z
estimatedTokens: 3056
namespace: Auth
keywords: [TokenValidationResult, Contains, describe, result, token, validation, performed, exchange, handler, validateIncomingToken, Auth.Oauth2TokenExchangeHandler, during, OAuth, 2.0, flow., Usage, Example, isValid, data, userData]
---

# TokenValidationResult Class

> Contains methods that describe the result of the token validation performed by a token
        exchange handler using the validateIncomingToken method
        in the Auth.Oauth2TokenExchangeHandler class during the
        OAuth 2.0 token exchange flow.

**Namespace:** `Auth`

# TokenValidationResult Class

Contains methods that describe the result of the token validation performed by a token exchange handler using the validateIncomingToken method in the Auth.Oauth2TokenExchangeHandler class during the OAuth 2.0 token exchange flow.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

For a full example implementation that shows how to get information from the TokenValidationResult class, see [OAuth 2.0 Token Exchange Handler Examples](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/token_exchange_handler.htm).

## Example

Here’s is an example of the Auth.TokenValidationResult class.

global class TokenValidationResult { global TokenValidationResult(Boolean valid) { this.isValid = valid; } global TokenValidationResult(Boolean isValid, Object data, Auth.UserData userData, String token, Auth.OAuth2TokenExchangeType tokenType, String customErrorMsg) { this.isValid = isValid; this.data = data; this.userData = userData; this.token = token; this.tokenType = tokenType; this.customErrorMsg = customErrorMsg; } global Boolean isValid; global Object data; global Auth.UserData userData; global String token; global Auth.OAuth2TokenExchangeType tokenType; //Enum global String customErrorMsg; //Custom error message that’s returned to the client if token validation fails global Boolean isValid(){ return isValid; } global Object getData(){ return data; } global Auth.UserData getUserData(){ return userData; } global String getToken(){ return token; } global OAuth2TokenExchangeType getTokenType(){ return tokenType; } global String getCustomErrorMessage(){ return customErrorMsg; } }

-   **[TokenValidationResult Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_constructors)**

-   **[TokenValidationResult Properties](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_properties)**

-   **[TokenValidationResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_methods)**


## TokenValidationResult Constructors

The following are constructors for TokenValidationResult.

-   **[TokenValidationResult(isValid, data, userData, token, tokenType, customErrorMsg)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_ctor)**
    Creates an instance of the Auth.TokenValidationResult class to describe the result of token validation performed during the OAuth 2.0 token exchange flow.
-   **[TokenValidationResult(valid)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_ctor_2)**
    Creates an instance of the Auth.TokenValidationResult class to describe a valid token validation result during the OAuth 2.0 token exchange flow.

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

### TokenValidationResult(valid)

Creates an instance of the Auth.TokenValidationResult class to describe a valid token validation result during the OAuth 2.0 token exchange flow.

#### Signature

public TokenValidationResult(Boolean valid)

#### Parameters

valid

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates a valid token validation result.

## TokenValidationResult Properties

The following are properties for TokenValidationResult.

-   **[customErrorMsg](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_customErrorMsg)**
    A custom error message that’s returned if token validation fails.
-   **[data](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_data)**
    Contains information about the user that isn’t stored in the Auth.UserData class, such as information obtained via callouts to the external identity provider.
-   **[isValid](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_isValid)**
    Indicates whether the token is valid or not, based on the custom validation logic in your token exchange handler.
-   **[token](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_token)**
    The token from the external identity provider.
-   **[tokenType](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_tokenType)**
    The type of token from the external identity provider. It can be an access token, refresh token, ID token, SAML 2.0 assertion, or a JSON Web Token (JWT).
-   **[userData](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_userData)**
    Information about the user that’s obtained from the identity provider’s token.

### customErrorMsg

A custom error message that’s returned if token validation fails.

#### Signature

public String customErrorMsg {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### data

Contains information about the user that isn’t stored in the Auth.UserData class, such as information obtained via callouts to the external identity provider.

#### Signature

public Object data {get; set;}

#### Property Value

Type: Object

### isValid

Indicates whether the token is valid or not, based on the custom validation logic in your token exchange handler.

#### Signature

public Boolean isValid {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### token

The token from the external identity provider.

#### Signature

public String token {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### tokenType

The type of token from the external identity provider. It can be an access token, refresh token, ID token, SAML 2.0 assertion, or a JSON Web Token (JWT).

#### Signature

public Auth.OAuth2TokenExchangeType tokenType {get; set;}

#### Property Value

Type: [Auth.OAuth2TokenExchangeType](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Auth_OAuth2TokenExchangeType.htm)

### userData

Information about the user that’s obtained from the identity provider’s token.

#### Signature

public Auth.UserData userData {get; set;}

#### Property Value

Type: [Auth.UserData](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_UserData.htm)

## TokenValidationResult Methods

The following are methods for TokenValidationResult.

-   **[getCustomErrorMessage()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_getCustomErrorMessage)**
    Retrieves the CustomErrorMsg that’s returned when token validation fails.
-   **[getData()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_getData)**
    Retrieves data from the identity provider token. This data can include custom data that isn’t stored in the userData property.
-   **[getToken()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_getToken)**
    Retrieves the token that was passed from the external identity provider.
-   **[getTokenType()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_getTokenType)**
    Retrieves the type of token that was passed from the external identity provider.
-   **[getUserData()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#apex_Auth_TokenValidationResult_getUserData)**
    Retrieves information about the user. The user information can be obtained from the identity provider’s token or from callouts to the identity provider, if applicable.
-   **[isValid](atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm#unique_1274844908)**
    Indicates whether the token is valid or not, based on the custom validation logic in your token exchange handler.

### getCustomErrorMessage()

Retrieves the CustomErrorMsg that’s returned when token validation fails.

#### Signature

public String getCustomErrorMessage()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getData()

Retrieves data from the identity provider token. This data can include custom data that isn’t stored in the userData property.

#### Signature

public Object getData()

#### Return Value

Type: Object

### getToken()

Retrieves the token that was passed from the external identity provider.

#### Signature

public String getToken()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTokenType()

Retrieves the type of token that was passed from the external identity provider.

#### Signature

public Auth.OAuth2TokenExchangeType getTokenType()

#### Return Value

Type: [Auth.OAuth2TokenExchangeType](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_Auth_OAuth2TokenExchangeType.htm)

### getUserData()

Retrieves information about the user. The user information can be obtained from the identity provider’s token or from callouts to the identity provider, if applicable.

#### Signature

public Auth.UserData getUserData()

#### Return Value

Type: [Auth.UserData](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Auth_UserData.htm)

### isValid

Indicates whether the token is valid or not, based on the custom validation logic in your token exchange handler.

#### Signature

public Boolean isValid {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- TokenValidationResult Constructors (atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm)
- TokenValidationResult Properties (atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm)
- TokenValidationResult Methods (atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm)
- TokenValidationResult(isValid, data, userData, token, tokenType, customErrorMsg) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm)
- TokenValidationResult(valid) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- customErrorMsg (atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm)
- data (atlas.en-us.apexref.meta/apexref/apex_class_Auth_TokenValidationResult.htm)
