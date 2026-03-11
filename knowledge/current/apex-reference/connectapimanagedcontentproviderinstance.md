---
title: "ConnectApi.ManagedContentProviderInstance"
domain: apex-reference
topic: connectapimanagedcontentproviderinstance
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.183Z
keywords: [ConnectApi.ManagedContentProviderInstance, See]
---

# ConnectApi.ManagedContentProviderInstance

# ConnectApi.ManagedContentProviderInstance

Information about a managed content provider instance.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| instanceKey | String | Provider instance key. | 65.0 |
| isDefault | Boolean | Specifies whether the instance is the default instance (true) or not (false). | 65.0 |
| isEnabledForSpace | Boolean | Specifies whether the provider instance is enabled for the managed content space (true) or not (false). If there isn't a managed content space context, defaults to false. | 66.0 |
| name | String | Name of the provider instance. | 65.0 |
| providerInstanceId | String | ID of the provider instance. | 65.0 |

#### See Also

-   [ConnectApi.ManagedContentProvider](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_provider.htm "Information about a managed content provider.")
    
-   [createManagedContentProvider(providerInstanceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_createManagedContentProvider_2 "Create a digital asset management (DAM) provider instance.")
    
-   [updateManagedContentProviderInstance(providerInstanceId, providerInstanceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_updateManagedContentProviderInstance_2 "Update a digital asset management (DAM) provider instance.")