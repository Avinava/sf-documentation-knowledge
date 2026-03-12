---
title: "ConnectApi.PayExGratiaClaimCvrPaymentDetailRep"
domain: insurance-developer-guide
topic: connectapipayexgratiaclaimcvrpaymentdetailrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.624Z
estimatedTokens: 343
keywords: [Output, representation, gratia, payment, that’s, made, claim, coverage, detail]
---

# ConnectApi.PayExGratiaClaimCvrPaymentDetailRep

> Output representation for the details of the ex gratia payment that’s made for the claim coverage payment detail.

# ConnectApi.PayExGratiaClaimCvrPaymentDetailRep

Output representation for the details of the ex gratia payment that’s made for the claim coverage payment detail.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| claimPaymentSummaryId | String | ID of the claim payment summary record that’s added or updated. This ID links individual claim coverage payment details to the corresponding summary of payments that are processed for a claim. | 66.0 |
| consumedLimitCount | Integer | Total number of coverage units or limit counts that are utilized by this service or transaction. | 66.0 |
| errors | List<ConnectApi.ErrorDetail> | Error details that are shown when the API operation fails. | 66.0 |
| exceededAmount | Double | Excess amount that’s paid above the limits. | 66.0 |
| exceededCount | Integer | Number of coverage units or counts that are paid above the policy limits. This occurs when payments exceed the allowable limits, such as in discretionary ex gratia payments. | 66.0 |
| insPolicyLimitTrackingIds | List<String> | IDs of the insurance policy limit tracking records that are created during the ex gratia payment process. | 66.0 |
| isSuccess | Boolean | Indicates whether the API operation is successful (true) or not (false). | 66.0 |
| paidAmount | Double | Total amount that’s paid towards ex gratia. | 66.0 |

## Related Topics

- ConnectApi.ErrorDetail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_detail.htm)
