---
title: "Payment Intents"
domain: chatterapi
topic: payment-intents
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.161Z
estimatedTokens: 717
keywords: [Payment, Intents, Initiate, Salesforce, Payments, initiated]
---

# Payment Intents

> Initiate a payment with Salesforce Payments.

# Payment Intents

Initiate a payment with Salesforce Payments.

To access this resource, you need the following license and permissions.

-   Salesforce Payments License
-   Payments Administrator permission set

Resource

```

```

Available version

57.0

HTTP methods

POST

Request body for POST

JSON examples

Here’s an example without saved payment method information:

```

```

Here’s an example with saved payment method information:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalData | Map<String, String> | More data about the payment request. This property can include up to five key-value pairs. Each key and value can contain up to 255 characters. | Optional | 57.0 |
| amount | Double | Amount to be captured. | Required | 57.0 |
| applyDomain​Validations | Boolean | Indicates whether to apply domain-specific validations on the payment intent request (true) or not (false). The default value is false.This field is applicable to these domains:CollectionsCommerceCustomFieldServiceOrderManagementPaymentsRevenueSalesSchedulerService | Optional | 63.0 |
| currencyIso​Code | String | Three-letter ISO 4217 code indicating the currency of the payment. | Required | 57.0 |
| isExpress | Boolean | Indicates whether the payment intent request is for Express checkout (true) or not (false). The default value is false.This field is applicable to only the PayPal gateway. | Optional | 60.0 |
| isShipping​Applicable | Boolean | Indicates whether shipping is applicable to this particular payment (true) or not (false). The default value is false.This field is applicable to only the PayPal gateway. | Optional | 60.0 |
| paymentGateway​Id | String | ID of the payment gateway that processes the payment intent. | Required | 57.0 |
| paymentMethod | Saved Payment Method Input | Details required to save a payment method. | Optional | 58.0 |
| paymentMethod​Type | String | Type of payment instrument, such as a credit card or digital wallet. | Required | 57.0 |
| payerAccountId | String | ID of the payer’s Salesforce account. The ID is shown in the URL of any record. For example, if the record’s URL is https://na1.lightning.force.com/lightning/r/​Account/001OK000002KF2RYAW/view, the ID is 001OK000002KF2RYAW. | Optional | 61.0 |
| shippingAddress | Address Input | Shipping address of the payment intent. | Optional | 59.0 |
| sourceObject​Ids | String[] | A list of cart or checkout IDs that indicates what the payment was made for. | Required | 57.0 |
| useManual​Capture | Boolean | Indicates whether to use manual capture of a payment (true) or not (false). | Optional | 58.0 |

Response body for POST

[Payment Intents](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payments_payment_intents_output.htm "List of initiated payment intents.")

## Code Examples

```
/payments/payment-intents
```

```
{
  "amount": 8.99,
  "currencyIsoCode": "USD",
  "sourceObjectIds": [
    "0a6xx0000000cuvAAA"
  ],
  "paymentGatewayId": "{{paymentGatewayId}}",
  "paymentMethodType": "card",
  "payerAccountId": "001xx000003GYwy"
}
```

```
{
  "amount": "250",
  "applyDomainValidations": true,
  "currencyIsoCode": "USD",
  "sourceObjectIds": [
    "001xx000003Gmk3AAC"
  ],
  "paymentGatewayId": "0b0xx00000000w5AAA",
  "paymentMethodType": "us_bank_account",
  "payerAccountId": "001xx000003GYwy",
  "paymentMethod": {
    "referenceOwnerId": "001xx000003Gmk3AAC",
    "usageType": "OffSession",
    "isDefault": true
  }
}
```

## Related Topics

- Saved Payment Method
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_saved_payment_method_input.htm)
- Address Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_address_input.htm)
- Payment Intents (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payments_payment_intents_output.htm)
