---
title: "ConnectApi.CdpIdentityResolutionReconciliationRuleOutput"
domain: apex-reference
topic: connectapicdpidentityresolutionreconciliationruleoutput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.231Z
keywords: [ConnectApi.CdpIdentityResolutionReconciliationRuleOutput, See]
---

# ConnectApi.CdpIdentityResolutionReconciliationRuleOutput

# ConnectApi.CdpIdentityResolutionReconciliationRuleOutput

Identity resolution ruleset’s reconciliation rule for an object.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| entityName | String | API name of the Data Model Object the reconciliation rule applies to. | 57.0 |
| fields | List<ConnectApi.​CdpIdentityResolution​ReconciliationField​RuleOutput> | Field-specific reconciliation rules that override this default rule for the specified field. | 57.0 |
| linkDmoName | String | API name of the unified link object created by the identity resolution process. | 57.0 |
| ruleType | ConnectApi.​CdpIdentityResolution​ReconciliationRuleType | Default reconciliation rule applied to fields in the object the reconciliation rule applies to. Values are:LastUpdatedMostFrequentSourceSequence | 57.0 |
| shouldIgnore​EmptyValue | Boolean | Specifies whether to ignore an empty value (true) or not (false). | 57.0 |
| sources | List<ConnectApi.​CdpIdentityResolution​ReconciliationSourceOutput> | If ruleType is SourceSequence, a list of data sources in priority order. | 57.0 |
| unifiedDmoName | String | API name of the unified data model object created by the identity resolution process. | 57.0 |

#### See Also

-   [ConnectApi.CdpIdentityResolutionOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cdp_identity_resolution_output.htm "Identity resolution ruleset.")