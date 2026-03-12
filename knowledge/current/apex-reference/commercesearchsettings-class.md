---
title: "CommerceSearchSettings Class"
domain: apex-reference
topic: commercesearchsettings-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.497Z
estimatedTokens: 1178
namespace: ConnectApi
keywords: [CommerceSearchSettings, index, product, catalog, createCommerceSearchIndex, webstoreId, indexBuildType, API, Version, Requires, Chatter, Usage, getCommerceSearchIndex, indexId, getCommerceSearchIndexes]
---

# CommerceSearchSettings Class

> Create an index of a product catalog.

**Namespace:** `ConnectApi`

# CommerceSearchSettings Class

Get indexes. Get index logs. Create an index of a product catalog.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommerceSearchSettings Methods

These methods are for CommerceSearchSettings. All methods are static.

-   **[createCommerceSearchIndex(webstoreId, indexBuildType)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearchSettings_static_methods.htm#apex_ConnectAPI_CommerceSearchSettings_postCommerceSearchIndex_2)**
    Create an index of a product catalog.
-   **[getCommerceSearchIndex(webstoreId, indexId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearchSettings_static_methods.htm#apex_ConnectAPI_CommerceSearchSettings_getSingleCommerceSearchIndex_1)**
    Get a Commerce search index.
-   **[getCommerceSearchIndexes(webstoreId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearchSettings_static_methods.htm#apex_ConnectAPI_CommerceSearchSettings_getCommerceSearchIndexes_1)**
    Get Commerce search indexes.
-   **[getCommerceSearchIndexLogs(webstoreId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearchSettings_static_methods.htm#apex_ConnectAPI_CommerceSearchSettings_getCommerceSearchIndexLogs_1)**
    Get Commerce search index logs.

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createCommerceSearchIndex(webstoreId, indexBuildType) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearchSettings_static_methods.htm)
- getCommerceSearchIndex(webstoreId, indexId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearchSettings_static_methods.htm)
- getCommerceSearchIndexes(webstoreId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearchSettings_static_methods.htm)
- getCommerceSearchIndexLogs(webstoreId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommerceSearchSettings_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.CommerceSearchIndexBuildType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.CommerceSearchIndex (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_search_index_output.htm)
- ConnectApi.CommerceSearchIndexCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_search_index_collection_output.htm)
- ConnectApi.CommerceSearchIndexLogCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_commerce_search_index_log_collection.htm)
