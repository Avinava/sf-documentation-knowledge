---
title: "ConnectApi.CdpIdentityResolutionMatchRule"
domain: apex-reference
topic: connectapicdpidentityresolutionmatchrule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.926Z
keywords: [ConnectApi.CdpIdentityResolutionMatchRule, See]
---

# ConnectApi.CdpIdentityResolutionMatchRule

# ConnectApi.CdpIdentityResolutionMatchRule

Input representation for an identity resolution ruleset’s match rule.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | List<ConnectApi.​CdpIdentityResolution​MatchCriterion> | Object and field the match rule applies to and the match method applied. | Required | 57.0 |
| label | String | User friendly name for the identity resolution match rule. | Required | 57.0 |

#### See Also

-   [ConnectApi.CdpIdentityResolutionConfigInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_inpu.htm "Input representation for creating an identity resolution ruleset.")
    
-   [ConnectApi.CdpIdentityResolutionConfigPatchInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_patch_inpu.htm "Input representation for updating an identity resolution ruleset.")