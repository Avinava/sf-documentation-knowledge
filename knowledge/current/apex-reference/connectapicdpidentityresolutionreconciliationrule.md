---
title: "ConnectApi.CdpIdentityResolutionReconciliationRule"
domain: apex-reference
topic: connectapicdpidentityresolutionreconciliationrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.934Z
keywords: [ConnectApi.CdpIdentityResolutionReconciliationRule, See]
---

# ConnectApi.CdpIdentityResolutionReconciliationRule

# ConnectApi.CdpIdentityResolutionReconciliationRule

Input representation for an identity resolution ruleset's default reconciliation rule for an object.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| entityName | String | API name of the Data Model Object the reconciliation rule applies to. | Required | 57.0 |
| fields | List<ConnectApi.​CdpIdentityResolution​ReconciliationField​Rule> | Field-specific reconciliation rules that override this default rule for the specified field. | Optional | 57.0 |
| ruleType | ConnectApi.​CdpIdentityResolution​ReconciliationRuleType | Default reconciliation rule applied to fields in the object the reconciliation rule applies to. Values are:LastUpdatedMostFrequentSourceSequence | Required | 57.0 |
| shouldIgnore​EmptyValue | Boolean | Specifies whether to ignore an empty value (true) or not (false). | Required | 57.0 |
| sources | List<ConnectApi.​CdpIdentityResolution​ReconciliationSource> | If ruleType is SourceSequence, a list of data sources in priority order. | Required if ruleType is SourceSequence | 57.0 |

#### See Also

-   [ConnectApi.CdpIdentityResolutionConfigInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_inpu.htm "Input representation for creating an identity resolution ruleset.")
    
-   [ConnectApi.CdpIdentityResolutionConfigPatchInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_patch_inpu.htm "Input representation for updating an identity resolution ruleset.")