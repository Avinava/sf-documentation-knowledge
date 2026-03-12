---
title: "ConnectApi.CdpIdentityResolutionReconciliationRule"
domain: apex-reference
topic: connectapicdpidentityresolutionreconciliationrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.563Z
estimatedTokens: 396
keywords: [ConnectApi.CdpIdentityResolutionReconciliationRule, Input, representation, identity, resolution, ruleset's, default, reconciliation, rule, object.]
---

# ConnectApi.CdpIdentityResolutionReconciliationRule

> Input representation for an identity resolution ruleset's default
      reconciliation rule for an object.

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

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CdpIdentityResolution​ReconciliationField​Rule (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_field_rul.htm)
- ConnectApi.​CdpIdentityResolution​ReconciliationRuleType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​CdpIdentityResolution​ReconciliationSource (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_sourc.htm)
- ConnectApi.CdpIdentityResolutionConfigInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_inpu.htm)
- ConnectApi.CdpIdentityResolutionConfigPatchInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_config_patch_inpu.htm)
