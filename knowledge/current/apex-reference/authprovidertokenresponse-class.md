---
title: "AuthProviderTokenResponse Class"
domain: apex-reference
topic: authprovidertokenresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.490Z
estimatedTokens: 1763
namespace: Auth
keywords: [AuthProviderTokenResponse, Stores, response, AuthProviderPlugin.handleCallback, method., provider, oauthToken, oauthSecretOrRefreshToken, state, idToken]
---

# AuthProviderTokenResponse Class

> Stores the response from the
        AuthProviderPlugin.handleCallback
      method.

**Namespace:** `Auth`

# AuthProviderTokenResponse Class

Stores the response from the AuthProviderPlugin.handleCallback method.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

-   **[AuthProviderTokenResponse Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_Auth_AuthProviderTokenResponse_constructors)**

-   **[AuthProviderTokenResponse Properties](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_Auth_AuthProviderTokenResponse_properties)**


## AuthProviderTokenResponse Constructors

The following are constructors for AuthProviderTokenResponse.

-   **[AuthProviderTokenResponse(provider, oauthToken, oauthSecretOrRefreshToken, state)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_Auth_AuthProviderTokenResponse_ctor)**
    Creates an instance of the AuthProviderTokenResponse class for a custom authentication provider plug-in using the specified arguments.
-   **[AuthProviderTokenResponse(provider, oauthToken, oauthSecretOrRefreshToken, state, idToken)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_Auth_AuthProviderTokenResponse_ctor_2)**
    Creates an instance of the AuthProviderTokenResponse class for a custom authentication provider plug-in using the specified arguments. This constructor includes a parameter for the ID token.

### AuthProviderTokenResponse(provider, oauthToken, oauthSecretOrRefreshToken, state)

Creates an instance of the AuthProviderTokenResponse class for a custom authentication provider plug-in using the specified arguments.

#### Signature

public AuthProviderTokenResponse(String provider, String oauthToken, String oauthSecretOrRefreshToken, String state)

#### Parameters

provider

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The custom authentication provider.

oauthToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The OAuth access token.

oauthSecretOrRefreshToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The OAuth secret or refresh token for the currently logged-in user.

state

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The state passed in to initiate the authentication request for the user.

### AuthProviderTokenResponse(provider, oauthToken, oauthSecretOrRefreshToken, state, idToken)

Creates an instance of the AuthProviderTokenResponse class for a custom authentication provider plug-in using the specified arguments. This constructor includes a parameter for the ID token.

#### Signature

public AuthProviderTokenResponse(String provider, String oauthToken, String oauthSecretOrRefreshToken, String state)

#### Parameters

provider

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The custom authentication provider.

oauthToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The OAuth access token.

oauthSecretOrRefreshToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The OAuth secret or refresh token for the currently logged-in user.

state

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The state passed in to initiate the authentication request for the user.

idToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID token in encoded JWT format.

## AuthProviderTokenResponse Properties

The following are properties for AuthProviderTokenResponse.

-   **[oauthSecretOrRefreshToken](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_Auth_AuthProviderTokenResponse_oauthSecretOrRefreshToken)**
    The OAuth secret or refresh token for the currently logged-in user.
-   **[oauthToken](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_Auth_AuthProviderTokenResponse_oauthToken)**
    The OAuth access token.
-   **[provider](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_Auth_AuthProviderTokenResponse_provider)**
    The authentication provider.
-   **[state](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_Auth_AuthProviderTokenResponse_state)**
    The state passed in to initiate the authentication request for the user.
-   **[idToken](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_Auth_AuthProviderTokenResponse_idToken)**
    The ID token from the third party in encoded JWT format.

### oauthSecretOrRefreshToken

The OAuth secret or refresh token for the currently logged-in user.

#### Signature

public String oauthSecretOrRefreshToken {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### oauthToken

The OAuth access token.

#### Signature

public String oauthToken {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### provider

The authentication provider.

#### Signature

public String provider {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### state

The state passed in to initiate the authentication request for the user.

#### Signature

public String state {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### idToken

The ID token from the third party in encoded JWT format.

#### Signature

public String idToken {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- AuthProviderTokenResponse Constructors (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm)
- AuthProviderTokenResponse Properties (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm)
- AuthProviderTokenResponse(provider, oauthToken, oauthSecretOrRefreshToken, state) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm)
- AuthProviderTokenResponse(provider, oauthToken, oauthSecretOrRefreshToken, state, idToken) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- oauthSecretOrRefreshToken (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm)
- oauthToken (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm)
- provider (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm)
- state (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm)
