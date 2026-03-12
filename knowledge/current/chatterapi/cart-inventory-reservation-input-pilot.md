---
title: "Cart Inventory Reservation Input (Pilot)"
domain: chatterapi
topic: cart-inventory-reservation-input-pilot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.193Z
estimatedTokens: 254
keywords: [Cart, Inventory, Reservation, Input, Pilot, representation]
---

# Cart Inventory Reservation Input (Pilot)

> Input representation to create or update a
    reservation.

# Cart Inventory Reservation Input (Pilot)

Input representation to create or update a reservation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

This feature is not generally available and is being piloted with certain Customers subject to additional terms and conditions. It is not part of your purchased Services. This feature is subject to change, may be discontinued with no notice at any time in Salesforce’s sole discretion, and Salesforce may never make this feature generally available. Make your purchase decisions only on the basis of generally available products and features. This feature is made available on an AS IS basis and use of this feature is at your sole risk.

Root XML tag

<cartInventoryReservationInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| durationIn​Seconds | Integer | Reservation duration in seconds. | Required | 58.0 |

## Code Examples

```
{
   "durationInSeconds":100
}
```
