---
title: "ConnectApi.CdpIdentityResolutionMatchRule"
domain: apex-reference
topic: connectapicdpidentityresolutionmatchrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:24.822Z
estimatedTokens: 236
keywords: [Input, representation, identity, resolution, ruleset’s, match, rule]
---

# ConnectApi.CdpIdentityResolutionMatchRule

> Input representation for an identity resolution ruleset’s match
      rule.

# ConnectApi.CdpIdentityResolutionMatchRule

Input representation for an identity resolution ruleset’s match rule.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | List<ConnectApi.​CdpIdentityResolution​MatchCriterion> | Object and field the match rule applies to and the match method applied. | Required | 57.0 |
| label | String | User friendly name for the identity resolution match rule. | Required | 57.0 |

#### See Also

-   [ConnectApi.CdpIdentityResolutionConfigInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_inpu.htm "Input representation for creating an identity resolution ruleset.")

-   [ConnectApi.CdpIdentityResolutionConfigPatchInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_patch_inpu.htm "Input representation for updating an identity resolution ruleset.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CdpIdentityResolution​MatchCriterion (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_match_criteri.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.CdpIdentityResolutionConfigInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_inpu.htm)
- ConnectApi.CdpIdentityResolutionConfigPatchInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_patch_inpu.htm)
