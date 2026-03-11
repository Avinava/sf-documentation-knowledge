---
title: "getExternalManagedAccounts(webstoreId)"
domain: apex-reference
topic: getexternalmanagedaccountswebstoreid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.115Z
keywords: [getExternalManagedAccounts, webstoreId, Get, externally, managed, accounts, store., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getExternalManagedAccounts(webstoreId)

> Get externally managed accounts for a store.

### getExternalManagedAccounts(webstoreId)

Get externally managed accounts for a store.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ExternalManagedAccountCollectionOutput getExternalManagedAccounts(String webstoreId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

#### Return Value

Type: [ConnectApi.ExternalManagedAccountCollectionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_managed_account_collection_output.htm "Collection of externally managed accounts.")