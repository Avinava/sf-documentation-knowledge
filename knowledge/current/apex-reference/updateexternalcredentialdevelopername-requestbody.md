---
title: "updateExternalCredential(developerName, requestBody)"
domain: apex-reference
topic: updateexternalcredentialdevelopername-requestbody
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [updateExternalCredential, developerName, requestBody, Update, external, credential., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateExternalCredential(developerName, requestBody)

> Update an external credential.

### updateExternalCredential(developerName, requestBody)

Update an external credential.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ExternalCredential updateExternalCredential(String developerName, ConnectApi.ExternalCredentialInput requestBody)

#### Parameters

developerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Fully qualified developer name of the external credential.

requestBody

Type: [ConnectApi.ExternalCredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential.htm "Input used to create or update an external credential.")

Input used to create or update an external credential.

#### Return Value

Type: [ConnectApi.ExternalCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm "External credential, including the named credentials and principals associated with it and the type and status of each principal.")