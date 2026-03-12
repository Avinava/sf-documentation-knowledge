---
title: "Payment Link To Order Input"
domain: chatterapi
topic: payment-link-to-order-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.353Z
estimatedTokens: 253
keywords: [Payment, Link, Order, Input, that's, generate]
---

# Payment Link To Order Input

> Payment link input that's used to generate the payment order.

# Payment Link To Order Input

Payment link input that's used to generate the payment order.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalData | Map<String, String> | Map of additonal data. | Optional | 58.0 |
| paymentData | String | Payment data identifier received from the payment gateway, such as Stripe, after successful validation of the payment data. This data is in JSON format and is stored in Salesforce object after successful payment request. | Required | 58.0 |

#### See Also

-   [*Salesforce Connect REST API Developer Guide*: Payment Link, Create Order](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_create_payment_link_order.htm "Create an order for a payment link.")

-   [*Salesforce Connect REST API Developer Guide*: Payment Link To Order Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_link_to_order_output.htm "Payment link to order output.")

## Code Examples

```
{
  "paymentData": "{"id":"pi_3PLpeFBDODMbR10X0czqE0VI",​"uuid":"20d7702d-73bb-48bd-8b55-67ef02d0b97e",​"paymentGatewayId":"0b01Q000000Xo6YQAS",​"gatewayCustomerId":null}"
}
```

## Related Topics

- Salesforce Connect REST API Developer Guide: Payment Link, Create
              Order (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_create_payment_link_order.htm)
- Salesforce Connect REST API Developer Guide: Payment Link To Order
              Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_link_to_order_output.htm)
