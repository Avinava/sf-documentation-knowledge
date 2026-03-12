---
title: "Payment Token Input"
domain: chatterapi
topic: payment-token-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.365Z
estimatedTokens: 101
keywords: [Payment, Token, Input, tokenize, credit, card, Commerce, store, checkout]
---

# Payment Token Input

> Input to tokenize a credit card payment method for a Commerce store checkout.

# Payment Token Input

Input to tokenize a credit card payment method for a Commerce store checkout.

Root XML tag

<paymentTokenRequest>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| card​PaymentM​ethod | Card Payment Method Tokenization Input | Credit card payment method to tokenize. | Required | 55.0 |

## Code Examples

```
{
   "cardPaymentMethod":{
      "cardHolderName":"John Doe",
      "cardNumber":"4242424242424242",
      "expiryMonth":"12",
      "expiryYear":"24",
      "cvv":"141",
      "cardType":"Visa"
   }
}
```

## Related Topics

- Card Payment Method Tokenization Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_card_payment_method_tokenization_input.htm)
