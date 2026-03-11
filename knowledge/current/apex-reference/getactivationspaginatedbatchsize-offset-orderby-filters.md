---
title: "getActivationsPaginated(batchSize, offset, orderBy, filters)"
domain: apex-reference
topic: getactivationspaginatedbatchsize-offset-orderby-filters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.002Z
keywords: [getActivationsPaginated, batchSize, offset, orderBy, filters, Get, paginated, list, activations., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getActivationsPaginated(batchSize, offset, orderBy, filters)

> Get a paginated list of activations.

### getActivationsPaginated(batchSize, offset, orderBy, filters)

Get a paginated list of activations.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActivationCollection getActivationsPaginated(Integer batchSize, Integer offset, String orderBy, String filters)

#### Parameters

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of results to return. Values are from 1 through 200. If unspecified, the default value is 20.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. Must be greater than or equal to 0. If unspecified, no rows are skipped.

orderBy

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specify createdDate to sort results by creation date. If unspecified, items are returned by ID in ascending order.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Filter the result set to a more narrow scope or specific type. These filters are supported:

-   name (field name: name; description: name of the activation)
-   marketSegmentId (field name: segmentId; description: segment ID of the activation)
-   activationTargetId (field name: activationTarget.id; description: activation target ID of the activation)
-   activationRefreshType (field name: refreshType; description: refresh type of the activation; example: incremental)
-   activationStatus (field name: status; description: status of the activation, which accepts only the values in the status response field; example: active)

#### Return Value

Type: [ConnectApi.ActivationCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_collection.htm "Represents a collection of activations.")