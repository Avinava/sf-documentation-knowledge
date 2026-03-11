---
title: "ConnectApi.CdpIdentityResolutionReconciliationFieldRuleOutput"
domain: apex-reference
topic: connectapicdpidentityresolutionreconciliationfieldruleoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.228Z
keywords: [ConnectApi.CdpIdentityResolutionReconciliationFieldRuleOutput, See]
---

# ConnectApi.CdpIdentityResolutionReconciliationFieldRuleOutput

# ConnectApi.CdpIdentityResolutionReconciliationFieldRuleOutput

Identity resolution ruleset's reconciliation rule for a field.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| fieldName | String | The field that this reconciliation rule applies to. | 57.0 |
| ruleType | ConnectApi.​CdpIdentityResolution​ReconciliationRuleType | Default reconciliation rule applied to fields in the object the reconciliation rule applies to. Values are:LastUpdatedMostFrequentSourceSequence | 57.0 |
| shouldIgnore​EmptyValue | Boolean | Specifies whether to ignore an empty value (true) or not (false). | 57.0 |
| sources | List<ConnectApi.​CdpIdentityResolution​ReconciliationSourceOutput> | If ruleType is SourceSequence, a prioritized list of data sources. | 57.0 |

#### See Also

-   [ConnectApi.CdpIdentityResolutionReconciliationRuleOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_reconciliation_rule_outpu.htm "Identity resolution ruleset’s reconciliation rule for an object.")