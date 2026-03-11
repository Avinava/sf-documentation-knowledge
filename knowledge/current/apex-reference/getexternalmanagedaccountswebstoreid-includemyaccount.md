---
title: "getExternalManagedAccounts(webstoreId, includeMyAccount)"
domain: apex-reference
topic: getexternalmanagedaccountswebstoreid-includemyaccount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.115Z
keywords: [getExternalManagedAccounts, webstoreId, includeMyAccount, Get, externally, managed, accounts, including, context, user’s, account, store., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getExternalManagedAccounts(webstoreId, includeMyAccount)

> Get externally managed accounts, including the context user’s account, for a
    store.

### getExternalManagedAccounts(webstoreId, includeMyAccount)

Get externally managed accounts, including the context user’s account, for a store.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ExternalManagedAccountCollectionOutput getExternalManagedAccounts(String webstoreId, Boolean includeMyAccount)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

includeMyAccount

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return the context user’s account (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ExternalManagedAccountCollectionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_managed_account_collection_output.htm "Collection of externally managed accounts.")