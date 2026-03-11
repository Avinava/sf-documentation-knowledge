---
title: "getCommunitiesExternalManagedAccounts(communityId)"
domain: apex-reference
topic: getcommunitiesexternalmanagedaccountscommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.115Z
keywords: [getCommunitiesExternalManagedAccounts, communityId, Get, externally, managed, accounts, available, context, user, across, Experience, Cloud, sites., API, Version, Requires, Chatter, Signature, Parameters, Note]
---

# getCommunitiesExternalManagedAccounts(communityId)

> Get externally managed accounts available to the context user across all Experience Cloud
    sites.

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