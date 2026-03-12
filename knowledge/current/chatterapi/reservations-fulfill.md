---
title: "Reservations, Fulfill"
domain: chatterapi
topic: reservations-fulfill
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.029Z
estimatedTokens: 246
keywords: [Reservations, Fulfill, inventory]
---

# Reservations, Fulfill

> Fulfill one or more inventory reservations.

# Reservations, Fulfill

Fulfill one or more inventory reservations.

Resource

```

```

Available version

51.0

HTTP methods

POST

Request body for POST

[OCI Fulfill Reservation Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_fulfill_reservation_input.htm "A list of inventory reservations to fulfill.")

Root XML tag

<ociFulfillReservationInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillmentRecords | OCI Fulfill Reservation Single Input[] | A list of inventory reservations. The list can include up to 100 elements. | At least one element is required. | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |

Response body for POST

[OCI Fulfill Reservation Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_fulfill_reservation_output.htm "Response to a request to fulfill one or more inventory reservations.")

## Code Examples

```
/commerce/oci/reservation/actions/fulfillments
```

## Related Topics

- OCI Fulfill Reservation Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_fulfill_reservation_input.htm)
- OCI Fulfill Reservation Single Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_fulfill_reservation_single_input.htm)
- OCI Fulfill Reservation Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_fulfill_reservation_output.htm)
