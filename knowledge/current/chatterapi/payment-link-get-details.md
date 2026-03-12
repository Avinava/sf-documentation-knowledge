---
title: "Payment Link, Get Details"
domain: chatterapi
topic: payment-link-get-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.472Z
estimatedTokens: 317
keywords: [Payment, Link, Retrieve]
---

# Payment Link, Get Details

> Retrieve the payment link details.

# Payment Link, Get Details

Retrieve the payment link details.

To access this resource, you need the following license and permissions.

-   Salesforce Payments License
-   Payments Administrator permission set

You can use Pay Now to generate and share payment links with your users from any Salesforce app. The payment link redirects the user to the Pay Now page, presenting payment details including the amount, designated payment method, and currency to complete the payment. Once users input the payment details and additional information, make a POST request with the [Payment Link, Create Order API](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_create_payment_link_order.htm "Create an order for a payment link.") to process the payment.

For more information on setting up Pay Now to create and send payment links to users, see [Salesforce Pay Now](https://help.salesforce.com/s/articleView?id=commerce.pay_now_intro_prereqs.htm&type=5&language=en_US "HTML (New Window)").

Resource

```

```

Resource example

```

```

Available version

58.0

HTTP methods

GET

Response body for GET

[Payment Link Config Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_link_config_output.htm "Payment link configuration details.")

## Code Examples

```
/payments/payment-link-configs/paymentLinkId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/payments/payment-link-configs/12f1Q000000PCTs
```

## Related Topics

- Payment Link, Create Order API (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_create_payment_link_order.htm)
- Payment Link Config Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_link_config_output.htm)
