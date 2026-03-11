---
title: "getExternalAuthIdentityProviderCredentials(fullName)"
domain: apex-reference
topic: getexternalauthidentityprovidercredentialsfullname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [getExternalAuthIdentityProviderCredentials, fullName, Get, external, auth, identity, provider, credentials., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getExternalAuthIdentityProviderCredentials(fullName)

> Get external auth identity provider credentials.

### getExternalAuthIdentityProviderCredentials(fullName)

Get external auth identity provider credentials.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ExternalAuthIdentityProviderCredentials getExternalAuthIdentityProviderCredentials(String fullName)

#### Parameters

fullName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Full name of the external auth identity provider.

#### Return Value

Type: [ConnectApi.ExternalAuthIdentityProviderCredentials](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider_credentials.htm "List of an external auth identity provider's credentials.")