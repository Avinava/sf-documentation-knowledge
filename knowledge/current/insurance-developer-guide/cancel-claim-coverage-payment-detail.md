---
title: "Cancel Claim Coverage Payment Detail"
domain: insurance-developer-guide
topic: cancel-claim-coverage-payment-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.376Z
estimatedTokens: 153
keywords: [Cancel, Claim, Coverage, Payment, Detail, Output, representation, canceled]
---

# Cancel Claim Coverage Payment Detail

> Output representation for the canceled claim coverage payment detail.

# Cancel Claim Coverage Payment Detail

Output representation for the canceled claim coverage payment detail.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Detail [] | Details of the errors that are associated with the API request. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the API operation is successful (true) or not (false). | Big, 65.0 | 65.0 |
| paymentDetailId | String | ID of the claim coverage payment detail for which the payment is canceled. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "isSuccess": true,
  "paymentDetailId": "0l2xx000000003gEAA",
  "errors": []
}
```

## Related Topics

- Error Detail
        [] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
