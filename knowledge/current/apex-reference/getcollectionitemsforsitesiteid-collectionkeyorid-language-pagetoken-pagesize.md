---
title: "getCollectionItemsForSite(siteId, collectionKeyOrId, language, pageToken, pageSize)"
domain: apex-reference
topic: getcollectionitemsforsitesiteid-collectionkeyorid-language-pagetoken-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.219Z
keywords: [getCollectionItemsForSite, siteId, collectionKeyOrId, language, pageToken, pageSize, Get, page, collection, items, Experience, Cloud, site., API, Version, Available, Guest, Users, Requires, Chatter]
---

# getCollectionItemsForSite(siteId, collectionKeyOrId, language, pageToken, pageSize)

> Get a page of collection items for an Experience Cloud site.

### getCollectionItemsForSite(siteId, collectionKeyOrId, language, pageToken, pageSize)

Get a page of collection items for an Experience Cloud site.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentCollectionItems getCollectionItemsForSite(String siteId, String collectionKeyOrId, String language, Integer pageToken, Integer pageSize)

#### Parameters

siteId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the Experience Cloud site.

collectionKeyOrId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Collection key or ID of the collection. A collection key is a unique identifier such as MCA4CCV5QS2BAB5H7YRCRPTCWGZQ.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Language locale for the managed content, for example, en\_US. If the requested translation isn’t available, the language defaults to the channel or site’s default language. If the channel or site’s default language isn’t available, the language defaults to the primary language of the content space.

pageToken

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Integer specifying a page token of items. If you pass in null, the default value is 0, which returns the first page token.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 50.

#### Return Value

Type: [ConnectApi.ManagedContentCollectionItems](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_collection_items.htm "Managed content collection Items.")