---
title: "Payment Link, Create Order"
domain: chatterapi
topic: payment-link-create-order
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.817Z
estimatedTokens: 375
keywords: [Payment, Link, Order]
---

# Payment Link, Create Order

> Create an order for a payment link.

# Payment Link, Create Order

Create an order for a payment link.

To access this resource, you need the following license and permissions.

-   Salesforce Payments License
-   Payments Administrator permission set

First, the [Payment Link, Get Configuration API](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_get_payment_link_details.htm "Retrieve the payment link details.") is called to fetch the payment link details, which are then shown on the Pay Now page. These details include the amount, payment method, and currency. Upon users inputting their payment details and additional information, the Payment Link, Create Order API is called to process the payment and generate the payment order.

Resource

```

```

Resource example

```

```

Available version

58.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalData | Map<String, String> | Map of additonal data. | Optional | 58.0 |
| paymentData | String | Payment data identifier received from the payment gateway, such as Stripe, after successful validation of the payment data. This data is in JSON format and is stored in Salesforce object after successful payment request. | Required | 58.0 |

Response body for POST

[Payment Link To Order Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_link_to_order_output.htm "Payment link to order output.")

## Code Examples

```
/payments/link-to-order/paymentLinkId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/payments/link-to-order/12f1Q000000PCTs
```

```
{
  "paymentData": "{"id":"pi_3PLpeFBDODMbR10X0czqE0VI",​"uuid":"20d7702d-73bb-48bd-8b55-67ef02d0b97e",​"paymentGatewayId":"0b01Q000000Xo6YQAS",​"gatewayCustomerId":null}"
}
```

## Related Topics

- Payment Link, Get Configuration API (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_get_payment_link_details.htm)
- Payment Link To Order Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_link_to_order_output.htm)
