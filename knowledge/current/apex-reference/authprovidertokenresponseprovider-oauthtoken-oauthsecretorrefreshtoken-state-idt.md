---
title: "AuthProviderTokenResponse(provider, oauthToken,
      oauthSecretOrRefreshToken, state, idToken)"
domain: apex-reference
topic: authprovidertokenresponseprovider-oauthtoken-oauthsecretorrefreshtoken-state-idt
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.220Z
keywords: [AuthProviderTokenResponse, provider, oauthToken, oauthSecretOrRefreshToken, state, idToken, Creates, instance, class, custom, authentication, plug-in, specified, arguments., constructor, includes, parameter, token., Signature, Parameters]
---

# AuthProviderTokenResponse(provider, oauthToken,
      oauthSecretOrRefreshToken, state, idToken)

> Creates an instance of the AuthProviderTokenResponse class for a custom authentication
    provider plug-in using the specified arguments. This constructor includes a parameter for the ID
    token.

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