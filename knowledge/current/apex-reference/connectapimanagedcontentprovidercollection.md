---
title: "ConnectApi.ManagedContentProviderCollection"
domain: apex-reference
topic: connectapimanagedcontentprovidercollection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:27.831Z
estimatedTokens: 286
keywords: [ConnectApi.ManagedContentProviderCollection, Collection, managed, content, providers.]
---

# ConnectApi.ManagedContentProviderCollection

> Collection of managed content providers.

# ConnectApi.ManagedContentProviderCollection

Collection of managed content providers.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contentSpaceId | String | ID of the managed content space, if provided. Otherwise, null. | 66.0 |
| currentPageUrl | String | URL to the current page of managed content providers. | 65.0 |
| nextPageUrl | String | URL to the next page of managed content providers. | 65.0 |
| providers | List<ConnectApi.​ManagedContent​Provider> | Managed content providers. | 65.0 |
| total | Integer | Total number of managed content providers. | 65.0 |

#### See Also

-   [getManagedContentProviders()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentProviders_1 "Get digital asset management (DAM) providers.")

-   [getManagedContentProvidersForSpace(contentSpaceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getManagedContentProvidersForSpace_2 "Get digital asset management (DAM) providers for a managed content space.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ManagedContent​Provider (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_provider.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- getManagedContentProviders() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
- getManagedContentProvidersForSpace(contentSpaceId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
