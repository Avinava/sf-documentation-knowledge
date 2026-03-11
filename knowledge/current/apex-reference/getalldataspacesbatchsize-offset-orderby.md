---
title: "getAllDataSpaces(batchSize, offset,
    orderBy)"
domain: apex-reference
topic: getalldataspacesbatchsize-offset-orderby
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.038Z
keywords: [getAllDataSpaces, batchSize, offset, orderBy, Get, collection, data, spaces, user, assigned, to., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getAllDataSpaces(batchSize, offset,
    orderBy)

> Get a collection of all data spaces that a user is assigned to.

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