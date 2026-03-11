---
title: "queryCalculatedInsights(ciName, dimensions, measures, orderby, filters, batchSize, offset, timeGranularity, dataspace)"
domain: apex-reference
topic: querycalculatedinsightsciname-dimensions-measures-orderby-filters-batchsize-offs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [queryCalculatedInsights, ciName, dimensions, measures, orderby, filters, batchSize, offset, timeGranularity, dataspace, Query, Calculated, Insight, object, within, specified, time, range, specify, data]
---

# queryCalculatedInsights(ciName, dimensions, measures, orderby, filters, batchSize, offset, timeGranularity, dataspace)

> Query a Calculated Insight object within a specified time range and specify the data
        space.

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