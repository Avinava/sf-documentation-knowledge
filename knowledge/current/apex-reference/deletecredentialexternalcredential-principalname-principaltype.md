---
title: "deleteCredential(externalCredential, principalName, principalType)"
domain: apex-reference
topic: deletecredentialexternalcredential-principalname-principaltype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [deleteCredential, externalCredential, principalName, principalType, Delete, credential., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deleteCredential(externalCredential, principalName, principalType)

> Delete a credential.

### deleteCredential(externalCredential, principalName, principalType)

Delete a credential.

This method deletes the user external credentials that store the encrypted access tokens used for named credential callouts, not the external credential itself. You can delete an external credential only in the UI or by using REST API.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static Void deleteCredential(String externalCredential, String principalName, ConnectApi.CredentialPrincipalType principalType)

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

Type: Void