---
title: "AuthProviderCallbackState Properties"
domain: apex-reference
topic: authprovidercallbackstate-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.193Z
keywords: [AuthProviderCallbackState, Properties, HTTP, body, authentication, request., Signature, Property, Value, headers, queryParameters]
---

# AuthProviderCallbackState Properties

> The HTTP body of the authentication request.

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