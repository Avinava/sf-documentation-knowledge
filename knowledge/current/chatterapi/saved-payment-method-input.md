---
title: "Saved Payment Method Input"
domain: chatterapi
topic: saved-payment-method-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.752Z
estimatedTokens: 364
keywords: [Saved, Payment, Input, representation, shopper’s]
---

# Saved Payment Method Input

> Input representation of the details of the shopper’s saved payment method.

# Saved Payment Method Input

Input representation of the details of the shopper’s saved payment method.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalData | Map<String, String> | Additional data you can pass in the request. This property can include a maximum of five key-value pairs. Each key and value can contain up to 255 characters. | Optional | 59.0 |
| flowContext | String | Checkout or My Account flow for this payment method. | Optional | 59.0 |
| gatewayCustomer​Reference | String | Owner associated with the payment method to the payment gateway. | Required | 60.0 |
| gatewayInitiator​Reference | String | Specifies the gateway initiator reference, such as setup intent ID for gateway Stripe. | Required | 60.0 |
| id | String | Salesforce ID of the saved payment method record. | Optional | 58.0 |
| isDefault | Boolean | Marks the saved payment method as the default method to use for transactions. | Optional | 58.0 |
| paymentGatewayId | String | Salesforce ID of the Payment Gateway object record. | Required | 58.0 |
| paymentMethodType | String | Payment method type, such as a credit card. | Required | 59.0 |
| referenceOwnerId | String | ID of the merchant account of the contact record. | Required | 58.0 |
| usageType | String | Specifies whether the payment method is used OnSession or OffSession. | Required | 58.0 |

## Code Examples

```
{
    "gatewayCustomerReference" : "cus_N9hYyZflb2ObdN",
    "gatewayInitiatorReference" : "seti_1Mm8s8LkdIwHu7ix0OXBfTRG",
    "paymentGatewayId" : "0b0xx00000000w5AAA",
    "paymentMethodType" :"card",
    "referenceOwnerId" : "001xx000003Gmk3AAC" ,
    "usageType" : "OffSession"
}
```
