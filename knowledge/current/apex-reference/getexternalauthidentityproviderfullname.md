---
title: "getExternalAuthIdentityProvider(fullName)"
domain: apex-reference
topic: getexternalauthidentityproviderfullname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [getExternalAuthIdentityProvider, fullName, Get, external, auth, identity, provider., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getExternalAuthIdentityProvider(fullName)

> Get an external auth identity provider.

### getExternalAuthIdentityProvider(fullName)

Get an external auth identity provider.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ExternalAuthIdentityProvider getExternalAuthIdentityProvider(String fullName)

#### Parameters

fullName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Full name of the external auth identity provider.

#### Return Value

Type: [ConnectApi.ExternalAuthIdentityProvider](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider.htm "External auth identity provider.")