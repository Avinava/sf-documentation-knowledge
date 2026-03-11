---
title: "getCollectionItemsForSite(siteId, collectionKeyOrId,
      language)"
domain: apex-reference
topic: getcollectionitemsforsitesiteid-collectionkeyorid-language
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.219Z
keywords: [getCollectionItemsForSite, siteId, collectionKeyOrId, language, Get, collection, items, Experience, Cloud, site., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# getCollectionItemsForSite(siteId, collectionKeyOrId,
      language)

> Get collection items for an Experience Cloud site.

### getCollectionItemsForSite(siteId, collectionKeyOrId, language)

Get collection items for an Experience Cloud site.

#### API Version

56.0

#### Available to Guest Users

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentCollectionItems getCollectionItemsForSite(String siteId, String collectionKeyOrId, String language)

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

#### Return Value

Type: [ConnectApi.ManagedContentCollectionItems](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_collection_items.htm "Managed content collection Items.")

#### Example

This example gets a collection of a custom content type that includes references to images and uses the [ConnectApi.ConnectUtilities.unwrapApexWrapper()](atlas.en-us.apexref.meta/apexref/connectAPI_utilities.htm "The ConnectApi namespace contains a utility class.") utility.

```

```