---
title: "OCI Fulfill Reservation Input"
domain: chatterapi
topic: oci-fulfill-reservation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.242Z
estimatedTokens: 127
keywords: [OCI, Fulfill, Reservation, Input, inventory, reservations]
---

# OCI Fulfill Reservation Input

> A list of inventory reservations to fulfill.

# OCI Fulfill Reservation Input

A list of inventory reservations to fulfill.

Root XML tag

<ociFulfillReservationInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillmentRecords | OCI Fulfill Reservation Single Input[] | A list of inventory reservations. The list can include up to 100 elements. | At least one element is required. | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |

## Related Topics

- OCI Fulfill Reservation Single Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_fulfill_reservation_single_input.htm)
