---
title: "ConnectApi.EditClaimCoveragePaymentDetailRep"
domain: insurance-developer-guide
topic: connectapieditclaimcoveragepaymentdetailrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.441Z
estimatedTokens: 224
keywords: [Output, representation, editing, claim, coverage, payment, detail]
---

# ConnectApi.EditClaimCoveragePaymentDetailRep

> Output representation for editing claim coverage payment detail.

# ConnectApi.EditClaimCoveragePaymentDetailRep

Output representation for editing claim coverage payment detail.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| adjustedAmount | Double | Final amount after all deductions, such as deductibles or co-pays. This field is returned when a Loss item is created and adjustments are applied. | 65.0 |
| adjustedReason | String | Reason for the claim coverage payment detail adjustment, such as deductible, copay, or coinsurance. | 65.0 |
| errors | List<ConnectApi.ErrorDetail> | List of errors, including detailed information about each error when the API operation fails. | 65.0 |
| insurance​PolicyLimit​TrackingIds | List<String> | Comma-separated IDs of the insurance policy limit tracking records. | 65.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | 65.0 |

## Related Topics

- ConnectApi.ErrorDetail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_detail.htm)
