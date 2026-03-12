---
title: "ConnectApi.CancelPolicyOutputRepresentation"
domain: insurance-developer-guide
topic: connectapicancelpolicyoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.384Z
estimatedTokens: 145
keywords: [Output, representation, cancel, policy, impacted, versions, refund, associated, cancellation]
---

# ConnectApi.CancelPolicyOutputRepresentation

> Output representation details of cancel policy, such as impacted policy versions and
    refund associated with the cancellation.

# ConnectApi.CancelPolicyOutputRepresentation

Output representation details of cancel policy, such as impacted policy versions and refund associated with the cancellation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.ErrorOutputRepresentation | List of errors encountered during the processing of the API request. | 63.0 |
| impactedPolicyVersions | List<String> | List of impacted policy versions. | 63.0 |
| refund | ConnectApi.RefundOutputRepresentation | Refund associated with cancellation operation. | 63.0 |

## Related Topics

- ConnectApi.ErrorOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_output.htm)
- ConnectApi.RefundOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_refund_output.htm)
