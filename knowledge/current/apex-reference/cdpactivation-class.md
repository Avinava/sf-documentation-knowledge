---
title: "CdpActivation Class"
domain: apex-reference
topic: cdpactivation-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.723Z
estimatedTokens: 1858
namespace: ConnectApi
keywords: [CdpActivation, Get, create, update, delete, Data, 360, activations., getActivations, API, Version, Requires, Chatter, getActivationsPaginated, batchSize, offset, orderBy, filters, createActivation, input]
---

# CdpActivation Class

> Get, create, update, and delete Data 360 activations.

**Namespace:** `ConnectApi`

# CdpActivation Class

Get, create, update, and delete Data 360 activations.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpActivation Methods

These methods are for CdpActivation. All methods are static.

-   **[getActivations()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_getActivations_1)**
    Get activations.
-   **[getActivationsPaginated(batchSize, offset, orderBy, filters)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_getActivationsPaginated_1)**
    Get a paginated list of activations.
-   **[createActivation(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_createActivation_1)**
    Create an activation.
-   **[deleteActivation(activationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_deleteActivation_1)**
    Delete an activation.
-   **[getActivation(activationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_getActivation_1)**
    Get an activation by ID.
-   **[updateActivation(activationId, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm#apex_ConnectAPI_CdpActivation_updateActivation_1)**
    Update an activation by ID.

### getActivations()

Get activations.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActivationCollection getActivations()

#### Return Value

Type: [ConnectApi.ActivationCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_collection.htm "Represents a collection of activations.")

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

### createActivation(input)

Create an activation.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Activation createActivation(ConnectApi.ActivationDefinitionInput input)

#### Parameters

input

Type: [ConnectApi.ActivationDefinitionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_definition.htm "Represents the activation definition input.")

Input representation for an activation.

#### Return Value

Type: [ConnectApi.Activation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation.htm "Represents an activation output.")

### deleteActivation(activationId)

Delete an activation.

#### API Version

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Before deleting an activation, ensure there are no downstream systems that expect data from it. After you delete an activation, Data 360 stops sending data to any downstream systems that are associated with the deleted activation. To identify the downstream system (activation target) that's associated with the activation, use the getActivation(activationId) resource. It provides the activation target details needed to evaluate the impact before deleting the activation.

60.0

#### Requires Chatter

No

#### Signature

public static Void deleteActivation(String activationId)

#### Parameters

activationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier (ID) or developer name of a specific activation target.

#### Return Value

Type: Void

### getActivation(activationId)

Get an activation by ID.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Activation getActivation(String activationId)

#### Parameters

activationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier (ID) or developer name of a specific activation target.

#### Return Value

Type: [ConnectApi.Activation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation.htm "Represents an activation output.")

### updateActivation(activationId, input)

Update an activation by ID.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Activation updateActivation(String activationId, ConnectApi.ActivationDefinitionInput input)

#### Parameters

activationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier (ID) or developer name of a specific activation target.

input

Type: [ConnectApi.ActivationDefinitionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_activation_definition.htm "Represents the activation definition input.")

Input representation for an activation.

#### Return Value

Type: [ConnectApi.Activation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation.htm "Represents an activation output.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getActivations() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm)
- getActivationsPaginated(batchSize, offset, orderBy, filters) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm)
- createActivation(input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm)
- deleteActivation(activationId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm)
- getActivation(activationId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm)
- updateActivation(activationId, input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivation_static_methods.htm)
- ConnectApi.ActivationCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_collection.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
