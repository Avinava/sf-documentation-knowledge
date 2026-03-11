---
title: "updateExternalAuthIdentityProviderCredentials(fullName, requestBody)"
domain: apex-reference
topic: updateexternalauthidentityprovidercredentialsfullname-requestbody
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [updateExternalAuthIdentityProviderCredentials, fullName, requestBody, Replace, external, auth, identity, provider, credentials., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateExternalAuthIdentityProviderCredentials(fullName, requestBody)

> Replace external auth identity provider credentials.

### updateExternalAuthIdentityProviderCredentials(fullName, requestBody)

Replace external auth identity provider credentials.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ExternalAuthIdentityProviderCredentials updateExternalAuthIdentityProviderCredentials(String fullName, ConnectApi.ExternalAuthIdentityProviderCredentialsInput requestBody)

#### Parameters

fullName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The external auth identity provider credentials to replace.

requestBody

Type: [ConnectApi.ExternalAuthIdentityProviderCredentialsInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_auth_identity_provider_credentials.htm "External auth identity provider credentials input.")

A ConnectApi.ExternalAuthIdentityProviderCredentialsInput input class.

#### Return Value

Type: [ConnectApi.ExternalAuthIdentityProviderCredentials](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider_credentials.htm "List of an external auth identity provider's credentials.")