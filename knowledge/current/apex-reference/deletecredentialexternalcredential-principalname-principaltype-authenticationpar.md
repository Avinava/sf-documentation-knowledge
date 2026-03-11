---
title: "deleteCredential(externalCredential, principalName, principalType, authenticationParameters)"
domain: apex-reference
topic: deletecredentialexternalcredential-principalname-principaltype-authenticationpar
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.394Z
keywords: [deleteCredential, externalCredential, principalName, principalType, authenticationParameters, Delete, credential, authentication, parameters., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deleteCredential(externalCredential, principalName, principalType, authenticationParameters)

> Delete a credential with authentication parameters.

### deleteCredential(externalCredential, principalName, principalType, authenticationParameters)

Delete a credential with authentication parameters.

This method deletes the user external credentials that store the encrypted access tokens used for named credential callouts, not the external credential itself. You can delete an external credential only in the UI or by using REST API.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static Void deleteCredential(String externalCredential, String principalName, ConnectApi.CredentialPrincipalType principalType, List<String\> authenticationParameters)

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

authenticationParameters

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of authentication parameters only for custom protocols, for example myApiKey,myApiSecret. If unspecified, all credentials are deleted.

#### Return Value

Type: Void