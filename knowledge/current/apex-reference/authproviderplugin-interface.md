---
title: "AuthProviderPlugin Interface"
domain: apex-reference
topic: authproviderplugin-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.812Z
estimatedTokens: 2339
namespace: Auth
keywords: [AuthProviderPlugin, deprecated, new, development, abstract, Auth.AuthProviderPluginClass, custom, OAuth-based, authentication, provider, plug-in, sign-on, Salesforce, Usage, getCustomMetadataType]
---

# AuthProviderPlugin Interface

> This interface is deprecated. For new development, use the abstract
      class Auth.AuthProviderPluginClass to create a custom
      OAuth-based authentication provider plug-in for single sign-on in to Salesforce.

**Namespace:** `Auth`

# AuthProviderPlugin Interface

This interface is deprecated. For new development, use the abstract class Auth.AuthProviderPluginClass to create a custom OAuth-based authentication provider plug-in for single sign-on in to Salesforce.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

Deprecated. Existing implementations that use Auth.AuthProviderPlugin still work. For new development, use Auth.AuthProviderPluginClass.

-   **[AuthProviderPlugin Methods](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm#apex_Auth_AuthProviderPlugin_methods)**

-   **[AuthProviderPlugin Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm#apex_interface_Auth_AuthProviderPlugin_Example)**


## AuthProviderPlugin Methods

The following methods are for AuthProviderPlugin, which, as of API version 39.0, is deprecated. Use themethods in AuthProviderPluginClass instead.

-   **[getCustomMetadataType()](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm#apex_Auth_AuthProviderPlugin_getCustomMetadataType)**
    Deprecated as of API version 39.0. Use the corresponding method in Auth.AuthProviderPluginClass.
-   **[getUserInfo(authProviderConfiguration, response)](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm#apex_Auth_AuthProviderPlugin_getUserInfo)**
    Deprecated as of API version 39.0. Use the corresponding method in Auth.AuthProviderPluginClass.
-   **[handleCallback(authProviderConfiguration, callbackState)](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm#apex_Auth_AuthProviderPlugin_handleCallback)**
    Deprecated as of API version 39.0. Use the corresponding method in Auth.AuthProviderPluginClass.
-   **[initiate(authProviderConfiguration, stateToPropagate)](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm#apex_Auth_AuthProviderPlugin_initiate)**
    Deprecated as of API version 39.0. Use the corresponding method in Auth.AuthProviderPluginClass.

#### See Also

-   [Salesforce Help: Create a Custom External Authentication Provider](https://help.salesforce.com/HTViewHelpDoc?id=sso_provider_plugin_custom.htm&language=en_US "Salesforce Help: Create a Custom External Authentication Provider - html (New Window)")


### getCustomMetadataType()

Deprecated as of API version 39.0. Use the corresponding method in Auth.AuthProviderPluginClass.

#### Signature

public String getCustomMetadataType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The custom metadata type API name for the authentication provider.

#### Usage

Returns the custom metadata type API name for a custom OAuth-based authentication provider for single sign-on to Salesforce. The getCustomMetatadaType() method returns only custom metadata type names. It does not return custom metadata record names.

### getUserInfo(authProviderConfiguration, response)

Deprecated as of API version 39.0. Use the corresponding method in Auth.AuthProviderPluginClass.

#### Signature

public Auth.UserData getUserInfo(Map<String,String\> authProviderConfiguration, Auth.AuthProviderTokenResponse response)

#### Parameters

authProviderConfiguration

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The configuration for the custom authentication provider. When you create a custom metadata type in Salesforce, the configuration populates with the custom metadata type default values. Or you can set the configuration with values you enter when you create the custom provider in Auth. Providers in Setup.

response

Type: [Auth.AuthProviderTokenResponse](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm#apex_class_Auth_AuthProviderTokenResponse "Stores the response from the AuthProviderPlugin.handleCallback method.")

The OAuth access token, OAuth secret or refresh token, and state provided by the authentication provider to authenticate the current user.

#### Return Value

Type: [Auth.UserData](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_ctor "Creates a new instance of the Auth.UserData class using the specified arguments.")

Creates a new instance of the Auth.UserData class.

#### Usage

Returns information from the custom authentication provider about the current user. The registration handler and other authentication provider flows use this information.

### handleCallback(authProviderConfiguration, callbackState)

Deprecated as of API version 39.0. Use the corresponding method in Auth.AuthProviderPluginClass.

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

Uses the authentication provider’s supported authentication protocol to return an OAuth access token, OAuth secret or refresh token, and the state passed in when the request for the current user was initiated.

### initiate(authProviderConfiguration, stateToPropagate)

Deprecated as of API version 39.0. Use the corresponding method in Auth.AuthProviderPluginClass.

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

Returns the URL where the user is redirected for authentication.

## AuthProviderPlugin Example Implementation

We’ve removed the example implementation for the Auth.AuthProviderPlugin interface because we’ve deprecated the interface and replaced it with an abstract class. See AuthProviderPluginClass Class.

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- AuthProviderPlugin Methods (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm)
- AuthProviderPlugin Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm)
- getCustomMetadataType() (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm)
- getUserInfo(authProviderConfiguration, response) (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm)
- handleCallback(authProviderConfiguration, callbackState) (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm)
- initiate(authProviderConfiguration, stateToPropagate) (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- Auth.AuthProviderTokenResponse (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderTokenResponse.htm)
