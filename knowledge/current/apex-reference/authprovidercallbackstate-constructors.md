---
title: "AuthProviderCallbackState Constructors"
domain: apex-reference
topic: authprovidercallbackstate-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.193Z
keywords: [AuthProviderCallbackState, Constructors, Creates, instance, class, specified, HTTP, headers, body, query, parameters, authentication, request., queryParameters, Signature, Parameters]
---

# AuthProviderCallbackState Constructors

> Creates an instance of the AuthProviderCallbackState class using the specified HTTP headers, body, and query
      parameters of the authentication request.

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