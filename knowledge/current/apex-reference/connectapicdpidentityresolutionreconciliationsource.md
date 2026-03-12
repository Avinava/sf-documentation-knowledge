---
title: "ConnectApi.CdpIdentityResolutionReconciliationSource"
domain: apex-reference
topic: connectapicdpidentityresolutionreconciliationsource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.568Z
estimatedTokens: 254
keywords: [ConnectApi.CdpIdentityResolutionReconciliationSource, Input, representation, identity, resolution, default, reconciliation, rule, field-specific, SourceSequence, match, method.]
---

# ConnectApi.CdpIdentityResolutionReconciliationSource

> Input representation for an identity resolution default reconciliation
      rule or field-specific rule using the SourceSequence
      match method.

# ConnectApi.CdpIdentityResolutionReconciliationSource

Input representation for an identity resolution default reconciliation rule or field-specific rule using the SourceSequence match method.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | If the ruleType for a reconciliation rule is SourceSequence, API name of a source Data Lake Object. | Required if ruleType is SourceSequence | 57.0 |

#### See Also

-   [ConnectApi.CdpIdentityResolutionReconciliationRule](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_rul.htm "Input representation for an identity resolution ruleset's default reconciliation rule for an object.")

-   [ConnectApi.CdpIdentityResolutionReconciliationFieldRule](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_field_rul.htm "Input representation for an identity resolution ruleset's reconciliation rule for a field.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.CdpIdentityResolutionReconciliationRule (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_rul.htm)
- ConnectApi.CdpIdentityResolutionReconciliationFieldRule (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cdp_identity_resolution_reconciliation_field_rul.htm)
