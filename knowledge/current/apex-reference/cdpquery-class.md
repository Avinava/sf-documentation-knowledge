---
title: "CdpQuery Class"
domain: apex-reference
topic: cdpquery-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.900Z
estimatedTokens: 30989
namespace: ConnectApi
keywords: [CdpQuery, Synchronously, query, data, across, model, lake, unified, linked, objects., Specify, batch, size, offset, order, results., 999, rows., getAllMetadata, API]
---

# CdpQuery Class

> Synchronously query data across data model, lake, unified, and linked
  objects. Specify batch size, offset, and order of the results. This query
  returns up to 49,999 rows.

**Namespace:** `ConnectApi`

# CdpQuery Class

Get Data 360 metadata and query data.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpQuery Methods

These methods are for CdpQuery. All methods are static.

-   **[getAllMetadata()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getAllMetadata_1)**
    Get all metadata, including Calculated Insights, Engagement, Profile, and other objects, as well as their relationships to other objects.
-   **[getAllMetadata(entityType, entityCategory, entityName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getAllMetadata_2)**
    Get all metadata, filtering for entity type, category, and name.
-   **[getAllMetadata(entityType, entityCategory, entityName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getAllMetadata_3)**
    Get all metadata, filtering for entity type, category, name, and data space.
-   **[getDataGraphData(dataGraphEntityName, id)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphData_1)**
    Query a data graph in the default data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.
-   **[getDataGraphData(dataGraphEntityName, id, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphData_2)**
    Query a data graph in a specified data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.
-   **[getDataGraphData(dataGraphEntityName, id, live)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphData_3)**
    Query a data graph by performing a live lookup in the default data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.
-   **[getDataGraphData(dataGraphEntityName, id, dataspace, live)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphData_4)**
    Query a data graph by performing a live lookup in a specified data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.
-   **[getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphDataWithLookupKeys_1)**
    Query a data graph by the primary key of either the primary Data Model Object (DMO) or the Individual linked DMO. Get the data from the default data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.
-   **[getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphDataWithLookupKeys_2)**
    Query a data graph by the primary key of either the primary Data Model Object (DMO) or the Individual linked DMO. Get the data from a specified data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.
-   **[getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys, dataspace, noCache)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphDataWithLookupKeys_3)**
    Query a data graph by the primary key of either the primary Data Model Object (DMO) or the Individual linked DMO. Get the data from a specified data space. Get data from a standard or real-time data graph. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.
-   **[getDataGraphMetadata()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphMetadata_1)**
    Retrieve metadata from all data graphs in the default data space. Retrieves data from both standard and real-time data graphs.
-   **[getDataGraphMetadata(dataGraphEntityName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphMetadata_2)**
    Retrieve metadata from a specified data graph in the default data space. Retrieves data from both standard and real-time data graphs.
-   **[getDataGraphMetadata(dataGraphEntityName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphMetadata_3)**
    Retrieve metadata from a specified data graph in a specified data space. Retrieves data from both standard and real-time data graphs.
-   **[getInsightsMetadata()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getInsightsMetadata_1)**
    Get Insight metadata, including Calculated Insight objects, their dimensions and measures.
-   **[getInsightsMetadata(ciName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getInsightsMetadata_2)**
    Get metadata for a Calculated Insight object. Metadata includes dimensions and measures.
-   **[getInsightsMetadata(ciName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getInsightsMetadata_3)**
    Get metadata for a Calculated Insight object and specify the data space. Metadata includes dimensions and measures.
-   **[getProfileMetadata()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getProfileMetadata_1)**
    Get metadata for data model objects in the profile category, including Individual, Contact Point Email, Unified Individual, and Contact Point Address objects. Metadata includes the objects, their fields, and category.
-   **[getProfileMetadata(dataModelName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getProfileMetadata_2)**
    Get metadata for a data model object in the profile category, such as Individual, Contact Point Email, Unified Individual, and Contact Point Address. Metadata includes the list of fields, data types, and indexes available for lookup.
-   **[getProfileMetadata(dataModelName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getProfileMetadata_3)**
    Get metadata for a data model object in the profile category, such as Individual, Contact Point Email, Unified Individual, and Contact Point Address. Also, specify the data space. Metadata includes the list of fields, data types, and indexes available for lookup.
-   **[queryANSISql(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryANSISql_1)**
    Synchronously query data across data model, lake, unified, and linked objects. This query returns up to 49,999 rows.
-   **[queryANSISql(input, batchSize, offset, orderby)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryANSISql_2)**
    Synchronously query data across data model, lake, unified, and linked objects. Specify batch size, offset, and order of the results. This query returns up to 49,999 rows.
-   **[queryANSISql(input, batchSize, offset, orderby, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryANSISql_3)**
    Synchronously query data across data model, lake, unified, and linked objects. Specify batch size, offset, order of the results, and data space. This query returns up to 49,999 rows.
-   **[queryAnsiSqlV2(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_2)**
    Query data across data model, lake, unified, and linked objects.
-   **[queryAnsiSqlV2(input, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_3)**
    Query data across data model, lake, unified, and linked objects. Also, specify the data space.
-   **[nextBatchAnsiSqlV2(nextBatchId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_1)**
    Get the next batch of data across data model, lake, unified, and linked objects.
-   **[nextBatchAnsiSqlV2(nextBatchId, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_2)**
    Get the next batch of data across data model, lake, unified, and linked objects. Also, specify the data space.
-   **[querySql(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_1)**
    Submit an SQL query request for execution and retrieve the first chunk of data.
-   **[querySql(input, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_2)**
    Submit an SQL query request for execution and specify the data space.
-   **[querySql(input, workloadName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySql_3)**
    Submit an SQL query request for execution and specify the workload name and data space.
-   **[querySqlRows(queryId, offset, rowLimit)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlRows_1)**
    Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Results are available for up to 24 hours.
-   **[querySqlRows(queryId, offset, rowLimit, omitSchema)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlRows_2)**
    Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify whether to include metadata in the response or not. Results are available for up to 24 hours.
-   **[querySqlRows(queryId, offset, rowLimit, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlRows_3)**
    Get additional query results that weren’t returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the data space. Results are available for up to 24 hours.
-   **[querySqlRows(queryId, offset, rowLimit, omitSchema, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlRows_4)**
    Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the data space and whether or not to exclude metadata from the response. Results are available for up to 24 hours.
-   **[querySqlRows(queryId, offset, rowLimit, workloadName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlRows_5)**
    Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the workload name and data space. Results are available for up to 24 hours.
-   **[querySqlRows(queryId, offset, rowLimit, omitSchema, workloadName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlRows_6)**
    Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the workload name, data space, and whether or not to exclude metadata from the response. Results are available for up to 24 hours.
-   **[cancelQuerySql(queryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_cancelQuerySql_1)**
    Delete the specified query and terminate long-running queries that are no longer needed to manage resource consumption.
-   **[cancelQuerySql(queryId, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_cancelQuerySql_2)**
    Delete the specified query and terminate long-running queries that are no longer needed to manage resource consumption. Specify the data space.
-   **[cancelQuerySql(queryId, workloadName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_cancelQuerySql_3)**
    Delete the specified query and terminate long-running queries that are no longer needed to manage resource consumption. Specify the data space and workload name.
-   **[querySqlStatus(queryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlStatus_1)**
    Get the status of an SQL query request. Results are available for up to 24 hours.
-   **[querySqlStatus(queryId, waitTimeMs)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlStatus_2)**
    Get the status of an SQL query request and specify the time to wait before returning the response. Results are available for up to 24 hours.
-   **[querySqlStatus(queryId, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlStatus_3)**
    Get the status of an SQL query request and specify the data space. Results are available for up to 24 hours.
-   **[querySqlStatus(queryId, dataspace, waitTimeMs)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlStatus_4)**
    Get the status of an SQL query request. Specify the data space and time to wait before returning the response. Results are available for up to 24 hours.
-   **[querySqlStatus(queryId, workloadName, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlStatus_5)**
    Get the status of an SQL query request. Specify the workload name and data space. Results are available for up to 24 hours.
-   **[querySqlStatus(queryId, workloadName, dataspace, waitTimeMs)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_querySqlStatus_6)**
    Get the status of an SQL query request. Specify the workload name, data space, and time to wait before returning the response. Results are available for up to 24 hours.
-   **[queryCalculatedInsights(ciName, dimensions, measures, orderby, filters, batchSize, offset)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryCalculatedInsights_1)**
    Query a Calculated Insight object.
-   **[queryCalculatedInsights(ciName, dimensions, measures, orderby, filters, batchSize, offset, timeGranularity)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryCalculatedInsights_2)**
    Query a Calculated Insight object within a specified time range.
-   **[queryCalculatedInsights(ciName, dimensions, measures, orderby, filters, batchSize, offset, timeGranularity, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryCalculatedInsights_3)**
    Query a Calculated Insight object within a specified time range and specify the data space.
-   **[queryProfileApi(dataModelName, filters, fields, batchSize, offset, orderby)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryProfileApi_1)**
    Query a Profile data model object using filters.
-   **[queryProfileApi(dataModelName, id, searchKey, filters, fields, batchSize, offset, orderby)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryProfileApi_2)**
    Query a Profile data model object using filters and a search key.
-   **[queryProfileApi(dataModelName, id, childDataModelName, searchKey, filters, fields, batchSize, offset, orderby)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryProfileApi_3)**
    Query a Profile data model object and a child object using filters and a search key.
-   **[queryProfileApi(dataModelName, id, ciName, searchKey, dimensions, measures, filters, fields, batchSize, offset, orderby)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryProfileApi_4)**
    Query a Profile data model object and a Calculated Insight object using filters and a search key.
-   **[queryProfileApi(dataModelName, id, ciName, searchKey, dimensions, measures, filters, fields, batchSize, offset, orderby, timeGranularity)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryProfileApi_5)**
    Query a Profile data model object and a Calculated Insight object using filters, a search key, and a time range.
-   **[queryProfileApi(dataModelName, id, ciName, searchKey, dimensions, measures, filters, fields, batchSize, offset, orderby, timeGranularity, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryProfileApi_6)**
    Query a Profile data model object and a Calculated Insight object using filters, a search key, a time range, and a data space.
-   **[universalIdLookupBySourceId(entityName, dataSourceId, dataSourceObjectId, sourceRecordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_universalIdLookupBySourceId_1)**
    Look up objects by source ID.
-   **[universalIdLookupBySourceId(entityName, dataSourceId, dataSourceObjectId, sourceRecordId, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_universalIdLookupBySourceId_2)**
    Look up objects by source ID and specify the data space.

### getAllMetadata()

Get all metadata, including Calculated Insights, Engagement, Profile, and other objects, as well as their relationships to other objects.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getAllMetadata()

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")

### getAllMetadata(entityType, entityCategory, entityName)

Get all metadata, filtering for entity type, category, and name.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getAllMetadata(String entityType, String entityCategory, String entityName)

#### Parameters

entityType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of metadata entity requested. Valid values are DataLakeObject, DataModelObject, and CalculatedInsight. If unspecified, all types are returned.

entityCategory

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Category of the metadata entity. Valid values are Profile, Engagement, and Related. If unspecified, all category entities are returned.

entityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Metadata name of the entity, for example UnifiedIndividual\_\_dlm. If unspecified, a complete list of entities is returned.

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")

### getAllMetadata(entityType, entityCategory, entityName, dataspace)

Get all metadata, filtering for entity type, category, name, and data space.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getAllMetadata(String entityType, String entityCategory, String entityName, String dataspace)

#### Parameters

entityType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Type of metadata entity requested. Valid values are DataLakeObject, DataModelObject, and CalculatedInsight. If unspecified, all types are returned.

entityCategory

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Category of the metadata entity. Valid values are Profile, Engagement, and Related. If unspecified, all category entities are returned.

entityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Metadata name of the entity, for example UnifiedIndividual\_\_dlm. If unspecified, a complete list of entities is returned.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")

### getDataGraphData(dataGraphEntityName, id)

Query a data graph in the default data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput getDataGraphData(String dataGraphEntityName, String id)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Record ID to query for. The ID is matched against the primary key field of the primary Data Model Object (DMO) in the data graph.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### getDataGraphData(dataGraphEntityName, id, dataspace)

Query a data graph in a specified data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput getDataGraphData(String dataGraphEntityName, String id, String dataspace)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Record ID to query for. The ID is matched against the primary key field of the primary Data Model Object (DMO) in the data graph.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space in which to query the data graph.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### getDataGraphData(dataGraphEntityName, id, live)

Query a data graph by performing a live lookup in the default data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.

#### API Version

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput getDataGraphData(String dataGraphEntityName, String id, Boolean live)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Record ID to query for. The ID is matched against the primary key field of the primary Data Model Object (DMO) in the data graph.

live

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether live lookup for the data graph is enabled (true) or not (false). With live lookup, the Query Service does not query the data graph itself. It instead queries the data graph's metadata to return data that is guaranteed to be fresh. The response mimics the structure of the regular JSON-formatted response for the data graph. You can use live lookup on any data graph, regardless of the complexity of its structure.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### getDataGraphData(dataGraphEntityName, id, dataspace, live)

Query a data graph by performing a live lookup in a specified data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.

#### API Version

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput getDataGraphData(String dataGraphEntityName, String id, String dataspace, Boolean live)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Record ID to query for. The ID is matched against the primary key field of the primary Data Model Object (DMO) in the data graph.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space in which to query the data graph.

live

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether live lookup for the data graph is enabled (true) or not (false). With live lookup, the Query Service does not query the data graph itself. It instead queries the data graph's metadata to return data that is guaranteed to be fresh. The response mimics the structure of the regular JSON-formatted response for the data graph. You can use live lookup on any data graph, regardless of the complexity of its structure.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys)

Query a data graph by the primary key of either the primary Data Model Object (DMO) or the Individual linked DMO. Get the data from the default data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput getDataGraphDataWithLookupKeys(String dataGraphEntityName, String lookupKeys)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

lookupKeys

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Lookup key and value to search on. Specify one of these key-value pairs:

-   The primary key of the primary DMO, for example, lookupKeys=\[id\_\_c=def\]
-   The primary key of the Individual linked DMO, for example, lookupKeys=\[IndividualLink\_\_dlm.SourceRecordId\_\_c=1111111\]

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys, dataspace)

Query a data graph by the primary key of either the primary Data Model Object (DMO) or the Individual linked DMO. Get the data from a specified data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput getDataGraphDataWithLookupKeys(String dataGraphEntityName, String lookupKeys, String dataspace)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

lookupKeys

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Lookup key and value to search on. Specify one of these key-value pairs:

-   The primary key of the primary DMO, for example, lookupKeys=\[id\_\_c=def\]
-   The primary key of the Individual linked DMO, for example, lookupKeys=\[IndividualLink\_\_dlm.SourceRecordId\_\_c=1111111\]

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space in which to query the data graph.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys, dataspace, noCache)

Query a data graph by the primary key of either the primary Data Model Object (DMO) or the Individual linked DMO. Get the data from a specified data space. Get data from a standard or real-time data graph. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.

#### API Version

64.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput getDataGraphDataWithLookupKeys(String dataGraphEntityName, String lookupKeys, String dataspace, Boolean noCache)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

lookupKeys

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Lookup key and value to search on. Specify one of these key-value pairs:

-   The primary key of the primary DMO, for example, lookupKeys=\[id\_\_c=def\]
-   The primary key of the Individual linked DMO, for example, lookupKeys=\[IndividualLink\_\_dlm.SourceRecordId\_\_c=1111111\]

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space in which to query the data graph.

noCache

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether to read data from the standard, non-real-time data graph (true) or the real-time data graph (false).

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### getDataGraphMetadata()

Retrieve metadata from all data graphs in the default data space. Retrieves data from both standard and real-time data graphs.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpDgMetadata getDataGraphMetadata()

#### Return Value

Type: [ConnectApi.CdpDgMetadata](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_dg_metadata.htm "Represents metadata from one or more data graphs.")

### getDataGraphMetadata(dataGraphEntityName)

Retrieve metadata from a specified data graph in the default data space. Retrieves data from both standard and real-time data graphs.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpDgMetadata getDataGraphMetadata(String dataGraphEntityName)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

#### Return Value

Type: [ConnectApi.CdpDgMetadata](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_dg_metadata.htm "Represents metadata from one or more data graphs.")

### getDataGraphMetadata(dataGraphEntityName, dataspace)

Retrieve metadata from a specified data graph in a specified data space. Retrieves data from both standard and real-time data graphs.

#### API Version

59.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpDgMetadata getDataGraphMetadata(String dataGraphEntityName, String dataspace)

#### Parameters

dataGraphEntityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the data graph to query.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space in which to query the data graph.

#### Return Value

Type: [ConnectApi.CdpDgMetadata](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_dg_metadata.htm "Represents metadata from one or more data graphs.")

### getInsightsMetadata()

Get Insight metadata, including Calculated Insight objects, their dimensions and measures.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getInsightsMetadata()

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")

### getInsightsMetadata(ciName)

Get metadata for a Calculated Insight object. Metadata includes dimensions and measures.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getInsightsMetadata(String ciName)

#### Parameters

ciName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the Calculated Insight object, for example, IndividualChildrenCount\_\_cio.

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")

### getInsightsMetadata(ciName, dataspace)

Get metadata for a Calculated Insight object and specify the data space. Metadata includes dimensions and measures.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getInsightsMetadata(String ciName, String dataspace)

#### Parameters

ciName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the Calculated Insight object, for example, IndividualChildrenCount\_\_cio.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")

### getProfileMetadata()

Get metadata for data model objects in the profile category, including Individual, Contact Point Email, Unified Individual, and Contact Point Address objects. Metadata includes the objects, their fields, and category.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getProfileMetadata()

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")

### getProfileMetadata(dataModelName)

Get metadata for a data model object in the profile category, such as Individual, Contact Point Email, Unified Individual, and Contact Point Address. Metadata includes the list of fields, data types, and indexes available for lookup.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getProfileMetadata(String dataModelName)

#### Parameters

dataModelName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data model object, for example, UnifiedIndividual\_\_dlm.

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")

### getProfileMetadata(dataModelName, dataspace)

Get metadata for a data model object in the profile category, such as Individual, Contact Point Email, Unified Individual, and Contact Point Address. Also, specify the data space. Metadata includes the list of fields, data types, and indexes available for lookup.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryMetadataOutput getProfileMetadata(String dataModelName, String dataspace)

#### Parameters

dataModelName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data model object, for example, UnifiedIndividual\_\_dlm.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryMetadataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_metadata_output.htm "Query metadata result.")

### queryANSISql(input)

Synchronously query data across data model, lake, unified, and linked objects. This query returns up to 49,999 rows.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

A newer version of the Query API is available. We recommend using [queryAnsiSqlV2(input)](#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_2 "Query data across data model, lake, unified, and linked objects.") and [nextBatchAnsiSqlV2(nextBatchId)](#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_1 "Get the next batch of data across data model, lake, unified, and linked objects.") to take advantage of subsequent requests and larger response sizes.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryANSISql(ConnectApi.CdpQueryInput input)

#### Parameters

input

Type: [ConnectApi.CdpQueryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_query.htm "Data query input.")

A ConnectApi.CdpQueryInput body with the SQL query.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### queryANSISql(input, batchSize, offset, orderby)

Synchronously query data across data model, lake, unified, and linked objects. Specify batch size, offset, and order of the results. This query returns up to 49,999 rows.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

A newer version of the Query API is available. We recommend using [queryAnsiSqlV2(input)](#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_2 "Query data across data model, lake, unified, and linked objects.") and [nextBatchAnsiSqlV2(nextBatchId)](#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_1 "Get the next batch of data across data model, lake, unified, and linked objects.") to take advantage of subsequent requests and larger response sizes.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryANSISql(ConnectApi.CdpQueryInput input, Integer batchSize, Integer offset, String orderby)

#### Parameters

input

Type: [ConnectApi.CdpQueryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_query.htm "Data query input.")

A ConnectApi.CdpQueryInput body with the SQL query.

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of records to return. Values are from 1\-49999. The default value is 49999.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. The sum of offset and batchSize must be less than 2147483647. The default value is 0.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated values to sort the results in ascending or descending order, for example, GenderId\_\_c ASC,Occupation\_\_c DESC.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### queryANSISql(input, batchSize, offset, orderby, dataspace)

Synchronously query data across data model, lake, unified, and linked objects. Specify batch size, offset, order of the results, and data space. This query returns up to 49,999 rows.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

A newer version of the Query API is available. We recommend using [queryAnsiSqlV2(input)](#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_2 "Query data across data model, lake, unified, and linked objects.") and [nextBatchAnsiSqlV2(nextBatchId)](#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_1 "Get the next batch of data across data model, lake, unified, and linked objects.") to take advantage of subsequent requests and larger response sizes.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryANSISql(ConnectApi.CdpQueryInput input, Integer batchSize, Integer offset, String orderby, String dataspace)

#### Parameters

input

Type: [ConnectApi.CdpQueryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_query.htm "Data query input.")

A ConnectApi.CdpQueryInput body with the SQL query.

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of records to return. Values are from 1\-49999. The default value is 49999.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. The sum of offset and batchSize must be less than 2147483647. The default value is 0.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated values to sort the results in ascending or descending order, for example, GenderId\_\_c ASC,Occupation\_\_c DESC.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### queryAnsiSqlV2(input)

Query data across data model, lake, unified, and linked objects.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutputV2 queryAnsiSqlV2(ConnectApi.CdpQueryInput input)

#### Parameters

input

Type: [ConnectApi.CdpQueryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_query.htm "Data query input.")

A ConnectApi.CdpQueryInput body with the SQL query.

#### Return Value

Type: [ConnectApi.CdpQueryOutputV2](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output_v2.htm "Query output for the V2 API.")

#### Usage

Use the nextBatchId in the ConnectApi.CdpQueryOutputV2 output class as the nextBatchId parameter in the [nextBatchAnsiSqlV2(nextBatchId)](#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_1 "Get the next batch of data across data model, lake, unified, and linked objects.") method to continue getting batches of data for up to an hour.

### queryAnsiSqlV2(input, dataspace)

Query data across data model, lake, unified, and linked objects. Also, specify the data space.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutputV2 queryAnsiSqlV2(ConnectApi.CdpQueryInput input, String dataspace)

#### Parameters

input

Type: [ConnectApi.CdpQueryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_query.htm "Data query input.")

A ConnectApi.CdpQueryInput body with the SQL query.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryOutputV2](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output_v2.htm "Query output for the V2 API.")

#### Usage

Use the nextBatchId in the ConnectApi.CdpQueryOutputV2 output class as the nextBatchId parameter in the [nextBatchAnsiSqlV2(nextBatchId)](#apex_ConnectAPI_CdpQuery_nextBatchAnsiSqlV2_1 "Get the next batch of data across data model, lake, unified, and linked objects.") method to continue getting batches of data for up to an hour.

### nextBatchAnsiSqlV2(nextBatchId)

Get the next batch of data across data model, lake, unified, and linked objects.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutputV2 nextBatchAnsiSqlV2(String nextBatchId)

#### Parameters

nextBatchId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the next batch. See the Usage section for more information.

#### Return Value

Type: [ConnectApi.CdpQueryOutputV2](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output_v2.htm "Query output for the V2 API.")

#### Usage

Initially, use the [queryAnsiSqlV2(input)](#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_2 "Query data across data model, lake, unified, and linked objects.") method to query up to 8 MB of data. Use the nextBatchId from the ConnectApi.CdpQueryOutputV2 output class as the nextBatchId parameter in this method to get the next batch of data. You can continue using subsequent next batch IDs for up to an hour.

### nextBatchAnsiSqlV2(nextBatchId, dataspace)

Get the next batch of data across data model, lake, unified, and linked objects. Also, specify the data space.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutputV2 nextBatchAnsiSqlV2(String nextBatchId, String dataspace)

#### Parameters

nextBatchId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the next batch. See the Usage section for more information.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryOutputV2](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output_v2.htm "Query output for the V2 API.")

#### Usage

Initially, use the [queryAnsiSqlV2(input)](#apex_ConnectAPI_CdpQuery_queryAnsiSqlV2_2 "Query data across data model, lake, unified, and linked objects.") method to query up to 8 MB of data. Use the nextBatchId from the ConnectApi.CdpQueryOutputV2 output class as the nextBatchId parameter in this method to get the next batch of data. You can continue using subsequent next batch IDs for up to an hour.

### querySql(input)

Submit an SQL query request for execution and retrieve the first chunk of data.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlOutput querySql(ConnectApi.QuerySqlInput input)

#### Parameters

input

Type: [ConnectApi.QuerySqlInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_sql.htm "Represents the input to create an SQL query.")

Input representation for an SQL query.

#### Return Value

Type: [ConnectApi.QuerySqlOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql.htm "Represents the SQL query output.")

#### Usage

To get started with writing queries, see [Write a Simple Query](https://developer.salesforce.com/docs/data/data-cloud-query-guide/guide/write-simple-query.html). For more information about creating SQL statements, see [Data 360 SQL Syntax](https://developer.salesforce.com/docs/data/data-cloud-query-guide/references/dc-sql-reference/syntax.html).

#### Example

Submit a query, check its status, then retrieve and process data in chunks until all results are fetched:

```

```

### querySql(input, dataspace)

Submit an SQL query request for execution and specify the data space.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlOutput querySql(ConnectApi.QuerySqlInput input, String dataspace)

#### Parameters

input

Type: [ConnectApi.QuerySqlInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_sql.htm "Represents the input to create an SQL query.")

Input representation for an SQL query.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.QuerySqlOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql.htm "Represents the SQL query output.")

#### Usage

To get started with writing queries, see [Write a Simple Query](https://developer.salesforce.com/docs/data/data-cloud-query-guide/guide/write-simple-query.html). For more information about creating SQL statements, see [Data 360 SQL Syntax](https://developer.salesforce.com/docs/data/data-cloud-query-guide/references/dc-sql-reference/syntax.html).

#### Example

Submit a query with a data space:

```

```

### querySql(input, workloadName, dataspace)

Submit an SQL query request for execution and specify the workload name and data space.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlOutput querySql(ConnectApi.QuerySqlInput input, String workloadName, String dataspace)

#### Parameters

input

Type: [ConnectApi.QuerySqlInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_query_sql.htm "Represents the input to create an SQL query.")

Input representation for an SQL query.

workloadName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the scenario, task, or application name that your query handles. Set this value to help Salesforce Customer Support assist you with debugging issues.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.QuerySqlOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql.htm "Represents the SQL query output.")

#### Usage

To get started with writing queries, see [Write a Simple Query](https://developer.salesforce.com/docs/data/data-cloud-query-guide/guide/write-simple-query.html). For more information about creating SQL statements, see [Data 360 SQL Syntax](https://developer.salesforce.com/docs/data/data-cloud-query-guide/references/dc-sql-reference/syntax.html).

#### Example

Submit a query with a data space and workload name:

```

```

### querySqlRows(queryId, offset, rowLimit)

Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlPageOutput querySqlRows(String queryId, Long offset, Long rowLimit)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID from the initial query to retrieve more results, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

offset

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Row number to start with when retrieving the next chunk of query results. Value must be less than the total number of available rows. If unspecified, no rows are skipped.

rowLimit

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Maximum number of rows to include in the response. The actual number of rows returned may be lower than the requested value if fewer are available or if the result set exceeds internal system size limits. Value must be greater than 0.

#### Return Value

Type: [ConnectApi.QuerySqlPageOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_page.htm "Represents the rows output for an SQL query.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Query additional rows with an offset and row limit:

```

```

### querySqlRows(queryId, offset, rowLimit, omitSchema)

Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify whether to include metadata in the response or not. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlPageOutput querySqlRows(String queryId, Long offset, Long rowLimit, Boolean omitSchema)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID from the initial query to retrieve more results, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

offset

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Row number to start with when retrieving the next chunk of query results. Value must be less than the total number of available rows. If unspecified, no rows are skipped.

rowLimit

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Maximum number of rows to include in the response. The actual number of rows returned may be lower than the requested value if fewer are available or if the result set exceeds internal system size limits. Value must be greater than 0.

omitSchema

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether to exclude metadata from the response (true) or not (false). Omitting the schema reduces the amount of data returned and improves performance.

#### Return Value

Type: [ConnectApi.QuerySqlPageOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql.htm "Represents the SQL query output.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Query additional rows with an offset, a row limit, and omitting the schema:

```

```

### querySqlRows(queryId, offset, rowLimit, dataspace)

Get additional query results that weren’t returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the data space. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlPageOutput querySqlRows(String queryId, Long offset, Long rowLimit, String dataspace)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID from the initial query to retrieve more results, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

offset

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Row number to start with when retrieving the next chunk of query results. Value must be less than the total number of available rows. If unspecified, no rows are skipped.

rowLimit

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Maximum number of rows to include in the response. The actual number of rows returned may be lower than the requested value if fewer are available or if the result set exceeds internal system size limits. Value must be greater than 0.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.QuerySqlPageOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql.htm "Represents the SQL query output.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Query additional rows with an offset, row limit, and data space:

```

```

### querySqlRows(queryId, offset, rowLimit, omitSchema, dataspace)

Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the data space and whether or not to exclude metadata from the response. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlPageOutput querySqlRows(String queryId, Long offset, Long rowLimit, Boolean omitSchema, String dataspace)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID from the initial query to retrieve more results, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

offset

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Row number to start with when retrieving the next chunk of query results. Value must be less than the total number of available rows. If unspecified, no rows are skipped.

rowLimit

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Maximum number of rows to include in the response. The actual number of rows returned may be lower than the requested value if fewer are available or if the result set exceeds internal system size limits. Value must be greater than 0.

omitSchema

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether to exclude metadata from the response (true) or not (false). Omitting the schema reduces the amount of data returned and improves performance.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.QuerySqlPageOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql.htm "Represents the SQL query output.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Query additional rows with an offset, row limit, data space, and omitting the schema:

```

```

### querySqlRows(queryId, offset, rowLimit, workloadName, dataspace)

Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the workload name and data space. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlPageOutput querySqlRows(String queryId, Long offset, Long rowLimit, String workloadName, String dataspace)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID from the initial query to retrieve more results, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

offset

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Row number to start with when retrieving the next chunk of query results. Value must be less than the total number of available rows. If unspecified, no rows are skipped.

rowLimit

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Maximum number of rows to include in the response. The actual number of rows returned may be lower than the requested value if fewer are available or if the result set exceeds internal system size limits. Value must be greater than 0.

workloadName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the scenario, task, or application name that your query handles. Set this value to help Salesforce Customer Support assist you with debugging issues.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.QuerySqlPageOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql.htm "Represents the SQL query output.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Query additional rows with an offset, row limit, workload name, and data space:

```

```

### querySqlRows(queryId, offset, rowLimit, omitSchema, workloadName, dataspace)

Get additional query results that weren't returned in the initial request. Paginate through existing query results by specifying the offset and row limit. Also, specify the workload name, data space, and whether or not to exclude metadata from the response. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlPageOutput querySqlRows(String queryId, Long offset, Long rowLimit, Boolean omitSchema, String workloadName, String dataspace)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID from the initial query to retrieve more results, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

offset

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Row number to start with when retrieving the next chunk of query results. Value must be less than the total number of available rows. If unspecified, no rows are skipped.

rowLimit

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

Maximum number of rows to include in the response. The actual number of rows returned may be lower than the requested value if fewer are available or if the result set exceeds internal system size limits. Value must be greater than 0.

omitSchema

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether to exclude metadata from the response (true) or not (false). Omitting the schema reduces the amount of data returned and improves performance.

workloadName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the scenario, task, or application name that your query handles. Set this value to help Salesforce Customer Support assist you with debugging issues.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.QuerySqlPageOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql.htm "Represents the SQL query output.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Query additional rows with an offset, row limit, workload name, data space, and omitting the schema:

```

```

### cancelQuerySql(queryId)

Delete the specified query and terminate long-running queries that are no longer needed to manage resource consumption.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static Void cancelQuerySql(String queryId)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the query to cancel, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

#### Return Value

Type: Void

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Cancel a query:

```

```

### cancelQuerySql(queryId, dataspace)

Delete the specified query and terminate long-running queries that are no longer needed to manage resource consumption. Specify the data space.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static Void cancelQuerySql(String queryId, String dataspace)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the query to cancel, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: Void

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Cancel a query with a data space:

```

```

### cancelQuerySql(queryId, workloadName, dataspace)

Delete the specified query and terminate long-running queries that are no longer needed to manage resource consumption. Specify the data space and workload name.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static Void cancelQuerySql(String queryId, String workloadName, String dataspace)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the query to cancel, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

workloadName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the scenario, task, or application name that your query handles. Set this value to help Salesforce Customer Support assist you with debugging issues.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: Void

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Cancel a query with a workload name and data space:

```

```

### querySqlStatus(queryId)

Get the status of an SQL query request. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlStatus querySqlStatus(String queryId)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the query to return the status for, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

#### Return Value

Type: [ConnectApi.QuerySqlStatus](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_status.htm "Represents the status of an SQL query.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Get the status of a query:

```

```

### querySqlStatus(queryId, waitTimeMs)

Get the status of an SQL query request and specify the time to wait before returning the response. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlStatus querySqlStatus(String queryId, Integer waitTimeMs)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the query to return the status for, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

waitTimeMs

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum time (in milliseconds) to wait for the result. Configure a wait time up to 10 seconds before returning the status without chunk information. If unspecified, the status is returned immediately. Use this to avoid resource limits by delaying requests.

#### Return Value

Type: [ConnectApi.QuerySqlStatus](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_status.htm "Represents the status of an SQL query.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Get the status of a query with wait time:

```

```

### querySqlStatus(queryId, dataspace)

Get the status of an SQL query request and specify the data space. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlStatus querySqlStatus(String queryId, String dataspace)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the query to return the status for, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.QuerySqlStatus](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_status.htm "Represents the status of an SQL query.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Get the status of a query with a data space:

```

```

### querySqlStatus(queryId, dataspace, waitTimeMs)

Get the status of an SQL query request. Specify the data space and time to wait before returning the response. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlStatus querySqlStatus(String queryId, String dataspace, Integer waitTimeMs)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the query to return the status for, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

waitTimeMs

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum time (in milliseconds) to wait for the result. Configure a wait time up to 10 seconds before returning the status. If unspecified, the status is returned immediately. Use this to avoid resource limits by delaying requests.

#### Return Value

Type: [ConnectApi.QuerySqlStatus](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_status.htm "Represents the status of an SQL query.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Get the status of a query with a data space and wait time:

```

```

### querySqlStatus(queryId, workloadName, dataspace)

Get the status of an SQL query request. Specify the workload name and data space. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlStatus querySqlStatus(String queryId, String workloadName, String dataspace)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the query to return the status for, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

workloadName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the scenario, task, or application name that your query handles. Set this value to help Salesforce Customer Support assist you with debugging issues.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.QuerySqlStatus](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_status.htm "Represents the status of an SQL query.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Get the status of a query with a workload name and data space:

```

```

### querySqlStatus(queryId, workloadName, dataspace, waitTimeMs)

Get the status of an SQL query request. Specify the workload name, data space, and time to wait before returning the response. Results are available for up to 24 hours.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.QuerySqlStatus querySqlStatus(String queryId, String workloadName, String dataspace, Integer waitTimeMs)

#### Parameters

queryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the query to return the status for, for example MTAuMjMuMTU2LjIwODo3NDg0\_49169cf8-a6f4-738f-6544-c3a7ba2ff548. The query ID is returned in the querySql response.

workloadName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the scenario, task, or application name that your query handles. Set this value to help Salesforce Customer Support assist you with debugging issues.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

waitTimeMs

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum time (in milliseconds) to wait for the result. Configure a wait time up to 10 seconds before returning the status . If unspecified, the status is returned immediately. Use this to avoid resource limits by delaying requests.

#### Return Value

Type: [ConnectApi.QuerySqlStatus](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_query_sql_status.htm "Represents the status of an SQL query.")

#### Usage

Retrieve the queryId from the initial query request. To submit an SQL query request for execution, call [querySql(input)](#apex_ConnectAPI_CdpQuery_querySql_1 "Submit an SQL query request for execution and retrieve the first chunk of data."), [querySql(input, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_2 "Submit an SQL query request for execution and specify the data space."), or [querySql(input, workloadName, dataspace)](#apex_ConnectAPI_CdpQuery_querySql_3 "Submit an SQL query request for execution and specify the workload name and data space.").

#### Example

Get the status of a query with a workload name, data space, and wait time:

```

```

### queryCalculatedInsights(ciName, dimensions, measures, orderby, filters, batchSize, offset)

Query a Calculated Insight object.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryCalculatedInsights(String ciName, String dimensions, String measures, String orderby, String filters, Integer batchSize, Integer offset)

#### Parameters

ciName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the Calculated Insight object, for example, IndividualChildrenCount\_\_cio.

dimensions

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 10 dimensions, such as GenderId\_\_c, to project. If unspecified, this parameter includes all of the available dimensions.

measures

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 5 measures, such as TotalSales\_\_c, to project. If unspecified, this parameter includes all of the available measures.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set, such as GenderId\_\_c ASC,​Occupation\_\_c DESC. If unspecified, items are returned in the order they are retrieved.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Filter the result set to a more narrow scope or specific type, such as \[GenderId\_\_c=Male,​FirstName\_\_c=Angel\].

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items to return. Values are from 1–4,999. If unspecified, the default value is 4999.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. If unspecified, no rows are skipped.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### queryCalculatedInsights(ciName, dimensions, measures, orderby, filters, batchSize, offset, timeGranularity)

Query a Calculated Insight object within a specified time range.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryCalculatedInsights(String ciName, String dimensions, String measures, String orderby, String filters, Integer batchSize, Integer offset, String timeGranularity)

#### Parameters

ciName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the Calculated Insight object, for example, IndividualChildrenCount\_\_cio.

dimensions

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 10 dimensions, such as GenderId\_\_c, to project. If unspecified, this parameter includes all of the available dimensions.

measures

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 5 measures, such as TotalSales\_\_c, to project. If unspecified, this parameter includes all of the available measures.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set, such as GenderId\_\_c ASC,​Occupation\_\_c DESC. If unspecified, items are returned in the order they are retrieved.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Filter the result set to a more narrow scope or specific type, such as \[GenderId\_\_c=Male,​FirstName\_\_c=Angel\].

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items to return. Values are from 1–4,999. If unspecified, the default value is 4999.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. If unspecified, no rows are skipped.

timeGranularity

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Time range for the measures. Values are:

-   HOUR
-   DAY
-   MONTH
-   QUARTER
-   YEAR

If unspecified, no time range is applied.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### queryCalculatedInsights(ciName, dimensions, measures, orderby, filters, batchSize, offset, timeGranularity, dataspace)

Query a Calculated Insight object within a specified time range and specify the data space.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryCalculatedInsights(String ciName, String dimensions, String measures, String orderby, String filters, Integer batchSize, Integer offset, String timeGranularity, String dataspace)

#### Parameters

ciName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the Calculated Insight object, for example, IndividualChildrenCount\_\_cio.

dimensions

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 10 dimensions, such as GenderId\_\_c, to project. If unspecified, this parameter includes all of the available dimensions.

measures

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 5 measures, such as TotalSales\_\_c, to project. If unspecified, this parameter includes all of the available measures.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set, such as GenderId\_\_c ASC,​Occupation\_\_c DESC. If unspecified, items are returned in the order they are retrieved.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Filter the result set to a more narrow scope or specific type, such as \[GenderId\_\_c=Male,​FirstName\_\_c=Angel\].

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items to return. Values are from 1–4,999. If unspecified, the default value is 4999.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. If unspecified, no rows are skipped.

timeGranularity

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Time range for the measures. Values are:

-   HOUR
-   DAY
-   MONTH
-   QUARTER
-   YEAR

If unspecified, no time range is applied.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### queryProfileApi(dataModelName, filters, fields, batchSize, offset, orderby)

Query a Profile data model object using filters.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryProfileApi(String dataModelName, String filters, String fields, Integer batchSize, Integer offset, String orderby)

#### Parameters

dataModelName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data model object, for example, UnifiedIndividual\_\_dlm.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of equality expressions within square brackets, for example, \[FirstName\_\_c=DON\].

fields

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 50 field names that you want to include in the result, for example, Id\_\_c,FirstName\_\_c,​GenderId\_\_c,Occupation\_\_c. If unspecified, Id\_\_c is returned.

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items to return. Values are from 1–4,999. If unspecified, the default value is 100.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. If unspecified, no rows are skipped.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set, such as GenderId\_\_c ASC,​Occupation\_\_c DESC. If unspecified, items are returned in the order they are retrieved.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### queryProfileApi(dataModelName, id, searchKey, filters, fields, batchSize, offset, orderby)

Query a Profile data model object using filters and a search key.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryProfileApi(String dataModelName, String id, String searchKey, String filters, String fields, Integer batchSize, Integer offset, String orderby)

#### Parameters

dataModelName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data model object, for example, UnifiedIndividual\_\_dlm.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Value of the primary or secondary key field, for example, John. If unspecified, defaults to the value of the primary key field.

searchKey

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If a field other than the primary key is used, name of the key field, for example, FirstName\_\_c.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of equality expressions within square brackets, for example, \[FirstName\_\_c=DON\].

fields

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 50 field names that you want to include in the result, for example, Id\_\_c,FirstName\_\_c,​GenderId\_\_c,Occupation\_\_c. If unspecified, Id\_\_c is returned.

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items to return. Values are from 1–4,999. If unspecified, the default value is 100.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. If unspecified, no rows are skipped.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set, such as GenderId\_\_c ASC,​Occupation\_\_c DESC. If unspecified, items are returned in the order they are retrieved.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### queryProfileApi(dataModelName, id, childDataModelName, searchKey, filters, fields, batchSize, offset, orderby)

Query a Profile data model object and a child object using filters and a search key.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryProfileApi(String dataModelName, String id, String childDataModelName, String searchKey, String filters, String fields, Integer batchSize, Integer offset, String orderby)

#### Parameters

dataModelName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data model object, for example, UnifiedIndividual\_\_dlm.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Value of the primary or secondary key field, for example, John. If unspecified, defaults to the value of the primary key field.

childDataModelName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the child data model object, for example, UnifiedContactPointEmail\_\_dlm.

searchKey

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If a field other than the primary key is used, name of the key field, for example, FirstName\_\_c.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of equality expressions within square brackets, for example, \[FirstName\_\_c=DON\]. Filters are applied to the parent object only.

fields

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of child object field names that you want to include in the result, for example, Id\_\_c,EmailAddress\_\_c. If unspecified, the first 10 alphabetically sorted fields are returned.

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items to return. Values are from 1–4,999. If unspecified, the default value is 100.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. If unspecified, no rows are skipped.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set, such as GenderId\_\_c ASC,​Occupation\_\_c DESC. If unspecified, items are returned in the order they are retrieved.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### queryProfileApi(dataModelName, id, ciName, searchKey, dimensions, measures, filters, fields, batchSize, offset, orderby)

Query a Profile data model object and a Calculated Insight object using filters and a search key.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryProfileApi(String dataModelName, String id, String ciName, String searchKey, String dimensions, String measures, String filters, String fields, Integer batchSize, Integer offset, String orderby)

#### Parameters

dataModelName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data model object, for example, UnifiedIndividual\_\_dlm.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Value of the primary or secondary key field, for example, John. If unspecified, defaults to the value of the primary key field.

ciName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the Calculated Insight object, for example, IndividualChildrenCount\_\_cio.

searchKey

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If a field other than the primary key is used, name of the key field, for example, FirstName\_\_c.

dimensions

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 10 dimensions, such as GenderId\_\_c, to project. If unspecified, this parameter includes all of the available dimensions.

measures

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 5 measures, such as TotalSales\_\_c, to project. If unspecified, this parameter includes all of the available measures.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of equality expressions within square brackets, for example, \[FirstName\_\_c=DON\].

fields

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 50 field names that you want to include in the result, for example, Id\_\_c,FirstName\_\_c,​GenderId\_\_c,Occupation\_\_c. If unspecified, Id\_\_c is returned.

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items to return. Values are from 1–4,999. If unspecified, the default value is 100.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. If unspecified, no rows are skipped.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set, such as GenderId\_\_c ASC,​Occupation\_\_c DESC. If unspecified, items are returned in the order they are retrieved.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### queryProfileApi(dataModelName, id, ciName, searchKey, dimensions, measures, filters, fields, batchSize, offset, orderby, timeGranularity)

Query a Profile data model object and a Calculated Insight object using filters, a search key, and a time range.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryProfileApi(String dataModelName, String id, String ciName, String searchKey, String dimensions, String measures, String filters, String fields, Integer batchSize, Integer offset, String orderby, String timeGranularity)

#### Parameters

dataModelName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data model object, for example, UnifiedIndividual\_\_dlm.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Value of the primary or secondary key field, for example, John. If unspecified, defaults to the value of the primary key field.

ciName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the Calculated Insight object, for example, IndividualChildrenCount\_\_cio.

searchKey

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If a field other than the primary key is used, name of the key field, for example, FirstName\_\_c.

dimensions

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 10 dimensions, such as GenderId\_\_c, to project. If unspecified, this parameter includes all of the available dimensions.

measures

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 5 measures, such as TotalSales\_\_c, to project. If unspecified, this parameter includes all of the available measures.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of equality expressions within square brackets, for example, \[FirstName\_\_c=DON\].

fields

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 50 field names that you want to include in the result, for example, Id\_\_c,FirstName\_\_c,​GenderId\_\_c,Occupation\_\_c. If unspecified, Id\_\_c is returned.

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items to return. Values are from 1–4,999. If unspecified, the default value is 100.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. If unspecified, no rows are skipped.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set, such as GenderId\_\_c ASC,​Occupation\_\_c DESC. If unspecified, items are returned in the order they are retrieved.

timeGranularity

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Time range for the measures. Values are:

-   HOUR
-   DAY
-   MONTH
-   QUARTER
-   YEAR

If unspecified, no time range is applied.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### queryProfileApi(dataModelName, id, ciName, searchKey, dimensions, measures, filters, fields, batchSize, offset, orderby, timeGranularity, dataspace)

Query a Profile data model object and a Calculated Insight object using filters, a search key, a time range, and a data space.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryOutput queryProfileApi(String dataModelName, String id, String ciName, String searchKey, String dimensions, String measures, String filters, String fields, Integer batchSize, Integer offset, String orderby, String timeGranularity, String dataspace)

#### Parameters

dataModelName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data model object, for example, UnifiedIndividual\_\_dlm.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Value of the primary or secondary key field, for example, John. If unspecified, defaults to the value of the primary key field.

ciName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the Calculated Insight object, for example, IndividualChildrenCount\_\_cio.

searchKey

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If a field other than the primary key is used, name of the key field, for example, FirstName\_\_c.

dimensions

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 10 dimensions, such as GenderId\_\_c, to project. If unspecified, this parameter includes all of the available dimensions.

measures

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 5 measures, such as TotalSales\_\_c, to project. If unspecified, this parameter includes all of the available measures.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of equality expressions within square brackets, for example, \[FirstName\_\_c=DON\].

fields

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Comma-separated list of up to 50 field names that you want to include in the result, for example, Id\_\_c,FirstName\_\_c,​GenderId\_\_c,Occupation\_\_c. If unspecified, Id\_\_c is returned.

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items to return. Values are from 1–4,999. If unspecified, the default value is 100.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. If unspecified, no rows are skipped.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set, such as GenderId\_\_c ASC,​Occupation\_\_c DESC. If unspecified, items are returned in the order they are retrieved.

timeGranularity

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Time range for the measures. Values are:

-   HOUR
-   DAY
-   MONTH
-   QUARTER
-   YEAR

If unspecified, no time range is applied.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_output.htm "Query result.")

### universalIdLookupBySourceId(entityName, dataSourceId, dataSourceObjectId, sourceRecordId)

Look up objects by source ID.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryDataOutput universalIdLookupBySourceId(String entityName, String dataSourceId, String dataSourceObjectId, String sourceRecordId)

#### Parameters

entityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Entity name.

dataSourceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Data source ID.

dataSourceObjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Data source object ID.

sourceRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Source record ID.

#### Return Value

Type: [ConnectApi.CdpQueryDataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_data_output.htm "Query data output.")

### universalIdLookupBySourceId(entityName, dataSourceId, dataSourceObjectId, sourceRecordId, dataspace)

Look up objects by source ID and specify the data space.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpQueryDataOutput universalIdLookupBySourceId(String entityName, String dataSourceId, String dataSourceObjectId, String sourceRecordId, String dataspace)

#### Parameters

entityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Entity name.

dataSourceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Data source ID.

dataSourceObjectId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Data source object ID.

sourceRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Source record ID.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space to query. If unspecified, the default data space is used.

#### Return Value

Type: [ConnectApi.CdpQueryDataOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_query_data_output.htm "Query data output.")

## Code Examples

```apex
ConnectApi.QuerySqlInput query = new ConnectApi.QuerySqlInput();
query.sql = 'SELECT street_address__c FROM test__dll limit 200000';

Integer numProcessed = 0;
Long startTime = System.currentTimeMillis();
System.debug('Query execution started at: ' + startTime);

ConnectApi.QuerySqlOutput queryOutput = ConnectApi.CdpQuery.querySql(query, 'sample_workload', 'default');
ConnectApi.QuerySqlStatus status = queryOutput.status;

// Process chunks as they become available
while(status.completionStatus != ConnectApi.QuerySqlStatusEnum.FINISHED || numProcessed < status.rowCount) {
    
    // If we have unprocessed rows available, fetch and process them
    if (status.rowCount > numProcessed) {
        ConnectApi.QuerySqlPageOutput pageOutput = ConnectApi.CdpQuery.querySqlRows(status.queryId, numProcessed, 10000, 'sample_workload', 'default');
        
        // Process this chunk - inline max length calculation
        Integer maxLength = 0;
        for (ConnectApi.QuerySqlRow rowObj : pageOutput.dataRows) {
            String streetAddress = (String) rowObj.row[0];
            if (streetAddress.length() > maxLength) {
                maxLength = streetAddress.length();
            }
        }
        
        System.debug('Chunk - Rows: ' + pageOutput.dataRows.size() + ', Max street_address length: ' + maxLength);
        numProcessed += pageOutput.dataRows.size();
        
    } else if (status.completionStatus != ConnectApi.QuerySqlStatusEnum.FINISHED) {
        // No new rows available yet, wait a bit before checking status again
        System.debug('Query in progress. Total rows available: ' + status.rowCount + ', Processed: ' + numProcessed);
        
        // Small delay to avoid excessive polling (adjust as needed)
        // Note: In Apex, we can't use Thread.sleep(), so we'll just continue to next iteration
    }
    
    // Update status if query is still running
    if (status.completionStatus != ConnectApi.QuerySqlStatusEnum.FINISHED) {
        status = ConnectApi.CdpQuery.querySqlStatus(status.queryId, 'sample_workload', 'default');
    }
}

Long completionTime = System.currentTimeMillis();
System.debug('Query and processing completed at: ' + completionTime + ', Total time: ' + (completionTime - startTime) + ' ms');
System.debug('Total rows processed: ' + numProcessed + ' out of ' + status.rowCount + ' total rows');
```

```apex
ConnectApi.QuerySqlInput input = new ConnectApi.QuerySqlInput();
input.sql = 'select * from "passenger2__dll"';
        
ConnectApi.QuerySqlOutput output = ConnectApi.CdpQuery.querySql(input, 'default');
System.debug(output);
        
System.debug(output.dataRows);
System.debug(output.metadata);
System.debug(output.status);
System.debug(output.returnedRows);
```

```apex
ConnectApi.QuerySqlInput input = new ConnectApi.QuerySqlInput();
input.sql = 'select * from "passenger2__dll"';

ConnectApi.QuerySqlOutput output = ConnectApi.CdpQuery.querySql(input, 'workloadName', 'default');
System.debug(output);

System.debug(output.dataRows);
System.debug(output.metadata);
System.debug(output.status);
System.debug(output.returnedRows);
```

```apex
ConnectApi.QuerySqlPageOutput pageOutput = ConnectApi.CdpQuery.querySqlRows(output.status.queryId, 100, 200);
System.debug(pageOutput);
System.debug(pageOutput.dataRows);
System.debug(pageOutput.metadata);
System.debug(pageOutput.returnedRows);
```

```apex
ConnectApi.QuerySqlPageOutput pageOutput = ConnectApi.CdpQuery.querySqlRows(output.status.queryId, 100, 200, true);
System.debug(pageOutput);
System.debug(pageOutput.dataRows);
System.debug(pageOutput.metadata);
System.debug(pageOutput.returnedRows);
```

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getAllMetadata() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getAllMetadata(entityType, entityCategory, entityName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getAllMetadata(entityType, entityCategory, entityName, dataspace) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getDataGraphData(dataGraphEntityName, id) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getDataGraphData(dataGraphEntityName, id, dataspace) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getDataGraphData(dataGraphEntityName, id, live) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getDataGraphData(dataGraphEntityName, id, dataspace, live) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys, dataspace) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
