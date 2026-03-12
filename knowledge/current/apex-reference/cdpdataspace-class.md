---
title: "CdpDataSpace Class"
domain: apex-reference
topic: cdpdataspace-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:16.381Z
estimatedTokens: 745
namespace: ConnectApi
keywords: [CdpDataSpace, Data, spaces, getAllDataSpaces, batchSize, offset, orderBy, API, Version, Requires, Chatter, getDataSpace, idOrName]
---

# CdpDataSpace Class

> Get Data 360 data spaces.

**Namespace:** `ConnectApi`

# CdpDataSpace Class

Get Data 360 data spaces.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpDataSpace Methods

These methods are for CdpDataSpace. All methods are static.

-   **[getAllDataSpaces(batchSize, offset, orderBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpDataSpace_static_methods.htm#apex_ConnectAPI_CdpDataSpace_getAllDataSpaces_1)**
    Get a collection of all data spaces that a user is assigned to.
-   **[getDataSpace(idOrName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpDataSpace_static_methods.htm#apex_ConnectAPI_CdpDataSpace_getDataSpace_1)**
    Get a data space by ID or API name.

### getAllDataSpaces(batchSize, offset, orderBy)

Get a collection of all data spaces that a user is assigned to.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DataSpaceCollectionRepresentation getAllDataSpaces(Integer batchSize, Integer offset, String orderBy)

#### Parameters

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of results to return in each response. Values are from 1 through 4999. For example, specify 50 to return 50 results.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. Must be greater than or equal to 0. For example, specify 0 to skip no rows.

orderBy

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set. Results are ordered by ID. Specify id to order results in ascending order. Specify id desc to order results in descending order.

#### Return Value

Type: [ConnectApi.DataSpaceCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_space_collection.htm "Represents a collection of all data spaces that a user is assigned to.")

### getDataSpace(idOrName)

Get a data space by ID or API name.

#### API Version

62.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DataSpaceInfoRepresentation getDataSpace(String idOrName)

#### Parameters

idOrName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID or API name of the data space.

#### Return Value

Type: [ConnectApi.DataSpaceInfoRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_space_info.htm "Represents a data space.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getAllDataSpaces(batchSize, offset, orderBy) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpDataSpace_static_methods.htm)
- getDataSpace(idOrName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpDataSpace_static_methods.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.DataSpaceCollectionRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_space_collection.htm)
- ConnectApi.DataSpaceInfoRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_data_space_info.htm)
