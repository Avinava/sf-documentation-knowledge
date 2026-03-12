---
title: "Commerce Webstore Cart, Preserve"
domain: chatterapi
topic: commerce-webstore-cart-preserve
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.276Z
estimatedTokens: 579
keywords: [Commerce, Webstore, Cart, Preserve, contents, guest, logs, authenticated, customer]
---

# Commerce Webstore Cart, Preserve

> Preserve cart contents when a guest logs in as an authenticated
      customer.

# Commerce Webstore Cart, Preserve

Preserve cart contents when a guest logs in as an authenticated customer.

To use this API, pass the guest session cookies in the request as part of the authenticated user session. For more information, see [Set Up Guest Checkout for Headless Commerce Stores](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-b2c-comm-set-up-guest-checkout-headless.html).

The authenticated user session must be within the context of an Experience Cloud site. For more information, see [Configure Headless Identity API Flows](https://help.salesforce.com/s/articleView?id=xcloud.headless_identity_flows_parent.htm&language=en_US) and [Connect to Experience Cloud Sites](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/quickstart_communities.htm).

When a guest adds products to their cart and logs into a store, this API creates a new authorized cart and transfers the contents and coupons of the guest cart to the authorized cart. The API doesn’t transfer delivery or tax calculation details, or custom fields.

After the guest cart contents are successfully preserved, the guest cart is deleted. If the customer previously added items to their cart while logged in, the new authorized cart becomes the primary cart, and the previous cart becomes a secondary cart.

If the Preserve Guest Carts feature is turned off, if the guest cart is empty, or if the guest cart belongs to a different browser than the one the customer uses to log in, the API results in no operation and returns an empty response. Preserve Guest Carts is enabled by default in stores created after the Spring '24 release.

Resource

```

```

Available version

60.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| currencyIsoCode | String | The currency ISO code of the cart. | Optional | 60.0 |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If null, the default value is determined from context. | Optional | 60.0 |

Response body for POST

[Preserve Cart Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_preserve_cart_output.htm "Represents a preserved cart.")

## Code Examples

```
/commerce/webstores/webstoreId/carts/cartStateOrId/actions/preserve
```

## Related Topics

- Preserve Cart Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_preserve_cart_output.htm)
