---
title: "createNamedCredential(requestBody)"
domain: apex-reference
topic: createnamedcredentialrequestbody
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [createNamedCredential, requestBody, Create, named, credential., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createNamedCredential(requestBody)

> Create a named credential.

### createNamedCredential(requestBody)

Create a named credential.

#### API Version

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.NamedCredential createNamedCredential(ConnectApi.NamedCredentialInput requestBody)

#### Parameters

requestBody

Type: [ConnectApi.NamedCredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_named_credential.htm "Input used to create or update a named credential.")

Input used to create or update a named credential.

#### Return Value

Type: [ConnectApi.NamedCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential.htm "Named credential associated with an external credential.")