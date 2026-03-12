---
title: "Payment Link Config Output"
domain: chatterapi
topic: payment-link-config-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:20.231Z
estimatedTokens: 347
keywords: [Payment, Link, Config, Output, configuration]
---

# Payment Link Config Output

> Payment link configuration details.

# Payment Link Config Output

Payment link configuration details.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Amount of the payment link. | Small, 58.0 | 58.0 |
| cartId | String | ID of the cart associated with the payment link. | Small, 59.0 | 59.0 |
| currencyIsoCode | String | Currency Iso code of the payment link. | Small, 58.0 | 58.0 |
| description | String | Description of the payment link. | Small, 58.0 | 58.0 |
| paymentMethodSetDevName | String | Developer name of the payment method set associated with the payment link, which is used to display the payment methods on the payment link page. | Small, 58.0 | 58.0 |
| title | String | Title of the payment link. | Small, 58.0 | 58.0 |
| type | PaymentLinkType | Type of the payment link. Possible values are:PredefinedAmount—Type of payment link with a predefined amount. This payment link type calls the Commerce Webstore Checkout Orders API.WithProducts—Type of payment link with product items. This payment link type calls the Commerce Webstore Checkouts API. | Small, 59.0 | 59.0 |

#### See Also

-   [*Salesforce Connect REST API Developer Guide*: Payment Link, Get Details](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_get_payment_link_details.htm "Retrieve the payment link details.")

## Code Examples

```
{
  "amount": 25.5,
  "cartId": "0a612d32fgcd",
  "currencyIsoCode": "USD",
  "description": "Payment made for online purchase.",
  "paymentMethodSetDevName": "AMER_US",
  "type": "PredefinedAmount",
  "title": "PaymentLink Title"
}
```

## Related Topics

- Salesforce Connect REST API Developer Guide: Payment Link, Get
              Details (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_get_payment_link_details.htm)
