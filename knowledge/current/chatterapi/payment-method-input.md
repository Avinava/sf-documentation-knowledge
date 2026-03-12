---
title: "Payment Method Input"
domain: chatterapi
topic: payment-method-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.358Z
estimatedTokens: 162
keywords: [Payment, Input, consumed, gateway]
---

# Payment Method Input

> Payment method input consumed by the payment
    gateway.

# Payment Method Input

Payment method input consumed by the payment gateway.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| address | Address Input | Address of the payment method. | Required | 49.0 |
| cardPaymentMethod | Card Payment Method Input | Card details for the payment method. | Required | 49.0 |
| id | String | ID of the payment method record. Used in payment transactions. | Required | 49.0 |
| saveForFuture | Boolean | Indicates whether to save a record of the payment method for future use (true) or not (false). | Optional | 49.0 |

## Code Examples

```
{
"address":{
"city":"San Francisco",
"companyName":"Salesforce",
"country":"US",
"postalcode":"94105",
"state":"CA",
"street":"415 Mission Street"
}

"cardPaymentMethod":{
"accountId":"00000",
"autoPay":"true",
"cardCategory":"CreditCard",
"cardHolderFirstName":"Mary",
"cardHolderLastName":"Smith",
"cardHolderName":"Mary Smith",
"cardNumber":"0000 0000 0000 0000",
"cardType":"AmericanExpress",
"cvv":"111",
"expiryMonth":"04",
"expiryYear":"25",
"nickName":"Mary's American Express Credit Card"
}

"id":"00000",
"saveForFuture":"False"
}
```

## Related Topics

- Address Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_address_input.htm)
- Card Payment Method Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_card_payment_method_input.htm)
