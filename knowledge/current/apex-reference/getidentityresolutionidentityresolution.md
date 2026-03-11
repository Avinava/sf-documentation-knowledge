---
title: "getIdentityResolution(identityResolution)"
domain: apex-reference
topic: getidentityresolutionidentityresolution
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.050Z
keywords: [getIdentityResolution, identityResolution, Get, identity, resolution, ruleset., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getIdentityResolution(identityResolution)

> Get an identity resolution ruleset.

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