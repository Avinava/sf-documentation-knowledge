---
title: "CdpIdentityResolution Class"
domain: apex-reference
topic: cdpidentityresolution-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:16.395Z
estimatedTokens: 1634
namespace: ConnectApi
keywords: [CdpIdentityResolution, identity, resolution, ruleset, createIdentityResolution, input, API, Version, Requires, Chatter, deleteIdentityResolution, identityResolution, getIdentityResolution, getIdentityResolutions, runIdentityResolutionNow]
---

# CdpIdentityResolution Class

> Create an identity resolution ruleset.

**Namespace:** `ConnectApi`

# CdpIdentityResolution Class

Create, delete, get, run, and update Data 360 identity resolution rulesets.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpIdentityResolution Methods

These methods are for CdpIdentityResolution. All methods are static.

-   **[createIdentityResolution(input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm#apex_ConnectAPI_CDPIdentityResolution_createIdentityResolution_2)**
    Create an identity resolution ruleset.
-   **[deleteIdentityResolution(identityResolution)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm#apex_ConnectAPI_CDPIdentityResolution_deleteIdentityResolution_1)**
    Delete an identity resolution ruleset.
-   **[getIdentityResolution(identityResolution)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm#apex_ConnectAPI_CDPIdentityResolution_getIdentityResolution_2)**
    Get an identity resolution ruleset.
-   **[getIdentityResolutions()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm#apex_ConnectAPI_CDPIdentityResolution_getIdentityResolutions_1)**
    Get identity resolution rulesets.
-   **[runIdentityResolutionNow(identityResolution, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm#apex_ConnectAPI_CDPIdentityResolution_runIdentityResolutionNow_1)**
    Trigger an immediate identity resolution ruleset job run.
-   **[updateIdentityResolution(identityResolution, input)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm#apex_ConnectAPI_CDPIdentityResolution_updateIdentityResolution_3)**
    Update an identity resolution ruleset.

### createIdentityResolution(input)

Create an identity resolution ruleset.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpIdentityResolutionOutput createIdentityResolution(ConnectApi.CdpIdentityResolutionConfigInput input)

#### Parameters

input

Type: [ConnectApi.CdpIdentityResolutionConfigInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_inpu.htm "Input representation for creating an identity resolution ruleset.")

Input representation for creating an identity resolution ruleset.

#### Return Value

Type: [ConnectApi.CdpIdentityResolutionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_output.htm "Identity resolution ruleset.")

### deleteIdentityResolution(identityResolution)

Delete an identity resolution ruleset.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static Void deleteIdentityResolution(String identityResolution)

#### Parameters

identityResolution

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name or ID of the ruleset.

#### Return Value

Type: Void

### getIdentityResolution(identityResolution)

Get an identity resolution ruleset.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpIdentityResolutionOutput getIdentityResolution(String identityResolution)

#### Parameters

identityResolution

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name or ID of the ruleset.

#### Return Value

Type: [ConnectApi.CdpIdentityResolutionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_output.htm "Identity resolution ruleset.")

### getIdentityResolutions()

Get identity resolution rulesets.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpIdentityResolutionsOutput getIdentityResolutions()

#### Return Value

Type: [ConnectApi.CdpIdentityResolutionsOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolutions_output.htm "Identity resolution rulesets.")

### runIdentityResolutionNow(identityResolution, input)

Trigger an immediate identity resolution ruleset job run.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpIdentityResolutionRunNowOutput runIdentityResolutionNow(String identityResolution, ConnectApi.CdpIdentityResolutionRunNowInput input)

#### Parameters

identityResolution

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the ruleset.

input

Type: [ConnectApi.CdpIdentityResolutionRunNowInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_run_now_inpu.htm "Input representation for running an identity resolution ruleset job on demand.")

Input representation for running an identity resolution ruleset job on demand.

#### Return Value

Type: [ConnectApi.CdpIdentityResolutionRunNowOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_run_now_output.htm "Identity resolution ruleset run now output.")

### updateIdentityResolution(identityResolution, input)

Update an identity resolution ruleset.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CdpIdentityResolutionOutput updateIdentityResolution(String identityResolution, ConnectApi.CdpIdentityResolutionConfigPatchInput input)

#### Parameters

identityResolution

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name or ID of the ruleset.

input

Type: [ConnectApi.CdpIdentityResolutionConfigPatchInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_patch_inpu.htm "Input representation for updating an identity resolution ruleset.")

Input representation for updating an identity resolution ruleset.

#### Return Value

Type: [ConnectApi.CdpIdentityResolutionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_output.htm "Identity resolution ruleset.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- createIdentityResolution(input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm)
- deleteIdentityResolution(identityResolution) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm)
- getIdentityResolution(identityResolution) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm)
- getIdentityResolutions() (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm)
- runIdentityResolutionNow(identityResolution, input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm)
- updateIdentityResolution(identityResolution, input) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpIdentityResolution_static_methods.htm)
- ConnectApi.CdpIdentityResolutionConfigInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_inpu.htm)
- ConnectApi.CdpIdentityResolutionOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_output.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
