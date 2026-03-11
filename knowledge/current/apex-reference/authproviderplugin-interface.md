---
title: "AuthProviderPlugin Interface"
domain: apex-reference
topic: authproviderplugin-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.587Z
keywords: [AuthProviderPlugin, Interface, Deprecated, API, version, 39.0., corresponding, method, Auth.AuthProviderPluginClass., initiate, authProviderConfiguration, stateToPropagate, Signature, Parameters, Return, Value, Usage]
---

# AuthProviderPlugin Interface

> Deprecated as of API version 39.0. Use the corresponding method in
        Auth.AuthProviderPluginClass.

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