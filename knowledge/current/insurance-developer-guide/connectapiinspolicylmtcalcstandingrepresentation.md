---
title: "ConnectApi.InsPolicyLmtCalcStandingRepresentation"
domain: insurance-developer-guide
topic: connectapiinspolicylmtcalcstandingrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.492Z
estimatedTokens: 145
keywords: [Output, representation, current, standings, insurance, policy, limits]
---

# ConnectApi.InsPolicyLmtCalcStandingRepresentation

> Output representation for the current standings of the insurance policy limits.

# ConnectApi.InsPolicyLmtCalcStandingRepresentation

Output representation for the current standings of the insurance policy limits.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorDetail> | Errros that are encountered during the processing of the API request. | 65.0 |
| insPolicyLmtCalcStandingNodes | List<ConnectApi.InsPolicyLmtCalcStandingNode> | List of policy limit current standing nodes. | 65.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | 65.0 |

## Related Topics

- ConnectApi.ErrorDetail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_detail.htm)
- ConnectApi.InsPolicyLmtCalcStandingNode (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_ins_policy_lmt_calc_standing_node.htm)
