---
title: "ConnectApi.ManagedContentProviderInstanceInput"
domain: apex-reference
topic: connectapimanagedcontentproviderinstanceinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.333Z
estimatedTokens: 384
keywords: [managed, content, provider, instance]
---

# ConnectApi.ManagedContentProviderInstanceInput

> Create or update a managed content provider instance.

# ConnectApi.ManagedContentProviderInstanceInput

Create or update a managed content provider instance.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| instanceKey | String | Provider instance key. | Required to create a provider instanceAt least one property is required to update a provider instance. | 65.0 |
| isDefault | Boolean | Specifies whether the instance is the default instance (true) or not (false). | Required to create a provider instanceAt least one property is required to update a provider instance. | 65.0 |
| name | String | Name of the provider instance. | Required to create a provider instanceAt least one property is required to update a provider instance. | 65.0 |
| providerLightning​ComponentId | String | ID of the provider lightning component. | Required to create a provider instanceThis property isn’t supported for updating a provider instance. | 65.0 |

#### See Also

-   [updateManagedContentProviderInstance(providerInstanceId, providerInstanceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_updateManagedContentProviderInstance_2 "Update a digital asset management (DAM) provider instance.")

-   [createManagedContentProvider(providerInstanceInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_createManagedContentProvider_2 "Create a digital asset management (DAM) provider instance.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- updateManagedContentProviderInstance(providerInstanceId, providerInstanceInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
- createManagedContentProvider(providerInstanceInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
