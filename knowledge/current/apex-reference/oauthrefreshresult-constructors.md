---
title: "OAuthRefreshResult Constructors"
domain: apex-reference
topic: oauthrefreshresult-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.335Z
keywords: [OAuthRefreshResult, Constructors, Creates, instance, class, specified, access, token, refresh, error, custom, authentication, provider, plug-in., accessToken, refreshToken, Signature, Parameters]
---

# OAuthRefreshResult Constructors

> Creates an instance of the OAuthRefreshResult class using the specified access token, refresh token, and
      error for a custom authentication provider plug-in.

## OAuthRefreshResult Constructors

The following are constructors for OAuthRefreshResult.

-   **[OAuthRefreshResult(accessToken, refreshToken, error)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_OAuthRefreshResult.htm#apex_Auth_OAuthRefreshResult_ctor)**  
    Creates an instance of the OAuthRefreshResult class using the specified access token, refresh token, and error for a custom authentication provider plug-in.
-   **[OAuthRefreshResult(accessToken, refreshToken)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_OAuthRefreshResult.htm#apex_Auth_OAuthRefreshResult_ctor_2)**  
    Creates an instance of the OAuthRefreshResult class using the specified access token and refresh token for a custom authentication provider plug-in. Use this method when you know that the refresh was successful.

### OAuthRefreshResult(accessToken, refreshToken, error)

Creates an instance of the OAuthRefreshResult class using the specified access token, refresh token, and error for a custom authentication provider plug-in.

#### Signature

public OAuthRefreshResult(String accessToken, String refreshToken, String error)

#### Parameters

accessToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

OAuth access token for the user who is currently logged in.

refreshToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

OAuth refresh token for the user who is currently logged in.

error

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Error that occurred when a user attempted to authenticate with the custom authentication provider.

### OAuthRefreshResult(accessToken, refreshToken)

Creates an instance of the OAuthRefreshResult class using the specified access token and refresh token for a custom authentication provider plug-in. Use this method when you know that the refresh was successful.

#### Signature

public OAuthRefreshResult(String accessToken, String refreshToken)

#### Parameters

accessToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The OAuth access token for the user who is logged in.

refreshToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The OAuth refresh token for the user who is logged in.