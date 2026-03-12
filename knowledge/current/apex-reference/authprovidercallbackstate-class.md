---
title: "AuthProviderCallbackState Class"
domain: apex-reference
topic: authprovidercallbackstate-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.102Z
estimatedTokens: 1366
namespace: Auth
keywords: [AuthProviderCallbackState, HTTP, query, AuthProviderPlugin.handleCallback, user, authentication, group, passed, rather, passing, individually, queryParameters]
---

# AuthProviderCallbackState Class

> Provides request HTTP headers, body, and query parameters to the
        AuthProviderPlugin.handleCallback method for user
      authentication. This class allows you to group the information passed in rather than passing
      headers, body, and query parameters individually.

**Namespace:** `Auth`

# AuthProviderCallbackState Class

Provides request HTTP headers, body, and query parameters to the AuthProviderPlugin.handleCallback method for user authentication. This class allows you to group the information passed in rather than passing headers, body, and query parameters individually.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

-   **[AuthProviderCallbackState Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm#apex_Auth_AuthProviderCallbackState_constructors)**

-   **[AuthProviderCallbackState Properties](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm#apex_Auth_AuthProviderCallbackState_properties)**


#### See Also

-   [handleCallback(authProviderConfiguration, callbackState)](atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm#apex_Auth_AuthProviderPlugin_handleCallback "Deprecated as of API version 39.0. Use the corresponding method in Auth.AuthProviderPluginClass.")


## AuthProviderCallbackState Constructors

The following are constructors for AuthProviderCallbackState.

-   **[AuthProviderCallbackState(headers, body, queryParameters)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm#apex_Auth_AuthProviderCallbackState_ctor)**
    Creates an instance of the AuthProviderCallbackState class using the specified HTTP headers, body, and query parameters of the authentication request.

### AuthProviderCallbackState(headers, body, queryParameters)

Creates an instance of the AuthProviderCallbackState class using the specified HTTP headers, body, and query parameters of the authentication request.

#### Signature

public AuthProviderCallbackState(Map<String,String\> headers, String body, Map<String,String\> queryParameters)

#### Parameters

headers

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The HTTP headers of the authentication request.

body

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The HTTP body of the authentication request.

queryParameters

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The HTTP query parameters of the authentication request.

## AuthProviderCallbackState Properties

The following are properties for AuthProviderCallbackState.

-   **[body](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm#apex_Auth_AuthProviderCallbackState_body)**
    The HTTP body of the authentication request.
-   **[headers](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm#apex_Auth_AuthProviderCallbackState_headers)**
    The HTTP headers of the authentication request.
-   **[queryParameters](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm#apex_Auth_AuthProviderCallbackState_queryParameters)**
    The HTTP query parameters of the authentication request.

### body

The HTTP body of the authentication request.

#### Signature

public String body {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### headers

The HTTP headers of the authentication request.

#### Signature

public Map<String,String\> headers {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### queryParameters

The HTTP query parameters of the authentication request.

#### Signature

public Map<String,String\> queryParameters {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- AuthProviderCallbackState Constructors (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm)
- AuthProviderCallbackState Properties (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm)
- handleCallback(authProviderConfiguration, callbackState) (atlas.en-us.apexref.meta/apexref/apex_interface_Auth_AuthProviderPlugin.htm)
- AuthProviderCallbackState(headers, body, queryParameters) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- body (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm)
- headers (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm)
- queryParameters (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthProviderCallbackState.htm)
