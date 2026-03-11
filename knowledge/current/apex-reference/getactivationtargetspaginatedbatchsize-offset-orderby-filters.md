---
title: "getActivationTargetsPaginated(batchSize, offset, orderBy,
      filters)"
domain: apex-reference
topic: getactivationtargetspaginatedbatchsize-offset-orderby-filters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.989Z
keywords: [getActivationTargetsPaginated, batchSize, offset, orderBy, filters, Get, paginated, list, activation, targets., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getActivationTargetsPaginated(batchSize, offset, orderBy,
      filters)

> Get a paginated list of activation targets.

### getActivationTargetsPaginated(batchSize, offset, orderBy, filters)

Get a paginated list of activation targets.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActivationTargetCollection getActivationTargetsPaginated(Integer batchSize, Integer offset, String orderBy, String filters)

#### Parameters

batchSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of results to return. Values are from 1 through 200. For example, specify 20 to return 20 results.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of rows to skip before returning results. Must be greater than or equal to 0. For example, specify 0 to skip no rows.

orderBy

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Sort order for the result set. Results are ordered by creation date. Specify createddate to order results in ascending order. Specify createddate desc to order results in descending order.

filters

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Filter the result set to a more narrow scope or specific type. These filters are supported:

-   masterLabel - Matches the field name, which is a string that identifies the name of the activation target.
-   targetStatus - Matches the field status, which is an enum that indicates the status of the activation target. Values must match those listed in the status response field.
-   connectionType - Matches the field platformType, which is an enum that indicates the platform type of the activation target. Values must match those listed in the platformType response field.
-   platformName - Matches the field platformName, which is a string that indentifies the platform name of the activation target.

These are examples of filter specifications:

-   masterLabel in Target002
-   targetStatus in active
-   platformName in Customer Data Platform
-   targetStatus in active AND platformName in Amazon S3

#### Return Value

Type: [ConnectApi.ActivationTargetCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_target_collection.htm "Represents a collection of activation targets.")