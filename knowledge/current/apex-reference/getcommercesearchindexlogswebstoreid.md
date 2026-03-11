---
title: "getCommerceSearchIndexLogs(webstoreId)"
domain: apex-reference
topic: getcommercesearchindexlogswebstoreid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.791Z
keywords: [getCommerceSearchIndexLogs, webstoreId, Get, Commerce, search, index, logs., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCommerceSearchIndexLogs(webstoreId)

> Get Commerce search index logs.

### getCommerceSearchIndexLogs(webstoreId)

Get Commerce search index logs.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CommerceSearchIndexLogCollection getCommerceSearchIndexLogs(String webstoreId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

#### Return Value

Type: [ConnectApi.CommerceSearchIndexLogCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_search_index_log_collection.htm "Collection of search index logs for a webstore.")