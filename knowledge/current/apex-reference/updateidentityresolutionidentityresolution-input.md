---
title: "updateIdentityResolution(identityResolution, input)"
domain: apex-reference
topic: updateidentityresolutionidentityresolution-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.050Z
keywords: [updateIdentityResolution, identityResolution, input, Update, identity, resolution, ruleset., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateIdentityResolution(identityResolution, input)

> Update an identity resolution ruleset.

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