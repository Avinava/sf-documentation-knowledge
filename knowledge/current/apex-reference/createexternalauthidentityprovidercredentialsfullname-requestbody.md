---
title: "createExternalAuthIdentityProviderCredentials(fullName, requestBody)"
domain: apex-reference
topic: createexternalauthidentityprovidercredentialsfullname-requestbody
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [createExternalAuthIdentityProviderCredentials, fullName, requestBody, Create, external, auth, identity, provider, credentials., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createExternalAuthIdentityProviderCredentials(fullName, requestBody)

> Create external auth identity provider credentials.

### createExternalAuthIdentityProviderCredentials(fullName, requestBody)

Create external auth identity provider credentials.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ExternalAuthIdentityProviderCredentials createExternalAuthIdentityProviderCredentials(String fullName, ConnectApi.ExternalAuthIdentityProviderCredentialsInput requestBody)

#### Parameters

fullName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Full name of the external auth identity provider to create credentials for.

requestBody

Type: [ConnectApi.ExternalAuthIdentityProviderCredentialsInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_auth_identity_provider_credentials.htm "External auth identity provider credentials input.")

A ConnectApi.ExternalAuthIdentityProviderCredentialsInput input class

#### Return Value

Type: [ConnectApi.ExternalAuthIdentityProviderCredentials](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider_credentials.htm "List of an external auth identity provider's credentials.")