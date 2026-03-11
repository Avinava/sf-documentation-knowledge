---
title: "queryProfileApi(dataModelName, id, childDataModelName, searchKey, filters, fields, batchSize, offset, orderby)"
domain: apex-reference
topic: queryprofileapidatamodelname-id-childdatamodelname-searchkey-filters-fields-batc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.166Z
keywords: [queryProfileApi, dataModelName, childDataModelName, searchKey, filters, fields, batchSize, offset, orderby, Query, Profile, data, model, object, child, search, key., API, Version, Requires]
---

# queryProfileApi(dataModelName, id, childDataModelName, searchKey, filters, fields, batchSize, offset, orderby)

> Query a Profile data model object and a child object using filters and a search
        key.

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