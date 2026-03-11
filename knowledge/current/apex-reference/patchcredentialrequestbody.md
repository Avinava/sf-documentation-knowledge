---
title: "patchCredential(requestBody)"
domain: apex-reference
topic: patchcredentialrequestbody
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [patchCredential, requestBody, Update, custom, credentials., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# patchCredential(requestBody)

> Update custom credentials.

### patchCredential(requestBody)

Update custom credentials.

This method updates custom credentials. To replace a credential, use [updateCredential(requestBody)](#apex_ConnectAPI_NamedCredentials_updateCredential_4 "Replace a credential.").

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Credential patchCredential(ConnectApi.CredentialInput requestBody)

#### Parameters

requestBody

Type: [ConnectApi.CredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_credential.htm "Credential input.")

A ConnectApi.CredentialInput class. Only the custom credentials in the input class are updated.

#### Return Value

Type: [ConnectApi.Credential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_credential.htm "Credential.")