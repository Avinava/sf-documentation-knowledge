---
title: "ConnectApi.CdpIdentityResolutionConfigInput"
domain: apex-reference
topic: connectapicdpidentityresolutionconfiginput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.915Z
keywords: [ConnectApi.CdpIdentityResolutionConfigInput]
---

# ConnectApi.CdpIdentityResolutionConfigInput

# ConnectApi.CdpIdentityResolutionConfigInput

Input representation for creating an identity resolution ruleset.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| configurationType | ConnectApi.​CdpIdentityResolution​ConfigurationType | Source object for an identity resolution ruleset. Values are:AccountIndividual | Required | 57.0 |
| description | String | Description of the identity resolution ruleset. | Optional | 57.0 |
| doesRun​Automatically | Boolean | Specifies whether automatic job run scheduling is enabled for the ruleset (true) or not (false). If unspecified, defaults to false. | Optional | 57.0 |
| label | String | User friendly name of the identity resolution ruleset. | Required | 57.0 |
| matchRules | List<ConnectApi.​CdpIdentityResolution​MatchRule> | List of match rules for the identity resolution ruleset. | Optional | 57.0 |
| reconciliationRules | List<ConnectApi.​CdpIdentityResolution​ReconciliationRule> | List of reconciliation rules for the identity resolution ruleset. | Required | 57.0 |
| rulesetId | String | Extended ID of the ruleset used to differentiate between rulesets created for comparison. The ruleset ID must be unique and can't be longer than 4 characters. | Optional | 57.0 |