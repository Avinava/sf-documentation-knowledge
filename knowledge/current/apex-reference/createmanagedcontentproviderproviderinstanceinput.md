---
title: "createManagedContentProvider(providerInstanceInput)"
domain: apex-reference
topic: createmanagedcontentproviderproviderinstanceinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.295Z
keywords: [createManagedContentProvider, providerInstanceInput, Create, digital, asset, management, DAM, provider, instance., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# createManagedContentProvider(providerInstanceInput)

> Create a digital asset management (DAM) provider instance.

### createManagedContentProvider(providerInstanceInput)

Create a digital asset management (DAM) provider instance.

#### API Version

65.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentProviderInstance createManagedContentProvider(ConnectApi.ManagedContentProviderInstanceInput providerInstanceInput)

#### Parameters

providerInstanceInput

Type: [ConnectApi.ManagedContentProviderInstanceInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_managed_content_provider_instance.htm "Create or update a managed content provider instance.")

ConnectApi.ManagedContentProviderInstanceInput class with the required information to create an instance.

#### Return Value

Type: [ConnectApi.ManagedContentProviderInstance](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_provider_instance.htm "Information about a managed content provider instance.")