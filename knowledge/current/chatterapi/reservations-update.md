---
title: "Reservations, Update"
domain: chatterapi
topic: reservations-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.043Z
estimatedTokens: 416
keywords: [Reservations, Updates, reservation, Omnichannel, Inventory, Add, remove, quantities, SKUs]
---

# Reservations, Update

> Updates an existing reservation in Omnichannel Inventory. Add, remove,
      and update quantities for existing SKUs in the reservation.

# Reservations, Update

Updates an existing reservation in Omnichannel Inventory. Add, remove, and update quantities for existing SKUs in the reservation.

Resource

```

```

Available version

61.0

HTTP methods

POST

Request body for POST

Root XML tag

<ociUpdateReservationInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionRequestId | String | Unique and idempotent action request ID. Use in response data to identify which requests succeeded or failed. | Required | 61.0 |
| allowPartialReservations | Boolean | When true, if the system can’t update the entire reservation, then it attempts to update a partial reservation. | Optional | 61.0 |
| externalRefId | String | External reference ID. | Optional | 61.0 |
| reservationId | String | The ID of the inventory reservation. |  | 61.0 |
| reservationTime | String | The time the reservation was updated. Example: 2020-07-24T21:13:00Z. | Optional | 61.0 |
| updateAllOrNothingRecords | Boolean | Controls whether a single failed request updates all other requests in the list (true) or whether some requests can succeed if others fail (false). The default value is false. | Optional | 61.0 |
| updateRecords | OCI Update Reservation Single Input [] | A list of product quantities and locations or location groups. The list can have up to 100 elements. | At least one element is required | 61.0 |

Response body for POST

[OCI Update Reservation Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_update_reservation_output.htm "Result of an Omnichannel Inventory update request for reserved inventory.")

## Code Examples

```
/commerce/oci/reservation/actions/update
```

## Related Topics

- OCI Update Reservation Single Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_o_c_i_update_reservation_single_input.htm)
- OCI Update Reservation Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_c_i_update_reservation_output.htm)
