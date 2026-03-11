---
title: "getCredential(externalCredential, principalName, principalType)"
domain: apex-reference
topic: getcredentialexternalcredential-principalname-principaltype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [getCredential, externalCredential, principalName, principalType, Get, credential., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCredential(externalCredential, principalName, principalType)

> Get a credential.

### getCredential(externalCredential, principalName, principalType)

Get a credential.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Credential getCredential(String externalCredential, String principalName, ConnectApi.CredentialPrincipalType principalType)

#### Parameters

externalCredential

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Fully qualified developer name of the external credential.

principalName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the external credential named principal.

principalType

Type: [ConnectApi.CredentialPrincipalType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CredentialPrincipalTypeEnum)

Type of credential principal. Values are:

-   AwsStsPrincipal
-   NamedPrincipal
-   PerUserPrincipal

#### Return Value

Type: [ConnectApi.Credential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_credential.htm "Credential.")