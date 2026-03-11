---
title: "getCommerceSearchIndex(webstoreId, indexId)"
domain: apex-reference
topic: getcommercesearchindexwebstoreid-indexid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.791Z
keywords: [getCommerceSearchIndex, webstoreId, indexId, Get, Commerce, search, index., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCommerceSearchIndex(webstoreId, indexId)

> Get a Commerce search index.

### getCommerceSearchIndex(webstoreId, indexId)

Get a Commerce search index.

#### API Version

52.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.CommerceSearchIndex getSingleCommerceSearchIndex(String webstoreId, String indexId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

indexId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the index.

#### Return Value

Type: [ConnectApi.CommerceSearchIndex](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_search_index_output.htm "Index information.")