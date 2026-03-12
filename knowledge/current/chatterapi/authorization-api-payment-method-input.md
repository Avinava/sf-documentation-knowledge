---
title: "Authorization API Payment Method Input"
domain: chatterapi
topic: authorization-api-payment-method-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.025Z
estimatedTokens: 366
keywords: [Authorization, API, Payment, Input, representation]
---

# Authorization API Payment Method Input

> Payment method input representation for authorization.

# Authorization API Payment Method Input

Payment method input representation for authorization.

JSON example with cardPaymentMethod

```

```

JSON example with ID of Payment Method Object

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| address | Address Input | Payment method address. | Optional. If you use an ID, don’t use the address property because a validation error occurs. | 49.0 |
| cardPaymentMethod | Card Payment Method Input | Card payment method including customer payment information. | Optional. For a successful request, include cardPaymentMethod details or an ID. Don’t use both or an error occurs. | 49.0 |
| id | String | ID of a PaymentMethod or SavedPaymentMethod record that the payment gateway uses to process the payment authorization. The SavedPaymentMethod can be passed only for Salesforce Payments. | Optional. For a successful request, include an ID or a cardPaymentMethod. Don’t use both or an error occurs.If you specify an ID don’t use an address or saveForFuture property because a validation error occurs. The address can’t be updated on the paymentMethod object. | 49.0 |
| saveForFuture | Boolean | Indicates whether to save the payment method for future use (true) or not (false). If unspecified, the default value is false. | Optional. If you specify an ID, don’t use the saveForFuture property because a validation error occurs. | 49.0 |

## Code Examples

```
{
  "paymentMethod": {
    "address": {
      "city": "San Francisco",
      "companyName": "Salesforce",
      "country": "US",
      "postalcode": "94105",
      "state": "CA",
      "street": "123 Main Street"
    },
    "saveForFuture": "true",
    "cardPaymentMethod": {
      "cardHolderName": "Mary Smith",
      "expiryMonth": "03",
      "expiryYear": "2027",
      "cardNumber": "4111111111111111",
      "cvv": "737",
      "cardCategory": "CreditCard",
      "cardType": "VISA",
      "nickName": "Primary credit card"
    }
  }
}
```

```
{
  "paymentMethod": {
    "id": "03OOG0000002l402AA"
  }
}
```

## Related Topics

- Address Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_address_input.htm)
- Card Payment Method Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_card_payment_method_input.htm)
