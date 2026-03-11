---
title: "deleteManagedContentProviderInstance(providerInstanceId)"
domain: apex-reference
topic: deletemanagedcontentproviderinstanceproviderinstanceid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.295Z
keywords: [deleteManagedContentProviderInstance, providerInstanceId, Delete, digital, asset, management, DAM, provider, instance., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# deleteManagedContentProviderInstance(providerInstanceId)

> Delete a digital asset management (DAM) provider instance.

### deleteManagedContentProviderInstance(providerInstanceId)

Delete a digital asset management (DAM) provider instance.

You can’t delete a DAM provider instance that’s in use. Delete managed content that’s associated with a DAM provider instance before deleting the instance.

#### API Version

65.0

#### Requires Chatter

No

#### Signature

public static Void deleteManagedContentProviderInstance(String providerInstanceId)

#### Parameters

providerInstanceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the provider instance to delete.

#### Return Value

Type: Void