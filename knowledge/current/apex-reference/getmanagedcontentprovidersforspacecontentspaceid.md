---
title: "getManagedContentProvidersForSpace(contentSpaceId)"
domain: apex-reference
topic: getmanagedcontentprovidersforspacecontentspaceid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.295Z
keywords: [getManagedContentProvidersForSpace, contentSpaceId, Get, digital, asset, management, DAM, providers, managed, content, space., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getManagedContentProvidersForSpace(contentSpaceId)

> Get digital asset management (DAM) providers for a managed content space.

### getManagedContentProvidersForSpace(contentSpaceId)

Get digital asset management (DAM) providers for a managed content space.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentProviderCollection getManagedContentProvidersForSpace(String contentSpaceId)

#### Parameters

contentSpaceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content space.

#### Return Value

Type: [ConnectApi.ManagedContentProviderCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_provider_collection.htm "Collection of managed content providers.")