---
title: "Reservations, Transfer"
domain: chatterapi
topic: reservations-transfer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.037Z
estimatedTokens: 416
keywords: [Reservations, Transfer, inventory, locations, location, groups, API, doesn’t, change, physical, quantities, reduces, reserved, quantity, source]
---

# Reservations, Transfer

> Transfer one or more inventory reservations between locations or
      location groups. This API doesn’t change physical quantities, but reduces the reserved
      quantity at the source and increases it at the destination.

# Reservations, Transfer

Transfer one or more inventory reservations between locations or location groups. This API doesn’t change physical quantities, but reduces the reserved quantity at the source and increases it at the destination.

Resource

```

```

Available version

51.0

HTTP methods

POST

Request body for POST

[OCI Transfer Reservation Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_transfer_reservation_input.htm "A list of inventory reservation transfers and specifies whether a single failure cancels the entire list.")

Root XML tag

<ociTransferReservationInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allOrNothingTransferId | String | Controls whether a single failed transfer cancels all other transfers in the transferRecords list.To allow some transfers in the transferRecords list to succeed when others fail, don’t include this property.To cancel all the transfers in the transferRecords list when any of them fail, set this property to a UUID. The ID must be unique, but isn’t otherwise used in this version. | Optional | 51.0 |
| reservationId | String | The ID of the inventory reservation. | Optional | 58.0 |
| transferRecords | OCI Transfer Reservation Single Input[] | A list of inventory reservation transfers. The list can include up to 100 elements. | At least one element is required. | 51.0 |

Response body for POST

[OCI Transfer Reservation Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_transfer_reservation_output.htm "Response to a request to transfer one or more inventory reservations.")

## Code Examples

```
/commerce/oci/reservation/actions/transfers
```

## Related Topics

- OCI Transfer Reservation Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_transfer_reservation_input.htm)
- OCI Transfer Reservation Single Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_transfer_reservation_single_input.htm)
- OCI Transfer Reservation Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_transfer_reservation_output.htm)
