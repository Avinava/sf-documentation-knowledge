---
title: "CdpActivationTarget Class"
domain: apex-reference
topic: cdpactivationtarget-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.705Z
estimatedTokens: 1709
namespace: ConnectApi
keywords: [CdpActivationTarget, Get, create, update, Data, 360, activation, targets., createActivationTarget, input, API, Version, Requires, Chatter, getActivationTarget, activationTargetId, getActivationTargets, getActivationTargetsPaginated, batchSize, offset]
---

# CdpActivationTarget Class

> Get, create, and update Data 360 activation targets.

**Namespace:** `ConnectApi`

# CdpActivationTarget Class

Get, create, and update Data 360 activation targets.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpActivationTarget Methods

These methods are for CdpActivationTarget. All methods are static.

-   **[createActivationTarget(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_createActivationTarget_3)**
    Create an activation target.
-   **[getActivationTarget(activationTargetId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_getActivationTarget_1)**
    Get an activation target by ID.
-   **[getActivationTargets()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_getActivationTargets_1)**
    Get a list of activation targets.
-   **[getActivationTargetsPaginated(batchSize, offset, orderBy, filters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_getActivationTargetsPaginated_2)**
    Get a paginated list of activation targets.
-   **[updateActivationTarget(activationTargetId, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm#apex_ConnectAPI_CdpActivationTarget_updateActivationTarget_2)**
    Update an activation target.

### createActivationTarget(input)

Create an activation target.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActivationTarget createActivationTarget(ConnectApi.ActivationTargetInput input)

#### Parameters

input

Type: [ConnectApi.ActivationTargetInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_target.htm "Input details for the activation target.")

Input details for the activation target.

#### Return Value

Type: [ConnectApi.ActivationTarget](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_target.htm "Represents an activation target.")

### getActivationTarget(activationTargetId)

Get an activation target by ID.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActivationTarget getActivationTarget(String activationTargetId)

#### Parameters

activationTargetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the activation target.

#### Return Value

Type: [ConnectApi.ActivationTarget](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_target.htm "Represents an activation target.")

### getActivationTargets()

Get a list of activation targets.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActivationTargetCollection getActivationTargets()

#### Return Value

Type: [ConnectApi.ActivationTargetCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_target_collection.htm "Represents a collection of activation targets.")

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

### updateActivationTarget(activationTargetId, input)

Update an activation target.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActivationTarget updateActivationTarget(String activationTargetId, ConnectApi.ActivationTargetInput input)

#### Parameters

activationTargetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the activation target.

input

Type: [ConnectApi.ActivationTargetInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_target.htm "Input details for the activation target.")

Input details for the activation target.

#### Return Value

Type: [ConnectApi.ActivationTarget](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_target.htm "Represents an activation target.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createActivationTarget(input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm)
- getActivationTarget(activationTargetId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm)
- getActivationTargets() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm)
- getActivationTargetsPaginated(batchSize, offset, orderBy, filters) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm)
- updateActivationTarget(activationTargetId, input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationTarget_static_methods.htm)
- ConnectApi.ActivationTargetInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_target.htm)
- ConnectApi.ActivationTarget (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_target.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ActivationTargetCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_target_collection.htm)
