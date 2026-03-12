---
title: "ExternalManagedAccount Class"
domain: apex-reference
topic: externalmanagedaccount-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.186Z
estimatedTokens: 1511
namespace: ConnectApi
keywords: [ExternalManagedAccount, Get, externally, managed, accounts., getCommunitiesExternalManagedAccounts, communityId, API, Version, Requires, Chatter, Note, includeMyAccount, getExternalManagedAccounts, webstoreId]
---

# ExternalManagedAccount Class

> Get externally managed accounts.

**Namespace:** `ConnectApi`

# ExternalManagedAccount Class

Get externally managed accounts.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ExternalManagedAccount Methods

These methods are for ExternalManagedAccount. All methods are static.

-   **[getCommunitiesExternalManagedAccounts(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalManagedAccount_static_methods.htm#apex_ConnectAPI_ExternalManagedAccount_getCommunitiesExternalManagedAccounts_1)**
    Get externally managed accounts available to the context user across all Experience Cloud sites.
-   **[getCommunitiesExternalManagedAccounts(communityId, includeMyAccount)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalManagedAccount_static_methods.htm#apex_ConnectAPI_ExternalManagedAccount_getCommunitiesExternalManagedAccounts_2)**
    Get externally managed accounts available to the context user, including the context user’s account, across all Experience Cloud sites.
-   **[getExternalManagedAccounts(webstoreId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalManagedAccount_static_methods.htm#apex_ConnectAPI_ExternalManagedAccount_getExternalManagedAccounts_1)**
    Get externally managed accounts for a store.
-   **[getExternalManagedAccounts(webstoreId, includeMyAccount)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalManagedAccount_static_methods.htm#apex_ConnectAPI_ExternalManagedAccount_getExternalManagedAccounts_2)**
    Get externally managed accounts, including the context user’s account, for a store.

### getCommunitiesExternalManagedAccounts(communityId)

Get externally managed accounts available to the context user across all Experience Cloud sites.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ExternalManagedAccountCollectionOutput getCommunitiesExternalManagedAccounts(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Regardless of the ID specified, this method returns externally managed accounts available to the context user across all Experience Cloud sites.

#### Return Value

Type: [ConnectApi.ExternalManagedAccountCollectionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_managed_account_collection_output.htm "Collection of externally managed accounts.")

### getCommunitiesExternalManagedAccounts(communityId, includeMyAccount)

Get externally managed accounts available to the context user, including the context user’s account, across all Experience Cloud sites.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ExternalManagedAccountCollectionOutput getCommunitiesExternalManagedAccounts(String communityId, Boolean includeMyAccount)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Regardless of the ID specified, this method returns externally managed accounts available to the context user across all Experience Cloud sites.

includeMyAccount

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return the context user’s account (true) or not (false). The default value is false.

#### Return Value

Type: [ConnectApi.ExternalManagedAccountCollectionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_managed_account_collection_output.htm "Collection of externally managed accounts.")

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getCommunitiesExternalManagedAccounts(communityId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalManagedAccount_static_methods.htm)
- getCommunitiesExternalManagedAccounts(communityId, includeMyAccount) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalManagedAccount_static_methods.htm)
- getExternalManagedAccounts(webstoreId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalManagedAccount_static_methods.htm)
- getExternalManagedAccounts(webstoreId, includeMyAccount) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ExternalManagedAccount_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ExternalManagedAccountCollectionOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_managed_account_collection_output.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
