---
title: "Post Authorization API Payment Method Input"
domain: chatterapi
topic: post-authorization-api-payment-method-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.488Z
estimatedTokens: 175
keywords: [Post, Authorization, API, Payment, Input]
---

# Post Authorization API Payment Method Input

> Payment method input for post authorization.

# Post Authorization API Payment Method Input

Payment method input for post authorization.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| address | Address Input | Payment method address. | Required | 54.0 |
| alternativePaymentMethod | Alternative Payment Method Input | Alternative payment method. | Required | 54.0 |
| id | String | ID of the payment method record. | Required | 54.0 |
| cardPaymentMethod | Card Payment Method Input | Card payment method. | Required | 54.0 |
| saveForFuture | Boolean | Defines whether Salesforce saves the payment method for future use. The default value is False. | Optional | 54.0 |

## Related Topics

- Address Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_address_input.htm)
- Alternative Payment Method Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_alternative_payment_method_input.htm)
- Card Payment Method Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_card_payment_method_input.htm)
