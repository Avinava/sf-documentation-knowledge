---
title: "updateExternalAuthIdentityProvider(developerName,
      requestBody)"
domain: apex-reference
topic: updateexternalauthidentityproviderdevelopername-requestbody
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [updateExternalAuthIdentityProvider, developerName, requestBody, Update, external, auth, identity, provider., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateExternalAuthIdentityProvider(developerName,
      requestBody)

> Update an external auth identity provider.

### updateExternalAuthIdentityProvider(developerName, requestBody)

Update an external auth identity provider.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ExternalAuthIdentityProvider updateExternalAuthIdentityProvider(String developerName, ConnectApi.ExternalAuthIdentityProviderInput requestBody)

#### Parameters

developerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Fully qualified developer name of the external auth identity provider.

requestBody

Type: [ConnectApi.ExternalAuthIdentityProviderInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_auth_identity_provider.htm "External auth identity provider input.")

Input used to create or update an external auth identity provider.

#### Return Value

Type: [ConnectApi.ExternalAuthIdentityProvider](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider.htm "External auth identity provider.")