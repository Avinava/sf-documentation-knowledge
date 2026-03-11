---
title: "getCalculatedInsights(definitionType, batchSize, offset, orderby, dataspace)"
domain: apex-reference
topic: getcalculatedinsightsdefinitiontype-batchsize-offset-orderby-dataspace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.024Z
keywords: [getCalculatedInsights, definitionType, batchSize, offset, orderby, dataspace, Get, calculated, insights., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCalculatedInsights(definitionType, batchSize, offset, orderby, dataspace)

> Get calculated insights.

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