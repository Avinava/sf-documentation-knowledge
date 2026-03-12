---
title: "Claim Coverage Payment Detail"
domain: insurance-developer-guide
topic: claim-coverage-payment-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.421Z
estimatedTokens: 254
keywords: [Claim, Coverage, Payment, Detail, Output, representation, creating, record]
---

# Claim Coverage Payment Detail

> Output representation for creating the claim coverage payment detail record.

# Claim Coverage Payment Detail

Output representation for creating the claim coverage payment detail record.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustedAmount | Double | Amount after adjustments are made based on the current standings of the policy limits. | Small, 65.0 | 65.0 |
| adjustmentReason | String | Reason for the claim coverage payment detail adjustment, such as deductible, copay, or coinsurance. | Small, 65.0 | 65.0 |
| errors | Error Detail [] | List of errors, including detailed information about each error. | Small, 65.0 | 65.0 |
| insPolicyLimit​TrackingIds | List<String> | IDs of the insurance policy limit tracking records. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the API operation is successful (true) or not (false). | Small, 65.0 | 65.0 |
| paymentDetailId | String | ID of the claim coverage payment detail record that's created. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "adjustedAmount": 200.0,
  "adjustmentReason": "Deductible",
  "paymentDetailId": "0l2xx00000001grAAA",
  "insPolicyLimitTrackingIds": [
    "1TExx0000004DUuGAM",
    "1TExx0000004DUvGAM"
  ],
  "isSuccess": true,
  "errors": []
}
```

## Related Topics

- Error Detail
         [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
