---
title: "Card Payment Method Tokenization Input"
domain: chatterapi
topic: card-payment-method-tokenization-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.180Z
estimatedTokens: 175
keywords: [Card, Payment, Tokenization, Input, Credit]
---

# Card Payment Method Tokenization Input

> Credit card payment method input for tokenization.

# Card Payment Method Tokenization Input

Credit card payment method input for tokenization.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| card​Holder​Name | String | Name of the card holder that appears on the card. | Required | 55.0 |
| card​Number | String | Card number. | Required | 55.0 |
| card​Type | String | Card network type. Valid values are:AmericanExpressMasterCardVisa | Required | 55.0 |
| cvv | Integer | CVV (security code). | Required | 55.0 |
| expiry​Month | Integer | Card expiration month. | Required | 55.0 |
| expiry​Year | Integer | Card expiration year. | Required | 55.0 |

## Code Examples

```
{
    "cardHolderName": "John Doe Guest",
    "cardNumber": "4242424242424242",
    "expiryMonth": 12,
    "expiryYear": 2029,
    "cvv": 111,
    "cardType": "Visa"
}
```
