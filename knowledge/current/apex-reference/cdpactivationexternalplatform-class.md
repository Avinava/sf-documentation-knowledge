---
title: "CdpActivationExternalPlatform Class"
domain: apex-reference
topic: cdpactivationexternalplatform-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-05T00:23:35.827Z
estimatedTokens: 827
namespace: ConnectApi
keywords: [CdpActivationExternalPlatform, Data, activation, external, platforms, getActivationExternalPlatforms, API, Version, Requires, Chatter, getActivationExternalPlatformsPaginated, limit, offset, orderBy]
---

# CdpActivationExternalPlatform Class

> Get Data 360 activation external platforms.

**Namespace:** `ConnectApi`

# CdpActivationExternalPlatform Class

Get Data 360 activation external platforms.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpActivationExternalPlatform Methods

These methods are for CdpActivationExternalPlatform. All methods are static.

-   **[getActivationExternalPlatforms()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationExternalPlatform_static_methods.htm#apex_ConnectAPI_CdpActivationExternalPlatform_getActivationExternalPlatforms_1)**
    Get a list of all activation external platforms.
-   **[getActivationExternalPlatformsPaginated(limit, offset, orderBy)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationExternalPlatform_static_methods.htm#apex_ConnectAPI_CdpActivationExternalPlatform_getActivationExternalPlatformsPaginated_2)**
    Get a paginated list of activation external platforms. Repeat the call for additional external platform results.

### getActivationExternalPlatforms()

Get a list of all activation external platforms.

#### API Version

64.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActivationExternalPlatformCollection getActivationExternalPlatforms()

#### Return Value

Type: [ConnectApi.ActivationExternalPlatformCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_external_platform_collection.htm "Represents a collection of activation external platforms.")

### getActivationExternalPlatformsPaginated(limit, offset, orderBy)

Get a paginated list of activation external platforms. Repeat the call for additional external platform results.

#### API Version

64.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ActivationExternalPlatformCollection getActivationExternalPlatformsPaginated(Integer limit, Integer offset, String orderBy)

#### Parameters

limit

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of external platform to return. Valid values are from 1 to 20.

offset

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of external platforms to skip before returning the first result. The value must be greater than or equal to 0.

orderBy

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Order in which to sort the results based on the createdDate field. Specify the field name followed by asc for ascending order or desc for descending order. If you specify only the field name, results are sorted in ascending order. For example, createdDate asc and createdDate yield the same results.

#### Return Value

Type: [ConnectApi.ActivationExternalPlatformCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_external_platform_collection.htm "Represents a collection of activation external platforms.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getActivationExternalPlatforms() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationExternalPlatform_static_methods.htm)
- getActivationExternalPlatformsPaginated(limit, offset, orderBy) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpActivationExternalPlatform_static_methods.htm)
- ConnectApi.ActivationExternalPlatformCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_external_platform_collection.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
