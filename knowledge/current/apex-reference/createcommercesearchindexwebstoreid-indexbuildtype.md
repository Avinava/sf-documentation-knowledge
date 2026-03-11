---
title: "createCommerceSearchIndex(webstoreId,
    indexBuildType)"
domain: apex-reference
topic: createcommercesearchindexwebstoreid-indexbuildtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.791Z
keywords: [createCommerceSearchIndex, webstoreId, indexBuildType, Create, index, product, catalog., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# createCommerceSearchIndex(webstoreId,
    indexBuildType)

> Create an index of a product catalog.

### createCommerceSearchIndex(webstoreId, indexBuildType)

Create an index of a product catalog.

#### API Version

57.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.CommerceSearchIndex createCommerceSearchIndex(String webstoreId, String indexBuildType)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

indexBuildType

Type: [ConnectApi.CommerceSearchIndexBuildType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#CommerceSearchIndexBuildTypeEnum)

Build type of the index. Values are:

-   Full
-   Incremental

#### Return Value

Type: [ConnectApi.CommerceSearchIndex](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_search_index_output.htm "Index information.")

#### Usage

This method creates a live index that replaces the current live index. Any indexes that are in progress are removed when you manually create an index with this method.