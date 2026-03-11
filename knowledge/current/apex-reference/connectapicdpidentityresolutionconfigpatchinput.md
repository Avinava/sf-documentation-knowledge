---
title: "ConnectApi.CdpIdentityResolutionConfigPatchInput"
domain: apex-reference
topic: connectapicdpidentityresolutionconfigpatchinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.919Z
keywords: [ConnectApi.CdpIdentityResolutionConfigPatchInput]
---

# ConnectApi.CdpIdentityResolutionConfigPatchInput

# ConnectApi.CdpIdentityResolutionConfigPatchInput

Input representation for updating an identity resolution ruleset.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the identity resolution ruleset. | Optional | 57.0 |
| doesRun​Automatically | Boolean | Specifies whether automatic job run scheduling is enabled for the ruleset (true) or not (false). If unspecified, defaults to false. | Optional | 57.0 |
| label | String | User friendly name of the identity resolution ruleset. | Required | 57.0 |
| matchRules | List<ConnectApi.​CdpIdentityResolution​MatchRule> | List of match rules for the identity resolution ruleset. | Optional | 57.0 |
| reconciliationRules | List<ConnectApi.​CdpIdentityResolution​ReconciliationRule> | List of reconciliation rules for the identity resolution ruleset. | Required | 57.0 |