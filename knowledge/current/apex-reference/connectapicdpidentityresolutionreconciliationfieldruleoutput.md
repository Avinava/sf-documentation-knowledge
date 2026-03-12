---
title: "ConnectApi.CdpIdentityResolutionReconciliationFieldRuleOutput"
domain: apex-reference
topic: connectapicdpidentityresolutionreconciliationfieldruleoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.482Z
estimatedTokens: 263
keywords: [ConnectApi.CdpIdentityResolutionReconciliationFieldRuleOutput, Identity, resolution, ruleset's, reconciliation, rule, field.]
---

# ConnectApi.CdpIdentityResolutionReconciliationFieldRuleOutput

> Identity resolution ruleset's reconciliation rule for a
    field.

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

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CdpIdentityResolution​ReconciliationRuleType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CdpIdentityResolution​ReconciliationSourceOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_reconciliation_source_outpu.htm)
- ConnectApi.CdpIdentityResolutionReconciliationRuleOutput (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_reconciliation_rule_outpu.htm)
