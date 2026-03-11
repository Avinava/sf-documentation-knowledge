---
title: "queryProfileApi(dataModelName, id, ciName, searchKey, dimensions, measures, filters, fields, batchSize, offset, orderby, timeGranularity, dataspace)"
domain: apex-reference
topic: queryprofileapidatamodelname-id-ciname-searchkey-dimensions-measures-filters-fie
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [queryProfileApi, dataModelName, ciName, searchKey, dimensions, measures, filters, fields, batchSize, offset, orderby, timeGranularity, dataspace, Query, Profile, data, model, object, Calculated, Insight]
---

# queryProfileApi(dataModelName, id, ciName, searchKey, dimensions, measures, filters, fields, batchSize, offset, orderby, timeGranularity, dataspace)

> Query a Profile data model object and a Calculated Insight object using filters, a search
        key, a time range, and a data space.

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