---
title: "ConnectApi.CdpQueryOutput"
domain: apex-reference
topic: connectapicdpqueryoutput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:26.542Z
estimatedTokens: 1966
keywords: [ConnectApi.CdpQueryOutput, Query, result.]
---

# ConnectApi.CdpQueryOutput

> Query result.

# ConnectApi.CdpQueryOutput

Query result.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| data | List<Object> | Result data set. | 52.0 |
| done | Boolean | Specifies whether the query is done (true) or not (false). | 52.0 |
| endTime | String | Query end time. | 52.0 |
| metadata | Map<String, Object> | Result metadata set. | 52.0 |
| queryId | String | Query ID. | 52.0 |
| rowCount | Integer | Number of rows in the result data set. | 52.0 |
| startTime | String | Query start time. | 52.0 |

#### See Also

-   [getDataGraphData(dataGraphEntityName, id)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphData_1 "Query a data graph in the default data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.")

-   [getDataGraphData(dataGraphEntityName, id, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphData_2 "Query a data graph in a specified data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.")

-   [getDataGraphData(dataGraphEntityName, id, live)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphData_3 "Query a data graph by performing a live lookup in the default data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.")

-   [getDataGraphData(dataGraphEntityName, id, dataspace, live)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphData_4 "Query a data graph by performing a live lookup in a specified data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.")

-   [getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphDataWithLookupKeys_1 "Query a data graph by the primary key of either the primary Data Model Object (DMO) or the Individual linked DMO. Get the data from the default data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.")

-   [getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphDataWithLookupKeys_2 "Query a data graph by the primary key of either the primary Data Model Object (DMO) or the Individual linked DMO. Get the data from a specified data space. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.")

-   [getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys, dataspace, noCache)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_getDataGraphDataWithLookupKeys_3 "Query a data graph by the primary key of either the primary Data Model Object (DMO) or the Individual linked DMO. Get the data from a specified data space. Get data from a standard or real-time data graph. For real-time data graphs, the method attempts to retrieve data from the real-time data graph but falls back to the standard data graph if the real-time data graph is unavailable.")

-   [queryANSISql(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryANSISql_1 "Synchronously query data across data model, lake, unified, and linked objects. This query returns up to 49,999 rows.")

-   [queryANSISql(input, batchSize, offset, orderby)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryANSISql_2 "Synchronously query data across data model, lake, unified, and linked objects. Specify batch size, offset, and order of the results. This query returns up to 49,999 rows.")

-   [queryANSISql(input, batchSize, offset, orderby, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryANSISql_3 "Synchronously query data across data model, lake, unified, and linked objects. Specify batch size, offset, order of the results, and data space. This query returns up to 49,999 rows.")

-   [queryCalculatedInsights(ciName, dimensions, measures, orderby, filters, batchSize, offset)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryCalculatedInsights_1 "Query a Calculated Insight object.")

-   [queryCalculatedInsights(ciName, dimensions, measures, orderby, filters, batchSize, offset, timeGranularity)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryCalculatedInsights_2 "Query a Calculated Insight object within a specified time range.")

-   [queryCalculatedInsights(ciName, dimensions, measures, orderby, filters, batchSize, offset, timeGranularity, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryCalculatedInsights_3 "Query a Calculated Insight object within a specified time range and specify the data space.")

-   [queryProfileApi(dataModelName, filters, fields, batchSize, offset, orderby)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryProfileApi_1 "Query a Profile data model object using filters.")

-   [queryProfileApi(dataModelName, id, searchKey, filters, fields, batchSize, offset, orderby)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryProfileApi_2 "Query a Profile data model object using filters and a search key.")

-   [queryProfileApi(dataModelName, id, childDataModelName, searchKey, filters, fields, batchSize, offset, orderby)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryProfileApi_3 "Query a Profile data model object and a child object using filters and a search key.")

-   [queryProfileApi(dataModelName, id, ciName, searchKey, dimensions, measures, filters, fields, batchSize, offset, orderby)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryProfileApi_4 "Query a Profile data model object and a Calculated Insight object using filters and a search key.")

-   [queryProfileApi(dataModelName, id, ciName, searchKey, dimensions, measures, filters, fields, batchSize, offset, orderby, timeGranularity)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryProfileApi_5 "Query a Profile data model object and a Calculated Insight object using filters, a search key, and a time range.")

-   [queryProfileApi(dataModelName, id, ciName, searchKey, dimensions, measures, filters, fields, batchSize, offset, orderby, timeGranularity, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm#apex_ConnectAPI_CdpQuery_queryProfileApi_6 "Query a Profile data model object and a Calculated Insight object using filters, a search key, a time range, and a data space.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- getDataGraphData(dataGraphEntityName, id) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getDataGraphData(dataGraphEntityName, id, dataspace) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getDataGraphData(dataGraphEntityName, id, live) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getDataGraphData(dataGraphEntityName, id, dataspace, live) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
- getDataGraphDataWithLookupKeys(dataGraphEntityName, lookupKeys) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpQuery_static_methods.htm)
