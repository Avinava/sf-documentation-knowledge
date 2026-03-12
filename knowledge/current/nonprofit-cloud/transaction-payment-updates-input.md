---
title: "Transaction Payment Updates
    Input"
domain: nonprofit-cloud
topic: transaction-payment-updates-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.781Z
estimatedTokens: 136
keywords: [Transaction, Payment, Updates, Input, representation, gateway, processor, metadata, include, any, standard, custom, beyond, error, shown]
---

# Transaction Payment Updates
    Input

> Input representation of the gateway and processor metadata to update the transaction
    payment. If you include any other standard or custom fields in the request body beyond the
    specified properties, an error is shown.

# Transaction Payment Updates Input

Input representation of the gateway and processor metadata to update the transaction payment. If you include any other standard or custom fields in the request body beyond the specified properties, an error is shown.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| updates | Transaction Payment Update Request Input[] | Contains the details of the request to update the transaction payment. | Required | 60.0 |

## Code Examples

```
{
  "updates": [
    {
      "giftTransactionId": "6TR5500000WO1ZIFGE",
      "transactionStatus": "Unpaid",
      "processorReference": "string",
      "gatewayReference": "string",
      "lastGatewayResponseCode": "invalid_cvc",
      "lastGatewayErrorMessage": "The card’s security code is invalid. Check the card’s security code or use a different card.",
      "lastGatewayProcessedDateTime": "2023-07-06T21:57:51Z"
    }
  ]
}
```

## Related Topics

- Transaction Payment Update Request Input[] (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_requests_transaction_payment_update_request.htm)
