---
title: "AuthProviderPluginClass Class"
domain: apex-reference
topic: authproviderpluginclass-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.212Z
keywords: [AuthProviderPluginClass, Class, Returns, new, access, token, which, used, update, expired, token., refresh, authProviderConfiguration, refreshToken, Signature, Parameters, Return, Value, Usage]
---

# AuthProviderPluginClass Class

> Returns a new access token, which is used to update an expired
      access token.

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