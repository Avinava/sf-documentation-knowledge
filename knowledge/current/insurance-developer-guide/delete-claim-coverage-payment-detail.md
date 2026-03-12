---
title: "Delete Claim Coverage Payment Detail"
domain: insurance-developer-guide
topic: delete-claim-coverage-payment-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.434Z
estimatedTokens: 152
keywords: [Claim, Coverage, Payment, Detail, Output, representation, deleted]
---

# Delete Claim Coverage Payment Detail

> Output representation for the deleted claim coverage payment detail.

# Delete Claim Coverage Payment Detail

Output representation for the deleted claim coverage payment detail.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Detail[] | List of errors that are associated with the API operation. | Big, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the operation was successful (true)or not (false). | Big, 65.0 | 65.0 |
| payment​DetailId | String | ID of the claim coverage payment detail record whose status is marked as Deleted. | Big, 65.0 | 65.0 |

## Code Examples

```
{
  "isSuccess": true,
  "paymentDetailId": "0l2xx000000003gEAA",
  "errors": []
}
```

## Related Topics

- Error
        Detail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_details.htm)
