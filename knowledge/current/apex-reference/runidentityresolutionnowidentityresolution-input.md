---
title: "runIdentityResolutionNow(identityResolution, input)"
domain: apex-reference
topic: runidentityresolutionnowidentityresolution-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.050Z
keywords: [runIdentityResolutionNow, identityResolution, input, Trigger, immediate, identity, resolution, ruleset, job, run., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# runIdentityResolutionNow(identityResolution, input)

> Trigger an immediate identity resolution ruleset job
    run.

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