---
title: "getExternalCredential(developerName)"
domain: apex-reference
topic: getexternalcredentialdevelopername
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [getExternalCredential, developerName, Get, external, credential, including, named, credentials, principals, associated, type, status, principal., API, Version, Requires, Chatter, Signature, Parameters, Return]
---

# getExternalCredential(developerName)

> Get an external credential, including the named credentials and principals associated
    with it and the type and status of each principal.

### getExternalCredential(developerName)

Get an external credential, including the named credentials and principals associated with it and the type and status of each principal.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ExternalCredential getExternalCredential(String developerName)

#### Parameters

developerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Fully qualified developer name of the external credential.

#### Return Value

Type: [ConnectApi.ExternalCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm "External credential, including the named credentials and principals associated with it and the type and status of each principal.")