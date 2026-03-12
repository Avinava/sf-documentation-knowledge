---
title: "Cart Inventory Reservation (Pilot)"
domain: chatterapi
topic: cart-inventory-reservation-pilot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.512Z
estimatedTokens: 325
keywords: [Cart, Inventory, Reservation, Pilot]
---

# Cart Inventory Reservation (Pilot)

> An inventory reservation.

# Cart Inventory Reservation (Pilot)

An inventory reservation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This feature is not generally available and is being piloted with certain Customers subject to additional terms and conditions. It is not part of your purchased Services. This feature is subject to change, may be discontinued with no notice at any time in Salesforce’s sole discretion, and Salesforce may never make this feature generally available. Make your purchase decisions only on the basis of generally available products and features. This feature is made available on an AS IS basis and use of this feature is at your sole risk.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Error code for this reservation. | Small, 58.0 | 58.0 |
| errorMessage | String | Error message for this reservation. | Small, 58.0 | 58.0 |
| inventoryItem​Reservations | Cart Inventory Item Reservation[] | Collection of inventory item reservations. | Small, 58.0 | 58.0 |
| reservation​Identifier | String | Reservation identifier. | Small, 58.0 | 58.0 |
| success | Boolean | Indicates whether the transaction was successful. | Small, 58.0 | 58.0 |

## Related Topics

- Cart Inventory Item Reservation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_inventory_item_reservation_output.htm)
