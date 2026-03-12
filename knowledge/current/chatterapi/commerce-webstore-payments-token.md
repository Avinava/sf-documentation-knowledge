---
title: "Commerce Webstore Payments Token"
domain: chatterapi
topic: commerce-webstore-payments-token
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.606Z
estimatedTokens: 241
keywords: [Commerce, Webstore, Payments, Token, Tokenize, payment, store, checkout]
---

# Commerce Webstore Payments Token

> Tokenize a payment for a Commerce store checkout.

# Commerce Webstore Payments Token

Tokenize a payment for a Commerce store checkout.

To access this resource, you need a B2B or D2C Commerce license and the system permissions included in either the Buyer (B2B stores only) or Shopper (D2C stores only) [preconfigured permission set](https://help.salesforce.com/s/articleView?id=commerce.comm_preconfigured_perm_sets.htm&type=5&language=en_US).

Resource

```

```

Available version

55.0

HTTP methods

POST

Request body for POST

Root XML tag

<paymentTokenRequest>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| card​PaymentM​ethod | Card Payment Method Tokenization Input | Credit card payment method to tokenize. | Required | 55.0 |

Response body for POST

[Payment Token](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_token.htm "Represents a payment token for a Commerce store checkout.")

## Code Examples

```
/commerce/webstores/webstoreId/payments/token
```

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
- Payment Token (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_token.htm)
