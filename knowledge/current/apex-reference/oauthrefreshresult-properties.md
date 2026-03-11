---
title: "OAuthRefreshResult Properties"
domain: apex-reference
topic: oauthrefreshresult-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.335Z
keywords: [OAuthRefreshResult, Properties, OAuth, access, token, user, who, currently, logged, in., accessToken, Signature, Property, Value, error, refreshToken]
---

# OAuthRefreshResult Properties

> The OAuth access token for the user who is currently logged in.

## OAuthRefreshResult Properties

The following are properties for OAuthRefreshResult.

-   **[accessToken](atlas.en-us.apexref.meta/apexref/apex_class_Auth_OAuthRefreshResult.htm#apex_Auth_OAuthRefreshResult_accessToken)**  
    The OAuth access token for the user who is currently logged in.
-   **[error](atlas.en-us.apexref.meta/apexref/apex_class_Auth_OAuthRefreshResult.htm#apex_Auth_OAuthRefreshResult_error)**  
    Error that occurs when a user unsuccessfully attempts to authenticate with the custom authentication provider.
-   **[refreshToken](atlas.en-us.apexref.meta/apexref/apex_class_Auth_OAuthRefreshResult.htm#apex_Auth_OAuthRefreshResult_refreshToken)**  
    The OAuth refresh token for the user who is currently logged in.

### accessToken

The OAuth access token for the user who is currently logged in.

#### Signature

public String accessToken {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### error

Error that occurs when a user unsuccessfully attempts to authenticate with the custom authentication provider.

#### Signature

public String error {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### refreshToken

The OAuth refresh token for the user who is currently logged in.

#### Signature

public String refreshToken {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")