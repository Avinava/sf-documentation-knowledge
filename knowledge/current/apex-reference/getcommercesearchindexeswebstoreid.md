---
title: "getCommerceSearchIndexes(webstoreId)"
domain: apex-reference
topic: getcommercesearchindexeswebstoreid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.791Z
keywords: [getCommerceSearchIndexes, webstoreId, Get, Commerce, search, indexes., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCommerceSearchIndexes(webstoreId)

> Get Commerce search indexes.

### getCommerceSearchIndexes(webstoreId)

Get Commerce search indexes.

#### API Version

52.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.CommerceSearchIndexCollection getCommerceSearchIndexes(String webstoreId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

#### Return Value

Type: [ConnectApi.CommerceSearchIndexCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_search_index_collection_output.htm "Collection of indexes.")