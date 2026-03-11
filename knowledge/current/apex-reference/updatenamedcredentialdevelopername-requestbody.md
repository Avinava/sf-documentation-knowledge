---
title: "updateNamedCredential(developerName, requestBody)"
domain: apex-reference
topic: updatenamedcredentialdevelopername-requestbody
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [updateNamedCredential, developerName, requestBody, Update, named, credential., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateNamedCredential(developerName, requestBody)

> Update a named credential.

### updateNamedCredential(developerName, requestBody)

Update a named credential.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.NamedCredential updateNamedCredential(String developerName, ConnectApi.NamedCredentialInput requestBody)

#### Parameters

developerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Fully qualified developer name of the named credential.

requestBody

Type: [ConnectApi.NamedCredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_named_credential.htm "Input used to create or update a named credential.")

Input used to create or update a named credential.

#### Return Value

Type: [ConnectApi.NamedCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential.htm "Named credential associated with an external credential.")