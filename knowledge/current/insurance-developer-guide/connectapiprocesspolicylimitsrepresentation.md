---
title: "ConnectApi.ProcessPolicyLimitsRepresentation"
domain: insurance-developer-guide
topic: connectapiprocesspolicylimitsrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.631Z
estimatedTokens: 203
keywords: [Output, representation, processing, policy, limits, claim, loss, item]
---

# ConnectApi.ProcessPolicyLimitsRepresentation

> Output representation for processing the policy limits for a claim loss item.

# ConnectApi.ProcessPolicyLimitsRepresentation

Output representation for processing the policy limits for a claim loss item.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorDetail> | Details of the errors that are associated with the processing of the API request. | 65.0 |
| exceededAmount | Double | Amount that exceeds the remaining available policy limit in the specified limit currency. | 66.0 |
| exceededCount | Integer | Count of coverage units beyond the policy’s allowed unit limit. | 66.0 |
| insPolicyLimitTrackings | List<ConnectApi.InsPolicyLimitTrackingDetailsRep> | List of insurance policy limit tracking details. | 65.0 |
| isLimitExceeded | Boolean | Indicates whether a limit is exceeded (true) or not (false). | 65.0 |

## Related Topics

- ConnectApi.ErrorDetail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_detail.htm)
- ConnectApi.InsPolicyLimitTrackingDetailsRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_ins_policy_limit_tracking_details.htm)
