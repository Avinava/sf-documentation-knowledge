---
title: "Edit Claim Coverage Payment Detail Response"
domain: insurance-developer-guide
topic: edit-claim-coverage-payment-detail-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.438Z
estimatedTokens: 236
keywords: [Edit, Claim, Coverage, Payment, Detail, Output, representation, edited]
---

# Edit Claim Coverage Payment Detail Response

> Output representation for the edited claim coverage payment detail.

# Edit Claim Coverage Payment Detail Response

Output representation for the edited claim coverage payment detail.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustedAmount | Double | Final amount after all deductions, such as deductibles or co-pays. This field is returned when a Loss item is created and adjustments are applied. | Big, 65.0 | 65.0 |
| adjustedReason | String | Reason for the claim coverage payment detail adjustment, such as deductible, copay, or coinsurance. | Big, 65.0 | 65.0 |
| errors | Error Detail[] | Errors details when the operation fails. | Big, 65.0 | 65.0 |
| insurance​PolicyLimitTracking​Ids | String[] | Comma-separated IDs of the insurance policy limit tracking records. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "adjustedAmount": 4500.00,
  "adjustedReason": "Deductible applied",
  "insurancePolicyLimitTrackingIds": [
    "0qOxx0000004CvQEAU",
    "0qOxx0000004CvREAU"
  ],
  "isSuccess": true,
  "errors": []
}
```

## Related Topics

- Error Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
