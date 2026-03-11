---
title: "AuthProviderPluginClass Methods"
domain: apex-reference
topic: authproviderpluginclass-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.212Z
keywords: [AuthProviderPluginClass, Methods, Returns, custom, metadata, type, API, name, OAuth-based, authentication, provider, single, sign-on, Salesforce., getCustomMetadataType, Signature, Return, Value, Usage, getUserInfo]
---

# AuthProviderPluginClass Methods

> Returns the custom metadata type API name for a custom OAuth-based
      authentication provider for single sign-on to Salesforce.

## AuthProviderPluginClass Methods

The AuthProviderPluginClass methods don’t support DML options.

This class doesn't include a method for single logout. You can easily configure single logout in Setup. For steps, see [Configure OpenID Connect Single Logout with Salesforce as the Relying Party](https://help.salesforce.com/s/articleView?id=xcloud.security_auth_slo_oidc_rp_configuring.htm&language=en_US) in Salesforce Help. Alternatively, create custom methods for single logout.

-   **[getCustomMetadataType()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderPluginClass.htm#apex_Auth_AuthProviderPluginClass_getCustomMetadataType)**  
    Returns the custom metadata type API name for a custom OAuth-based authentication provider for single sign-on to Salesforce.
-   **[getUserInfo(authProviderConfiguration, response)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderPluginClass.htm#apex_Auth_AuthProviderPluginClass_getUserInfo)**  
    Returns information from the custom authentication provider about the current user. This information is used by the registration handler and in other authentication provider flows.
-   **[handleCallback(authProviderConfiguration, callbackState)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderPluginClass.htm#apex_Auth_AuthProviderPluginClass_handleCallback)**  
    Uses the authentication provider’s supported authentication protocol to return an OAuth access token, OAuth secret or refresh token, and the state passed in when the request for the current user was initiated.
-   **[initiate(authProviderConfiguration, stateToPropagate)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderPluginClass.htm#apex_Auth_AuthProviderPluginClass_initiate)**  
    Returns the URL where the user is redirected for authentication.
-   **[refresh(authProviderConfiguration, refreshToken)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderPluginClass.htm#apex_Auth_AuthProviderPluginClass_refresh)**  
    Returns a new access token, which is used to update an expired access token.

### getCustomMetadataType()

Returns the custom metadata type API name for a custom OAuth-based authentication provider for single sign-on to Salesforce.

#### Signature

public String getCustomMetadataType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The custom metadata type API name for the authentication provider.

#### Usage

The getCustomMetatadaType() method returns only custom metadata type names. It does not return custom metadata record names. As of API version 39.0, use this method when extending Auth.AuthProviderPluginClass to create a custom external authentication provider.

### getUserInfo(authProviderConfiguration, response)

Returns information from the custom authentication provider about the current user. This information is used by the registration handler and in other authentication provider flows.

#### Signature

public Auth.UserData getUserInfo(Map<String,String\> authProviderConfiguration, Auth.AuthProviderTokenResponse response)

#### Parameters

authProviderConfiguration

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The configuration for the custom authentication provider. When you create a custom metadata type in Salesforce, the configuration populates it with the custom metadata type default values. Or you can set the configuration with values that you enter when you create the custom provider in Auth. Providers in Setup.

response

Type: [Auth.AuthProviderTokenResponse](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_class_Auth_AuthProviderTokenResponse "Stores the response from the AuthProviderPlugin.handleCallback method.")

The OAuth access token, OAuth secret or refresh token, and state provided by the authentication provider to authenticate the current user.

#### Return Value

Type: [Auth.UserData](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_ctor "Creates a new instance of the Auth.UserData class using the specified arguments.")

Creates a new instance of the Auth.UserData class.

#### Usage

As of API version 39.0, use this method when extending Auth.AuthProviderPluginClass to create a custom authentication provider.

### handleCallback(authProviderConfiguration, callbackState)

Uses the authentication provider’s supported authentication protocol to return an OAuth access token, OAuth secret or refresh token, and the state passed in when the request for the current user was initiated.

#### Signature

public Auth.AuthProviderTokenResponse handleCallback(Map<String,String\> authProviderConfiguration, Auth.AuthProviderCallbackState callbackState)

#### Parameters

authProviderConfiguration

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The configuration for the custom authentication provider. When you create a custom metadata type in Salesforce, the configuration populates with the custom metadata type default values. Or you can set the configuration with values you enter when you create the custom provider in Auth. Providers in Setup.

callbackState

Type: [Auth.AuthProviderCallbackState](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm#apex_class_Auth_AuthProviderCallbackState "Provides request HTTP headers, body, and query parameters to the AuthProviderPlugin.handleCallback method for user authentication. This class allows you to group the information passed in rather than passing headers, body, and query parameters individually.")

The class that contains the HTTP headers, body, and queryParams of the authentication request.

#### Return Value

Type: [Auth.AuthProviderTokenResponse](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_class_Auth_AuthProviderTokenResponse "Stores the response from the AuthProviderPlugin.handleCallback method.")

Creates an instance of the AuthProviderTokenResponse class.

#### Usage

As of API version 39.0, use this method when extending Auth.AuthProviderPluginClass to create a custom authentication provider.

### initiate(authProviderConfiguration, stateToPropagate)

Returns the URL where the user is redirected for authentication.

#### Signature

public System.PageReference initiate(Map<String,String\> authProviderConfiguration, String stateToPropagate)

#### Parameters

authProviderConfiguration

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The configuration for the custom authentication provider. When you create a custom metadata type in Salesforce, the configuration populates with the custom metadata type default values. Or you can set the configuration with values you enter when you create the custom provider in Auth. Providers in Setup.

stateToPropagate

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The state passed in to initiate the authentication request for the user.

#### Return Value

Type: [System.PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm#apex_system_pagereference "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

The URL of the page where the user is redirected for authentication.

#### Usage

As of API version 39.0, use this method when extending Auth.AuthProviderPluginClass to create a custom authentication provider.

### refresh(authProviderConfiguration, refreshToken)

Returns a new access token, which is used to update an expired access token.

#### Signature

public Auth.OAuthRefreshResult refresh(Map<String,String\> authProviderConfiguration, String refreshToken)

#### Parameters

authProviderConfiguration

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The configuration for the custom authentication provider. When you create a custom metadata type in Salesforce, the configuration populates with the custom metadata type default values. Or you can set the configuration with values you enter when you create the custom provider in Auth. Providers in Setup.

refreshToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The refresh token for the user who is logged in.

#### Return Value

Type: Auth.OAuthRefreshResult

Returns the new access token, or an error message if an error occurs.

#### Usage

A successful request returns a Auth.OAuthRefreshResult with the access token and refresh token in the response. If you receive an error, make sure that you set the error string to the error message. A NULL error string indicates no error.

The refresh method works only with named credentials; it doesn’t respect the standard OAuth refresh flow. The refresh method with named credentials works only if the earlier request returns a 401.