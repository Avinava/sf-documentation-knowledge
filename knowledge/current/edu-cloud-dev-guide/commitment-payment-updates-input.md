---
title: "Commitment Payment Updates
    Input"
domain: edu-cloud-dev-guide
topic: commitment-payment-updates-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.725Z
estimatedTokens: 102
keywords: [Commitment, Payment, Updates, Input, representation, fundraising, commitments]
---

# Commitment Payment Updates
    Input

> Input representation of the details of the payment update to the fundraising
    commitments.

# Commitment Payment Updates Input

Input representation of the details of the payment update to the fundraising commitments.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| updates | Commitment Payment Updates Request Input[] | Contains the request details to update the commitment payment. | Required | 60.0 |

## Code Examples

```
{
  "updates": [
    {
      "giftCommitmentId": "6TR5500000WO1ZIFGE",
      "paymentInstrument": {
        "type": "Venmo",
        "accountHolderName": "Daniel Chavez",
        "expiryMonth": "10",
        "expiryYear": "2026",
        "last4": "4321",
        "cardBrand": "visa",
        "bankName": "chase",
        "digitalWalletProvider": "Diner's Club",
        "bankAccountHolderType": "primary",
        "bankAccountType": "checking",
        "bankAccountNumber": "123456",
        "bankCode": "HBUK",
        "gatewayName": "Gateway",
        "processorName": "Centpro",
        "processorPaymentReference": "string",
        "gatewayReference": "string"
      }
    }
  ]
}
```

## Related Topics

- Commitment Payment Updates Request Input[] (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_requests_commitment_payment_updates_request.htm)
