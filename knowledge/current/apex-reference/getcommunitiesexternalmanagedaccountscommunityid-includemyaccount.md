---
title: "getCommunitiesExternalManagedAccounts(communityId, includeMyAccount)"
domain: apex-reference
topic: getcommunitiesexternalmanagedaccountscommunityid-includemyaccount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.115Z
keywords: [getCommunitiesExternalManagedAccounts, communityId, includeMyAccount, Get, externally, managed, accounts, available, context, user, including, user’s, account, across, Experience, Cloud, sites., API, Version, Requires]
---

# getCommunitiesExternalManagedAccounts(communityId, includeMyAccount)

> Get externally managed accounts available to the context user, including the context
    user’s account, across all Experience Cloud sites.

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