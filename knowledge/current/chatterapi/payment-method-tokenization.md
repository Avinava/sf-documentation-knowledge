---
title: "Payment Method Tokenization"
domain: chatterapi
topic: payment-method-tokenization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.125Z
estimatedTokens: 638
keywords: [Payment, Tokenization, Tokenize]
---

# Payment Method Tokenization

> Tokenize a payment method.

# Payment Method Tokenization

Tokenize a payment method.

To access Salesforce Payments resources, you need one of the following permissions:

-   PaymentsAPIUser user permission. This permission is available with the Salesforce Order Management License & B2B Community License. Your Salesforce admin assigns it to your user profile.
-   Authorize Payment user permission. This permission is available with the Salesforce Payment License. Your Salesforce admin assigns it to your user profile.
-   Authorize and Capture Payment user permission. This permission is available with the Salesforce Payment License. Your Salesforce admin assigns it to your user profile.
-   Make Payments user permission. This permission is available with the Salesforce Payment License. Your Salesforce admin assigns it to your buyer profile.

Resource

```

```

Available version

51.0

HTTP methods

POST

Request body for POST

[Payment Method Tokenization Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_payment_method_tokenization_input.htm "Payment method tokenization input consumed by the payment tokenization service.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Supports JSON only. XML isn’t supported.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalData | Map<String, String> | Allows users to enter additional data for a payment request. The additionalData object consists of entries, each of which includes a key and value. Supports up to five key-value pairs. Each key and each value can contain up to 255 characters. | Optional | 51.0 |
| address | Address Input | Payment method address. | Required | 51.0 |
| cardPaymentMethod | Card Payment Method Input | Card payment method. | Required | 51.0 |
| email | String | Email of the client that initiated the request. | Optional | 51.0 |
|  |  |  |  | 51.0 |
| ipAddress | String | IP address of the client that made the request. | Optional | 51.0 |
| macAddress | String | MAC address of the client that made the request. | Optional | 51.0 |
| paymentGatewayId | String | ID of the payment gateway. | Required | 51.0 |
| phone | String | Phone number of the client that initiated the request. | Optional | 51.0 |

Response body for POST

[Payment Method Tokenization Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_method_tokenization_output.htm "Payment method tokenization output representation.")

## Code Examples

```
/commerce/payments/payment-methods
```

```
{
"address":{
  "city":"San Francisco",
  "companyName":"Salesforce",
  "country":"US",
  "postalcode":"94105",
  "state":"CA",
  "street":"415 Mission Street"
},

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
},"paymentGatewayId":"000000000",
"ipAddress": "202.95.77.70",
"macAddress": "00-14-22-01-23-45",
"phone": "100-456-67",
"email": "test@ccs.org",
"additionalData":{
  "key1":"value1",
  "key2":"value2",
  "key3":"value3",
  "key4":"value4",
  "key5":"value5"
}
}
```

## Related Topics

- Payment Method Tokenization Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_payment_method_tokenization_input.htm)
- Address Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_address_input.htm)
- Card Payment Method Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_card_payment_method_input.htm)
- Payment Method Tokenization Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_method_tokenization_output.htm)
