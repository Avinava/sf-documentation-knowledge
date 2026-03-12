---
title: "ConnectApi.CdpIdentityResolutionConfigPatchInput"
domain: apex-reference
topic: connectapicdpidentityresolutionconfigpatchinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.540Z
estimatedTokens: 230
keywords: [ConnectApi.CdpIdentityResolutionConfigPatchInput, Input, representation, updating, identity, resolution, ruleset.]
---

# ConnectApi.CdpIdentityResolutionConfigPatchInput

> Input representation for updating an identity resolution ruleset.

# ConnectApi.CdpIdentityResolutionConfigPatchInput

Input representation for updating an identity resolution ruleset.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the identity resolution ruleset. | Optional | 57.0 |
| doesRun​Automatically | Boolean | Specifies whether automatic job run scheduling is enabled for the ruleset (true) or not (false). If unspecified, defaults to false. | Optional | 57.0 |
| label | String | User friendly name of the identity resolution ruleset. | Required | 57.0 |
| matchRules | List<ConnectApi.​CdpIdentityResolution​MatchRule> | List of match rules for the identity resolution ruleset. | Optional | 57.0 |
| reconciliationRules | List<ConnectApi.​CdpIdentityResolution​ReconciliationRule> | List of reconciliation rules for the identity resolution ruleset. | Required | 57.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CdpIdentityResolution​MatchRule (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_match_rul.htm)
- ConnectApi.​CdpIdentityResolution​ReconciliationRule (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_rul.htm)
