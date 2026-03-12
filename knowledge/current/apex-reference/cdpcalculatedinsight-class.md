---
title: "CdpCalculatedInsight Class"
domain: apex-reference
topic: cdpcalculatedinsight-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:16.373Z
estimatedTokens: 2458
namespace: ConnectApi
keywords: [CdpCalculatedInsight, calculated, insight, createCalculatedInsight, input, API, Version, Requires, Chatter, deleteCalculatedInsight, apiName, getCalculatedInsight, getCalculatedInsights, definitionType, batchSize]
---

# CdpCalculatedInsight Class

> Create a calculated insight.

**Namespace:** `ConnectApi`

# CdpCalculatedInsight Class

Create, delete, get, run, and update Data 360 calculated insights.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpCalculatedInsight Methods

These methods are for CdpCalculatedInsight. All methods are static.

-   **[createCalculatedInsight(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_createCalculatedInsight_2)**
    Create a calculated insight.
-   **[deleteCalculatedInsight(apiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_deleteCalculatedInsight_1)**
    Delete a calculated insight.
-   **[getCalculatedInsight(apiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_getCalculatedInsight_2)**
    Get a calculated insight.
-   **[getCalculatedInsights(definitionType, batchSize, offset, orderby, dataspace)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_getCalculatedInsights_1)**
    Get calculated insights.
-   **[getCalculatedInsights(definitionType, batchSize, offset, orderby, dataspace, pageToken)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_getCalculatedInsights_2)**
    Get a page of calculated insights.
-   **[runCalculatedInsight(apiName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_runCalculatedInsight_1)**
    Run a calculated insight.
-   **[updateCalculatedInsight(apiName, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm#apex_ConnectAPI_CdpCalculatedInsight_updateCalculatedInsight_3)**
    Update a calculated insight.

### createCalculatedInsight(input)

Create a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpCalculatedInsightOutput createCalculatedInsight(ConnectApi.CdpCalculatedInsightInput input)

#### Parameters

input

Type: [ConnectApi.CdpCalculatedInsightInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_calculated_insight.htm "Input representation for a calculated insight.")

Input representation for a calculated insight.

#### Return Value

Type: [ConnectApi.CdpCalculatedInsightOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight.htm "Calculated insight.")

### deleteCalculatedInsight(apiName)

Delete a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static Void deleteCalculatedInsight(String apiName)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the calculated insight to delete.

#### Return Value

Type: Void

### getCalculatedInsight(apiName)

Get a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpCalculatedInsightOutput getCalculatedInsight(String apiName)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the calculated insight to get.

#### Return Value

Type: [ConnectApi.CdpCalculatedInsightOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight.htm "Calculated insight.")

### getCalculatedInsights(definitionType, batchSize, offset, orderby, dataspace)

Get calculated insights.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpCalculatedInsightPage getCalculatedInsights(String definitionType, Integer batchSize, Integer offset, String orderby, String dataspace)

#### Parameters

definitionType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Definition type of the calculated insight. Values are:

-   CALCULATED\_METRIC
-   CALCULATED\_METRIC
-   CALCULATED\_METRIC

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items to return. Values are from 1–200. If unspecified, the default value is 25.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. If unspecified, no rows are skipped.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set, such as GenderId\_\_c ASC,​Occupation\_\_c DESC. If unspecified, items are returned in the order they are retrieved.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space.

#### Return Value

Type: [ConnectApi.CdpCalculatedInsightPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight_collection.htm "Collection of calculated insights.")

### getCalculatedInsights(definitionType, batchSize, offset, orderby, dataspace, pageToken)

Get a page of calculated insights.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpCalculatedInsightPage getCalculatedInsights(String definitionType, Integer batchSize, Integer offset, String orderby, String dataspace, String pageToken)

#### Parameters

definitionType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Definition type of the calculated insight. Values are:

-   CALCULATED\_METRIC
-   CALCULATED\_METRIC
-   CALCULATED\_METRIC

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of items to return. Values are from 1–200. If unspecified, the default value is 25.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. If unspecified, no rows are skipped.

orderby

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set, such as GenderId\_\_c ASC,​Occupation\_\_c DESC. If unspecified, items are returned in the order they are retrieved.

dataspace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the data space.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

#### Return Value

Type: [ConnectApi.CdpCalculatedInsightPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight_collection.htm "Collection of calculated insights.")

### runCalculatedInsight(apiName)

Run a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpCalculatedInsightStandardActionesponseRepresentation runCalculatedInsight(String apiName)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the calculated insight to run.

#### Return Value

Type: [ConnectApi.CdpCalculatedInsightStandardActionResponseRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight_action_run_response.htm "Response of the calculated insight run action.")

### updateCalculatedInsight(apiName, input)

Update a calculated insight.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpCalculatedInsightOutput updateCalculatedInsight(String apiName, ConnectApi.CdpCalculatedInsightInput input)

#### Parameters

apiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the calculated insight to update.

input

Type: [ConnectApi.CdpCalculatedInsightInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_calculated_insight.htm "Input representation for a calculated insight.")

Input representation for a calculated insight.

#### Return Value

Type: [ConnectApi.CdpCalculatedInsightOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight.htm "Calculated insight.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createCalculatedInsight(input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm)
- deleteCalculatedInsight(apiName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm)
- getCalculatedInsight(apiName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm)
- getCalculatedInsights(definitionType, batchSize, offset, orderby, dataspace) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm)
- getCalculatedInsights(definitionType, batchSize, offset, orderby, dataspace, pageToken) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm)
- runCalculatedInsight(apiName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm)
- updateCalculatedInsight(apiName, input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpCalculatedInsight_static_methods.htm)
- ConnectApi.CdpCalculatedInsightInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_calculated_insight.htm)
- ConnectApi.CdpCalculatedInsightOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_calculated_insight.htm)
