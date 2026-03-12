---
title: "Payment Group Input"
domain: chatterapi
topic: payment-group-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.345Z
estimatedTokens: 254
keywords: [Payment, Group, Input, associated, Users, either, creation, new, pass]
---

# Payment Group Input

> Payment group details associated with the request. Users can either
      request creation of a new ID or pass an ID.

# Payment Group Input

Payment group details associated with the request. Users can either request creation of a new ID or pass an ID.

JSON example

```

```

JSON Example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| createPayment​Group | Boolean | Flag to indicate if payment group needs to be created. | Optional | 48.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the payment group record. | Optional | 48.0 |
| id | String | If ID has a value, the payment capture is using an active PaymentGroup. If ID is null and other parameters have values, the payment capture will create a new payment group. If a payment group ID exists, currencyIsoCode and sourceObjectId parameters must be null, and createPaymentGroup can be absent or false. | Optional | 48.0 |
| sourceObjectId | String | Order object ID for linking an order to a payment group. Provide an existing OrderId. | Optional | 48.0 |

## Code Examples

```
"paymentGroup":{
      "createPaymentGroup":"true",
      "sourceObjectId":"",
      "currencyIsoCode":"USD"
  }
```

```
"paymentGroup":{
"id":"PaymentGroupId"
}
```
