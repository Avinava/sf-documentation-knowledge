---
title: "updateManagedContentProviderInstance(providerInstanceId, providerInstanceInput)"
domain: apex-reference
topic: updatemanagedcontentproviderinstanceproviderinstanceid-providerinstanceinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.296Z
keywords: [updateManagedContentProviderInstance, providerInstanceId, providerInstanceInput, Update, digital, asset, management, DAM, provider, instance., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateManagedContentProviderInstance(providerInstanceId, providerInstanceInput)

> Update a digital asset management (DAM) provider instance.

### updateManagedContentProviderInstance(providerInstanceId, providerInstanceInput)

Update a digital asset management (DAM) provider instance.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentProviderInstance updateManagedContentProviderInstance(String providerInstanceId, ConnectApi.ManagedContentProviderInput providerInstanceInput)

#### Parameters

providerInstanceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the provider instance to update.

providerInstanceInput

Type: [ConnectApi.ManagedContentProviderInstanceInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_provider_instance.htm "Create or update a managed content provider instance.")

ConnectApi.ManagedContentProviderInstanceInput class with the required information to update an instance.

#### Return Value

Type: [ConnectApi.ManagedContentProviderInstance](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_provider_instance.htm "Information about a managed content provider instance.")