---
title: "ConnectApi.ExternalManagedAccountOutput"
domain: apex-reference
topic: connectapiexternalmanagedaccountoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.379Z
estimatedTokens: 219
keywords: [ConnectApi.ExternalManagedAccountOutput, Externally, managed, account]
---

# ConnectApi.ExternalManagedAccountOutput

> Externally managed account.

# ConnectApi.ExternalManagedAccountOutput

Externally managed account.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| accountId | String | ID of the account managed by another account. | 49.0 |
| accountName | String | Name of the external managed account record. | 53.0 |
| address | ConnectApi.​ExternalManagedAccount​AddressOutput | Default shipping address of the external managed account. | 53.0 |
| externalManaged​AccountId | String | ID of the external managed account record. | 49.0 |
| isMyAccount | Boolean | Specifies whether the account is the context user’s account (true) or not (false). | 53.0 |

#### See Also

-   [ConnectApi.ExternalManagedAccountCollectionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_managed_account_collection_output.htm "Collection of externally managed accounts.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ExternalManagedAccount​AddressOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_managed_account_address_output.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.ExternalManagedAccountCollectionOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_managed_account_collection_output.htm)
