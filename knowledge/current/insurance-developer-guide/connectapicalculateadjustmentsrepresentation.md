---
title: "ConnectApi.CalculateAdjustmentsRepresentation"
domain: insurance-developer-guide
topic: connectapicalculateadjustmentsrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.377Z
estimatedTokens: 246
keywords: [Output, representation, calculating, adjustments, claim, loss, item]
---

# ConnectApi.CalculateAdjustmentsRepresentation

> Output representation of the details for calculating the adjustments for the claim loss
  item.

# ConnectApi.CalculateAdjustmentsRepresentation

Output representation of the details for calculating the adjustments for the claim loss item.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| adjustedAmount | Double | Amount after adjustments are made based on the current standings of the policy limits. | 65.0 |
| adjustmentReason | String | Reason for the claim coverage payment detail adjustment, such as deductible, copay, or coinsurance. | 65.0 |
| claimCovPaymentAdjustments | List<ConnectApi.ClaimCovPaymentAdjDetailsRep> | List of claim coverage payment adjustment details. | 65.0 |
| errors | List<ConnectApi.ErrorDetail> | List of errors that are associated with the API request. | 65.0 |
| insPolicyLimitTrackings | List<ConnectApi.InsPolicyLimitTrackingDetailsRep> | List of insurance policy limit tracking details. | 65.0 |
| isSuccess | Boolean | Indicates whether the API operation is successful (true) or not (false). | 65.0 |

## Related Topics

- ConnectApi.ClaimCovPaymentAdjDetailsRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_cov_payment_adj_details.htm)
- ConnectApi.ErrorDetail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_detail.htm)
- ConnectApi.InsPolicyLimitTrackingDetailsRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_ins_policy_limit_tracking_details.htm)
