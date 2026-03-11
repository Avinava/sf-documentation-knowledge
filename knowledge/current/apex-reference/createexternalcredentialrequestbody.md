---
title: "createExternalCredential(requestBody)"
domain: apex-reference
topic: createexternalcredentialrequestbody
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [createExternalCredential, requestBody, Create, external, credential., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createExternalCredential(requestBody)

> Create an external credential.

### createExternalCredential(requestBody)

Create an external credential.

#### API Version

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ExternalCredential createExternalCredential(ConnectApi.ExternalCredentialInput requestBody)

#### Parameters

requestBody

Type: [ConnectApi.ExternalCredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential.htm "Input used to create or update an external credential.")

Input used to create or update an external credential.

#### Return Value

Type: [ConnectApi.ExternalCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm "External credential, including the named credentials and principals associated with it and the type and status of each principal.")