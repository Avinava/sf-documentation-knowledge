---
title: "Commerce Webstore Cart Inventory Reservations"
domain: chatterapi
topic: commerce-webstore-cart-inventory-reservations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.228Z
estimatedTokens: 516
keywords: [Commerce, Webstore, Cart, Inventory, Reservations, reservation]
---

# Commerce Webstore Cart Inventory Reservations

> Create, update, or delete an inventory reservation from the
      cart.

# Commerce Webstore Cart Inventory Reservations

Create, update, or delete an inventory reservation from the cart.

To use this resource, you must have the required permission. Contact Salesforce Customer Support for more help.

Resource

```

```

Values for cartStateOrId are:

-   cartId—ID of the cart.
-   active—Active cart. This value should only be used for authenticated users.
-   current—Cart that isn’t closed or pending deletion. Available in version 50.0 and later.

Available version

58.0–63.0

HTTP methods

DELETE, PUT

Use PUT to create and update a reservation.

Request parameters for DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 58.0 |

Response body for DELETE

[204 Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

Request body for PUT

Root XML tag

<cartInventoryReservationInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| durationIn​Seconds | Integer | Reservation duration in seconds. | Required | 58.0 |

Request parameters for PUT

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 58.0 |

Response body for PUT

[Cart Inventory Reservation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_inventory_reservation_output.htm "An inventory reservation.")

## Code Examples

```
/commerce/webstores/webstoreId/carts/cartStateOrId/inventory-reservations
```

```
{
   "durationInSeconds":100
}
```

## Related Topics

- 204 Successful
              Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
- Cart Inventory Reservation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_inventory_reservation_output.htm)
