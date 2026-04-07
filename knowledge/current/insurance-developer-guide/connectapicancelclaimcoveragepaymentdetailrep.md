---
title: "ConnectApi.CancelClaimCoveragePaymentDetailRep"
domain: insurance-developer-guide
topic: connectapicancelclaimcoveragepaymentdetailrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:50.148Z
estimatedTokens: 140
keywords: [cancel, claim, coverage, payment, detail, record]
---

> Output representation for the details of the cancel claim coverage payment detail
  record.

# ConnectApi.CancelClaimCoveragePaymentDetailRep

Output representation for the details of the cancel claim coverage payment detail record.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorDetail> | Details of the errors that are associated with the API request. | 65.0 |
| isSuccess | Boolean | Indicates whether the API operation is successful (true) or not (false). | 65.0 |
| paymentDetailId | String | ID of the claim coverage payment detail for which the payment is canceled. | 65.0 |

## Related Topics

- ConnectApi.ErrorDetail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_detail.htm)
