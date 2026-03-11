---
title: "updateCredential(requestBody)"
domain: apex-reference
topic: updatecredentialrequestbody
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [updateCredential, requestBody, Replace, credential., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateCredential(requestBody)

> Replace a credential.

### updateCredential(requestBody)

Replace a credential.

This method uses the ConnectApi.CredentialInput and the ConnectApi.CredentialValueInput input classes to replace a credential’s values. In the UI, these values appear as the credential’s authentication parameters. To update a credential, use [patchCredential(requestBody)](#apex_ConnectAPI_NamedCredentials_patchCredential_4 "Update custom credentials.").

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Credential updateCredential(ConnectApi.CredentialInput requestBody)

#### Parameters

requestBody

Type: [ConnectApi.CredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_credential.htm "Credential input.")

A ConnectApi.CredentialInput class.

#### Return Value

Type: [ConnectApi.Credential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_credential.htm "Credential.")