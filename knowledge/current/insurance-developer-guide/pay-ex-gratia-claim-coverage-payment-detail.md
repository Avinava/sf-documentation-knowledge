---
title: "Pay Ex Gratia Claim Coverage Payment Detail"
domain: insurance-developer-guide
topic: pay-ex-gratia-claim-coverage-payment-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.720Z
estimatedTokens: 381
keywords: [Pay, Gratia, Claim, Coverage, Payment, Detail, Output, representation, that’s, made]
---

# Pay Ex Gratia Claim Coverage Payment Detail

> Output representation for the details of the ex gratia payment that’s made for the claim coverage payment detail.

# Pay Ex Gratia Claim Coverage Payment Detail

Output representation for the details of the ex gratia payment that’s made for the claim coverage payment detail.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| claimPayment​SummaryId | String | ID of the claim payment summary record that’s added or updated. This ID links individual claim coverage payment details to the corresponding summary of payments that are processed for a claim. | Small, 66.0 | 66.0 |
| consumedLimit​Count | Integer | Total number of coverage units or limit counts that are utilized by this service or transaction. | Small, 66.0 | 66.0 |
| errors | Error Detail[] | Error details that are shown when the API operation fails. | Small, 66.0 | 66.0 |
| exceededAmount | Double | Excess amount that’s paid above the limits. | Small, 66.0 | 66.0 |
| exceededCount | Integer | Number of coverage units or counts that are paid above the policy limits. This occurs when payments exceed the allowable limits, such as in discretionary ex gratia payments. | Small, 66.0 | 66.0 |
| insPolicyLimit​TrackingIds | String[] | IDs of the insurance policy limit tracking records that are created during the ex gratia payment process. | Small, 66.0 | 66.0 |
| isSuccess | Boolean | Indicates whether the API operation is successful (true) or not (false). | Small, 66.0 | 66.0 |
| paidAmount | Double | Total amount that’s paid towards ex gratia. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "claimPaymentSummaryId": "0sDxx0000000001CAA",
  "consumedLimitCount": 5,
  "errors": [],
  "exceededAmount": 1500.00,
  "exceededCount": 2,
  "insPolicyLimitTrackingIds": [
    "0qOxx0000004CvQEAU",
    "0qOxx0000004CvREAU"
  ],
  "isSuccess": true,
  "paidAmount": 5000.00
}
```

## Related Topics

- Error
         Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
