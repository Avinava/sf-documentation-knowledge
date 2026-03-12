---
title: "ConnectApi.CreateClaimCoveragePaymentDetailRep"
domain: insurance-developer-guide
topic: connectapicreateclaimcoveragepaymentdetailrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.428Z
estimatedTokens: 203
keywords: [Output, representation, claim, coverage, payment, detail, record]
---

# ConnectApi.CreateClaimCoveragePaymentDetailRep

> Output representation for the details of the create claim coverage payment detail
  record.

# ConnectApi.CreateClaimCoveragePaymentDetailRep

Output representation for the details of the create claim coverage payment detail record.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| adjustedAmount | Double | Adjusted amount of the claim coverage payment detail. | 65.0 |
| adjustedReason | String | Reason for the adjustment. | 65.0 |
| errors | List<ConnectApi.ErrorDetail> | List of errors, including detailed information about each error. | 65.0 |
| insurancePolicyLimitTrackingIds | List<String> | IDs of the insurance policy limit tracking records. | 65.0 |
| isSuccess | Boolean | Indicates whether the API operation is successful (true) or (not). | 65.0 |
| paymentDetailId | String | ID of the claim coverage payment detail record that's created. | 65.0 |

## Related Topics

- ConnectApi.ErrorDetail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_detail.htm)
