---
title: "ConnectApi.CdpIdentityResolutionReconciliationFieldRule"
domain: apex-reference
topic: connectapicdpidentityresolutionreconciliationfieldrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:24.827Z
estimatedTokens: 297
keywords: [Input, representation, identity, resolution, ruleset's, reconciliation, rule]
---

# ConnectApi.CdpIdentityResolutionReconciliationFieldRule

> Input representation for an identity resolution ruleset's
      reconciliation rule for a field.

# ConnectApi.CdpIdentityResolutionReconciliationFieldRule

Input representation for an identity resolution ruleset's reconciliation rule for a field.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldName | String | The field that this reconciliation rule applies to. | Required | 57.0 |
| ruleType | ConnectApi.​CdpIdentityResolution​ReconciliationRuleType | Default reconciliation rule applied to fields in the object the reconciliation rule applies to. Values are:LastUpdatedMostFrequentSourceSequence | Required | 57.0 |
| shouldIgnore​EmptyValue | Boolean | Specifies whether to ignore an empty value (true) or not (false). | Required | 57.0 |
| sources | List<ConnectApi.​CdpIdentityResolution​ReconciliationSource> | If ruleType is SourceSequence, a prioritized list of data sources. | Required if ruleType is SourceSequence | 57.0 |

#### See Also

-   [ConnectApi.CdpIdentityResolutionReconciliationRule](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_rul.htm "Input representation for an identity resolution ruleset's default reconciliation rule for an object.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CdpIdentityResolution​ReconciliationRuleType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CdpIdentityResolution​ReconciliationSource (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_sourc.htm)
- ConnectApi.CdpIdentityResolutionReconciliationRule (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_rul.htm)
