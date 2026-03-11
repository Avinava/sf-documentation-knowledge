---
title: "createCredential(requestBody, action)"
domain: apex-reference
topic: createcredentialrequestbody-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [createCredential, requestBody, action, Refresh, OAuth, AWS, Roles, Anywhere, credential., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createCredential(requestBody, action)

> Refresh an OAuth or AWS Roles Anywhere credential.

### createCredential(requestBody, action)

Refresh an OAuth or AWS Roles Anywhere credential.

#### API Version

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Credential createCredential(ConnectApi.CredentialInput requestBody, ConnectApi.CreateCredentialAction action)

#### Parameters

requestBody

Type: [ConnectApi.CredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_credential.htm "Credential input.")

A ConnectApi.CredentialInput class.

action

Type: [ConnectApi.CreateCredentialAction](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CreateCredentialActionEnum)

Action to take when creating the credential. Value is:

-   Refresh

#### Return Value

Type: [ConnectApi.Credential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_credential.htm "Credential.")