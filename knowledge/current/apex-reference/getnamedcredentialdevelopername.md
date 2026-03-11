---
title: "getNamedCredential(developerName)"
domain: apex-reference
topic: getnamedcredentialdevelopername
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [getNamedCredential, developerName, Get, named, credential., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getNamedCredential(developerName)

> Get a named credential.

### getNamedCredential(developerName)

Get a named credential.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.NamedCredential getNamedCredential(String developerName)

#### Parameters

developerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Fully qualified developer name of the named credential.

#### Return Value

Type: [ConnectApi.NamedCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential.htm "Named credential associated with an external credential.")