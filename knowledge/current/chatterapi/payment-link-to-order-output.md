---
title: "Payment Link To Order Output"
domain: chatterapi
topic: payment-link-to-order-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.235Z
estimatedTokens: 209
keywords: [Payment, Link, Order, Output]
---

# Payment Link To Order Output

> Payment link to order output.

# Payment Link To Order Output

Payment link to order output.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| orderReferenceNumber | String | Globally unique identifier (GUID) of the payment order generated after successful completion of a payment request. | Small, 58.0 | 58.0 |

#### See Also

-   [*Salesforce Connect REST API Developer Guide*: Payment Link, Create Order](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_create_payment_link_order.htm "Create an order for a payment link.")

-   [*Salesforce Connect REST API Developer Guide*: Payment Link To Order Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_payment_link_to_order_input.htm "Payment link input that's used to generate the payment order.")

## Code Examples

```
{
  "orderReferenceNumber": "ER37G-VYS2M-6GPHH-HG4DE"
}
```

## Related Topics

- Salesforce Connect REST API Developer Guide: Payment Link, Create
              Order (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_create_payment_link_order.htm)
- Salesforce Connect REST API Developer Guide: Payment Link To Order
              Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_payment_link_to_order_input.htm)
